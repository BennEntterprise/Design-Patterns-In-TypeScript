
import { describe, expect, it, jest, test } from '@jest/globals';
import Document from '../../src/prototype/document'

describe('Document', () => {



    describe('constructor', () => {
        it('takes a mode and 2d array of numbers', () => {
            const doc = new Document("stubdoc", [[1, 2, 3], [4, 5, 6]])
            expect(doc.clone).toBeDefined()

        })
    })

    describe('clone', () => {
        test('when given a mode == 2 will return a deep clone of the document using stringify/parse', () => {
            const originalStringify = JSON.stringify;
            const originalPars = JSON.parse
            const parseSpy = jest.spyOn(JSON, 'parse').mockImplementation(str => originalPars(str))
            const stringifySpy = jest.spyOn(JSON, 'stringify').mockImplementation(j => originalStringify(j))

            const document = new Document('stubdoc', [[1, 2, 3], [4, 5, 6]])
            const clone = document.clone(2);

            expect(stringifySpy).toHaveBeenCalled()
            expect(parseSpy).toHaveBeenCalled()
            expect(clone.name).toBe(document.name);
            expect(clone.array).toEqual(document.array)
            expect(clone).toEqual(document)
        })
    })
});
