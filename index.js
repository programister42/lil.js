import { Renderer } from "./Renderer.js"
import { App } from './app/App.js'

document.title = 'lil.js app'

const renderer = new Renderer(new App())
renderer.renderDOM()
