// The Mediator Use Case Example

// An interface that each component should implement

export interface IComponent {
    notify(message: string): void

    receive(message: string): void
}

// Each component stays synchronized through a mediator
export class Component implements IComponent {
    #mediator: Mediator
    #name: string

    constructor(mediator: Mediator, name: string) {
        this.#mediator = mediator
        this.#name = name
    }

    notify(message: string): void {
        console.log(this.#name + ': >>> Out >>> : ' + message)
        this.#mediator.notify(message, this)
    }

    receive(message: string): void {
        console.log(this.#name + ': <<< In <<< : ' + message)
    }
}

// The Subject that all components will stay synchronized with
export class Mediator {
    // A Subject whose notify method is mediated
    #components: Set<IComponent>

    constructor() {
        this.#components = new Set()
    }

    add(component: IComponent): void {
        // Add components
        this.#components.add(component)
    }

    notify(message: string, originator: IComponent): void {
        // Add components except for the originator component
        this.#components.forEach((component) => {
            if (component !== originator) {
                component.receive(message)
            }
        })
    }
}

const MEDIATOR = new Mediator()
const COMPONENT1 = new Component(MEDIATOR, 'Component1')
const COMPONENT2 = new Component(MEDIATOR, 'Component2')
const COMPONENT3 = new Component(MEDIATOR, 'Component3')

MEDIATOR.add(COMPONENT1)
MEDIATOR.add(COMPONENT2)
MEDIATOR.add(COMPONENT3)

COMPONENT1.notify('data A')
COMPONENT2.notify('data B')
COMPONENT3.notify('data C')
