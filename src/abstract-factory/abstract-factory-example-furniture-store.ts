// Abstract Factory Use Case Example Code
// Abstract Furniture Factory

export interface IChair {
    name: string
    height: number
    width: number
    depth: number

    getDimensions(): dimension
}

export class Chair implements IChair {
    name = ''
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
        this.name = 'SmallChair'
        this.height = 40
        this.width = 40
        this.depth = 40
    }
}

export class MediumChair extends Chair {
    constructor() {
        super()
        this.name = 'MediumChair'
        this.height = 60
        this.width = 60
        this.depth = 60
    }
}

export class BigChair extends Chair {
    constructor() {
        super()
        this.name = 'BigChair'
        this.height = 80
        this.width = 80
        this.depth = 80
    }
}

export interface IChair {
    name: string
    height: number
    width: number
    depth: number

    getDimensions(): dimension
}

export class ChairFactory {
    static getChair(chair: string): IChair {
        if (chair == 'BigChair') {
            return new BigChair()
        } else if (chair == 'MediumChair') {
            return new MediumChair()
        } else if (chair == 'SmallChair') {
            return new SmallChair()
        } else {
            throw new Error('No Chair Found')
        }
    }
}

export type dimension = {
    height: number
    width: number
    depth: number
}

export interface ITable {
    name: string
    height: number
    width: number
    depth: number

    getDimensions(): dimension
}

export class Table implements ITable {
    name = ''
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

export class SmallTable extends Table {
    constructor() {
        super()
        this.name = 'SmallTable'
        this.height = 40
        this.width = 40
        this.depth = 40
    }
}

export class MediumTable extends Table {
    constructor() {
        super()
        this.name = 'MediumTable'
        this.height = 60
        this.width = 60
        this.depth = 60
    }
}

export class BigTable extends Table {
    constructor() {
        super()
        this.name = 'BigTable'
        this.height = 80
        this.width = 80
        this.depth = 80
    }
}

export class TableFactory {
    static getTable(table: string): ITable {
        if (table === 'BigTable') {
            return new BigTable()
        } else if (table === 'MediumTable') {
            return new MediumTable()
        } else if (table === 'SmallTable') {
            return new SmallTable()
        } else {
            throw new Error('No Table Found')
        }
    }
}

type IFurniture = IChair | ITable

export class FurnitureFactory {
    static getFurniture(furniture: string): IFurniture | undefined {
        try {
            if (['SmallChair', 'MediumChair', 'BigChair'].indexOf(furniture) > -1) {
                return ChairFactory.getChair(furniture)
            }
            if (['SmallTable', 'MediumTable', 'BigTable'].indexOf(furniture) > -1) {
                return TableFactory.getTable(furniture)
            }
            throw new Error('No Factory Found')
        } catch (e) {
            console.log(e)
        }
    }
}

let FURNITURE = FurnitureFactory.getFurniture('SmallChair')
console.log(FURNITURE?.name)
console.log(FURNITURE?.getDimensions())

FURNITURE = FurnitureFactory.getFurniture('MediumTable')
console.log(FURNITURE?.name)
console.log(FURNITURE?.getDimensions())
