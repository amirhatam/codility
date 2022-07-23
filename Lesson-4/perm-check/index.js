// First Solution, Total score: 33 % 
const solutionA = (a) => {
    a.sort()
    let missingNum

    for (let i = 1; i <= a.length; i++) {
        if (a.indexOf(i) == -1) {
            missingNum = 0
        } else {
            missingNum = 1
        }
    }

    return missingNum
}



// Seconde Solution, Total score: 75 % 
const solution = (a) => {
    a.sort()

    for (let i = 1; i <= a.length; i++) {
        if (a.indexOf(i) == -1)
            return 0;
    }
    return 1
}

console.log(solution([4, 1, 3]));