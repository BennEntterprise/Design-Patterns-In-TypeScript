
import { afterEach, beforeEach, describe, expect, it, jest, test } from '@jest/globals';
import FurnitureFactory from '../../src/abstract-factory/furniture-factory';

describe('FurnitureFactory', () => {
    let FurnitureFactoryInstance: FurnitureFactory;

    beforeEach(() => {
        FurnitureFactoryInstance = new FurnitureFactory();
        jest.spyOn(console, 'log').mockImplementation(() => undefined);
    })

    afterEach(() => {
        jest.restoreAllMocks();
    })

    it('Contains a static method getFurniture', () => {
        expect(FurnitureFactory.getFurniture).toBeDefined();
    })

    describe('getFurniture', () => {
        it('accepts a string parameter representing a furniture type', () => {
            expect(FurnitureFactory.getFurniture('SmallChair')).toBeDefined();

            expect(FurnitureFactory.getFurniture('MediumChair')).toBeDefined();

            expect(FurnitureFactory.getFurniture('BigChair')).toBeDefined();

            expect(FurnitureFactory.getFurniture('SmallTable')).toBeDefined();;

            expect(FurnitureFactory.getFurniture('MediumTable')).toBeDefined();

            expect(FurnitureFactory.getFurniture('BigTable')).toBeDefined();
        })

        it('Will log `No Factory Found` if passed an unrecognizable furniture type', () => {
            const badFurniture = FurnitureFactory.getFurniture('UnrecognizableFurniture');
            expect(badFurniture).toBeUndefined();
            expect(console.log).toHaveBeenCalledWith(expect.objectContaining({ message: 'No Factory Found', stack: expect.any(String) }));
        })

    })
});
