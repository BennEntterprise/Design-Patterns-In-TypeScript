import { afterEach, beforeEach, describe, expect, it, jest, test } from '@jest/globals';
import House from '../../src/builder/house';

describe('House', () => {
    let house: House | undefined;

    beforeEach(() => {
        house = new House();
        // console.log(console.info)
        // jest.spyOn(console, 'info').mockImplementation(() => undefined)
        // console.log(console.info)
    })
    afterEach(() => {
        house = undefined;
    })

    it('by default will return a house with 0 doors, 0 windows, and no wall material or building type', () => {
        expect(house?.doors).toBe(0);
        expect(house?.windows).toBe(0);
        expect(house?.wallMaterial).toBe('');
        expect(house?.buildingType).toBe('');
    })
    it('contains a construction method that returns a string some house details', () => {
        const expectedKeywordsInOutput = [
            expect.stringMatching(/window/i),
            expect.stringMatching(/door/i),
        ];
        const constructionOutput = house?.construction();
        expect(typeof constructionOutput).toBe('string');
        expect(constructionOutput?.split(' ')).toEqual(expect.arrayContaining(expectedKeywordsInOutput));
        // (console.info as any).mockRestore()
    })
    // it('prints an info string to the console.info', () => {
    //     // (console.info as any).mockRestore()
    //     expect(console.info).toHaveBeenCalled();
    //     // (console.info as any).mockRestore()
    // })
});
