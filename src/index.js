import dom from './dom'
/** @jsx dom */

const App = (
  <div>
    <h1>Hello World</h1>
    <p>This world is cool</p>
    <button >Click Me</button>
    {[1, 3, 4].map(e => <p>{e}</p>)}
  </div>
)

document.getElementById("app").appendChild(App)