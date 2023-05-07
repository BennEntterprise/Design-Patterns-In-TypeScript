// The Command Pattern Use Case Example. A smart light Switch
// The Light. The Receiver

export class Light {
    turnOn(): void {
        // A set of instructions to run
        console.log('Light turned ON')
    }

    turnOff(): void {
        // A set of instructions to run
        console.log('Light turned OFF')
    }
}

export interface ICommand {
    execute(): void
}

export default class Switch {
    #commands: { [id: string]: ICommand }
    #history: [number, string][]

    constructor() {
        this.#commands = {}
        this.#history = []
    }

    showHistory(): void {
        // Print the history of each time a command was invoked"
        this.#history.forEach((row) => {
            console.log(`${row[0]} : ${row[1]}`)
        })
    }

    register(commandName: string, command: ICommand): void {
        // Register commands in the Invoker
        this.#commands[commandName] = command
    }

    execute(commandName: string): void {
        // Execute any registered commands
        if (commandName in this.#commands) {
            this.#commands[commandName].execute()
            this.#history.push([Date.now(), commandName])
        } else {
            console.log(`Command [${commandName}] not recognised`)
        }
    }

    replayLast(numberOfCommands: number): void {
        // Replay the last N commands
        const commands = this.#history.slice(
            this.#history.length - numberOfCommands,
            this.#history.length
        )
        commands.forEach((command) => {
            this.#commands[command[1]].execute()
            // or if you wanted to also record this replay in history
            // this.execute(command[1])
        })
    }
}
export interface ISwitchCommand {
    execute(commandName: string): void
}

export class SwitchOnCommand implements ISwitchCommand {
    #light: Light

    constructor(light: Light) {
        this.#light = light
    }

    execute(): void {
        this.#light.turnOn()
    }
}

export class SwitchOffCommand implements ISwitchCommand {
    #light: Light

    constructor(light: Light) {
        this.#light = light
    }

    execute(): void {
        this.#light.turnOff()
    }
}

// Create a receiver
const LIGHT = new Light()

// Create Commands
const SWITCH_ON = new SwitchOnCommand(LIGHT)
const SWITCH_OFF = new SwitchOffCommand(LIGHT)

// Register the commands with the invoker
const SWITCH = new Switch()
SWITCH.register('ON', SWITCH_ON)
SWITCH.register('OFF', SWITCH_OFF)

// Execute the commands that are registered on the Invoker
SWITCH.execute('ON')
SWITCH.execute('OFF')
SWITCH.execute('ON')
SWITCH.execute('OFF')

// show history
SWITCH.showHistory()

// replay last two executed commands
SWITCH.replayLast(2)
