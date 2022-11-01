import {Abstract} from './../../Abstract'

export class Foo extends Abstract {
    constructor(onClick) {
        super('div')
        this.element.innerText = 'eeeeeeeeeeeeeeeee'
        this.element.addEventListener('click', onClick)
    }

    render() {
        this.element.style.backgroundColor = this.getState().color
    }
}
