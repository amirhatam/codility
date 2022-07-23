// First Solution, Total score: 33 % 
const solution = (a) => {
    a.sort()
    let missingNum = 1

    for (let i = 1; i <= a.length; i++) {
        if (a.indexOf(i) == -1) {
            missingNum = missingNum - 1
        }
    }

    return missingNum
}

console.log(solution([4, 1, 3]));