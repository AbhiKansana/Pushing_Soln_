let que = [
  ['R','R','D'],
  ['D','D','D'],
  ['R','R','C']
]

let arr = [
   ['1','1','1'],
   ['1','1','1'],
   ['1','1','1'],

]

let n =arr.length
let min = Infinity

   // console.log(arr[i][j+1])
function fun(i,j){
    if(i===n-1 && j===n-1){
      // console.log(arr)
      let cur = count(arr)
      // console.log(cur)
      min  = Math.min(min,cur)
      return
    }

  // Right
   if(j+1<n && arr[i][j+1]==='1'){ 
      arr[i][j] = 'R'
      fun(i,j+1)
      arr[i][j] = '1'
   }


  // Down
  if(i+1<n && arr[i+1][j]==='1'){
    arr[i][j] = "D"
     fun(i+1,j)
    arr[i][j] = '1'

  }

  
}

fun(0,0)
if(min===Infinity){
  console.log(0)
}
else{
  console.log(min)
}

function count(mat){
  let cnt = 0
  for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
      if(mat[i][j]==="R"|| mat[i][j]==="D"){
        if(mat[i][j]!==que[i][j]){
          cnt++
        }
      }
    }
  }

  return cnt
}

