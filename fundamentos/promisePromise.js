function somaUmPromise (num, callback) {

  const promise = new Promise((resolve, reject) => {
    if (num >= 7) {
    reject('valor grande')
  }

    setTimeout(() => {

      resolve(num + 1);
    }, 1000);
  })

  return promise;
}

// somaUmPromise(5).then(resp => {
//   somaUmPromise(resp).then(resp2 => {
//     somaUmPromise(resp2).then(resp3 => {
//       console.log(resp3)
//     })
//   })
// })

// somaUmPromise(5).then(resp => {
//   return somaUmPromise(resp);
// }).then(resp => {
//   return somaUmPromise(resp);
// }).then(resp => {
//   console.log(resp)
// })

// somaUmPromise(5)
// .then(somaUmPromise)
// .then(somaUmPromise)
// .then(resp => {
//   console.log(resp)
// }).catch(err => {
//   console.log(err)
// })

somaUmPromise(5)
.then(somaUmPromise)
.then(somaUmPromise)
.then(console.log)
.catch(console.log)
