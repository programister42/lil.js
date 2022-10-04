export class Renderer {
    static createElement(elementName, contentArray, options = {}) {
        return { elementName, contentArray, options }
    }

    static createTextElement(elementName, textContent, options = {}) {
        return { elementName, textContent, options }
    }

    static createListener(type, callback) {
        return { type, callback }
    }

    rootElement = document.querySelector('#root')

    constructor(lilElement) {
        this.lilDOM = lilElement
    }

    renderDOM() {
        this.rootElement.innerHTML = ''
        this.rootElement.appendChild(this.#recursiveRender(this.lilDOM))
    }

    #recursiveRender(lilElement) {
        const el = lilElement.render()

        let element = document.createElement(el.elementName)

        if (el.textContent) element.textContent = el.textContent

        el.options?.eventListeners?.forEach(lilListener => {
            element.addEventListener(lilListener.type, (HTMLElement, event) => {
                lilListener.callback(HTMLElement, event)
                this.renderDOM()
            })
        })

        if (el.options?.elementStyles) element.setAttribute('style', el.options?.elementStyles)

        el.contentArray?.forEach(child => {
            element.appendChild(this.#recursiveRender(child))
        })

        return element
    }
}
