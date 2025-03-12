x = 5
y = 7
z = x + y
console.log(z)
A = "Hello "
B = "world!"
C = A + B
console.log(C)
function SumNPrint(x1, x2) {
    x3 = x1 + x2
    return x3
}
console.log(SumNPrint(x, y))
console.log(SumNPrint(A, B))
if (C.length > z) {
    console.log(C)
} else if (C.length < z) {
    console.log(z)
} else {
    console.log("good job!")
}
L1 = ["Watermelon", "Pineapple", "Pear", "Banana"] 
L2 = ["Apple", "Banana", "Kiwi", "Orange"]
function findTheBanana(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "Banana") {
            alert("found the Banana in " + i)
        }
    }
}
L1.forEach(findTheBanana)
L2.forEach(findTheBanana)
function greetingFunc() {
    d = new Date()
    h = d.getHours()
    let greeting = ""
    if (h > 0 && h < 5) {
        greeting = "Good night"
    } else if (h > 5 && h < 12) {
        greeting = "Good morning"
    } else if (h > 12 && h < 18) {
        greeting = "Good afternoon"
    } else if (h > 18 && h < 20) {
        greeting = "Good evening"
    } else if (h > 20 && h < 24) {
        greeting = "Good night"
    }
    return greeting
}
if (window.location.href.includes("index.html")) {
    const greetingElement = document.getElementById("greeting")
    if (greetingElement) {
        greetingElement.innerHTML = greetingFunc() + ", my name is Neil"
    }
}