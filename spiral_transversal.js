
function logic(mat,n,m){
    let top = 0
    let bottom = n-1
    let left = 0
    let right = m-1
    let size = n*m
    let ans = []
    
    while(ans.length<size){
        
        
       for(let i=top; i<=bottom && ans.length<size; i++){
           ans.push(mat[i][right])
       }
       
       right--
       
       
       for(let i=right; i>=left && ans.length<size; i--){
           ans.push(mat[bottom][i])
       }
       
       bottom--

        
        for(let i=bottom; i>=top && ans.length<size; i--){
            ans.push(mat[i][left])
        }
        
       left++

       
       for(let i= left; i<=right && ans.length<size; i++){
           ans.push(mat[top][i])
       }
       
       top++
    
    }
       console.log(ans.join(" "))
}