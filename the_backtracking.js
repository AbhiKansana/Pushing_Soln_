
let arr  = [
     [0,0,0,0],
     [0,0,0,0],
     [0,0,0,0],
     [0,0,0,0]
]

let ar1 = [1,-1,0,0]
let ar2 = [0,0,1,-1]

let n = arr.length
let cnt = 0

function main(i,j){

  // console.log(arr)
  if(i=== n-1 && j=== n-1){
    cnt++
    return
  }


  // all once

  for(let k=0; k<n; k++){
     if(j+ar1[k]<n && j+ar1[k]>=0 && i+ar2[k]<n && i+ar2[k]>=0 && arr[i+ar2[k]][j+ar1[k]]===0){
       arr[i][j] = 2
       main(i+ar2[k],j+ar1[k])
       arr[i][j] = 0
     }
  }
  

  
// // Right
//  if(j+1<n && arr[i][j+1]===0){
//     arr[i][j]=2
//    main(i,j+1)
//    arr[i][j]=0
//  }

//   // Left
//  if(j-1>=0 && arr[i][j-1]===0){
//     arr[i][j]=2
//    main(i,j-1)
//    arr[i][j]=0
//  }

// // Down
//   if(i+1<n && arr[i+1][j]===0){
//     arr[i][j]=2
//     main(i+1,j)
//     arr[i][j]=0
//   }

//   // Up
//   if(i-1>=0 && arr[i-1][j]===0){
//     arr[i][j]=2
//     main(i-1,j)
//     arr[i][j]=0

//  }


}

main(0,0)
console.log(cnt)
