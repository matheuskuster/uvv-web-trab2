window.addEventListener('load', async function() {
  const newHomeButton = document.querySelector('#new-home');
  newHomeButton.addEventListener('click', async function() {
    const response = await fetch('https://refugee-server.herokuapp.com/homes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        },
        body: JSON.stringify({
          userId: JSON.parse(localStorage.getItem('user')).id,
        }),
      });

      if (response.status === 200) {
        window.location.reload();
      } else {
        alert('Erro ao criar nova casa');
      }
  });
});
