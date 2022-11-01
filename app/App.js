import {Abstract} from './../Abstract'
import {Foo} from './components/Foo'

export class App extends Abstract {
    constructor() {
        super('div');
        this.setState({...this.state, name: 'This is the first one app developed using lil.js'})
        this.element.addEventListener('click', this.onClick)
        this.render()
    }

    handleChildCLick = () => this.setState({...this.state, name: this.getState().name + '!'})

    foo = new Foo(this.handleChildCLick)

    onClick = () => {
        const letters = '0123456789ABCDEF'
        let color = '#'

        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)]
        }

        this.foo.setState({color})
    }

    render() {
        this.element.innerText = this.getState().name
        this.element.appendChild(this.foo.element)
    }
}
