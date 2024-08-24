
import { describe, expect, test, it } from '@jest/globals';
import BigChair from '../../src/factory/big-chair';

describe('BigChair', () => {
    it('Should return an instance of BigChair with h,w,d of 80,80,80', () => {
        const BigChairInstance = new BigChair();
        expect(BigChairInstance.getDimensions()).toEqual({ height: 80, width: 80, depth: 80 });
    })
});
