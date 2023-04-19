// This is a unified file from the ts-patterns udemy course by: TODO: (INSERT ORIGINAL AUTHOR)
// It includes several files included into one to serve as a code snippet to
// build stuff in the wild. Keep what you need, modify to fit, and trash that which
// you don't use.

// Original Files: Presented in the order they are included in this file.
// house.ts
// house-builder.ts
// house-boat-director.ts
// castle-director.ts
// igloo-director.ts
// client.ts (Which actually uses the factory);

export class House {
    doors = 0
    windows = 0
    wallMaterial = ''
    buildingType = ''

    construction(): string {
        return `This is a ${this.wallMaterial} ${this.buildingType} with ${this.doors} door(s) and ${this.windows} window(s).`
    }
}

interface IHouseBuilder {
    house: House
    setBuildingType(buildingType: string): this
    setWallMaterial(wallMaterial: string): this
    setNumberDoors(number: number): this
    setNumberWindows(number: number): this
    getResult(): House
}

export default class HouseBuilder implements IHouseBuilder {
    house: House

    constructor() {
        this.house = new House()
    }

    setBuildingType(buildingType: string): this {
        this.house.buildingType = buildingType
        return this
    }

    setWallMaterial(wallMaterial: string): this {
        this.house.wallMaterial = wallMaterial
        return this
    }

    setNumberDoors(number: number): this {
        this.house.doors = number
        return this
    }

    setNumberWindows(number: number): this {
        this.house.windows = number
        return this
    }

    getResult(): House {
        return this.house
    }
}

export class HouseBoatDirector {
    static construct(): House {
        return new HouseBuilder()
            .setBuildingType('House Boat')
            .setWallMaterial('Wood')
            .setNumberDoors(6)
            .setNumberWindows(8)
            .getResult()
    }
}

export class CastleDirector {
    static construct(): House {
        return new HouseBuilder()
            .setBuildingType('Castle')
            .setWallMaterial('Sandstone')
            .setNumberDoors(100)
            .setNumberWindows(200)
            .getResult()
    }
}

export class IglooDirector {
    static construct(): House {
        // Note that in this IglooDirector, it has omitted the
        // set_number_of windows call since this Igloo will have
        // no windows.
        return new HouseBuilder()
            .setBuildingType('Igloo')
            .setWallMaterial('Ice')
            .setNumberDoors(1)
            .getResult()
    }
}

const IGLOO = IglooDirector.construct()
const CASTLE = CastleDirector.construct()
const HOUSEBOAT = HouseBoatDirector.construct()

console.log(IGLOO.construction())
console.log(CASTLE.construction())
console.log(HOUSEBOAT.construction())
