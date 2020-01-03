function somaUmPromiseRace (num, callback) {

  return new Promise((resolve, reject) => {
    if (num >= 7) {
    reject('valor grande')
  }

    setTimeout(() => {

      resolve(num + 1);
    }, 1000);
  })
}

function somaUmPromiseRaceFast (num, callback) {

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

Promise.race([
  somaUmPromiseRace(5),
  somaUmPromiseRaceFast(5),
  noPromise()
]).then(
  console.log
).catch(console.log)