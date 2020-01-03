
// Ciclo de vida del SW

self.addEventListener('install', e => {
  // download de assets
  // create caches

  console.log(e)
  console.log('instalando sw!!!')

  const resp = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('feito as instalações...');
      
      // ATIVA IMEDIATAMENTA O SW
      self.skipWaiting();
      
      resolve();
    }, 5000)
  });


  // não é mais necessário!!!!
  e.waitUntil(resp)
});




self.addEventListener('activate', e => {
  //  delete old caches

  console.log('activando sw 2')
});




self.addEventListener('fetch', e => {
  if (e.request.url.includes('/api/users')) {
    const resp = new Response(`
    {
      "data": [
        {
            "id": 4000,
            "email": "oioi.holt@reqres.in",
            "first_name": "thiago",
            "last_name": "guedes",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
        }
      ]
    }
    `, {
        headers: {
        'Content-Type': 'text/json'
      }
    })

    e.respondWith(resp)
  }
});


// SYNC: quando recuperamos a conexão com a internet
// PS: só está funcionando no chrome, verificar no "can i use" o syncmanager
self.addEventListener('sync', e => {
  console.log('foi o sync')
  console.log(e.tag)
  console.log(e)
});




// PUSH: para enviar notificações
self.addEventListener('push', e => {

  console.log('notificação recebida aqui!!!!')

})