class Entity {
    id: number
    name: string
    isDirty: boolean

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
        this.isDirty = false
    }

    markDirty(): void {
        this.isDirty = true
    }

    save(): void {
        console.log(`Saving entity with id ${this.id} and name ${this.name}`)
        this.isDirty = false
    }
}

class UnitOfWork {
    private entities: Entity[]

    constructor() {
        this.entities = []
    }

    register(entity: Entity): void {
        this.entities.push(entity)
    }

    commit(): void {
        this.entities.forEach((entity) => {
            if (entity.isDirty) {
                entity.save()
            }
        })
    }
}

// Usage example
const unitOfWork = new UnitOfWork()

const entity1 = new Entity(1, 'Entity 1')
const entity2 = new Entity(2, 'Entity 2')

unitOfWork.register(entity1)
unitOfWork.register(entity2)

entity1.markDirty() // Mark entity1 as dirty (changed)

unitOfWork.commit() // Save only the dirty (changed) entities

// Output:
// Saving entity with id 1 and name Entity 1
