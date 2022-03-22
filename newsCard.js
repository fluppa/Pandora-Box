export const newsCard = () => {
  let cards = document.querySelectorAll('.news-card')
  for (const card of cards) {
    card.innerHTML = `<div class="info-wrapper">
            <div class="tags">
              <div class="tag" id="wta">WtA</div>
              <div class="tag" id="htr">HtR</div>
            </div>
            <div class="text">
              <p class="title">Plemię Chodzący po szkle a mafia</p>
              <p class="date">19.02.2022, 10:45</p>
            </div>
          </div>
          <div class="background-wrapper">
            <div class="background-mask"></div>
            <img class="background-image" src="resources/news/backgrounds/background_1.png" />
            <div class="background-gradient"></div>
          </div>`
  }
}
export default newsCard
