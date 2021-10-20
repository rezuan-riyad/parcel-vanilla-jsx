export default function dom(name, props, ...children){
  const elem = document.createElement(name)

  Object.keys(props || {}).forEach(attr => {
    if (attr === 'style') {
      Object.keys(props[attr]).forEach(sk => {
        elem.style[sk] = props[attr][sk]
      })
    } else {
      elem[attr] = props[attr]
    }
  })

  const addChild = (child) => {
    if(Array.isArray(child)){
      child.forEach(c => addChild(c))
    } else if(typeof child === 'object'){
      elem.appendChild(child)
    } else {
      elem.appendChild(document.createTextNode(child))
    }
  }

  (children || []).forEach(c => addChild(c))

  return elem
}