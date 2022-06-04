
let arr = [5,2,1,3,7,3]
let n = arr.length
for(let i=0; i<n-1; i++){
let cnt = 0
let minInd = null
  for(let j= i+1; j<n; j++){
    if(arr[i]>arr[j]){
    cnt++
      if(cnt===1){ minInd = j}
      else if(arr[minInd]>arr[j]){
           minInd = j
       }
      
    }
  }
  if(minInd){
    let temp = arr[i]
     arr[i] = arr[minInd]
     arr[minInd] = temp
  }
console.log(arr)
  
}
