// This is a unified file from the ts-patterns udemy course by: TODO: (INSERT ORIGINAL AUTHOR)
// It includes several files included into one to serve as a code snippet to
// build stuff in the wild. Keep what you need, modify to fit, and trash that which
// you don't use.

// Original Files: Presented in the order they are included in this file.
// dimension.ts
// chair.ts
// small-chair.ts
// medium-chair.ts
// big-chair.ts
// chair-factory.ts
// client.ts (Which actually uses the factory);
export type dimension = {
    height: number
    width: number
    depth: number
}

// A Chair Interface
interface IChair {
    height: number
    width: number
    depth: number
    getDimensions(): dimension
}

// The Chair Base Class
export class Chair implements IChair {
    height = 0
    width = 0
    depth = 0

    getDimensions(): dimension {
        return {
            width: this.width,
            depth: this.depth,
            height: this.height,
        }
    }
}

export class SmallChair extends Chair {
    constructor() {
        super()
        this.height = 40
        this.width = 40
        this.depth = 40
    }
}

export class MediumChair extends Chair {
    constructor() {
        super()
        this.height = 60
        this.width = 60
        this.depth = 60
    }
}

export class BigChair extends Chair {
    constructor() {
        super()
        this.height = 80
        this.width = 80
        this.depth = 80
    }
}

export class ChairFactory {
    static getChair(chair: string): IChair {
        if (chair == 'BigChair') {
            return new BigChair()
        } else if (chair == 'MediumChair') {
            return new MediumChair()
        } else {
            return new SmallChair()
        }
    }
}

const CHAIR = ChairFactory.getChair('SmallChair')
console.log(CHAIR.getDimensions())
