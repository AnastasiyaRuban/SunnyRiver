@@include('vendor.js')
@@include('catalog.js')

// GENERAL

function createCard(product) {
  const card = document.createElement('div'),
    image = document.createElement('img'),
    cardContent = document.createElement('div'),
    cardTitle = document.createElement('h3'),
    price = document.createElement('p'),
    btnBlock = document.createElement('div'),
    btnMore = document.createElement('button'),
    btnToCard = document.createElement('button');

    card.classList.add('products__card', 'card')
    image.classList.add('card__image')
    cardContent.classList.add('card__content')
    cardTitle.classList.add('card__title', 'title')
    price.classList.add('card__price')
    btnBlock.classList.add('card__buttons')
    btnMore.classList.add('card__button-more', 'button-reset')
    btnToCard.classList.add('card__button-add', 'button-reset')

  image.src = product.image;

  cardTitle.textContent = product.name;
  price.textContent = `${product.price} р.`;
  btnMore.textContent = 'ПОДРОБНЕЕ';
  btnToCard.textContent = 'В КОРЗИНУ';

  cardContent.append(cardTitle, price, btnBlock);
  btnBlock.append(btnMore, btnToCard)
  card.append(image, cardContent);

  btnMore.addEventListener('click', ()=> alert('Откроется попап'))
  btnToCard.addEventListener('click', ()=> alert('Добавится в корзину'))

  return card

}
function createCatalogSection() {
  const sectionContainer = document.querySelector('.products__container');

  catalog.forEach(category => {
    const categoryBlock = document.createElement('div'),
      categoryTitle = document.createElement('h2');
      blockCards = document.createElement('div');

categoryBlock.classList.add('products__category', 'category');
      categoryTitle.classList.add('category__title', 'title');
      blockCards.classList.add('category__cards');

      categoryTitle.textContent = category.category;
      categoryBlock.append(categoryTitle)

      category.products.forEach(product => {
        const card = createCard(product);
        blockCards.append(card);
        
      })
      categoryBlock.append(blockCards) ;

    sectionContainer.append(categoryBlock)
  })


}

createCatalogSection()
