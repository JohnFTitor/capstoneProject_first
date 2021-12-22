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
    <a rel="noopener" href="#"> Join </a>
    </li>
    <li class="link">
    <a rel="noopener" href="#"> Sponsor </a>
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
})();