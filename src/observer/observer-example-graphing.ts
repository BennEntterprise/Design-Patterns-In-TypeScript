// Observer Design Pattern Concept

// A Data Controller Interface
export interface IDataController {
    // A Subject Interface
    subscribe(observer: IDataModel): void
    unsubscribe(observer: IDataModel): void
    notify(data: number[]): void
}

export class DataController implements IDataController {
    // A Subject (a.k.a Observable)

    static instance: DataController
    #observers: Set<IDataModel> = new Set()

    constructor() {
        if (DataController.instance) {
            return DataController.instance
        }
        DataController.instance = this
    }

    subscribe(observer: IDataModel): void {
        this.#observers.add(observer)
    }

    unsubscribe(observer: IDataModel): void {
        this.#observers.delete(observer)
    }

    notify(data: number[]): void {
        this.#observers.forEach((observer) => {
            observer.notify(data)
        })
    }
}

export interface IDataModel {
    // A Subject Interface
    subscribe(observer: IDataView): number
    unsubscribe(observerId: number): void
    notify(data: number[]): void
}

export class DataModel implements IDataModel {
    // A Subject (a.k.a Observable)

    #observers: { [id: number]: IDataView } = {}
    #dataController: IDataController
    #counter: number

    constructor() {
        this.#counter = 0
        this.#dataController = new DataController()
        this.#dataController.subscribe(this)
    }

    subscribe(observer: IDataView): number {
        this.#counter++
        this.#observers[this.#counter] = observer
        return this.#counter
    }

    unsubscribe(observerId: number): void {
        delete this.#observers[observerId]
    }

    notify(data: number[]): void {
        Object.keys(this.#observers).forEach((observer) => {
            this.#observers[parseInt(observer)].notify(data)
        })
    }
}

export interface IDataView {
    // A Subject Interface
    notify(data: number[]): void
    draw(data: number[]): void
    delete(): void
}

export class BarGraphView implements IDataView {
    // A concrete observer
    #observable: IDataModel
    #id: number

    constructor(observable: IDataModel) {
        this.#observable = observable
        this.#id = this.#observable.subscribe(this)
    }

    notify(data: number[]): void {
        console.log(`BarGraph, id:${this.#id}`)
        this.draw(data)
    }

    draw(data: number[]): void {
        console.log(`Drawing a Bar graph using data:${JSON.stringify(data)}`)
    }

    delete(): void {
        this.#observable.unsubscribe(this.#id)
    }
}

export class PieGraphView implements IDataView {
    // A concrete observer
    #observable: IDataModel
    #id: number

    constructor(observable: IDataModel) {
        this.#observable = observable
        this.#id = this.#observable.subscribe(this)
    }

    notify(data: number[]): void {
        console.log(`PieGraph, id:${this.#id}`)
        this.draw(data)
    }

    draw(data: number[]): void {
        console.log(`Drawing a Pie graph using data:${data}`)
    }

    delete(): void {
        this.#observable.unsubscribe(this.#id)
    }
}

export class TableView implements IDataView {
    // A concrete observer
    #observable: IDataModel
    #id: number

    constructor(observable: IDataModel) {
        this.#observable = observable
        this.#id = this.#observable.subscribe(this)
    }

    notify(data: number[]): void {
        console.log(`TableView, id:${this.#id}`)
        this.draw(data)
    }

    draw(data: number[]): void {
        console.log(`Drawing a Table using data:${JSON.stringify(data)}`)
    }

    delete(): void {
        this.#observable.unsubscribe(this.#id)
    }
}

// A local data view that the hypothetical external controller updates
const DATA_MODEL = new DataModel()

// Add some visualisation that use the dataview
const PIE_GRAPH_VIEW = new PieGraphView(DATA_MODEL)
const BAR_GRAPH_VIEW = new BarGraphView(DATA_MODEL)
const TABLE_VIEW = new TableView(DATA_MODEL)

// A hypothetical data controller running in a different process
const DATA_CONTROLLER = new DataController() // (Singleton)

// The hypothetical external data controller updates some data
DATA_CONTROLLER.notify([1, 2, 3])

// Client now removes a local BAR_GRAPH
BAR_GRAPH_VIEW.delete()

// The hypothetical external data controller updates the data again
DATA_CONTROLLER.notify([4, 5, 6])
