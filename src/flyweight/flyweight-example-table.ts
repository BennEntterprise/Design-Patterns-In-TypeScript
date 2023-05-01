export class Flyweight {
    // The Concrete Flyweight
    code: number
    constructor(code: number) {
        this.code = code
    }
}

export class FlyweightFactory {
    // Creating the FlyweightFactory as a static class

    static flyweights: { [id: number]: Flyweight } = {}

    static getFlyweight(code: number): Flyweight {
        // A static method to get a flyweight based on a code
        if (!(code in FlyweightFactory.flyweights)) {
            FlyweightFactory.flyweights[code] = new Flyweight(code)
        }
        return FlyweightFactory.flyweights[code]
    }

    static getCount(): number {
        // Return the number of flyweights in the cache
        return Object.keys(FlyweightFactory.flyweights).length
    }
}

// A Column that is used in a Row
export class Column {
    // The columns are the contexts.
    // They will share the Flyweights via the FlyweightsFactory.
    // `data`, `width` and `justify` are extrinsic values. They are outside
    // of the flyweights.
    data = ''
    width = 10
    justify = 0

    getData(): string {
        // Get the flyweight value from the factory, and apply the extrinsic values
        const codes = []
        for (let i = 0; i < this.data.length; i++) {
            codes.push(this.data.charCodeAt(i))
        }
        let ret = ''
        Array.from(codes).forEach((c) => {
            ret = ret + String.fromCharCode(FlyweightFactory.getFlyweight(c).code)
        })

        switch (this.justify) {
            case 1:
                ret = this.leftAlign(this.width, ret, ' ')
                break
            case 2:
                ret = this.rightAlign(this.width, ret, ' ')
                break
            default:
                ret = this.center(this.width, ret, ' ')
        }

        return ret
    }

    center(width: number, string: string, padding: string): string {
        return width <= string.length
            ? string
            : this.centerAlternate(width, padding + string, padding)
    }
    centerAlternate(width: number, string: string, padding: string): string {
        return width <= string.length
            ? string
            : this.center(width, string + padding, padding)
    }
    leftAlign(width: number, string: string, padding: string): string {
        return width <= string.length
            ? string
            : this.leftAlign(width, string + padding, padding)
    }
    rightAlign(width: number, string: string, padding: string): string {
        return width <= string.length
            ? string
            : this.rightAlign(width, padding + string, padding)
    }
}

// A Row in the Table
export class Row {
    columns: Column[]

    constructor(column_count: number) {
        this.columns = []
        for (let i = 0; i < column_count; i++) {
            this.columns.push(new Column())
        }
    }
    getData(): string {
        // Format the row before returning it to the table
        let ret = ''
        this.columns.forEach((column) => {
            ret = `${ret}${column.getData()}|`
        })
        return ret
    }
}

// A Formatted Table
export class Table {
    rows: Row[]

    constructor(row_count: number, column_count: number) {
        this.rows = []
        for (let i = 0; i < row_count; i++) {
            this.rows.push(new Row(column_count))
        }
    }

    draw(): void {
        // Draws the table formatted in the console
        let maxRowLength = 0
        const rows: string[] = []
        this.rows.forEach((row) => {
            const rowData = row.getData()
            rows.push(`|${rowData}`)
            const rowLength = rowData.length + 1
            if (maxRowLength < rowLength) {
                maxRowLength = rowLength
            }
        })
        console.log('-'.repeat(maxRowLength))
        rows.forEach((row) => {
            console.log(row)
        })
        console.log('-'.repeat(maxRowLength))
    }
}

// The Flyweight Use Case Example
const TABLE = new Table(3, 3)
TABLE.rows[0].columns[0].data = 'abra'
TABLE.rows[0].columns[1].data = '112233'
TABLE.rows[0].columns[2].data = 'cadabra'
TABLE.rows[1].columns[0].data = 'racadab'
TABLE.rows[1].columns[1].data = '12345'
TABLE.rows[1].columns[2].data = '332211'
TABLE.rows[2].columns[0].data = 'cadabra'
TABLE.rows[2].columns[1].data = '445566'
TABLE.rows[2].columns[2].data = 'aa 22 bb'

TABLE.rows[0].columns[0].justify = 1
TABLE.rows[1].columns[0].justify = 1
TABLE.rows[2].columns[0].justify = 1
TABLE.rows[0].columns[2].justify = 2
TABLE.rows[1].columns[2].justify = 2
TABLE.rows[2].columns[2].justify = 2
TABLE.rows[0].columns[1].width = 15
TABLE.rows[1].columns[1].width = 15
TABLE.rows[2].columns[1].width = 15

TABLE.draw()

console.log(`FlyweightFactory has ${FlyweightFactory.getCount()} flyweights`)
