// 배열이 두개 주어질 때 한 배열의 각 인자의 제곱한 수가 다른 배열에 모두 있으면 참, 아니면 거짓을 반환
// ex) same([1,2,3], [1,9,4] => true) same([1,2,1], [1,4,4]=> false)

function same(aList, bList){
  let squarList = aList.map(it => it*it).sort((a, b) => a - b)
  let targetList = bList.sort((a, b) => a - b)

  console.log(squarList)
  console.log(targetList)
  let result = true
  for(let i = 0; i < squarList.langth; i++){
    if(squarList[i] !== targetList[i]){
      result = false
      break
    }
  }

  return result
}

console.log(same([1, 2, 3], [1, 9]))