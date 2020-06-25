// Add array element
const addNo = (array) => array.reduce((a, b) => a + b);

addNo([2, 5, 7, 8, 9]);

// array.map(Number) Chnage all element to number

// add array of strings

const addArrayOfString = (array) => array.map(Number).reduce((a, b) => a + b);

addArrayOfString(['2', '6', '8', '9']);
