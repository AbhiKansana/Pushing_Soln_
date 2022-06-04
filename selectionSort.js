
let arr = [5,2,1,3,7,3]
let n = arr.length
for(let i=0; i<n-1; i++){
let minInd = i
  for(let j= i+1; j<n; j++){
    if(arr[minInd]>arr[j]){
         minInd = j

    }
  }
  if(minInd !== i){
    let temp = arr[i]
     arr[i] = arr[minInd]
     arr[minInd] = temp
  }
console.log(arr)
  
}
