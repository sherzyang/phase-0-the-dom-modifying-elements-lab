// Write your code here!

let main = document.body.querySelector("main");
main.remove()

let newHeader = document.createElement("H1");
document.body.innerHTML = "<h1></h1><script type=text/javascript src=index.js></script>"

newHeader = document.querySelector("H1");
newHeader.id = "victory";
newHeader.innerHTML = "Sherry is the champion"



