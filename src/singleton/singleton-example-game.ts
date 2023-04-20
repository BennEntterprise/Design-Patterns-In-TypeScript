// A Leaderboard Singleton Class

export class Leaderboard {
    static instance: Leaderboard
    #table: { [id: number]: string } = {}

    constructor() {
        if (Leaderboard.instance) {
            return Leaderboard.instance
        }
        Leaderboard.instance = this
    }

    public addWinner(position: number, name: string): void {
        this.#table[position] = name
    }

    public print(): void {
        console.log('-----------Leaderboard-----------')
        for (const key in this.#table) {
            console.log(`|\t${key}\t|\t${this.#table[key]}\t|`)
        }
        console.log()
    }
}

export interface Game {
    addWinner(position: number, name: string): void
}

export class Game1 implements Game {
    leaderboard: Leaderboard

    constructor() {
        this.leaderboard = new Leaderboard()
    }

    addWinner(position: number, name: string): void {
        this.leaderboard.addWinner(position, name)
    }
}

export class Game2 implements Game {
    leaderboard: Leaderboard

    constructor() {
        this.leaderboard = new Leaderboard()
    }

    addWinner(position: number, name: string): void {
        this.leaderboard.addWinner(position, name)
    }
}

export class Game3 implements Game {
    leaderboard: Leaderboard

    constructor() {
        this.leaderboard = new Leaderboard()
    }

    addWinner(position: number, name: string): void {
        this.leaderboard.addWinner(position, name)
    }
}

// The Client
// Despite all games instantiating a leaderboard, they all point
// to the same memory object since the leaderboard is a singleton.
const GAME1 = new Game1()
GAME1.addWinner(2, 'Cosmo')

const GAME2 = new Game2()
GAME2.addWinner(3, 'Sean')

const GAME3 = new Game3()
GAME3.addWinner(1, 'Emmy')

GAME1.leaderboard.print()
GAME2.leaderboard.print()
GAME3.leaderboard.print()
