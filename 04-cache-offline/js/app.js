

if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('/sw.js');
}

// if (window.caches) {
//     // ABRE OU CRIAR UMA "PASTA" DE CACHCES
//     caches.open('teste-01')

//     caches.open('teste-02').then(resp => {
//         caches.delete('teste-02')
//     })

//     // VERIFICA SE EXISTE O ARQUIVO DE CACHES
//     caches.has('teste-03').then(resp => {
//         console.log('o teste-03 existe?:', resp)
//     })

//     caches.open('teste-v1').then(store => {
//         // ADICIONA UM ARUQIVO
//         store.add('index.html')

//         // ADICIONA VÁRIOS ARQUIVOS DE UMA SÓ VEZ
//         store.addAll([
//             'index.html',
//             'css/style.css',
//             'img/main.jpg',
//         ]).then( () => {
//             // store.delete('css/style.css')

//             // TROCA O CONTEÚDO DO ARQUIVO
//             store.put('index.html', new Response('trocou o html!!!'))

//         })
//     })

//     // PROCURA O ARQUIVO DENTRO DO STORE ( DENTRO DO CACHE )
//     caches.match('index.html').then(resp => {
//         console.log('achou a arquivo')
//         console.log(resp)
//         resp.text().then(novo => {
//             console.log('novo')
//             console.log(novo)
//         })
//     })

//     // RETORNA TODOS OS ARQUIVOS DE CACHES
//     caches.keys().then(keys => {
//         console.log('todos os caches')
//         console.log(keys)
//     })
// }