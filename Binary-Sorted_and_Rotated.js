function logic(n,k,arr){
//   console.log(N,K,arr)
    
    let low = 0
    let high = n-1
    
    while(low<=high){
        let mid = Math.floor(low+(high-low)/2)
        if(arr[mid]===k){
            return mid
        }
        
        else if(arr[low]<=arr[mid]){
            if(k>=arr[low] && k<=arr[mid]){
                high = mid-1
            }
            else{
                low = mid+1
            }
        }
        
        else{
            if(k>=arr[mid] && k<=arr[high]){
                low = mid+1
            }
            else{
                high = mid-1
            }
        }
    }
    
    return -1
        
        
       
        
 
}
