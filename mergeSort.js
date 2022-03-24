

let arr = [7,2,4,9,2,4]

function mergeSort(arr,left,right){
  if(left === right){
    return 
  }

   let mid = Math.floor((left+right)/2)
   console.log("mid",mid)

     mergeSort(arr,left,mid)
     mergeSort(arr,mid+1,right)
     merge(arr,left,mid,right)
  
      
   
}

mergeSort(arr,0,arr.length-1)
console.log(arr)

function merge(arr,left,mid,right){
  let arr2 = []
  let arr1 = []
  for(let i=left; i<=mid; i++){
    arr1.push(arr[i])
  }
  for(let j=mid+1; j<=right; j++){
    arr2.push(arr[j])
  }
  
  
  console.log("arr1",arr1)
  console.log("arr2",arr2)
  // console.log("arr",arr)

  let current = left
  let i=0
  let j=0

  while(i<arr1.length && j<arr2.length){
       if(arr1[i]<=arr2[j]){
         arr[current] = arr1[i]
         i++
         current++
       }
    else{
       arr[current] = arr2[j]
         j++
         current++
    }
  }

 while(i<arr1.length){
   arr[current] = arr1[i]
   i++
   current++
 }

  while(j<arr2.length){
    arr[current] = arr2[j]
    j++
    current++
  }

  console.log("arr",arr)
}