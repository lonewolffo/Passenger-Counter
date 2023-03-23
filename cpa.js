//document.getElementById("count-eL").innerText = 8;

// // function increment() {
// //     console.log("The button was clicked")
// // }

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

console.log(countEl)

let count = 0


function increment() {
    count = count + 1
    countEl.textContent = count
}

function save() {
    let savedN = count + " - "
    saveEl.textContent += savedN
    console.log(count)
    countEl.textContent = 0
    count = 0
}


