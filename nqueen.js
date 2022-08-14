
// Nqueen

let arr = [
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
]

let n = arr.length
let cnt = 0

function nqueen(row){
  if(row===arr.length){
    cnt++
    return
  }

  for(let i=0; i<n; i++){
    if(checkSafe(row,i)){
       arr[row][i] = 1
      nqueen(row+1)
      arr[row][i] = 0
    }
  }
  
}

nqueen(0)
console.log(cnt)


function checkSafe(row,i){

  // top
  for(let j=row; j>=0; j--){
    if(arr[j][i]===1){
      return false
    }
  }
// right
  let j = i
  for(let i=row; i>=0; i--){
     if(i>=0 && j<n){
       if(arr[i][j]===1){
         return false
       }
     }
       j++
  }

  // left
  let k = i
  for(let i=row; i>=0; i--){
    if(i>=0 && k>=0){
      if(arr[i][k]===1){
        return false
      }
    }
    k--
  }

  return true
  
}
