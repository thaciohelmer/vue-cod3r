function substituteComma(text) {
  return text.replaceAll(" ", ",").split(",").filter((e) => e.length !== 0)
    .join(",")
}

const result = substituteComma("Thacio          vitor  helmer netto     ")

console.log(result);






// function wordLenght(text) {
//   const singleWords = text.split(" ").filter(e => e.length !== 0)
//   var wordsWithLenght = []

//   singleWords.forEach(e => {
//     wordsWithLenght.push(`${e} (${e.length})`)
//   })

//   return wordsWithLenght.join(" ")
// }

// const result2 = wordLenght(text)

// console.log(result2);


const text = "thacio          helmer    netto"

function wordLenght(text) {
  const singleWords = text.split(" ").filter(e => e.length !== 0)

  singleWords.forEach(e => {
    return (`${e} (${e.length})`)
  })

}

const result2 = wordLenght(text)

console.log(result2);