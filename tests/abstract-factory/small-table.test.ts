
import { beforeEach, describe, expect, test } from '@jest/globals';
import SmallChair from '../../src/abstract-factory/small-chair';
import { Chair } from '../../src/abstract-factory/chair';

describe('SmallChair', () => {
    let SmallChairInstance: SmallChair;

    beforeEach(() => {
        SmallChairInstance = new SmallChair();
    })

    test('Returns an instance of chair with h,w, d of 40,40,40 ', () => {
        expect(SmallChairInstance).toBeInstanceOf(SmallChair);
        expect(SmallChairInstance).toBeInstanceOf(Chair);
        expect(SmallChairInstance.getDimensions()).toEqual({ height: 40, width: 40, depth: 40 });
    });

    test('Returns an instance of chair with name SmallChair', () => {
        expect(SmallChairInstance.name).toBe('SmallChair');
    })
});
