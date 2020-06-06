const nemo = ['nemo']

const findNemo = (array) => {
  for(let i = 0; i < array.length; i++){
    if(array[i] === 'nemo') console.log('Nemo Found')
  }
}

findNemo(nemo)