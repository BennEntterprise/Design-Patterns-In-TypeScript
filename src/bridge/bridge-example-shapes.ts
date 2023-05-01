// The Shape Abstraction Interface
export interface IShape {
    draw(): void
}

// The Shape Implementor Interface
interface IShapeImplementor {
    drawImplementation(): void
}

export class CircleImplementer implements IShapeImplementor {
    drawImplementation(): void {
        console.log('    ******')
        console.log('  **      **')
        console.log(' *          *')
        console.log('*            *')
        console.log('*            *')
        console.log(' *          *')
        console.log('  **      **')
        console.log('    ******')
    }
}

export class SquareImplementer implements IShapeImplementor {
    drawImplementation(): void {
        console.log('**************')
        console.log('*            *')
        console.log('*            *')
        console.log('*            *')
        console.log('*            *')
        console.log('*            *')
        console.log('*            *')
        console.log('**************')
    }
}

// A Circle Abstraction
export default class Circle implements IShape {
    #implementer: IShapeImplementor

    constructor(implementer: IShapeImplementor) {
        this.#implementer = implementer
    }

    draw(): void {
        this.#implementer.drawImplementation()
    }
}

// A Square Abstraction
export class Square implements IShape {
    #implementer: IShapeImplementor

    constructor(implementer: IShapeImplementor) {
        this.#implementer = implementer
    }

    draw(): void {
        this.#implementer.drawImplementation()
    }
}

// Bridge Pattern Concept Sample Code
const CIRCLE = new Circle(new CircleImplementer())
CIRCLE.draw()

const SQUARE = new Square(new SquareImplementer())
SQUARE.draw()
