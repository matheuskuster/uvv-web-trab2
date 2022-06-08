const signUpForm = document.querySelector('#signup');

window.addEventListener('load', () => {
  signUpForm.addEventListener('submit', signUp);
});

async function signUp(e) {
  e.preventDefault();
  const formData = new FormData(signUpForm);
  const user = {
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
    passwordConfirmation: formData.get('repeat_password'),
    type: formData.get('type')
  };

  if (user.password !== user.passwordConfirmation) {
    alert('Senhas não batem');
    return;
  }

  signUpForm.querySelector('button').disabled = true;

  const response = await fetch('https://refugee-server.herokuapp.com/signup', {
    method: 'POST',
    body: JSON.stringify({
      email: user.email,
      password: user.password,
      name: user.name,
      type: user.type
    }),
    headers: {
      'Content-Type': 'application/json'
    },
  });

  signUpForm.querySelector('button').disabled = false;

  if (response.status === 200) {
    const data = await response.json();
    localStorage.setItem('user', JSON.stringify(data));
    if (data.type === 'refugee') {
      window.location.href = '/uvv-web-trab2/dashboard/refugee';
    } else {
      window.location.href = '/uvv-web-trab2/dashboard/anfitria';
    }
  } else {
    const data = await response.json();
    alert(data.error);
  }
}
