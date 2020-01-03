// if ('serviceWorker' in navigator) {
//   console.log('podemos usar o sw')
// }

if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/sw.js');
}