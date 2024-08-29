
import { beforeEach, describe, expect, test } from '@jest/globals';
import SmallChair from '../../src/abstract-factory/small-chair';

describe('SmallChair', () => {
    let smallChair: SmallChair | undefined;

    beforeEach(() => {
        smallChair = new SmallChair();
    })

    test('Should be defined', () => {
        expect(SmallChair).toBeDefined();
    });

    test('Should return an instance of SmallChair with h,w,d of 40,40,40', () => {
        expect(smallChair).toBeInstanceOf(SmallChair);
        expect(smallChair?.getDimensions()).toEqual({ height: 40, width: 40, depth: 40 });
    })

    test('Should have a name of SmallChair', () => {
        expect(smallChair?.name).toBe('SmallChair');
    });
});
