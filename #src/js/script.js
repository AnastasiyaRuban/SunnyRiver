@@include('catalog.js')

// GENERAL

// CATALOG
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
  image.setAttribute('loading', 'lazy')
  image.alt = product.name.toLowerCase();

  if (product. hasOwnProperty('hit')) {
    card.classList.add('hit')
  }

  cardTitle.textContent = product.name;
  price.textContent = `${product.price} р.`;
  btnMore.textContent = 'ПОДРОБНЕЕ';
  btnToCard.innerHTML = 'В&nbsp;КОРЗИНУ';

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

    categoryBlock.id = category.id;

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

function createProductDropdown() {
  const itemSubmenuButton = document.querySelector('.item-submenu');
  const submenuList =  document.createElement('ul');
  submenuList.classList.add('item-submenu__list', 'list-reset');

  catalog.forEach(category => {
    const listItem = document.createElement('li'),
      listLink = document.createElement('a');

    listItem.classList.add('item-submenu__item');
    listLink.classList.add('link-reset', 'item-submenu__link');

    listLink.setAttribute('href', `#${category.id}`);
    listLink.textContent = category.category;

    listItem.append(listLink);
    submenuList.append(listItem);
  })
  
  itemSubmenuButton.append(submenuList);

}

createCatalogSection()
createProductDropdown()

// SCROLL 
let links = document.querySelectorAll('a[href^="#"]'),
    topOffset = 100;

  links.forEach(item => {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      let href = this.getAttribute('href').slice(1);

      const targetElem = document.getElementById(href),
        elemPosition = targetElem.getBoundingClientRect().top,
        offsetPosition = elemPosition - topOffset;
        
      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
  });


  let scrolButton = document.querySelector('.scroll-button');

(function () {
  function showScrollButton() {
    let position = window.pageYOffset;

    if (position > 2000) scrolButton.classList.add('scroll-button-show');
    else scrolButton.classList.remove('scroll-button-show');
  }

  function scroll() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  window.addEventListener('scroll', showScrollButton, true);
  scrolButton.addEventListener('click', scroll);
})();


// LOADING

window.onload = () => { 

	const progress = () => {

		const line = document.createElement('div') 
		line.className = 'progress'
		
		document.body.prepend(line) 

		const progressWidth = () => { 
			return line.style.width = Math.floor(window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight) * 100) + '%'
		}

		progressWidth() 

		document.addEventListener('scroll', throttle(progressWidth, 64))
		window.addEventListener('resize', throttle(progressWidth, 64)) 

	}

	progress() 

}


const throttle = (func, ms) => { 
	let locked = false 
	return () => { 
		if (locked) return 
		locked = true 
		setTimeout(() => { 
			func() 
			locked = false 
		}, ms) 
	}
}


// BURGER 

const burger = document.querySelector('.burger')

burger.addEventListener('click', () => burger.classList.toggle('active'))


function createPromoBlock() {
  const promoBlock = document.createElement('div'),
    promoDescription = document.createElement('p'),
    promoConsultationButton = document.createElement('button'),
    promoClose = document.createElement('button');

  promoDescription.innerHTML = 'Не&nbsp;можете определиться? Мы&nbsp;с&nbsp;удовольствием Вас проконсультируем';
  promoConsultationButton.textContent = 'Консультация';

  promoBlock.classList.add('promo');
  promoDescription.classList.add('promo__description', 'description');
  promoConsultationButton.classList.add('promo__consultation', 'button-reset');
  promoClose.classList.add('promo__close', 'button-reset');

  promoBlock.append(promoDescription, promoConsultationButton, promoClose);

  promoClose.addEventListener('click', ()=> promoBlock.remove());
  

  if (window.innerWidth > 980) {
    document.body.append(promoBlock)
  } else {
    promoBlock.style.padding = '20px 40px';
    promoBlock.style.gap = '10px';
    promoBlock.style.height = 'auto';
    const aboutUsSection = document.querySelector('.about-us');

    aboutUsSection.before(promoBlock)
  }
}

createPromoBlock()


if (window.innerWidth > 1000) {
  document.querySelector('.item-submenu').onmouseover = function() {
  document.querySelector('.item-submenu__list').classList.add('open')
  
};
document.querySelector('.item-submenu').onmouseout = function() {
  setTimeout(() => {
    document.querySelector('.item-submenu__list').classList.remove('open')
  }, 500)
  
};
} else {
  document.querySelector('.item-submenu__button').addEventListener('click', () => {
    document.querySelector('.item-submenu__list').classList.toggle('open')
    document.querySelector('.item-submenu__button').classList.toggle('active')
  })
}


document.body.addEventListener('click', (e) => {
  if (
        !e.target.className.includes('item-submenu')
        && !e.target.className.includes('item-submenu__button')) {
     const submenuListOpen = document.querySelector('.item-submenu__list.open')
     if (submenuListOpen) {
       document.querySelector('.item-submenu__list').classList.remove('open')
       document.querySelector('.item-submenu__button').classList.remove('active')
     }
  }
})



