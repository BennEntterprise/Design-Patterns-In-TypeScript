
import { describe, expect, it, jest, test } from '@jest/globals';
import TableFactory from '../../src/abstract-factory/table-factory';
import BigTable from '../../src/abstract-factory/big-table';
import MediumTable from '../../src/abstract-factory/medium-table';
import SmallTable from '../../src/abstract-factory/small-table';

// Mock the BigTable, MediumTable, and SmallTable
jest.mock('../../src/abstract-factory/big-table', () => {
    const mockBigTableInstance = {
        getTable: jest.fn().mockReturnValue({ height: 80, width: 80, depth: 80 })
    }
    return {
        __esModule: true,
        default: jest.fn(() => mockBigTableInstance),
        mockBigTableInstance
    }
})

jest.mock('../../src/abstract-factory/medium-table', () => {
    const mockMediumTableInstance = {
        getTable: jest.fn().mockReturnValue({ height: 60, width: 60, depth: 60 })
    }

    return {
        __esModule: true,
        default: jest.fn(() => mockMediumTableInstance),
        mockMediumTableInstance
    }
})

jest.mock('../../src/abstract-factory/small-table', () => {
    const mockSmallTableInstance = {
        getTable: jest.fn().mockReturnValue({ height: 40, width: 40, depth: 40 })
    }

    return {
        __esModule: true,
        default: jest.fn(() => mockSmallTableInstance),
        mockSmallTableInstance
    }
})

describe('TableFactory', () => {
    it('Has a static method "getTable"', () => {
        expect(TableFactory.getTable).toBeDefined();
    })

    describe('getTable', () => {
        test('when passed "BigTable", will call the BigTable constructor', () => {
            TableFactory.getTable("BigTable")
            expect(BigTable).toHaveBeenCalled();
        })

        test('when passed "MediumTable", will call the MediumTable constructor', () => {
            TableFactory.getTable("MediumTable")
            expect(MediumTable).toHaveBeenCalled()
        })

        test('when passed "SmallTable", will call the SmallTable constructor', () => {
            TableFactory.getTable("SmallTable")
            expect(SmallTable).toHaveBeenCalled()
        })

        test('when passed a bad string it will throw an error', () => {
            expect(() => TableFactory.getTable("BADTABLEDESIGN")).toThrowError('No Table Found');
        })

    })
})