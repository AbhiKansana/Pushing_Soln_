

let arr = [
    ['Q','0','0','0'],
    ['0','0','0','0'],
    ['0','0','0','0'],
    ['0','0','0','0'],
]

let n = arr.length

let maxCnt = counter()
let initial = counter()

function fun(row){
            // console.log("row",row)
            let cur = counter()
            maxCnt = Math.max(cur,maxCnt)
  
        if(row===n){
            return
        }
         
         for(let i=row; i<n; i++){
           for(let j=0; j<n; j++){
           // console.log("ji",safe(i,j),{i},j)
             if(safe(i,j)){
               // console.log("safe")
             arr[i][j]  = "Q"
             fun(i+1,)
             arr[i][j] = "0"
                 
             }

            }
         }
     }

fun(0)
console.log(maxCnt-initial)


function safe(row,i){
         
         if(arr[row][i]==="Q"){
             return false
         }
         
        // top - bottom
          for(let j=0; j<n; j++){
            if(arr[j][i]==="Q"){
              return false
            }
          }
  
        // right diagonal upward
          let j = i
          for(let i=row; i>=0; i--){
             if(i>=0 && j<n){
               if(arr[i][j]==="Q"){
                 return false
               }
             }
               j++
          }
          
        // right diagonal downward
        
         let j1 = i
          for(let i=row; i<n; i++){
             if(i<n && j1>=0){
               if(arr[i][j1]==="Q"){
                 return false
               }
             }
               j1--
          }
        
        
        
          // left diagonal upward
          let k = i
          for(let i=row; i>=0; i--){
            if(i>=0 && k>=0){
              if(arr[i][k]==="Q"){
                return false
              }
            }
            k--
          }
          
          
          // left diagonal downward
          let k1 = i
          for(let i=row; i<n; i++){
            if(i<n && k1<n){
              if(arr[i][k1]==="Q"){
                return false
              }
            }
            k1++
          }
          
          
        //   sam row
        for(let i=0; i<n; i++){
            if(arr[row][i]==="Q"){
                return false
            }
        }
        
        // Finally
        return true
         
     }

function counter(){
         let cnt = 0
         for(let i in arr){
             for(let j in arr){
                 if(arr[i][j]==="Q"){
                     cnt++
                 }
             }
         }
         
         return cnt
     }
