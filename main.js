import './style.css'
// import data, { user } from './data.json';
import { user } from './data.json';
import buttonStyles from './button.module.css'
import imageStyles from './image.module.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

import suma from './suma.ts'

const modules = import.meta.glob('./modules/*.js')

for (const path in modules) {
  modules[path]().then((module) => { module.load() })
}

console.log(`Suma de 2 + 3 es: ${suma(2, 3)}`)

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="${imageStyles.logo}" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="${imageStyles.logo} ${imageStyles.vanilla}" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <pre>${JSON.stringify(user)}</pre>
    <p class="read-the-docs btn">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

document.querySelector('#counter').className = buttonStyles.btn
