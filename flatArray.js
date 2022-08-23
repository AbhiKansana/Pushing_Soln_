
let arr = [1, 2, 3, [[4,4], 5], 6,[7,8],9,-1]


console.log(arr)

 let i = 0
 while(arr[i]!==-1){
    if (typeof (arr[i]) === "object") {
      let ind = i
        let first = arr.slice(0,ind)
        let sub = arr[ind]
        let last = arr.slice(ind+1)
        arr = [...first,...sub,...last]
        console.log(arr)

    }

  if(typeof (arr[i]) !== "object"){
    
   i++
  }
 }




