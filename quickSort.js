


let arr = [5,2,1,7,3,0,10,-19]



function quickSort(left,rig){
  if(left>=rig){
    return
  }

  let index = partition(left,rig)
  quickSort(left,index-1)
  quickSort(index+1,rig)
  
}

function partition(left,rig){
  let ind = Math.floor(Math.random()*(rig-left+1))+left
  swap(left,ind)
  let pivot = arr[left]
  let i = left
  let j = rig

  while(i<j){
    while(arr[i]<=pivot && i<rig){
      i++
    }
    while(arr[j]>pivot && j>left){
      j--
    }

    if(i<j){
      swap(i,j)
     }
   }

  swap(left,j)
  return j
  
}


quickSort(0,arr.length-1)
console.log(arr)

function swap(ind1,ind2){
  let temp = arr[ind1]
      arr[ind1] = arr[ind2]
      arr[ind2]  = temp
}
