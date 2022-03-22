export default function programCard() {
  let programCards = document.querySelectorAll('.series-card')
  for (let card of programCards) {
    card.innerHTML = `<img class="series-background" src="resources/programs/programs_cards/card-1.jpg" />
              <div class="background-mask"></div>
              <div class="background-gradient-bottom"></div>
              <p class="rpg-title">Changeling: The Lost</p>
              <p class="series-title">pstrokacizna</p>`
  }
}
