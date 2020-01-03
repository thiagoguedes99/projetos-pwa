
// GET
fetch('https://reqres.in/api/users')
.then(resp => resp.json())
.then(respObj => {
  console.log(respObj)
  console.log(respObj.page)
  console.log(respObj.data)
})



const usuario = {
  name: 'thiago',
  age: 100
}

// POST
fetch('https://reqres.in/api/users', {
  method: 'POST',
  Headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(usuario)
})
.then(resp => resp.json())
.then(console.log)
.catch(console.log)


const tagImage = document.querySelector('img')
// image
fetch('le_o.jpg')
.then(resp => resp.blob())
.then(image => {
  const img = URL.createObjectURL(image)
  
  tagImage.src = img
})




// GET clone
fetch('https://reqres.in/api/users/1')
.then(resp => {
  resp.clone().json().then(resp => {
    console.log(resp)
  })
  
  resp.json().then(resp => {
    console.log(resp)
  })
})


// GET error
fetch('https://reqres.in/api/users/100000')
.then(resp => {
  if (resp.ok) {
    return resp.json()
  } else {
    throw new Error('erro na casa dos 400')
  }
})
.then(console.log)
.catch(err => {
  console.log('error no catch')
  console.log(err)
})


// get html
fetch('not-found.html')
.then(resp => resp.text())
.then(html => {
  const body = document.querySelector('body');
  body.innerHTML = html
})
.catch(err => {
  console.log('erro no processo')
  console.log(err)
})