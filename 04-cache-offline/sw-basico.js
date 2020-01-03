self.addEventListener('fetch', e => {
  // const offlineResponse = new Response(`
  //   Esta aplicação necessita de internet
  // `);
  
  const offlineResponse = new Response(`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Mi PWA</title>
  
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
      <link rel="stylesheet" href="css/style.css">
    </head>
    <body class="container p-3">
      <h1 style="color:red; text-align: center;">Erro de conexão</h1>
    </body>
  </html>
  `, {
    headers: {
      'Content-Type': 'text/html'
    }
  });

  const resp = fetch(e.request).catch(() => offlineResponse)

  e.respondWith(resp);
});