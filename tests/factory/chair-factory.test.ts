
import { beforeEach, describe, expect, it, test } from '@jest/globals';
import ChairFactory from '../../src/factory/chair-factory';

describe('ChairFactory', () => {
    let ChairFactoryInstance: ChairFactory;

    beforeEach(() => {
        ChairFactoryInstance = new ChairFactory();
    })

    it('Should contain a static method `getChair` which takes one arg', () => {
        expect(ChairFactory.getChair).toBeDefined();
        expect(ChairFactory.getChair.length).toBe(1);
    })

    it('Should return an instance of BigChair when passed "BigChair"', () => {
        const BigChairInstance = ChairFactory.getChair('BigChair');
        expect(BigChairInstance.getDimensions()).toEqual({ height: 80, width: 80, depth: 80 });
    });

    it('Should return an instance of MediumChair when passed "MediumChair"', () => {
        const MediumChairInstance = ChairFactory.getChair('MediumChair');
        expect(MediumChairInstance.getDimensions()).toEqual({ height: 60, width: 60, depth: 60 });
    });

    it('Should return an instance of SmallChair when passed "SmallChair"', () => {
        const SmallChairInstance = ChairFactory.getChair('SmallChair');
        expect(SmallChairInstance.getDimensions()).toEqual({ height: 40, width: 40, depth: 40 });
    });

    it('Should return an instance of SmallChair when passed anything else', () => {
        const SmallChairInstance = ChairFactory.getChair('UnknownChair');
        expect(SmallChairInstance.getDimensions()).toEqual({ height: 40, width: 40, depth: 40 });

        const SmallChairInstance2 = ChairFactory.getChair('UnknownChair2');
        expect(SmallChairInstance2.getDimensions()).toEqual({ height: 40, width: 40, depth: 40 });

        const SmallChairInstance3 = ChairFactory.getChair('SmallChair');
        expect(SmallChairInstance3.getDimensions()).toEqual({ height: 40, width: 40, depth: 40 });

    });
});
