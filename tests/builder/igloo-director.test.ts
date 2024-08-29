import { afterEach, beforeEach, describe, expect, it, jest, test } from '@jest/globals';
import IglooDirector from '../../src/builder/igloo-director';
import House from '../../src/builder/house';
import HouseBuilder from '../../src/builder/house-builder';

jest.mock('../../src/builder/house-builder', () => {
    const mockHouseBuilderInstance = {
        setBuildingType: jest.fn().mockReturnThis(),
        setWallMaterial: jest.fn().mockReturnThis(),
        setNumberDoors: jest.fn().mockReturnThis(),
        setNumberWindows: jest.fn().mockReturnThis(),
        getResult: jest.fn().mockImplementation(() => new House())
    };

    return {
        __esModule: true,
        default: jest.fn(() => mockHouseBuilderInstance),
        /* 👆👆👆Above two lines are the magic antidote to: 🚨 TypeError: house_builder_1.default is not a constructor 🚨 👆👆👆 */
        mockHouseBuilderInstance
    };
});

describe('IglooDirector', () => {
    let mockHouseBuilder: HouseBuilder | undefined;
    let house: House | undefined;

    beforeEach(() => {
        mockHouseBuilder = new HouseBuilder();
        house = IglooDirector.construct();
    })

    afterEach(() => {
        jest.clearAllMocks();
    })

    it('has one static method construct', () => {
        expect(IglooDirector).toHaveProperty('construct');
        expect(typeof IglooDirector.construct).toBe('function');
    })

    it('calls HouseBuilder with castle properties', () => {
        expect(mockHouseBuilder?.setBuildingType).toHaveBeenCalledWith('Igloo');
        expect(mockHouseBuilder?.setWallMaterial).toHaveBeenCalledWith('Ice');
        expect(mockHouseBuilder?.setNumberDoors).toHaveBeenCalledWith(1);
        expect(mockHouseBuilder?.getResult).toHaveBeenCalled();
        expect(house).toBeInstanceOf(House);
    })
});
