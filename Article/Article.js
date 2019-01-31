// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class.
    this.expandButton = domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'expand';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle());
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open');
  }
}

// *** Create articles stuff ************************************

let titleTest = 'A created article';
let dateTest = 'December 25th, 1958';
let paragraphsTest = ['here is some stuff', 'here is some more stuff', 'wow, absolutely incredible all the stuff'];

const createArticle = (title, date, paragraphs) => {
  let articleTag = document.createElement('div');
  let titleTag = document.createElement('h2');
  let titleText = document.createTextNode(title);
  titleTag.appendChild(titleText);
  articleTag.classList.add('article');
  articleTag.appendChild(titleTag);
  let dateTag = document.createElement('p');
  let dateText = document.createTextNode(date);
  dateTag.classList.add('date');
  dateTag.appendChild(dateText);
  articleTag.appendChild(dateTag);
  paragraphs.forEach(e => {
    let superP = document.createElement('p');
    let superT = document.createTextNode(e);
    superP.appendChild(superT);
    articleTag.appendChild(superP);
  });
  let buttonTag = document.createElement('span');
  let buttonText = document.createTextNode('expand');
  buttonTag.appendChild(buttonText);
  buttonTag.classList.add('expandButton');
  articleTag.appendChild(buttonTag);
  let articleContainer = document.querySelector('.articles');
  articleContainer.appendChild(articleTag);
}

createArticle(titleTest, dateTest, paragraphsTest);

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

let articles = Array.from(document.getElementsByClassName('article'));
articles.forEach(el => {
  return new Article(el);
});
