
function split(array){
  const halfIdx = Math.ceil((array.length)/2)
  const firstHalf = array.slice(0, halfIdx)
  const secondHalf = array.slice(halfIdx)
  return [firstHalf, secondHalf]
}


const merge = (array) => {
  const arrA = array[0]
  const arrB = array[1]
  return [...arrA, ...arrB]
}

const sorter = (a, b) => {
  if(parseInt(a) < parseInt(b)){
    return [a, b]
  }else{
    return [b, a]
  }
}

function mergeSort(array) {
  if(array.length <= 1) return array;
  if(array.length === 2){
    const splitArr = split(array)
    const sortedArr = sorter(splitArr[0], splitArr[1])
    console.log("merged sortedArr at 29", merge(sortedArr))
    return merge(sortedArr)

  }else{
    const sArr = split(array)
    const arr1 = mergeSort(sArr[0])
    const arr2 = mergeSort(sArr[1])
    let i = 0;
    let j = 0
    let retArr = []
    while (i < arr1.length && j < arr2.length) {

      if(arr1[i] > arr2[j]){
        retArr.push(arr2[j])
        j++
      }else{
        retArr.push(arr1[i])
        i++}

      retArr =  [...retArr]
      console.log("****", retArr)

    }
    if(i >= arr1.length){
      const sliced = arr2.slice(j)
      retArr = [...retArr, ...sliced]
    }else{
      const sliced2 = arr1.slice(i)
      retArr = [...retArr, ...sliced2]
    }
    return retArr
  }

}

