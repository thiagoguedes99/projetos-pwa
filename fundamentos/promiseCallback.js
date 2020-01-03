function somaUmCallback (num, callback) {
  if (num >= 7) {
    callback('valor grande')
    return
  }
  setTimeout(() => {

    callback(null, num + 1);
  }, 1000);
}

somaUmCallback(5, function(error, valor) {
  if (error) {
    console.log('deu erro')
    return
  }

  somaUmCallback(valor, function(error, valor2) {
    if (error) {
      console.log('deu erro')
      return
    }

    somaUmCallback(valor2, function(error, valor3) {
      if (error) {
        console.log('deu erro')
        return
      }

      console.log(valor3)
    })
  })
})