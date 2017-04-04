var myArray = {
    a1 : [1,2,3],
    a2 : [4,5,6],
    a3 : [7,8,9]
}

Object.keys(myArray).map(function(objectKey, index) {
    myArray[objectKey] = []
});

console.log(myArray.a1)
