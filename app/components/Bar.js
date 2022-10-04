import { Renderer } from '../../Renderer.js'


export class Bar {
    state = {
        text: ''
    }

    constructor(text) {
        this.state.text = text
    }

    render = () => Renderer.createTextElement('p', this.state.text)
}
