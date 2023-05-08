// Memento example Use Case

// The Save/Restore Game functionality
export class CareTaker {
    // Guardian. Provides a narrow interface to the mementos

    #originator: GameCharacter
    #mementos: Memento[]

    constructor(originator: GameCharacter) {
        this.#originator = originator
        this.#mementos = []
    }

    save(): void {
        // Store a new Memento of the Characters current state
        console.log('CareTaker: Game Save')
        const memento = this.#originator.memento
        this.#mementos.push(memento)
    }

    restore(index: number): void {
        // Replace the Characters current attributes with the state
        // stored in the saved Memento
        console.log('CareTaker: Restoring Characters attributes from Memento')
        const memento = this.#mementos[index]
        this.#originator.memento = memento
    }
}
// The Game Character whose state changes

// A Memento to store character attributes

export class Memento {
    score: number
    inventory: Set<string>
    level: number
    location: { x: number; y: number; z: number }

    constructor(
        score: number,
        inventory: Set<string>,
        level: number,
        location: { x: number; y: number; z: number }
    ) {
        this.score = score
        this.inventory = inventory
        this.level = level
        this.location = location
    }
}

export class GameCharacter {
    #score: number
    #inventory: Set<string>
    #level: number
    #location: { x: number; y: number; z: number }

    constructor() {
        this.#score = 0
        this.#inventory = new Set()
        this.#level = 0
        this.#location = { x: 0, y: 0, z: 0 }
    }

    public get score(): number {
        // A getter for the score"
        return this.#score
    }

    registerKill(): void {
        // The character kills its enemies as it progresses
        this.#score += 100
    }

    addInventory(item: string): void {
        // The character finds objects in the game
        this.#inventory.add(item)
    }

    progressToNextLevel(): void {
        // The character progresses to the next level
        this.#level = this.#level + 1
    }

    moveForward(amount: number): void {
        // The character moves around the environment
        this.#location['z'] += amount
    }

    status(): string {
        return (
            `Score: ${this.#score}, ` +
            `Level: ${this.#level}, ` +
            `Location: ${JSON.stringify(this.#location)}\n` +
            `Inventory: ${JSON.stringify(Array.from(this.#inventory))}`
        )
    }

    public get memento(): Memento {
        'A `getter` for the characters attributes as a Memento'
        return new Memento(
            this.#score,
            new Set(this.#inventory),
            this.#level,
            Object.assign({}, this.#location)
        )
    }

    public set memento(value: Memento) {
        this.#score = value.score
        this.#inventory = value.inventory
        this.#level = value.level
        this.#location = value.location
    }
}

const GAME_CHARACTER = new GameCharacter()
const CARETAKER = new CareTaker(GAME_CHARACTER)

// start the game
GAME_CHARACTER.registerKill()
GAME_CHARACTER.moveForward(1)
GAME_CHARACTER.addInventory('sword')
GAME_CHARACTER.registerKill()
GAME_CHARACTER.addInventory('rifle')
GAME_CHARACTER.moveForward(1)
console.log(GAME_CHARACTER.status())

// save progress
CARETAKER.save()

GAME_CHARACTER.registerKill()
GAME_CHARACTER.moveForward(1)
GAME_CHARACTER.progressToNextLevel()
GAME_CHARACTER.registerKill()
GAME_CHARACTER.addInventory('motorbike')
GAME_CHARACTER.moveForward(10)
GAME_CHARACTER.registerKill()
console.log(GAME_CHARACTER.status())

// save progress
CARETAKER.save()
GAME_CHARACTER.moveForward(1)
GAME_CHARACTER.progressToNextLevel()
GAME_CHARACTER.registerKill()
console.log(GAME_CHARACTER.status())

// decide you made a mistake, go back to first save
CARETAKER.restore(0)
console.log(GAME_CHARACTER.status())

// continue
GAME_CHARACTER.registerKill()
