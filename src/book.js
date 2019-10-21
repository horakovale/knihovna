
export default class Book {

  constructor(author, title, year, image) {
    this.author = author;
    this.title = title;
    this.year = year;
    this.image = image;
    this.isRead = false;
    this.isReading = false;
  }

  read() {
    this.isRead = true;
    this.isReading = false;
    console.log(`Super, přečetl jsi knihu ${this.title}.`);
  }

  reading() {
    this.isReading = true;
    console.log(`Super, čteš knihu ${this.title}.`);
  }
  
  renderBadgeHTML() {
    if (this.isRead) {
      return `<div class="book__badge book__badge--read">Přečteno</div>`;
    } else if (this.isReading) {
      return `<div class="book__badge book__badge--current">Právě čtu</div>`;
    } else {
      return '';
    }
  }

  renderHTML() {
    return `<div class="book">
  <div class="book__image">
    <img src="images/${this.image}" alt="Obálka Název knihy">
  </div>
  <div class="book__info">
    <h3 class="book__title">${this.title}</h3>
    <p class="book__meta">${this.author}, ${this.year}</p>
  </div>
    ${this.renderBadgeHTML()}
  </div>`
  }
}