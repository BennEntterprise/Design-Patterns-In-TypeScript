
import { afterEach, beforeEach, describe, expect, jest, test } from '@jest/globals';
import HouseBoatDirector from '../,,/../../src/builder/houseboat-director'
import HouseBuilder from '../../src/builder/house-builder';
import House from '../../src/builder/house';

jest.mock('../../src/builder/house-builder', () => {
    const mockHouseBuilderInstance = {
        setBuildingType: jest.fn().mockReturnThis(),
        setWallMaterial: jest.fn().mockReturnThis(),
        setNumberDoors: jest.fn().mockReturnThis(),
        setNumberWindows: jest.fn().mockReturnThis(),
        getResult: jest.fn().mockImplementation(() => new House())

    }

    return {
        __esModule: true,
        default: jest.fn(() => mockHouseBuilderInstance),
        mockHouseBuilderInstance
    }
})

describe('HouseBoatDirector', () => {
    let mockHouseBuilder: HouseBuilder | undefined;
    let house: House | undefined;

    beforeEach(() => {
        mockHouseBuilder = new HouseBuilder();
        house = HouseBoatDirector.construct();
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    test('has one static method called construct ', () => {
        expect(HouseBoatDirector).toHaveProperty('construct')
        expect(typeof HouseBoatDirector.construct).toBe('function')
    })

    test('it calls HouseBuilder with castle properties', () => {
        expect(mockHouseBuilder?.setBuildingType).toHaveBeenCalledWith('House Boat')
        expect(mockHouseBuilder?.setWallMaterial).toHaveBeenCalledWith('Wood')
        expect(mockHouseBuilder?.setNumberDoors).toHaveBeenCalledWith(6)
        expect(mockHouseBuilder?.setNumberWindows).toHaveBeenCalledWith(8)
        expect(mockHouseBuilder?.getResult).toHaveBeenCalled()
        expect(house).toBeInstanceOf(House);
    })
});
