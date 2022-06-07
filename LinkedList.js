



let arr=[]
const Node = class {
  constructor(nodeData, next = null) {
    this.data = nodeData;
    this.next = next;
  }
};


class LinkedList {
  constructor() {
    this.head = null,
    this.size = 0
  }


  insertFirst (data){
     this.head  = new Node(data,this.head)
     this.size++
    
  }


  
  print(){
    let current = this.head
    while(current){
       console.log(current.data)
      arr.push(current.data)
       current = current.next
       
    }
    
  }


  insertLast(data){
    let obj = new Node(data)
    if(this.head === null){
       this.head = obj
    }
    else{
      let cur = this.head
      while(cur.next){
         cur = cur.next
      }
      cur.next = obj
    }
    this.size++
  }


  insertAt(data,index){
    
   if(index<0 && index>this.size){
     return
   }
    
    if(index===0){
       this.insertFirst(data)
      return
    }
    if(index===this.size){
       this.insertLast(data)
      return
    }
    

      
     const node = new Node(data)
    
     let current,previous;
     current = this.head
     let count = 0
     while(count<index){
       previous = current
       current  = current.next
       count++
     }
    node.next = current
    previous.next = node
    this.size++
  }

  
}



const ll = new LinkedList
ll.insertFirst(8)
ll.insertFirst(9)
ll.insertFirst(10)
ll.insertLast(7)
ll.insertAt(25,3)



console.log(ll.print())
console.log("size",ll.size)
console.log(arr)