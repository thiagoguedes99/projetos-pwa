function somaUmPromiseAll (num, callback) {

  return new Promise((resolve, reject) => {
    if (num >= 7) {
    reject('valor grande')
  }

    setTimeout(() => {

      resolve(num + 1);
    }, 1000);
  })
}

function somaUmPromiseAllFast (num, callback) {

  return new Promise((resolve, reject) => {
    if (num >= 7) {
    reject('valor grande')
  }

    setTimeout(() => {

      resolve(num + 1);
    }, 500);
  })
}

function noPromise() {
  return true
}

Promise.all([
  somaUmPromiseAll(5),
  somaUmPromiseAllFast(5),
  noPromise()
]).then(resps => {
  console.log(resps)
}).catch(console.log)