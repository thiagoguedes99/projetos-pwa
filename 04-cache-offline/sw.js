const pathCahce = 'cache-v1'
const cacheStatico = 'statico-v1'
const cacheDinamico = 'dinamico-v1'
const cacheImutavel = 'imutavel-v1'

// TAMANHO DE CACHE NO CHROME É DE 50MG

function limparCache(cacheName, numeroItens) {
  caches.open(cacheName).then( cache => {
    return cache.keys().then(keys => {
      console.log(keys)

      if (keys.length > numeroItens) {
        cache.delete(keys[0]).then(limparCache(cacheName, numeroItens))
      }
    })
  })
}




// self.addEventListener('install', e => {
//     const imutavel = caches.open(cacheImutavel).then(cache => {
//       return cache.addAll([
//         'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
//       ])
//     })

//     const statico = caches.open(cacheStatico).then(cache => {
//       return cache.addAll([
//         '/',
//         'index.html',
//         'css/style.css',
//         'img/main.jpg',
//         'js/app.js'
//       ])
//     })

//     e.waitUntil(Promise.all([imutavel, statico]))
// });

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheImutavel).then(cache => {
      return cache.addAll([
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
      ])
    }),

    caches.open(cacheStatico).then(cache => {
      return cache.addAll([
        '/',
        'index.html',
        'css/style.css',
        'img/main.jpg',
        'img/no-img.jpg',
        'js/app.js'
      ])
    })

  )
});




self.addEventListener('fetch', e => {
  // --------------------------------------------------------------------------------------
  // // ESTRATÉGIA DE CACHE ONLY
  // e.respondWith(caches.match(e.request));
  // --------------------------------------------------------------------------------------




  // --------------------------------------------------------------------------------------
  // // (OFFLINE FIRST) - CACHE E DEPOIS NETWORK
  // const response = caches.match(e.request).then(resp => {
  //   if (resp) return resp

  //   console.log(`não tem o arquivo: ${e.request.url} em cache`)

  //   return fetch(e.request).then(newresp => {
      
  //     caches.open(cacheDinamico).then(cache => {
  //       cache.put(e.request, newresp)
  //       // limparCache(cacheDinamico, 5)
  //     });

  //     return newresp.clone();
  //   });

  // });

  // e.respondWith(response);
  // --------------------------------------------------------------------------------------





  // --------------------------------------------------------------------------------------
  // // (NETWORK FIRST) - NETWORK E DEPOIS CACHE
  // const response = fetch(e.request).then(res => {

  //   if (!res) return caches.match(e.request);

  //   caches.open(cacheDinamico).then(cache => {
  //     cache.put(e.request, res)
  //     // limparCache(cacheDinamico, 5)
  //   });

  //   return res.clone();

  // }).catch(err => {
  //   return caches.match(e.request);
  // })
  // --------------------------------------------------------------------------------------



  // --------------------------------------------------------------------------------------
  // (CACHE FIRST WITH NETWORK) - CACHE E DEPOIS NETWORK COM UPDATE DOS DADOS (SEMPRE FICARÁ COM UM PASSO ATRÁS DO ATUAL)
  const response = caches.open(cacheStatico).then(cache => {
    fetch(e.request).then(newResp => {
      cache.put(e.request, newResp);
    });

    if (e.request.url.includes('.jpg')) {
      return caches.match('/img/no-img.jpg')
      // return fetch('/img/no-img.jpg')
    } else {
      return caches.match(e.request)
    }
  });
  // --------------------------------------------------------------------------------------


  

  e.respondWith(response)
})