## Trabalho 2 de Desenvolvimento Web - UVV
**Aluno:** Matheus Kuster Rosa <br/>
**Turma:** CC2M

<hr />

### Objetivo
O objetivo do site é ser um protótipo funcional de um site de ajuda a refugiadas. As usuárias anfitriãs podem criar moradias para hospedar refugiadas.

### Como funciona
A aplicação tem basicamente três telas.
- Home: Apresentação da ONG e do objetivo da plataforma.
- Login/Cadastro: Essa página é dividida em 4, já que cada tipo de usuária tem essa opção.
- Dashboard: Para a refugiada, será mostrada todas as cadas possíveis para se hospedar. Para a anfitriã vai mostrar as casas cadastradas por ela.

Sempre que é criado uma usuária anfitriã, uma moradia é criada junto e relacionada a ela. Além disso, as anfitriãs logadas podem criar novas moradias aleatórias. Essas moradias serão refletidas na página das refugiadas.

Por ser um protótipo, as informações são salvas em memória e, por ter hospedado o servidor no [Heroku](https://heroku.com), elas serão perdidas a cada 30 minutos sem utilização da aplicação.

### Tecnologias utilizadas
Este projeto utiliza apenas HTML, JS e CSS no frontend. Foi utilizada uma biblioteca de classes CSS - [Tailwind](https://tailwindcss.com).

No servidor, foi utilizado o framework Express para criação simplificada das rotas.

### O que foi feito em JavaScript
O servidor foi feito em JavaScript. O que inclui:
- Criação de rotas
- Armazenamento de informações em memória
- Utilização da API do Unsplash
- Criação de um servidor ouvindo requisições em porta designada.

Além disso, no Frontend, algumas funcionalidades foram criadas com JavaScript:
- Controle de sessão por LocalStorage
- Redirecionamento de páginas
- Validação de cadastro e login
- Requisições HTTP para a API criada afim de criar e recuperar dados
- Criação dinâmica de páginas a partir dos dados recuperados da API
- Login e cadastro
