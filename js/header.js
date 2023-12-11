function getHeader(logo, pageName) {
  return `
      <header>
      <div class="banner">
        <a href="./index.html">
          <img src="./assets/images/${logo}" alt="A game controller joystick" />
        </a>
        <h1 id="page-title">${pageName}</h1>
      </div>
      <nav>
        <ul>
          <li>
            <a href="./home.html">Home</a>
          </li>
          <li>
            <a href="./about.html">About</a>
          </li>
          <li>
            <a href="./portfolio.html">Portfolio</a>
          </li>
          <li>
            <a href="./gallery.html" target="_blank">Gallery</a>
          </li>
          <li>
            <a href="./resume.html" target="_blank">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  `;
}
