// Menu Button

(() => {
  const menu = document.querySelector('#menu');
  const body = document.querySelector('body');
  menu.addEventListener('click', () => {
    const parent = document.createElement('div');
    parent.classList.add('nav-menu', 'mobile');

    parent.innerHTML = ` <div class="menu-header">
    <img src="assets/icons/white-logo.svg">
    <button id="closeMenu" type="button" class="closeButton"><img src="assets/icons/close.svg" alt=""></button>
    </div>
    <ul class="nav menu-links">
    <li class="link">
    <a rel="noopener" href="index.html"> Home </a>
    </li>
    <li class="link">
    <a rel="noopener" href="about.html"> About </a>
    </li>
    <li class="link">
    <a rel="noopener" href="index.html#main-program"> Program </a>
    </li>
    <li class="link">
    <a rel="noopener" href="index.html#main-program"> Join </a>
    </li>
    <li class="link">
    <a rel="noopener" href="#partner"> Sponsor </a>
    </li>
    <li class="link">
    <a rel="noopener" href="#"> News </a>
    </li>
    <li class="link">
    <button type="button" class="interaction interaction-alternative">CC Campaing</button>
    </li>
    </ul>`;

    body.appendChild(parent);
    const closeButton = document.querySelector('#closeMenu');
    closeButton.addEventListener('click', () => {
      body.removeChild(parent);
    });

    const links = document.querySelectorAll('.link');
    links.forEach((link) => {
      link.addEventListener('click', () => {
        body.removeChild(parent);
      });
    });
  });

  function professor(name, background, longDescription, image) {
    return {
      name,
      background,
      longDescription,
      image,
    };
  }

  // Professors

  const professors = [
    professor('Ranchoddas Shamalad Chanchad',
      'Berkman Professor of Institute of High Advanced Meaningful Development',
      `Chanchad lectures go around making programs that have a meaningful impact in
    human lifes, creating solutions for the most important problems`,
      'professor-1.jpg'),
    professor('Emilia Titor',
      'Tech leader of CC Bootcamp Summer Foundation',
      `Our tech leader has had the dream of providing developing skills to the entire world ever since she 
    graduated from Hardvar. Delighted by the wonders of programming, and looking forward to a better future,
    she founded the CC Bootcamp Summer in 2015`,
      'professor-2.jpg'),
    professor('David Spilbierg',
      'Recognized developer of the most inteligent IA of the MIT',
      `Spilbierg is a genius. Before graduating from university, his investigation around AI behaviour was already published 
    in Science journal, changing the way we had seen AI for long and ever, resulting in a whole bunch of new researching`,
      'professor-3.jpg'),
    professor('Camilo Torres',
      '',
      `Camilo is a Software Engineer who has worked in a new, Industry 4.0, Tech university.
    His main objective is to create a new learning structure that his students can use to get the most of today's most 
    advanced technology, looking to "Revolutionate" the entire world`,
      'professor-4.jpg'),
    professor('Serana Titor',
      'Developer in charge of the Google API project for 2022',
      `The Google API project is one of the most advanced software developed, providing a set of tools that will change the way 
    software is made. Any of that would be possible without the guide of Serana Titor`,
      'professor-5.jpg'),
    professor('Hashimoto Kurasiki',
      'Berkman Professor of Tokyo Institute of Technology for the past 5 years',
      `Kurasiki is a young researcher recognized among the highest scientific community as "The Einstein of Software", 
    and the youngest professor of the most advanced institute of tech in Japan`,
      'professor-6.jpg'),
  ];

  for (let i = 0; i < 6; i += 1) {
    const currentProfessor = professors[i];
    currentProfessor.id = `professor-${i}`;
  }

  const professorsContainer = document.querySelector('.grid-container');
  const mediaScreen = window.matchMedia('(min-width: 1000px)');

  function renderProfessors() {
    professors.forEach((professorObj) => {
      // If it has already been rendered, skip it
      if (!document.querySelector(`#${professorObj.id}`)) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('id', professorObj.id);
        professorsContainer.appendChild(card);

        const image = `
        <div class="professor-container">
          <div class="image-container">
            <img src="assets/images/${professorObj.image}" alt="">
          </div>
          <span class="box"></span>
        </div>`;

        card.innerHTML = image;

        const cardInfo = document.createElement('div');
        cardInfo.classList.add('card-info');
        card.appendChild(cardInfo);

        cardInfo.innerHTML = `<h3>${professorObj.name}</h3>`;

        if (professorObj.background) {
          cardInfo.innerHTML += `<h4>${professorObj.background}</h4>`;
        }

        const description = professorObj.longDescription;
        const shortDescription = description.length > 150 ? `${description.substring(0, 150)} ...` : description;
        professorObj.shortDescription = shortDescription;

        cardInfo.innerHTML += `
        <hr class="line line-small line-dark">
        <p id="shortDescription" class="mobile">${shortDescription}</p>
        <p id="longDescription" class="desktop">${description}</p>
        `;

        const shortDescriptionELement = cardInfo.querySelector('#shortDescription');
        const longDescriptionElement = cardInfo.querySelector('#longDescription');

        const toggleDescription = () => {
          shortDescriptionELement.classList.toggle('mobile');
          shortDescriptionELement.classList.toggle('desktop');
          longDescriptionElement.classList.toggle('desktop');
          longDescriptionElement.classList.toggle('mobile');
          longDescriptionElement.addEventListener('click', toggleDescription);
        };

        shortDescriptionELement.addEventListener('click', toggleDescription);

        // Return to normal state on screen change
        mediaScreen.addEventListener('change', () => {
          if (mediaScreen.matches) {
            shortDescriptionELement.classList.add('mobile');
            shortDescriptionELement.classList.remove('desktop');
            longDescriptionElement.classList.add('desktop');
            longDescriptionElement.classList.remove('mobile');
            longDescriptionElement.removeEventListener('click', toggleDescription);
          }
        });
      }
    });
  }
  if (professorsContainer) { renderProfessors(); }
})();
