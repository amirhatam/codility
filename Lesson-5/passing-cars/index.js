//Solution A, Total score 10%
const solutionA = (A) => {
    let res = 0
    for (let i = 0; i < A.length; i++) {
        if (A[i] === 0 || A[i] === 1) {
            res++
        }
    }

    if (res >= 1000000000) {
        res = -1
    }
    return res
}

console.log(solutionA([0, 1, 0, 1, 1]));