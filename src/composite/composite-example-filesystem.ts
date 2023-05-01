export interface IComponent {
    // A component interface describing the common
    // fields and methods of leaves and composites

    referenceToParent?: Folder

    dir(indent: string): void
    // A method each Leaf and composite container should implement

    detach(): void
    // Called before a leaf is attached to a composite
}

export class File implements IComponent {
    // The File Class. The files are the leaves

    name: string
    referenceToParent?: Folder = undefined

    constructor(name: string) {
        this.name = name
    }

    dir(indent: string): void {
        console.log(`${indent}<FILE> ${this.name}`)
    }

    detach(): void {
        'Detaching this leaf from its parent composite'
        if (this.referenceToParent) {
            this.referenceToParent.delete(this)
        }
    }
}

export class Folder implements IComponent {
    // A composite can contain leaves and composites

    referenceToParent?: Folder
    name: string
    components: IComponent[]

    constructor(name: string) {
        this.name = name
        this.components = []
    }

    dir(indent: string): void {
        console.log(`${indent}<DIR>  ${this.name}`)

        this.components.forEach((component) => {
            component.dir(indent + '..')
        })
    }

    attach(component: IComponent): void {
        // Detach leaf / composite from any current parent reference and
        // then set the parent reference to this composite(self)
        component.detach()
        component.referenceToParent = this
        this.components.push(component)
    }

    delete(component: IComponent): void {
        // Removes leaf/composite from this composite self.components
        const index = this.components.indexOf(component)
        if (index > -1) {
            this.components.splice(index, 1)
        }
    }

    detach(): void {
        // Detaching this composite from its parent composite
        if (this.referenceToParent) {
            this.referenceToParent.delete(this)
            this.referenceToParent = undefined
        }
    }
}

// A use case of the composite pattern.
const FILESYSTEM = new Folder('root')
const FILE_1 = new File('abc.txt')
const FILE_2 = new File('123.txt')
FILESYSTEM.attach(FILE_1)
FILESYSTEM.attach(FILE_2)
const FOLDER_A = new Folder('folder_a')
FILESYSTEM.attach(FOLDER_A)
const FILE_3 = new File('xyz.txt')
FOLDER_A.attach(FILE_3)
const FOLDER_B = new Folder('folder_b')
const FILE_4 = new File('456.txt')
FOLDER_B.attach(FILE_4)
FILESYSTEM.attach(FOLDER_B)
FILESYSTEM.dir('')

// now move FOLDER_A and its contents to FOLDER_B
console.log()
FOLDER_B.attach(FOLDER_A)
FILESYSTEM.dir('')
