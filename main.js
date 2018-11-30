var moviesDiv = document.querySelector('#Movies')
var currentDate = new Date();
var currentMonth = currentDate.getMonth()  + 1;

if (currentMonth <= 6) {
  moviesDiv.innerHTML = `
    <ul>
      <li><a href ="toy.html">Small Soldiers</a></li>
      <br>
      <li><a href ="tammy.html">Tammy and the T-rex</a></li>
      <br>
      <li><a  href="lava.html">The Adventures of Sharkboy and Lavagirl in 3-D</a></li>
   </ul>
  `

} else if (currentMonth >= 7) {
  moviesDiv.innerHTML = `
  <ul>
    <li><a href ="rubber.html">Rubber</a></li>
    <br>
    <li><a href ="mars.html">Mars Attacks</a></li>
    <br>
    <li><a href ="tomato.html">Attack of the Killer Tomatoes</a></li>
 </ul>
  `
}
