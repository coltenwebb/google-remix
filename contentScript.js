const remixParentClass = "dRYYxd"
const searchInputClass = "gLFyf gsfi"
const searchButtonClass = "Tg7LZd"

let y = document.getElementsByClassName(searchInputClass)[0]
let text = remix(y.value)

if (text) {
let x = document.getElementsByClassName(remixParentClass)[0]
let node = document.createElement("div")
let node2 = document.createElement("span")
node.className="remix-button"
let textnode = document.createTextNode(text)
node2.appendChild(textnode)
node.appendChild(node2)

let style = `
.remix-button {
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #80868b;
}
.remix-button span {
}
`

const styleElem = document.createElement('style');
styleElem.textContent = style;
document.head.append(styleElem);

x.prepend(node)


node.addEventListener('mouseover', (e) => {
  y.value += text
})

node.addEventListener('mouseout', (e) => {
  y.value = y.value.replace(new RegExp(text + '$'), "")
})

let z = document.getElementsByClassName(searchButtonClass)[0]
node.addEventListener('mousedown', (e) => {
  z.click()
})


}

