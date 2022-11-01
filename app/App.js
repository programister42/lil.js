import {LilComponent} from '../LilComponent.js'
import {Foo} from './components/Foo'

export class App extends LilComponent {
    constructor() {
        super('div');
        this.setState({...this.state, name: 'This is the first one app developed using lil.js'})
        this.element.addEventListener('click', () => {
            const letters = '0123456789ABCDEF'
            let color = '#'

            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)]
            }

            this.foo.setState({color})
        })
        this.render()
    }

    foo = new Foo(() => this.setState({...this.state, name: this.getState().name + '!'}))


    render() {
        this.element.innerText = this.getState().name
        this.element.appendChild(this.foo.element)
    }
}
