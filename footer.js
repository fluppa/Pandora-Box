export const footer = () => {
  document.querySelector('footer').innerHTML = `  <div class="row">
        <img class="logo" src="resources/footer/footerlogo.svg" />
        <div class="sc-wrapper">
          <a href="#"><img class="icon" src="resources/global/youtube.svg" /></a>
          <a href="#"><img class="icon" src="resources/global/fbook.svg" /></a>
          <a href="#"><img class="icon" src="resources/global/spotify.svg" /></a>
          <a href="#"><img class="icon" src="resources/global/patronite.svg" /></a>
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
            <img src="resources/footer/unsplashlogo.svg" />
          </figure>
          <figure>
            <figcaption>Licencja i symbole:</figcaption>
            <img src="resources/footer/darkpacklogo.svg" />
          </figure>
          <figure>
            <figcaption>Licencja i symbole:</figcaption>
            <img src="resources/footer/artneologo.svg" />
          </figure>
          <figure>
            <img src="resources/footer/rebellogo.svg" />
          </figure>
          <figure>
            <img src="resources/footer/something.svg" />
          </figure>
        </div>`
}
export default footer
