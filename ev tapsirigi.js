

// let arr = []
// let count = 0


// addBtn.addEventListener("click", () => {
//     count++
//     arr.push(
//         {
//             id: count,
//             value: input.value
//         }
//     )
//     console.log(arr);
// })


let input = document.querySelector("input")
let addBtn = document.querySelector(".addBtn")
let list = document.querySelector(".todoFooter")

let arr = []

addBtn.addEventListener("click", () => {
arr.push(input.value)
console.log(arr);
})