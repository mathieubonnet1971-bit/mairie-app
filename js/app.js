if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log('SW enregistré'))
    .catch(err => console.log('SW erreur:', err));
}
