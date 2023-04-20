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

for(let item of items) {
const time = item.getAttribute("data-time");
console.log(time);
}

//robimy pętle ponieważ chcecemy pobrać wszystkie wartości atrybutów data-time ze stałej items.
//dzielimy więc trzy elementy <li></li>(items) na pojedyncze <li></li>(item)
//z każdego pobieramy wartość atrybutu data-time i zapisujemy w stałej time
// użyliśmy querySelectorAll więc musimy zrobić pętle, żeby przeszukać wszstkie <li>, inaczej bedzie !!BUG!!
// gdybyśmy użyli querySelector, patrz komentarz poniżej

/*const item = favouritList.querySelector("li");
const time = item.getAttribute("data-time");
console.log(time);*/




