
// const CACHE_NAME = 'cache-1';
const CACHE_STATIC_NAME  = 'static-v9';
const CACHE_DYNAMIC_NAME = 'dynamic-v1';
const CACHE_INMUTABLE_NAME = 'inmutable-v1';

const CACHE_DYNAMIC_LIMIT = 50;

// const paths = './pages/*'

const staticFileGlobs = [
  '/pages/**/*.{html,js,css}'
]

self.addEventListener('install', e => {

  const cacheProm = caches.open( CACHE_STATIC_NAME )
      .then( cache => {

          // return cache.addAll([
          //     '/',
          //     '/index.html',
          //     '/css/style.css',
          //     '/img/main.jpg',
          //     '/js/app.js',
          //     '/img/no-img.jpg',
          //     './pages/offline.html'
          // ]);

          return cache.addAll([
              '/',
              staticFileGlobs
          ]);

      
      });

  const cacheInmutable = caches.open( CACHE_INMUTABLE_NAME )
          .then( cache => cache.add('https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'));


  e.waitUntil( Promise.all([cacheProm, cacheInmutable]) );

});

self.addEventListener('fetch', e =>{

// 2- Cache with Network Fallback
const respuesta = caches.match( e.request )
  .then( res => {

    if ( res ) return res;

    // No existe el archivo
    // tengo que ir a la web
    console.log('No existe', e.request.url );

    return fetch( e.request ).then( newResp => {

    //     caches.open( CACHE_DYNAMIC_NAME )
    //         .then( cache => {
    //             cache.put( e.request, newResp );
    //             limpiarCache( CACHE_DYNAMIC_NAME, 50 );
    //         });

        return newResp.clone();
    });

  })
  .catch((error) => {

    return caches.match('/pages/offline.html');
  });

  e.respondWith(respuesta);
});

self.addEventListener('activate', e => {
  e.waitUntil(
    // caches.keys().then(keys => keys.forEach(key => key !== CACHE_STATIC_NAME && key.includes('static') && caches.delete(key)))

    caches.keys().then(keys =>
      keys.forEach(key =>
        (key !== CACHE_STATIC_NAME && key.includes('static')) && caches.delete(key)
      )
    )

  );   
});
