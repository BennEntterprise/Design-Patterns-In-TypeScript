// The Strategy Pattern Example Use Case

class GameCharacterConcept {
    // This is the context whose strategy will change

    #position: [number, number] = [0, 0]

    move(movementStyle: IMoveConstructor) {
        // The movement algorithm has been decided by the client
        new movementStyle().move(this.#position)
    }
}

interface IMoveConstructor {
    // A Constructor for the IMove
    new (): IMove
}

interface IMove {
    // The Move Strategy Interface
    move(position: [number, number]): void
}

class WalkingMove implements IMove {
    // A concrete movement strategy for walking

    move(position: [number, number]) {
        position[0] += 1
        console.log(`I am Walking. New position = ${position}`)
    }
}

class SprintingMove implements IMove {
    // A concrete movement strategy for sprinting

    move(position: [number, number]) {
        position[0] += 2
        console.log(`I am Running. New position = ${position}`)
    }
}

class CrawlingMove implements IMove {
    // A concrete movement strategy for crawling

    move(position: [number, number]) {
        position[0] += 0.5
        console.log(`I am Crawling. New position = ${position} `)
    }
}

// The Client
const GAME_CHARACTER_EX = new GameCharacter()

GAME_CHARACTER.move(WalkingMove)
// Character sees the enemy
GAME_CHARACTER.move(SprintingMove)
// Character finds a small cave to hide in
GAME_CHARACTER.move(CrawlingMove)
