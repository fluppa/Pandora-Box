export const footer = () => {
  document.querySelector('footer').innerHTML = `  <div class="row">
        <img class="logo" src="resources/footerlogo.svg" />
        <div class="sc-wrapper">
          <a href="#"><img class="icon" src="resources/youtube.svg" /></a>
          <a href="#"><img class="icon" src="resources/fbook.svg" /></a>
          <a href="#"><img class="icon" src="resources/spotify.svg" /></a>
          <a href="#"><img class="icon" src="resources/patronite.svg" /></a>
          <a class="patronite-button" href="#">Zostań Patronem</a>
        </div>
      </div>
      <div class="row">
        <span class="copy">℗Copyright Pudło Pandory 2022. All rights reserved.</span>
        <div class="authors">
          <span>Grafika i projekt strony:<strong> Dawid Folgierd</strong></span>
          <span>Realizacja:<strong> Szymon Poszwa</strong></span>
        </div>
      </div>
      <div class="row">
        <div class="sponsors">
          <figure>
            <figcaption>Zdjęcia:</figcaption>
            <img src="resources/unsplashlogo.svg" />
          </figure>
          <figure>
            <figcaption>Licencja i symbole:</figcaption>
            <img src="resources/darkpacklogo.svg" />
          </figure>
          <figure>
            <figcaption>Licencja i symbole:</figcaption>
            <img src="resources/artneologo.svg" />
          </figure>
          <figure>
            <img src="resources/rebellogo.svg" />
          </figure>
          <figure>
            <img src="resources/something.svg" />
          </figure>
        </div>`
}
export default footer
