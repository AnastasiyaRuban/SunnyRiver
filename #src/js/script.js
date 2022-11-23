@@include('vendor.js')
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
  const submenuList =  document.createElement('ui');
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
  
itemSubmenuButton.append(submenuList)

}

createCatalogSection()
createProductDropdown()


let links = document.querySelectorAll('a[href^="#"]'),
    topOffset = 100;

  links.forEach(item => {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      let href = this.getAttribute('href').slice(1);
      const targetElem = document.getElementById(href);

      const elemPosition = targetElem.getBoundingClientRect().top;
      const offsetPosition = elemPosition - topOffset;
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


// const promoClose = document.querySelector('.promo__close');
// const promoBlock = document.querySelector('.promo');

// promoClose.addEventListener('click', ()=> {
//   promoBlock.remove()
// })

// LOADING

window.onload = () => { // Страница загружена полностью вместе с изображениями, стилями и тд

	const progress = () => { // объявляем основную функцию

		const line = document.createElement('div') // создаем элемент <div>
		line.className = 'progress' // назначаем ему класс progress
		
		document.body.prepend(line) // вставляем созданный элемент <div> в начало <body>

		const progressWidth = () => { // объявляем функцию расчета ширины элемента <div>
			return line.style.width = Math.floor(window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight) * 100) + '%'
		}

		progressWidth() // вызываем функцию progressWidth, когда страница загружена, для корректного отображения ширины индикатора прокрутки

		document.addEventListener('scroll', throttle(progressWidth, 64)) // вызываем функцию при прокрутке
		window.addEventListener('resize', throttle(progressWidth, 64)) // вызываем функцию при изменения размеров окна

	}

	progress() // вызываем основную функцию

}

// функция throttle будет ограничивать частоту вызовов функции progressWidth
const throttle = (func, ms) => { // объявляем функцию throttle и передаем параметры: func - функция, частоту вызовов которой будем ограничивать, ms - время, которое должно пройти между предыдущим и следующим вызовом функции func
	let locked = false // создаем переменную, которая будет блокировать вызов функции
	return () => { // при вызове функции throttle, автоматически вызывается анонимная функция, которая будет иметь доступ к переменной isThrottled
		if (locked) return // если заблокировано, то прекращаем выполнение функции
		locked = true // следующий вызов функции wrapper блокируется, пока не истечет переданное время в ms
		setTimeout(() => { // когда истекает переданное время в ms, внутренний код выполняется
			func() // выполняем переданную функцию func
			locked = false // снимаем блокировку
		}, ms) // подставляем переданное время в ms
	}
}


const burger = document.querySelector('.burger')

burger.addEventListener('click', () => burger.classList.toggle('active'))


function createPromoBlock() {
  const promoBlock = document.createElement('div');
  const promoDescription = document.createElement('p');
  const promoConsultationButton = document.createElement('button');
  const promoClose = document.createElement('button');

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

