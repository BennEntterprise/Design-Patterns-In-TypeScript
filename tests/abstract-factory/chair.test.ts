
import { beforeEach, describe, expect, jest, test } from '@jest/globals';
import { Chair } from '../../src/abstract-factory/chair'
import type { dimension } from '../../src/abstract-factory/dimension';

describe('Chair Class', () => {
    let ChairInstance: Chair;

    beforeEach(() => {
        ChairInstance = new Chair();
    })

    test('Have a default of 0 for height', () => {
        expect(ChairInstance.height).toBe(0);
    })

    test('Have a default of 0 for width', () => {
        expect(ChairInstance.width).toBe(0);
    })

    test('Have a default of 0 for depth', () => {
        expect(ChairInstance.depth).toBe(0);
    })

    describe('getDimensions', () => {
        test('Returns the dimensions of the chair', () => {
            ChairInstance.height = 10;
            ChairInstance.width = 20;
            ChairInstance.depth = 30;
            expect(ChairInstance.getDimensions()).toEqual({ height: 10, width: 20, depth: 30 });
        })

    })
});
