class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}


const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
const f = new Node(6)

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f



//  Iterative Depth

const depthFirstValuesI = (root) => {
  const stack = [root];
  const ans = []
  while (stack.length > 0) {
    const current = stack.pop();
    ans.push(current.val)

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);

  }

  return ans
}

let loop = depthFirstValuesI(a)
// console.log(loop)





// Recursive Depth

let maxCnt = 0
let cnt = 0
let arr = []
const depthFirstValues = (root,cnt) => {
  maxCnt = Math.max(cnt,maxCnt)
  if(root===null) return []
  arr.push(root.val)
  const left = depthFirstValues(root.left,cnt+1)
  const right = depthFirstValues(root.right,cnt+1)
  return[root.val,...left,...right]

}

const recur = depthFirstValues(a,0)
// console.log(maxCnt)
// console.log(recur)
// console.log(arr)





// Iterative depth

const widthFirstValues = (root) => {
  if(root===null) return []
  const que = [root]
  const ans = []
  while(que.length>0){
    const first = que.shift()
    ans.push(first.val)
    if(first.left) que.push(first.left)
    if(first.right) que.push(first.right)
  }
  return ans
}

let res = widthFirstValues(a)
// console.log(res)






// Recursive Search

function findInTree(node,k){
  if(node===null) return false
  if(node.val===k) return true
   
  return  findInTree(node.left,k) || findInTree(node.right,k)
}

// console.log(findInTree(a,'z'))



    


// Recursive Sum 


function findSum(node){
  if(node===null) return 0

  let left = findSum(node.left)
  let right = findSum(node.right)

  return node.val+left+right
}

// console.log(findSum(a))





// Recursive max sum path
// console.log(a)
let max = 0vg
function maxSumPath(node,s){
  if(node===null){
    max = Math.max(s,max)
    // console.log(s)
    return 
  }  

   maxSumPath(node.left,s+node.val)
   maxSumPath(node.right,s+node.val)
}
maxSumPath(a,0)
// console.log({max})
