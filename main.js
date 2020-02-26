const arr = [1,3,4,5,8,9];

const newArr = arr.map((item, index) => {
    return item + index; 
})

console.log(newArr);
