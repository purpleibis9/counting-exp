let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0



function increment() {
    count += 1
	countEl.innerText = count
}

function save() {
	let prev = count + " - "
	saveEl.textContent += prev
	countEl.innerText = 0
	count = 0
	console.log(count)
}

