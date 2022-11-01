export class LilComponent {
    state = {}

    constructor(elementName) {
        this.element = document.createElement(elementName)
    }

    getState() {
        return this.state
    }

    setState(newState) {
        this.state = newState
        this.render()
    }
}
