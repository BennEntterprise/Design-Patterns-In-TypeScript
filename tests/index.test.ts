import { describe, test, jest, expect } from '@jest/globals';

describe('index', () => {
    test.skip('should skip this test', () => {
        expect(true).toBe(false);
    })
})