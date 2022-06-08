window.addEventListener('load', async function() {
  const response = await fetch('https://refugee-server.herokuapp.com/homes');
  const homes = await response.json();

  const { id } = JSON.parse(localStorage.getItem('user'));
  const myHomes = homes.filter(home => home.user?.id === id);
  const homeList = document.querySelector('.homeList');

  myHomes.forEach(home => {
    homeList.innerHTML += generateHomeHTML(home);
  });
});

function generateHomeHTML(home) {
  const { bathrooms, imageUrl, name, parking, rooms, user } = home;

  return `
    <div class="max-w-screen-md mx-auto mt-4">
      <a
        class="block p-4 rounded-lg shadow-sm shadow-pink-100"
      >
        <img
          alt="${name}"
          src="${imageUrl}"
          class="object-cover w-full h-56 rounded-md"
        />

        <div class="mt-2">
          <dl>
            <div>
              <dt class="sr-only">
                Address
              </dt>

              <dd class="font-medium">
              ${name}
              </dd>
            </div>
          </dl>

          <dl class="flex items-center mt-6 space-x-8 text-xs">
            <div class="sm:inline-flex sm:items-center sm:shrink-0">
              <svg
                class="w-4 h-4 text-pink-700"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
              </svg>

              <div class="sm:ml-3 mt-1.5 sm:mt-0">
                <dt class="text-gray-500">
                  Estacionamento
                </dt>

                <dd class="font-medium">
                  ${parking} vagas
                </dd>
              </div>
            </div>

            <div class="sm:inline-flex sm:items-center sm:shrink-0">
              <svg
                class="w-4 h-4 text-pink-700"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>

              <div class="sm:ml-3 mt-1.5 sm:mt-0">
                <dt class="text-gray-500">
                  Banheiros
                </dt>

                <dd class="font-medium">
                  ${bathrooms} livres
                </dd>
              </div>
            </div>

            <div class="sm:inline-flex sm:items-center sm:shrink-0">
              <svg
                class="w-4 h-4 text-pink-700"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>

              <div class="sm:ml-3 mt-1.5 sm:mt-0">
                <dt class="text-gray-500">
                  Quartos
                </dt>

                <dd class="font-medium">
                  ${rooms} livres
                </dd>
              </div>
            </div>

            <div class="sm:inline-flex sm:items-center sm:shrink-0">
              <div class="text-pink-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>

              <div class="sm:ml-3 mt-1.5 sm:mt-0">
                <dt class="text-gray-500">
                  Anfitriã
                </dt>

                <dd class="font-medium">
                  ${user.name}
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </a>
    </div>
  `
}
