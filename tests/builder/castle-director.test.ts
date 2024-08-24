
import { describe, expect, it, jest, test } from '@jest/globals';
import CastleDirector from '../../src/builder/castle-director';


describe('CastleDirector', () => {
    it('has one static method construct', () => {
        expect(CastleDirector).toHaveProperty('construct');
        expect(typeof CastleDirector.construct).toBe('function');
    })
});
