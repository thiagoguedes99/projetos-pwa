const request = new XMLHttpRequest();

request.open('GET', 'https://reqres.in/api/users', true);
request.send(null);

request.onreadystatechange = (state) => {
  if (request.readyState === 4) {
    const resp = request.response;
    const respObj = JSON.parse(resp);

    console.log(respObj)
    console.log(respObj.page)
    console.log(respObj.data)
  }
}