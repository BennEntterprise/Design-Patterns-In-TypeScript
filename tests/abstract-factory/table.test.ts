
import { afterEach, beforeEach, describe, expect, it, test } from '@jest/globals';
import { Table } from '../../src/abstract-factory/table'

describe('Table', () => {

    let table: Table | undefined = undefined;

    beforeEach(() => {
        table = new Table();
    })

    afterEach(() => {
        table = undefined;
    })

    it('should create a new instance of Table', () => {
        expect(table).toBeInstanceOf(Table);
    });

    it('should have a default name of an empty string', () => {
        expect(table?.name).toBe('');
    });

    it('should have a default height of 0', () => {
        expect(table?.height).toBe(0);
    });

    it('should have a default width of 0', () => {
        expect(table?.width).toBe(0);
    });

    it('should have a default depth of 0', () => {
        expect(table?.depth).toBe(0);
    });

    describe('getDimensions', () => {
        it('should return the dimensions of the table', () => {
            table = new Table();
            table.height = 10;
            table.width = 20;
            table.depth = 30;
            expect(table?.getDimensions()).toEqual({ height: 10, width: 20, depth: 30 });
        });
    });

});
