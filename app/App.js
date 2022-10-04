import { Renderer } from '../Renderer.js'
import { Bar } from './components/bar.js'
import { Foo } from './components/foo.js'

export class App {
    state = {
        barText: 'This is the first one app developed using lil.js'
    }

    onClick = () => {
        this.#bar.state.text += '!'
    }

    #foo = new Foo()
    #bar = new Bar(this.state.barText)

    render = () => Renderer.createElement(
        'div',
        [
            this.#foo,
            this.#bar
        ],
        { eventListeners: [Renderer.createListener('click', this.onClick)] }
    )
}
