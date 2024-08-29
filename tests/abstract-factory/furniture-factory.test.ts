
import { afterEach, beforeEach, describe, expect, it, jest, test } from '@jest/globals';
import FurnitureFactory, { IFurniture } from '../../src/abstract-factory/furniture-factory';
import ChairFactory from '../../src/abstract-factory/chair-factory';
import TableFactory from '../../src/abstract-factory/table-factory';

// Mock the modules
jest.mock('../../src/abstract-factory/chair-factory', () => ({
    getChair: jest.fn((furniture: string): Partial<IFurniture> => ({ name: furniture }))
}));

jest.mock('../../src/abstract-factory/table-factory', () => ({
    getTable: jest.fn((furniture: string): Partial<IFurniture> => ({ name: furniture }))
}));


describe('FurnitureFactory', () => {
    beforeEach(() => {
        jest.spyOn(console, 'log').mockImplementation(() => undefined);
    })

    afterEach(() => {
        jest.resetAllMocks();
    })

    it('Contains a static method getFurniture', () => {
        expect(FurnitureFactory.getFurniture).toBeDefined();
    })

    describe('getFurniture', () => {
        test.each([
            { furniture: 'SmallChair', expected: 'SmallChair' },
            { furniture: 'MediumChair', expected: 'MediumChair' },
            { furniture: 'BigChair', expected: 'BigChair' },
        ])('it accepts $furniture and will call the correct factory to make that $furniture', ({ furniture, expected }) => {
            FurnitureFactory.getFurniture(furniture);
            expect(ChairFactory.getChair).toHaveBeenCalledTimes(1)
            expect(TableFactory.getTable).not.toHaveBeenCalled();
            jest.resetAllMocks();
        });

        test.each([
            { furniture: 'SmallTable', expected: 'SmallTable' },
            { furniture: 'MediumTable', expected: 'MediumTable' },
            { furniture: 'BigTable', expected: 'BigTable' },
        ])('it accepts $furniture and will call the correct factory to make that $furniture', ({ furniture, expected }) => {
            FurnitureFactory.getFurniture(furniture);
            expect(TableFactory.getTable).toHaveBeenCalledTimes(1)
            expect(ChairFactory.getChair).not.toHaveBeenCalled();
        });

        it('Will log `No Factory Found` if passed an unrecognizable furniture type', () => {
            const badFurniture = FurnitureFactory.getFurniture('UnrecognizableFurniture');
            expect(badFurniture).toBeUndefined();
            expect(ChairFactory.getChair).not.toHaveBeenCalled();
            expect(TableFactory.getTable).not.toHaveBeenCalled();
            expect(console.log).toHaveBeenCalledWith(expect.objectContaining({ message: 'No Factory Found', stack: expect.any(String) }));
        })
    })
});
