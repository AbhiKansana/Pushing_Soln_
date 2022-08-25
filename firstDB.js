
let arr = [5, 1, 4, 12, 3]
let N = arr.length
let max = -Infinity
function fun(n, sum) {
  // console.log({n},sum)
  max = Math.max(max,sum)
  if (n >= N) {
    return
  }


  for (let i = n + 2; i < N; i++) {
    fun(i, sum + arr[i])
  }

}

fun(-2, 0)
console.log(max)
