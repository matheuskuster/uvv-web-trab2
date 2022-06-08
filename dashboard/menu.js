window.addEventListener('load', start);

function getMenuElements() {
  return {
    profileImage: document.querySelector('#profile-img'),
    logoutButton: document.querySelector('#logout-button'),
    welcome: document.querySelector('#welcome'),
  }
}

function start() {
  const menuElements = getMenuElements();

  populateMenu(menuElements);
  menuElements.logoutButton.addEventListener('click', logout);
}

function populateMenu(menuElements) {
  const user = localStorage.getItem('user');

  if (!user) {
    alert('Você precisa estar logada para acessar o dashboard');
    window.location.href = '/';
  }

  const userData = JSON.parse(user);
  const imageUrl = `https://ui-avatars.com/api/?name=${userData.name}&background=ec4899&color=ffffff`

  menuElements.profileImage.src = imageUrl;
  welcome.innerHTML = `Bem-vinda, ${userData.name}`;
}

function logout() {
  localStorage.removeItem('user');
  window.location.href = '/';
}
