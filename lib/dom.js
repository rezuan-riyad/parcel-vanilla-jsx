export default function dom(name, props, ...children) {
  const elem = document.createElement(name)

  Object.keys(props || {}).forEach(attr => {
    if (attr.startsWith('on') && attr.toLowerCase() in window) {
      let event = attr.toLowerCase().substr(2)
      let listener = props[attr]
      elem.addEventListener(event, listener)
    } else if (attr === 'style' || attr === 'sx') {
      Object.keys(props[attr]).forEach(sk => {
        elem.style[sk] = props[attr][sk]
      })
    } else {
      elem[attr] = props[attr]
    }
  })

  const addChild = (child) => {
    if (Array.isArray(child)) {
      child.forEach(c => addChild(c))
    } else if (typeof child === 'object') {
      elem.appendChild(child)
    } else {
      elem.appendChild(document.createTextNode(child))
    }
  }

  (children || []).forEach(c => addChild(c))

  return elem
}