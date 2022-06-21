const rotateArr = (a, k) => {
    let newArr = a
    const arrSome = a.length - 1
    for (let i = 0; i < k; i++) {
        newArr.unshift(newArr[arrSome])
        newArr.pop()
    }
    return newArr

}

console.log(rotateArr([3, 8, 9, 7, 6], 2));