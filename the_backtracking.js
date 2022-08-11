

const arr =  [
    [0,0,0,0],
    [0,'*','*',0],
    [0,'*','*',0],
    [0,0,0,0]
]

const n = arr.length
let cnt = 0

function fun(i,j){

    // base case
    if(i===n-1 && j===n-1){
        cnt ++
      if(cnt<30){
        console.log("hurray",cnt)
        console.log(arr)
        
      }
        return
    }

 
    if(i+1<n && arr[i+1][j]!==1 && arr[i+1][j]!=='*'){
        arr[i][j] = 1    
       // console.log(arr)
        fun(i+1,j)
        arr[i][j] = 0
    }

  
 
    if(j+1<n && arr[i][j+1]!==1 && arr[i][j+1]!=='*'){
        arr[i][j]= 1
      // console.log(arr)
        fun(i,j+1)
        arr[i][j] = 0
    }

  
    if(i-1>=0 && arr[i-1][j]!==1 && arr[i-1][j]!=='*'){
        arr[i][j] = 1    
      // console.log(arr)
        fun(i-1,j)
        arr[i][j] = 0
    }


    
    if(j-1>=0 && arr[i][j-1]!==1 && arr[i][j-1]!=='*'){
        arr[i][j]= 1
      // console.log(arr)
        fun(i,j-1)
        arr[i][j] = 0
    }

  

}

fun(0,0)
console.log(cnt)
