function getHeader(logo) {
  return `
      <header>
      <div class="banner">
        <a href="./index.html">
          <img src="./assets/images/${logo}" alt="A game controller joystick" />
        </a>
        <h1 id="page-title">About</h1>
      </div>
      <nav>
        <ul>
          <li>
            <a href="./index.html">Home</a>
          </li>
          <li>
            <a href="./portfolio.html">Portfolio</a>
          </li>
          <li>
            <a href="./about.html">About</a>
          </li>
          <li>
            <a href="./resume.html" target="_blank">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  `;
}
