function fun(n){
    if(n===N){
        console.log(sub)
        return
    }
    
    sub.push(arr[n])
    fun(n+1)
    sub.pop()
    
    fun(n+1)
    
}

fun(0)