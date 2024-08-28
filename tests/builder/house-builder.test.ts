
import { afterEach, beforeEach, describe, expect, test } from '@jest/globals';
import HouseBuilder from '../../src/builder/house-builder';
import House from '../../src/builder/house';

describe('HouseBuilder', () => {
    let houseBuilder: HouseBuilder | undefined;
    beforeEach(() => {
        houseBuilder = new HouseBuilder();
    })

    afterEach(() => {
        houseBuilder = undefined;
    })

    test('it accepts, no args and sets house to a new House instance', () => {
        expect(houseBuilder?.house).toBeInstanceOf(House);
    })

    describe('setBuildingType', () => {
        test('it sets the buildingType property of the house instance', () => {
            houseBuilder?.setBuildingType('Igloo');
            expect(houseBuilder?.house.buildingType).toBe('Igloo');
        })
    })

    describe('setWallMaterial', () => {
        test('it sets the wallMaterial property of the house instance', () => {
            houseBuilder?.setWallMaterial('Ice');
            expect(houseBuilder?.house.wallMaterial).toBe('Ice');
        })
    })

    describe('setNumberDoors', () => {
        test('it sets the doors property of the house instance', () => {
            houseBuilder?.setNumberDoors(1);
            expect(houseBuilder?.house.doors).toBe(1);
        })
    })

    describe('setNumberWindows', () => {
        test('it sets the windows property of the house instance', () => {
            houseBuilder?.setNumberWindows(1);
            expect(houseBuilder?.house.windows).toBe(1);
        })
    })

    describe('getResult', () => {
        test('it returns the house instance', () => {
            expect(houseBuilder?.getResult()).toBeInstanceOf(House);
        })
    })
});
