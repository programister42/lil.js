import {LilComponent} from '../../LilComponent.js'

export class Foo extends LilComponent {
    constructor(onClick) {
        super('div')
        this.element.innerText = 'eeeeeeeeeeeeeeeee'
        this.element.addEventListener('click', onClick)
    }

    render() {
        this.element.style.backgroundColor = this.getState().color
    }
}
