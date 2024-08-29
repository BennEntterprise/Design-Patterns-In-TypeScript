
import { beforeEach, describe, expect, test } from '@jest/globals';
import SmallTable from '../../src/abstract-factory/small-table';
import { Table } from '../../src/abstract-factory/table';

describe('SmallChair', () => {
    let SmallTableInstance: SmallTable;

    beforeEach(() => {
        SmallTableInstance = new SmallTable();
    })

    test('Returns an instance of chair with h,w, d of 40,40,40 ', () => {
        expect(SmallTableInstance).toBeInstanceOf(SmallTable);
        expect(SmallTableInstance).toBeInstanceOf(Table);
        expect(SmallTableInstance.getDimensions()).toEqual({ height: 40, width: 40, depth: 40 });
    });

    test('Returns an instance of chair with name SmallTable', () => {
        expect(SmallTableInstance.name).toBe('SmallTable');
    })
});
