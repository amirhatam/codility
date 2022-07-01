function solution(A) {

    var sumRight = A.reduce(function (pv, cv, idx) { return (idx > 0) ? pv + cv : 0; }, 0);
    var sumLeft = 0;
    var maxI = A.length - 1;

    let min = null;

    for (var i = 0; i < maxI; i++) {
        sumLeft += A[i];
        let d = Math.abs(sumLeft - sumRight);
        min = min === null ? d : Math.min(min, d);
        if (i + 1 <= maxI) sumRight -= A[i + 1];
    }

    return min;

}

console.log(solution([3, 1, 2, 4, 3]));