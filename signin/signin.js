const signUpForm = document.querySelector('#signin');
signUpForm.addEventListener('submit', signIn);

async function signIn(e) {
  e.preventDefault();
  const formData = new FormData(signUpForm);
  const user = {
    email: formData.get('email'),
    password: formData.get('password'),
    type: formData.get('type')
  };

  signUpForm.querySelector('button').disabled = true;

  const response = await fetch('https://refugee-server.herokuapp.com/signin', {
    method: 'POST',
    body: JSON.stringify({
      email: user.email,
      password: user.password,
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
