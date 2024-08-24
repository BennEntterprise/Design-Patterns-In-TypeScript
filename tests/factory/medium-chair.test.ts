
import { beforeEach, describe, expect, test } from '@jest/globals';
import MediumChair from '../../src/factory/medium-chair';

describe('MediumChair', () => {
    let MediumChairInstance: MediumChair;

    beforeEach(() => {
        MediumChairInstance = new MediumChair();
    })

    test('Should return return an instance of MediumChair with h,w,d of 60,60,60', () => {
        expect(MediumChairInstance).toBeInstanceOf(MediumChair);
        expect(MediumChairInstance.getDimensions()).toEqual({ height: 60, width: 60, depth: 60 });
    });
});
