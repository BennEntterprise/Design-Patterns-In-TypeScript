import { describe, expect, it, test } from '@jest/globals';
import House from '../../src/builder/house';

describe('House', () => {
    it('by default will return a house with 0 doors, 0 windows, and no wall material or building type', () => {
        const house = new House();
        expect(house.doors).toBe(0);
        expect(house.windows).toBe(0);
        expect(house.wallMaterial).toBe('');
        expect(house.buildingType).toBe('');
    })
    it('contains a construction method that returns a string some house details', () => {
        const house = new House();
        const expectedKeywordsInOutput = [
            expect.stringMatching(/window/i),
            expect.stringMatching(/door/i),
        ];
        const constructionOutput = house.construction();
        expect(typeof constructionOutput).toBe('string');
        expect(constructionOutput.split(' ')).toEqual(expect.arrayContaining(expectedKeywordsInOutput));
    })
});
