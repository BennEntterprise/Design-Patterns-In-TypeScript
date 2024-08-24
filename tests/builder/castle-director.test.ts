import { afterEach, beforeEach, describe, expect, it, jest, test } from '@jest/globals';
import CastleDirector from '../../src/builder/castle-director';
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

describe('CastleDirector', () => {
    let mockHouseBuilder: any;
    beforeEach(() => {
        mockHouseBuilder = new HouseBuilder();
    })

    afterEach(() => {
        jest.clearAllMocks();
    })

    it('has one static method construct', () => {
        expect(CastleDirector).toHaveProperty('construct');
        expect(typeof CastleDirector.construct).toBe('function');
    })

    it('calls HouseBuilder with castle properties', () => {
        const house = CastleDirector.construct();
        expect(mockHouseBuilder.setBuildingType).toHaveBeenCalledWith('Castle');
        expect(mockHouseBuilder.setWallMaterial).toHaveBeenCalledWith('Sandstone');
        expect(mockHouseBuilder.setNumberDoors).toHaveBeenCalledWith(100);
        expect(mockHouseBuilder.setNumberWindows).toHaveBeenCalledWith(200);
        expect(mockHouseBuilder.getResult).toHaveBeenCalled();
        expect(house).toBeInstanceOf(House);

    })
});
