
import { describe, expect, test } from '@jest/globals';
import MediumTable from '../../src/abstract-factory/medium-table';

describe('Medium', () => {
    test('should return an instance of MediumTable with h,w,d of 60,60,60', () => {
        const mediumTable = new MediumTable();
        expect(mediumTable).toBeInstanceOf(MediumTable);
        expect(mediumTable.getDimensions()).toEqual({ height: 60, width: 60, depth: 60 });
    });

    test('should have a name of MediumTable', () => {
        const mediumTable = new MediumTable();
        expect(mediumTable.name).toBe('MediumTable');
    });
});
