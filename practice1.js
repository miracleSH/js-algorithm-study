let input = 'apple'
let result = {}

for(let i = 0; i < input.length; i++){
  if(result[input[i]] > 0){
    result[input[i]]++
  }else{
    result[input[i]] = 1
  }
}

console.log(result)
