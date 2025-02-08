// Write your code here!
let main = document.body.querySelector("main")

main.remove()

const newHeader = document.createElement("h1")
document.body.append(newHeader)
newHeader.id = "victory"
newHeader.innerHTML = "Sherry is the champion"