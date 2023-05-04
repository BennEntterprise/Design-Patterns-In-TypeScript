// The Proteus Interface
export interface IProteus {
    // A Greek mythological character that can change to many forms

    tellMeTheFuture(): void
    // Proteus will change form rather than tell you the future

    tellMeYourForm(): void
    // The form of Proteus is elusive like the sea
}

export class Leopard implements IProteus {
    // Proteus in the form of a Leopard

    name = 'Leopard'

    tellMeTheFuture(): void {
        // Proteus will change to something random
        if (Math.floor(Math.random() * 2)) {
            Object.assign(this, new Lion())
            this.tellMeTheFuture = Lion.prototype.tellMeTheFuture
            this.tellMeYourForm = Lion.prototype.tellMeYourForm
        } else {
            Object.assign(this, new Serpent())
            this.tellMeTheFuture = Serpent.prototype.tellMeTheFuture
            this.tellMeYourForm = Serpent.prototype.tellMeYourForm
        }
    }

    tellMeYourForm(): void {
        console.log(`I am the form of ${this.name}`)
    }
}

export class Serpent implements IProteus {
    // Proteus in the form of a Serpent

    name = 'Serpent'

    tellMeTheFuture(): void {
        // Proteus will change to something random
        if (Math.floor(Math.random() * 2)) {
            Object.assign(this, new Leopard())
            this.tellMeTheFuture = Leopard.prototype.tellMeTheFuture
            this.tellMeYourForm = Leopard.prototype.tellMeYourForm
        } else {
            Object.assign(this, new Lion())
            this.tellMeTheFuture = Lion.prototype.tellMeTheFuture
            this.tellMeYourForm = Lion.prototype.tellMeYourForm
        }
    }

    tellMeYourForm(): void {
        console.log(`I am the form of ${this.name}`)
    }
}

export class Lion implements IProteus {
    // Proteus in the form of a Lion

    name = 'Lion'

    tellMeTheFuture(): void {
        // Proteus will change to something random
        if (Math.floor(Math.random() * 2)) {
            Object.assign(this, new Serpent())
            this.tellMeTheFuture = Serpent.prototype.tellMeTheFuture
            this.tellMeYourForm = Serpent.prototype.tellMeYourForm
        } else {
            Object.assign(this, new Leopard())
            this.tellMeTheFuture = Leopard.prototype.tellMeTheFuture
            this.tellMeYourForm = Leopard.prototype.tellMeYourForm
        }
    }

    tellMeYourForm(): void {
        console.log(`I am the form of ${this.name}`)
    }
}

const PROTEUS = new Lion()
PROTEUS.tellMeYourForm()
PROTEUS.tellMeTheFuture()
PROTEUS.tellMeYourForm()
PROTEUS.tellMeTheFuture()
PROTEUS.tellMeYourForm()
PROTEUS.tellMeTheFuture()
PROTEUS.tellMeYourForm()
PROTEUS.tellMeTheFuture()
PROTEUS.tellMeYourForm()
PROTEUS.tellMeTheFuture()
PROTEUS.tellMeYourForm()
PROTEUS.tellMeTheFuture()
PROTEUS.tellMeYourForm()
