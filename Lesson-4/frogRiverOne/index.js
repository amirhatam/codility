// First Solution, Total score: 18 % 
const solution = (X, A) => {
    let res = -1
    A.map((e, i) => e === X ? res = i : null)

    return res
}


console.log(solution(5, [1, 3, 1, 4, 2, 3, 5, 4]));