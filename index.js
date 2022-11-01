import {App} from './app/App.js'

document.title = 'lil.js app'

document.querySelector('#root').appendChild(new App().element)
