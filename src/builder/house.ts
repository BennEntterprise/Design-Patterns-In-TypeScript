// The Product

export default class House {
    doors = 0
    windows = 0
    wallMaterial = ''
    buildingType = ''

    construction(): string {
        // console.info('A house was created...')
        return `This is a ${this.wallMaterial} ${this.buildingType} with ${this.doors} door(s) and ${this.windows} window(s).`
    }
}
