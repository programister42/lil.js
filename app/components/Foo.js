import { Renderer } from '../../Renderer.js'

export class Foo {
    state = {
        title: 'Hello World!',
        color: 'black'
    }

    onClick = () => {
        const letters = '0123456789ABCDEF'
        let color = '#'

        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)]
        }

        this.state.color = color
    }

    render = () => Renderer.createTextElement('h1', this.state.title, {
        eventListeners: [Renderer.createListener('click', this.onClick)],
        elementStyles: `color: ${this.state.color}`
    })
}
