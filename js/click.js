'use strict';

const favouritList = document.querySelector(".favourit");
console.log(favouritList);
// document znaczy, że szuka w całym dokumencie
// querySelector szuka CSSowego selektora lub taga HTML, !!ZNAJDZIE PIERWSZY W DOKUMENCIE!!
// stała favouritList odnosi sie teraz do całego elementu znalezionego przez querySelector

const items = favouritList.querySelectorAll("li");
console.log(items);
//przeszuka stałą favouriteList w poszukiwaniu tagów HTML lub selektorów CSS
//stała items bedzie sie teraz odnosicdo elementów <li></li> zawartych w stałej favouritList

const clickItemHandler = function () {
  //Tworzymy stała clickItemHandler i zapisuje w niej funkcje która bedzie sie wykonywać po kliknięciu
  //w  wybrany element(item) - patrz na dole pliku.

  const clickedElement = this;
  console.log(this);
  //Tworzymy stałą clickedElement i przypisujemy jej wartość this
  //This jest wbudowaną funkcją, robimy to tylko celem uniknięcia chaosu.
  //W naszym przypadku nasz this, bedzie nas kierował na ten konkretny, kliknięty element.
  //!!CZEMU KLIKNIĘTY? Patrz pętla na dole!!

  const time = clickedElement.getAttribute("data-time");
  console.log(time);
  //Tworzymy stałą time, która będzie miała wartośc pobrana z atrybutu "data-time", po jego kliknięciu.

  clickedElement.classList.add("active");
  console.log(clickedElement);
  //Nadajemy klase CSSowa klikniętemu elementowi (classList.add).
  //Moglibyśmy również usunąć klase (classList.remove),
  //!!UWAGA, KLASĘ WPISUJEMY BEZ KROPKI//

};


for (let item of items) {
  item.addEventListener('click', clickItemHandler)


  //  const time = item.getAttribute("data-time");
  //console.log(time);
}
//Tworzymy pętle, ponieważ chcemy dodać addEventListener dla każdego elementu <li></li>(item) z osobna.
//Dodajemy dwa argumenty, pierwszy 'click' to po prostu rodzaj wydarzenia którego nasłuchuje addEventListener,
//w naszym przypadku to kliknięcie myszką(Sprawdź w necie inne możliwości);
//Drugi argument to jakaś funkcja która ma się wykonać po naszym kliknięciu (u nas clickItemHandler),
//!!WAŻNE, nasza fukcja(clickItemHandler), musi być napisana w pliku PRZED NASZĄ PĘTLĄ z addEventListenerem.!!
