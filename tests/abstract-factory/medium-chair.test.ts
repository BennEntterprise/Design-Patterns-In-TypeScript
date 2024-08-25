
import { beforeEach, describe, expect, it, test } from '@jest/globals';
import MediumChair from '../../src/abstract-factory/medium-chair';

describe('MediumChair', () => {
    let MediumChairInstance: MediumChair;

    beforeEach(() => {
        MediumChairInstance = new MediumChair();
    })

    it('Should return return an instance of MediumChair with h,w,d of 60,60,60', () => {
        expect(MediumChairInstance).toBeInstanceOf(MediumChair);
        expect(MediumChairInstance.getDimensions()).toEqual({ height: 60, width: 60, depth: 60 });
    });

    it('Should have a name of MediumChair', () => {
        expect(MediumChairInstance.name).toBe('MediumChair');
    })
});
