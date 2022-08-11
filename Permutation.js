

let arr = [1,2,3,4]
let n = arr.length

function fun(l){

  if(l===n-1){
    console.log(arr)
    return
  }

  for(let i=l; i<n; i++){
      
    swap(l,i)
    
    fun(l+1)
    
    swap(i,l)


  }


}

fun(0)

function swap(ind1,ind2){
  let temp = arr[ind1]
     arr[ind1] = arr[ind2]
     arr[ind2] = temp
}
