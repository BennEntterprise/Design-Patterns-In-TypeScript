
import { describe, expect, test } from '@jest/globals';
import HouseBuilder from '../../src/builder/house-builder';
import House from '../../src/builder/house';

describe('HouseBuilder', () => {
    test('it accepts, no args and sets house to a new House instance', () => {
        const houseBuilder = new HouseBuilder();
        expect(houseBuilder.house).toBeInstanceOf(House);
    })

    describe('setBuildingType', () => {
        test('it sets the buildingType property of the house instance', () => {
            const houseBuilder = new HouseBuilder();
            houseBuilder.setBuildingType('Igloo');
            expect(houseBuilder.house.buildingType).toBe('Igloo');
        })
    })

    describe('setWallMaterial', () => {
        test('it sets the wallMaterial property of the house instance', () => {
            const houseBuilder = new HouseBuilder();
            houseBuilder.setWallMaterial('Ice');
            expect(houseBuilder.house.wallMaterial).toBe('Ice');
        })
    })

    describe('setNumberDoors', () => {
        test('it sets the doors property of the house instance', () => {
            const houseBuilder = new HouseBuilder();
            houseBuilder.setNumberDoors(1);
            expect(houseBuilder.house.doors).toBe(1);
        })
    })

    describe('setNumberWindows', () => {
        test('it sets the windows property of the house instance', () => {
            const houseBuilder = new HouseBuilder();
            houseBuilder.setNumberWindows(1);
            expect(houseBuilder.house.windows).toBe(1);
        })
    })

    describe('getResult', () => {
        test('it returns the house instance', () => {
            const houseBuilder = new HouseBuilder();
            expect(houseBuilder.getResult()).toBeInstanceOf(House);
        })
    })
});
