//Enter code here
//Enter code here
function runProgram(input){
    input = input.split("\n")
    let[N,K] = input[0].split(" ").map(Number)
    let arr  = input[1].split(" ").map(Number)
    let x1 = logic(N,K,arr)
    console.log("Index", x1)
     console.log("No.", arr[x1])
    
    
}

function logic(N,K,arr){
    let s = 0
    let e = arr.length-1
    while(s<=e){
        let m = Math.floor(s+(e-s)/2)
        if(arr[m]>arr[m-1] && arr[m]>arr[m+1]){
             return m
        }
        
        else if(arr[m]<arr[m-1] && arr[m]<arr[m+1]){
             return m-1
            
        }
        
        else if(arr[m]>arr[m-1] && arr[m]<arr[m+1]){
              if(arr[m]>arr[0]){
                  s= m+1
              }
        }
        
         else if(arr[m]>arr[m-1] && arr[m]<arr[m+1]){
              if(arr[m]<arr[0]){
                 e = m-1
              }
        }
        
        else if(e-s ===1){
            if(arr[m]>arr[m+1]){
                return m
            }
            else{
                return m+1
            }
        }
        
       
        
    }
    
    console.log("-1")
}

 

if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });

}


 



