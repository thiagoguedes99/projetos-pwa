

// Detectar si podemos usar Service Workers
if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('/sw.js').then(register => {

        setTimeout(() => {
            register.sync.register('nome da tag');
            console.log('enviou a tag');
        }, 8000)


        Notification.requestPermission().then(result => {
            console.log('resultado de permission')
            console.log(result)

            register.showNotification('nova notificação')
        })
    })
}

fetch('https://reqres.in/api/users?page=2')
.then(resp => resp.json())
.then(respObj => console.log(respObj));
