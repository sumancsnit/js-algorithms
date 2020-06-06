const nemo = ['nemo']

const names = new Array(1000).fill('nemo')

const findNemo = (array) => {
  let t0 = performance.now()
  for(let i = 0; i < array.length; i++){
    if(array[i] === 'nemo') console.log('Nemo Found')
  }
  let t1 = performance.now()
console.log(`Call to find nemo took ${t1 - t0} milliseconds` )
}

findNemo(names) // O(n) Liner Time