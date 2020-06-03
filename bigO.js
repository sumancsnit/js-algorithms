const names = ['nemo']

const findNemo = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') console.log('nemo found')
  }
}

findNemo(names)