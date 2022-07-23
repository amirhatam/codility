// First Solution, Total score: 18 % 
const solutionA = (X, A) => {
    let res = -1
    A.map((e, i) => e === X ? res = i : null)

    return res
}

// Seconde Solution, Total score: 72 % 
function solutionB(X, A) {
    let leaves = []
    let res = -1

    for (let i = 0; i < A.length; i++) {
        if (typeof leaves[A[i]] == 'undefined') {
            leaves[A[i]] = i;
        }
    }

    if (leaves.length <= X) {
        return -1
    }

    for (let i = 1; i <= X; i++) {
        if (typeof leaves[A[i]] == 'undefined') {
            return -1;
        } else {
            res = Math.max(res, leaves[i]);
        }
    }
    return res
}

// solutionB(5, [1, 3, 1, 4, 2, 3, 5, 4])
console.log(solutionB(5, [1, 3, 1, 4, 2, 3, 5, 4]));