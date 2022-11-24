const nav = document.getElementById('nav');
const body = document.getElementById('body');
const pcard = document.getElementById('portfolio');
const modal = document.getElementById('modal');
const title = document.getElementById('modal-title');
const image = document.getElementById('modal-im');
const longDes = document.getElementById('des');
const live = document.getElementById('live');
const source = document.getElementById('source');
const form = document.getElementById('form_container');
const email = document.getElementById('email');
const error = document.getElementById('error');

const cards = [
  {
    pTitle: 'Tonic',
    image: 'images/cardImg1.png',
    longDes:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    live: 'https://sabimantock.github.io/',
    shortDes:
      'A daily selection of privately personalized reads; no accounts or sign- ups required.',
    source: 'https://github.com/SabiMantock/portfolio_project',
    languages: ['html', 'javascript', 'css'],
    roles: ['Canopy', 'Back End Dev', 2015],
  },
  {
    pTitle: 'Multi-Post Stories',
    image: 'images/cardImg2.png',
    longDes:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    live: 'https://sabimantock.github.io/',
    shortDes:
      'A daily selection of privately personalized reads; no accounts or sign- ups required.',
    source: 'https://github.com/SabiMantock/portfolio_project',
    languages: ['html', 'javascript', 'css'],
    roles: ['Canopy', 'Back End Dev', 2015],
  },
  {
    pTitle: 'Tonic',
    image: 'images/cardImg3.png',
    longDes:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    live: 'https://sabimantock.github.io/',
    shortDes:
      'A daily selection of privately personalized reads; no accounts or sign- ups required.',
    source: 'https://github.com/SabiMantock/portfolio_project',
    languages: ['html', 'javascript', 'css'],
    roles: ['Canopy', 'Back End Dev', 2015],
  },
  {
    pTitle: 'Multi-Post Stories',
    image: 'images/cardImg4.png',
    longDes:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    live: 'https://sabimantock.github.io/',
    shortDes:
      'A daily selection of privately personalized reads; no accounts or sign- ups required.',
    source: 'https://github.com/SabiMantock/portfolio_project',
    languages: ['html', 'javascript', 'css'],
    roles: ['Canopy', 'Back End Dev', 2015],
  },
];

function openMobileMenu() {
  nav.style.display = 'block';
}

function closeMobileMenu() {
  nav.style.display = 'none';
}

openMobileMenu();
closeMobileMenu();

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (email.value !== email.value.toLowerCase()) {
    error.textContent = 'Please the content of the email field has to be in lower case.';
  } else {
    error.textContent = '';
  }
});

// eslint-disable-next-line no-return-assign
cards.map((card, index) => pcard.innerHTML += `<div class="card  rev-${index}">
        <div class="img-container">
          <img src="${card.image}" alt="Tonic" />
        </div>
        <div class="content">
          <div class="project_name">
            <h3 id="title">${card.pTitle}</h3>
          </div>
          <div class="project_info">
            ${card.roles.map((role, idx) => `<div class="company">
              <p>${role}</p>
            </div><img class="dot-${idx}" src="images/dot.png" alt="dot" />`).join('')}
            
          </div>
          <div class="description">
            <p>
             ${card.shortDes}
            </p>
          </div>
          <ul class="languages">
          ${card.languages.map((lang) => `<li class="langu">${lang}</li>`).join('')}
          </ul>
          <div class="button-container">
            <a href="javascript:openModal(${index})" class="btn">See Project</a>
          </div>
        </div>
      </div>
      `);

const openModal = (index) => {
  title.innerHTML = cards[index].pTitle;
  image.src = cards[index].image;
  longDes.innerHTML = cards[index].longDes;
  live.href = cards[index].live;
  source.href = cards[index].source;
  modal.style.display = 'block';
  body.style.overflow = 'hidden';
};

const closeModal = () => {
  modal.style.display = 'none';
  body.style.overflow = 'auto';
};

openModal();
closeModal();