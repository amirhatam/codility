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
// console.log(solutionA([0, 1, 0, 1, 1, 2]));


//Solution B, Total score 100%
const solutionB = (A) => {

    let counter = 0;
    let zeroCount = 0;

    let i = A.indexOf(0);

    for (i; i < A.length; i++) {
        if (A[i] === 0)
            zeroCount++;
        else if (A[i] === 1) {
            counter += zeroCount
            if (counter > 1000000000)
                return -1;
        }
    }

    return counter;
}

console.log(solutionB([0, 1, 0, 1, 1]));

