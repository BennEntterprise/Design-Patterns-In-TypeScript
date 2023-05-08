// The Template Pattern Use Case Example

// An abstract document containing a combination of hooks and abstract methods
export abstract class AbstractDocument {
    // A template class containing a template method and primitive methods

    document: Document = {}

    abstract title(document: Document): void
    // Must implement

    description?(document: Document): void
    // Optional

    author?(document: Document): void
    // Optional

    backgroundColour(document: Document): void {
        // Optional with a default behavior
        document['bg-col'] = 'white'
    }

    abstract text(document: Document, text: string): void
    // Must implement

    footer?(document: Document): void
    // Optional

    print(document: Document): void {
        // Optional with a default behavior"
        console.log('----------------------')
        Object.keys(document).forEach((attribute: string) => {
            console.log(`${attribute}\t: ${document[attribute]}`)
        })
        console.log()
    }

    createDocument(text: string): void {
        // The template method
        this.title(this.document)
        if (this.description) this.description(this.document)
        if (this.author) this.author(this.document)
        this.backgroundColour(this.document)
        this.text(this.document, text)
        if (this.footer) this.footer(this.document)
        this.print(this.document)
    }
}

export class TextDocument extends AbstractDocument {
    title(document: Document): void {
        document['title'] = 'New Text Document'
    }

    text(document: Document, text: string): void {
        document['text'] = text
    }

    footer(document: Document): void {
        document['footer'] = '-- Page 1 --'
    }
}

export interface Document {
    [id: string]: string
}

// A HTML document concrete class of AbstractDocument
export class HTMLDocument extends AbstractDocument {
    title(document: Document): void {
        document['title'] = 'New HTML Document'
    }

    text(document: Document, text: string): void {
        // Putting multiple lines into there own p tags
        const lines = text.split('\n')
        let markup = ''
        lines.forEach((line) => {
            markup = markup + '    <p>' + line + '</p>\n'
            document['text'] = markup.substring(0, markup.length - 1)
        })
    }

    print(document: Document): void {
        // overriding print to output with html tags
        console.log('<html>')
        console.log('  <head>')
        Object.keys(document).forEach((attribute: string) => {
            if (['title', 'description', 'author'].indexOf(attribute) > -1) {
                console.log(
                    `    <${attribute}>${document[attribute]}</${attribute}>`
                )
            }
            if (attribute === 'bg-col') {
                console.log('    <style>')
                console.log('      body {')
                console.log(`        background-color: ${document[attribute]};`)
                console.log('      }')
                console.log('    </style>')
            }
        })
        console.log('  </head>')
        console.log('  <body>')
        console.log(`${document['text']}`)
        console.log('  </body>')
        console.log('</html>')
    }
}

const TEXT_DOCUMENT = new TextDocument()
TEXT_DOCUMENT.createDocument('Some Text')

const HTML_DOCUMENT = new HTMLDocument()
HTML_DOCUMENT.createDocument('Line 1\nLine 2')
