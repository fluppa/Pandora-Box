export const navigation = () => {
  document.querySelector('nav').innerHTML = `<img class="logo" src="resources/nav/navlogo.svg" />
      <ul>
        <li>
          <a href="index.html">Home</a>
        </li>
        <li><a href="about.html">O nas</a></li>
        <li><a href="program.html">Programy</a></li>
        <li><a href="news.html">Aktualności</a></li>
        <li><a href="patrons.html">Patroni</a></li>
        <li><a href="#">Wspieraj</a></li>
      </ul>`
}
export default navigation
