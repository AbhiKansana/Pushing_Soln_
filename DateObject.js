
let date = new Date()



let day = date.getDate()
// commment
if(day<10){
  day = `0${day}`
}
// console.log(day)

let month = date.getMonth()+1
if(month<10){
  month = `0${month}`
}
// console.log(month)

let year = date.getFullYear()
year = year.toString()
year = year[2]+year[3]
// console.log(year)

console.log(`${day}/${month}/${year}`)


// Time String
let time = date.()
console.log(time)

