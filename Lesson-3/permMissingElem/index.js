//First Solution, Total score: 50 % 
const solution = (arr) => {
    let newArr = arr.sort((a, b) => a - b)

    for (let i = 1; i <= arr.length; i++) {
        if (newArr[i - 1] !== i) {
            return i;
        }
    }
}

console.log(solution([2, 3, 1, 5]));