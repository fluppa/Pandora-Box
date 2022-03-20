class Card {
  constructor(title, date, tags, background) {
    this.title = title
    this.date = date
    this.tags = tags
    this.background = background
  }
}

let card1 = new Card('tytuł1', 'data', 'tag', 'backgroumd')

let cards = [card1, card1]

export const program_card = () => {
  let newsWrapper = document.querySelector('.news-wrapper')
  const car = new Card('tytuł', 'data', ['tag', 'tag'], 'backgroun')
  for (let card in cards) {
    newsWrapper.innerHTML += `<div class="news-card">
          <div class="info-wrapper">
            <div class="tags">
              <div class="tag" id="wta">WtA</div>
              <div class="tag" id="htr">HtR</div>
            </div>
            <div class="text">
              <p class="title">${cards[card].title}</p>
              <p class="date">${cards[card].date}</p>
            </div>
          </div>
          <div class="background-gradient"></div>
          <img class="background-image" src="resources/news/backgrounds/background_1.png" />
        </div>
      `
  }
}
export default program_card
