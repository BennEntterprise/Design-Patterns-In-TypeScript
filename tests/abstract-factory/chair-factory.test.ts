
import { afterEach, describe, expect, jest, test } from '@jest/globals';
import ChairFactory from '../../src/abstract-factory/chair-factory'

import BigChair from '../../src/abstract-factory/big-chair'
import MediumChair from '../../src/abstract-factory/medium-chair';
import SmallChair from '../../src/abstract-factory/small-chair';

jest.mock('../../src/abstract-factory/big-chair', () => {
    const mockBigChairInstance = {
        getDimensions: jest.fn().mockReturnValue({ height: 80, width: 80, depth: 80 }),
        name: 'BigChair',
    }

    return {
        __esModule: true,
        default: jest.fn(() => mockBigChairInstance),
        mockBigChairInstance
    }
})

jest.mock('../../src/abstract-factory/medium-chair', () => {
    const mockMediumChairInstance = {
        getDimensions: jest.fn().mockReturnValue({ height: 80, width: 80, depth: 80 }),
        name: 'MediumChair',
    }

    return {
        __esModule: true,
        default: jest.fn(() => mockMediumChairInstance),
        mockMediumChairInstance
    }
})

jest.mock('../../src/abstract-factory/small-chair', () => {
    const mockSmallChairInstance = {
        getDimensions: jest.fn().mockReturnValue({ height: 80, width: 80, depth: 80 }),
        name: 'SmallChair',
    }

    return {
        // 👇 THIS HAS TWO (2) UNDERSCORES!!! (Like __dirname or __filename) 🙄
        __esModule: true,
        // 👆 You will drive yourself FUCKING CRAZY if no-one told you... 
        // 
        default: jest.fn(() => mockSmallChairInstance),
        mockSmallChairInstance
    }
})

describe('ChairFactory', () => {
    afterEach(() => {
        jest.clearAllMocks();
    })

    describe('getChair', () => {
        test('when passed "BigChair" it calls the BigChair constructor', () => {
            ChairFactory.getChair('BigChair');
            expect(BigChair).toHaveBeenCalledTimes(1);
            expect(MediumChair).toHaveBeenCalledTimes(0);
            expect(SmallChair).toHaveBeenCalledTimes(0);
        })
        test('when passed "MediumChair" it calls the MediumChair constructor', () => {
            ChairFactory.getChair('MediumChair');
            expect(BigChair).toHaveBeenCalledTimes(0);
            expect(MediumChair).toHaveBeenCalledTimes(1);
            expect(SmallChair).toHaveBeenCalledTimes(0);
        })
        test('when passed "SmallChair" it calls the SmallChair constructor', () => {
            ChairFactory.getChair('SmallChair');
            expect(BigChair).toHaveBeenCalledTimes(0);
            expect(MediumChair).toHaveBeenCalledTimes(0);
            expect(SmallChair).toHaveBeenCalledTimes(1);
        })
    })
});
