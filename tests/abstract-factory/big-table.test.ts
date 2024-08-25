
import { describe, expect, test } from '@jest/globals';
import BigTable from '../../src/abstract-factory/big-table';

describe('BigTable', () => {
    test('should return an instance of BigTable with h,w,d of 80,80,80', () => {
        const bigTable = new BigTable();
        expect(bigTable).toBeInstanceOf(BigTable);
        expect(bigTable.getDimensions()).toEqual({ height: 80, width: 80, depth: 80 });
    });

    test('should have a name of BigTable', () => {
        const bigTable = new BigTable();
        expect(bigTable.name).toBe('BigTable');
    });
});
