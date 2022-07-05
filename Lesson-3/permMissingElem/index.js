//First Solution, Total score: 50 % 
const solution = (arr) => {
    let newArr = arr.sort((a, b) => a - b)

    for (let i = 1; i <= arr.length; i++) {
        if (newArr[i - 1] !== i) {
            return i;
        }
    }
}
// console.log(solution([2, 3, 1, 5]));


//Second Solution, Total score: 80 % 
function solutionTwo(A) {
    let len = A.length

    // len <= 1 ? 1 : null
    if (len <= 1) return 1

    let max = len + 1
    let total = A.reduce((x, y) => x + y)

    let missTotal = total - max
    let actTotal = (len * (len + 1) / 2)
    let o = actTotal - missTotal

    console.log(o);


}

solutionTwo([2, 3, 1, 5])
// console.log(solutionTwo([2, 3, 1, 5]));
