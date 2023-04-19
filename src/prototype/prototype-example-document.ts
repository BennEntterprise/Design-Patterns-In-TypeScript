// Prototype Concept Sample Code
// This is a unified file from the ts-patterns udemy course by: TODO: (INSERT ORIGINAL AUTHOR)
// It includes several files included into one to serve as a code snippet to
// build stuff in the wild. Keep what you need, modify to fit, and trash that which
// you don't use.

// Original Files: Presented in the order they are included in this file.
// iprototype.ts
// document.ts
// prototype-example-document.ts
// client.ts

export interface IProtoType {
    // interface with clone method
    clone(mode: number): Document
    // The clone, deep or shallow.
    // It is up to you how you  want to implement
    // the details in your concrete class"""
}

// A sample document to be used in the Prototype example
export class Document implements ProtoType {
    name: string
    array: [number[], number[]]

    constructor(name: string, array: [number[], number[]]) {
        this.name = name
        this.array = array
    }

    clone(mode: number): Document {
        ' This clone method uses different copy techniques '
        let array
        if (mode === 2) {
            // results in a deep copy of the Document
            array = JSON.parse(JSON.stringify(this.array))
        } else {
            //, results in a shallow copy of the Document
            array = Object.assign([], this.array)
        }
        return new Document(this.name, array)
    }
}

export interface IProtoType {
    // interface with clone method
    clone(mode: number): Document
    // The clone, deep or shallow.
    // It is up to you how you  want to implement
    // the details in your concrete class"""
}

// Prototype Use Case Example Code
// Creating a document containing an array of two arrays
const ORIGINAL_DOCUMENT = new Document('Original', [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
])
console.log(ORIGINAL_DOCUMENT)
console.log()

const DOCUMENT_COPY_1 = ORIGINAL_DOCUMENT.clone(1) // shallow copy
DOCUMENT_COPY_1.name = 'Copy 1'
// This also modified ORIGINAL_DOCUMENT because of the shallow copy
// when using mode 1
DOCUMENT_COPY_1.array[1][2] = 200
console.log(DOCUMENT_COPY_1)
console.log(ORIGINAL_DOCUMENT)
console.log()

const DOCUMENT_COPY_2 = ORIGINAL_DOCUMENT.clone(1) // shallow copy
DOCUMENT_COPY_2.name = 'Copy 2'
// This does NOT modify ORIGINAL_DOCUMENT because it changes the
// complete array[1] reference that was shallow copied when using mode 1
DOCUMENT_COPY_2.array[1] = [9, 10, 11, 12]
console.log(DOCUMENT_COPY_2)
console.log(ORIGINAL_DOCUMENT)
console.log()

const DOCUMENT_COPY_3 = ORIGINAL_DOCUMENT.clone(2) // deep copy
DOCUMENT_COPY_3.name = 'Copy 3'
// This does modify ORIGINAL_DOCUMENT because it changes the element of
// array[1][0] that was deep copied recursively when using mode 2
DOCUMENT_COPY_3.array[1][0] = 1234
console.log(DOCUMENT_COPY_3)
console.log(ORIGINAL_DOCUMENT)
console.log()
