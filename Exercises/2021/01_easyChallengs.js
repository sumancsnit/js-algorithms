/* eslint-disable no-unused-vars */
// 01 sum numbers
const sum = (...args) => args.reduce((accu, ele) => accu + ele);

// 02 search substring from string

const matchString = (string, subString) => string.includes(subString);

// 03 find nemo 

const nemo = ['nemo'];

const findNemo = (array) => {
  for(let i = 0; i < array.length; i++){
    if(array[i] === 'nemo'){
      console.log('nemo found')
    }
  }
}

findNemo(nemo)
