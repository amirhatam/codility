const unique = (arr) => {

    return arr.filter(e => arr.indexOf(e) === arr.lastIndexOf(e));
}

console.log(unique([9, 3, 9, 3, 9, 7, 9]));
