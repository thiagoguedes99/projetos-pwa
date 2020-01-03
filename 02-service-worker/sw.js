self.addEventListener('fetch', e => {
  if (e.request.url.includes('style.css')) {
    // e.respondWith(null)

    const resp = new Response(`
      body {
        background-color: red !important;
        color: pink;
      }
    `, {
      headers: {
        'Content-Type': 'text/css'
      }
    });

    // e.respondWith(resp)

    e.respondWith(fetch('css/style.1.css'))
  }

  console.log('-------- inicio dos pedidos ----------')
  console.log(e)
  console.log(e.request)
  console.log(e.request.url)
  console.log('-------- fim dos pedidos ----------')
  console.log('')
  console.log('')
  
  // descrição
  /**
   * e.request.url.includes
   * 
   * e -> evento de request (obj para criar a request)
   * e.request -> todo o objeto para requisição http (request / response)
   * e.request.url -> url para onde fez a request (back-end - API) 
   */


   /**
    * formas de interceptar ou retornar algo diferente que o request
    */

    if (e.request.url.includes('.jpg')) {
      console.log('FOI AQUIIIIIII')


      // trocar o conteúdo
      const foto = fetch('img/main-patas-arriba.jpg');
      // const foto = fetch(e.request.url);
      // const foto = fetch(e.request);



      e.respondWith(foto)
      // e.respondWith(resp)
    }


    else {
      e.respondWith(fetch(e.request))
    }
})