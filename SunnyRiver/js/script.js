const catalog = [
  {
    category: 'КРЕСЛО-ШЕЗЛОНГ',
    id: 'chaise-longue-chair',
    products: [
      {
        id: 1,
        name: 'КРЕСЛА-ШЕЗЛОНГИ',
        price: 3900,
        image: 'img/products/chaise-longue-chair.webp',
        description:
          'Конфеты ручной работы из цельного ядра кедрового ореха с добавлением свежих сибирских ягод (клюква, облепиха, черника, черёмуха) и алтайского мёда, покрытые шоколадной глазурью.',
        'best before date': '6 мес.',
        weight: '120 гр',
        hit: true,
      },
    ],
  },
  {
    category: 'СТОЛИК',
    id: 'table',
    products: [
      {
        id: 1,
        name: 'МАЛЕНЬКИЙ СТОЛИК',
        price: 1500,
        image: '/img/products/small-table.webp',
        description:
          'Это натуральный продукт, сохранивший все полезные свойства ягод благодаря низкотемпературной сушке (не более 39 °С). Каждая упаковка содержит не менее 600 граммов свежих ягод и фруктов.',
        'best before date': '6 мес.',
        weight: '100 гр',
      },
      {
        id: 2,
        name: 'МАЛЕНЬКИЙ СТОЛИК',
        price: 1500,
        image: 'img/products/small-table.webp',
        description:
          'Это натуральный продукт, сохранивший все полезные свойства ягод благодаря низкотемпературной сушке (не более 39 °С). Каждая упаковка содержит не менее 600 граммов свежих ягод и фруктов.',
        'best before date': '6 мес.',
        weight: '100 гр',
      },
      {
        id: 3,
        name: 'МАЛЕНЬКИЙ СТОЛИК',
        price: 1500,
        image: 'img/products/small-table.webp',
        description:
          'Это натуральный продукт, сохранивший все полезные свойства ягод благодаря низкотемпературной сушке (не более 39 °С). Каждая упаковка содержит не менее 600 граммов свежих ягод и фруктов.',
        'best before date': '6 мес.',
        weight: '100 гр',
      },
      {
        id: 4,
        name: 'МАЛЕНЬКИЙ СТОЛИК',
        price: 1500,
        image: 'img/products/small-table.webp',
        description:
          'Это натуральный продукт, сохранивший все полезные свойства ягод благодаря низкотемпературной сушке (не более 39 °С). Каждая упаковка содержит не менее 600 граммов свежих ягод и фруктов.',
        'best before date': '6 мес.',
        weight: '100 гр',
      },
      {
        id: 5,
        name: 'МАЛЕНЬКИЙ СТОЛИК',
        price: 1500,
        image: 'img/products/small-table.webp',
        description:
          'Это натуральный продукт, сохранивший все полезные свойства ягод благодаря низкотемпературной сушке (не более 39 °С). Каждая упаковка содержит не менее 600 граммов свежих ягод и фруктов.',
        'best before date': '6 мес.',
        weight: '100 гр',
      },
      {
        id: 6,
        name: 'МАЛЕНЬКИЙ СТОЛИК',
        price: 1500,
        image: 'img/products/small-table.webp',
        description:
          'Это натуральный продукт, сохранивший все полезные свойства ягод благодаря низкотемпературной сушке (не более 39 °С). Каждая упаковка содержит не менее 600 граммов свежих ягод и фруктов.',
        'best before date': '6 мес.',
        weight: '100 гр',
      },
    ],
  },
  {
    category: 'ОБЕДЕННЫЙ СТОЛ',
    id: 'dinner-table',
    products: [
      {
        id: 1,
        name: 'ОБЕДЕННЫЙ СТОЛ',
        price: 5900,
        image: 'img/products/dinner-table.webp',
        description:
          'Урбеч – густая жидкая масса, полученная из растертых поджаренных или просто высушенных семян кедра, льна и кунжута',
        'best before date': '6 мес.',
        weight: '200 мл',
      },
      {
        id: 2,
        name: 'ОБЕДЕННЫЙ СТОЛ',
        price: 5900,
        image: 'img/products/dinner-table.webp',
        description:
          'Урбеч – густая жидкая масса, полученная из растертых поджаренных или просто высушенных семян кедра, льна и кунжута',
        'best before date': '6 мес.',
        weight: '200 мл',
      },
    ],
  },
  {
    category: 'ПОДСТАВКА ПОД ЦВЕТЫ',
    id: 'flower-stand',
    products: [
      {
        id: 1,
        name: 'ПОДСТАВКА ПОД ЦВЕТЫ',
        price: 1200,
        image: 'img/products/flower-stang.webp',
        description: [],
      },
    ],
  },
  {
    category: 'ПОДСТАВКА ДЛЯ БУТЫЛКИ',
    id: 'stand-for-bottle',
    products: [
      {
        id: 1,
        name: 'ПОДСТАВКА ДЛЯ БОЛЬШИХ БУТЫЛОК',
        price: 800,
        image: 'img/products/flower-stang.webp',
        'best before date': '8 мес.',
        description: [
          'Кедровые приправы от эко-фабрики "Сибирский кедр" - это совершенно новый, ни на что не похожий натуральный эко-продукт! Приправы можно использовать как дополнение к основным блюдам, закускам, салатам, так и сладким десертам. Каждая кедровая приправа имеет свой уникальный рецепт от шеф-повара. В кедровых приправах сохранена вся польза кедровых орешек. Оцените неповторимый вкус!',
        ],
        weight: '0гр.',
      },
    ],
  },
];


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




//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiQEBpbmNsdWRlKCdjYXRhbG9nLmpzJylcclxuXHJcbi8vIEdFTkVSQUxcclxuXHJcbi8vIENBVEFMT0dcclxuZnVuY3Rpb24gY3JlYXRlQ2FyZChwcm9kdWN0KSB7XHJcbiAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKSxcclxuICAgIGNhcmRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICBjYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpLFxyXG4gICAgcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyksXHJcbiAgICBidG5CbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgYnRuTW9yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpLFxyXG4gICAgYnRuVG9DYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblxyXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0c19fY2FyZCcsICdjYXJkJylcclxuICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2ltYWdlJylcclxuICAgIGNhcmRDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2NvbnRlbnQnKVxyXG4gICAgY2FyZFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NhcmRfX3RpdGxlJywgJ3RpdGxlJylcclxuICAgIHByaWNlLmNsYXNzTGlzdC5hZGQoJ2NhcmRfX3ByaWNlJylcclxuICAgIGJ0bkJsb2NrLmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2J1dHRvbnMnKVxyXG4gICAgYnRuTW9yZS5jbGFzc0xpc3QuYWRkKCdjYXJkX19idXR0b24tbW9yZScsICdidXR0b24tcmVzZXQnKVxyXG4gICAgYnRuVG9DYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2J1dHRvbi1hZGQnLCAnYnV0dG9uLXJlc2V0JylcclxuXHJcbiAgaW1hZ2Uuc3JjID0gcHJvZHVjdC5pbWFnZTtcclxuICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ2xvYWRpbmcnLCAnbGF6eScpXHJcbiAgaW1hZ2UuYWx0ID0gcHJvZHVjdC5uYW1lLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gIGlmIChwcm9kdWN0LiBoYXNPd25Qcm9wZXJ0eSgnaGl0JykpIHtcclxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnaGl0JylcclxuICB9XHJcblxyXG4gIGNhcmRUaXRsZS50ZXh0Q29udGVudCA9IHByb2R1Y3QubmFtZTtcclxuICBwcmljZS50ZXh0Q29udGVudCA9IGAke3Byb2R1Y3QucHJpY2V9INGALmA7XHJcbiAgYnRuTW9yZS50ZXh0Q29udGVudCA9ICfQn9Ce0JTQoNCe0JHQndCV0JUnO1xyXG4gIGJ0blRvQ2FyZC5pbm5lckhUTUwgPSAn0JImbmJzcDvQmtCe0KDQl9CY0J3Qoyc7XHJcblxyXG4gIGNhcmRDb250ZW50LmFwcGVuZChjYXJkVGl0bGUsIHByaWNlLCBidG5CbG9jayk7XHJcbiAgYnRuQmxvY2suYXBwZW5kKGJ0bk1vcmUsIGJ0blRvQ2FyZClcclxuICBjYXJkLmFwcGVuZChpbWFnZSwgY2FyZENvbnRlbnQpO1xyXG5cclxuICBidG5Nb3JlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiBhbGVydCgn0J7RgtC60YDQvtC10YLRgdGPINC/0L7Qv9Cw0L8nKSlcclxuICBidG5Ub0NhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IGFsZXJ0KCfQlNC+0LHQsNCy0LjRgtGB0Y8g0LIg0LrQvtGA0LfQuNC90YMnKSlcclxuXHJcbiAgcmV0dXJuIGNhcmRcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNhdGFsb2dTZWN0aW9uKCkge1xyXG4gIGNvbnN0IHNlY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdHNfX2NvbnRhaW5lcicpO1xyXG5cclxuICBjYXRhbG9nLmZvckVhY2goY2F0ZWdvcnkgPT4ge1xyXG4gICAgY29uc3QgY2F0ZWdvcnlCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgICBjYXRlZ29yeVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgYmxvY2tDYXJkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGNhdGVnb3J5QmxvY2suY2xhc3NMaXN0LmFkZCgncHJvZHVjdHNfX2NhdGVnb3J5JywgJ2NhdGVnb3J5Jyk7XHJcbiAgICBjYXRlZ29yeVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5X190aXRsZScsICd0aXRsZScpO1xyXG4gICAgYmxvY2tDYXJkcy5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yeV9fY2FyZHMnKTtcclxuXHJcbiAgICBjYXRlZ29yeUJsb2NrLmlkID0gY2F0ZWdvcnkuaWQ7XHJcblxyXG4gICAgY2F0ZWdvcnlUaXRsZS50ZXh0Q29udGVudCA9IGNhdGVnb3J5LmNhdGVnb3J5O1xyXG4gICAgY2F0ZWdvcnlCbG9jay5hcHBlbmQoY2F0ZWdvcnlUaXRsZSlcclxuXHJcbiAgICBjYXRlZ29yeS5wcm9kdWN0cy5mb3JFYWNoKHByb2R1Y3QgPT4ge1xyXG4gICAgICBjb25zdCBjYXJkID0gY3JlYXRlQ2FyZChwcm9kdWN0KTtcclxuICAgICAgYmxvY2tDYXJkcy5hcHBlbmQoY2FyZCk7XHJcbiAgICB9KVxyXG5cclxuICAgIGNhdGVnb3J5QmxvY2suYXBwZW5kKGJsb2NrQ2FyZHMpIDtcclxuXHJcbiAgICBzZWN0aW9uQ29udGFpbmVyLmFwcGVuZChjYXRlZ29yeUJsb2NrKVxyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2R1Y3REcm9wZG93bigpIHtcclxuICBjb25zdCBpdGVtU3VibWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLXN1Ym1lbnUnKTtcclxuICBjb25zdCBzdWJtZW51TGlzdCA9ICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gIHN1Ym1lbnVMaXN0LmNsYXNzTGlzdC5hZGQoJ2l0ZW0tc3VibWVudV9fbGlzdCcsICdsaXN0LXJlc2V0Jyk7XHJcblxyXG4gIGNhdGFsb2cuZm9yRWFjaChjYXRlZ29yeSA9PiB7XHJcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyksXHJcbiAgICAgIGxpc3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG5cclxuICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tc3VibWVudV9faXRlbScpO1xyXG4gICAgbGlzdExpbmsuY2xhc3NMaXN0LmFkZCgnbGluay1yZXNldCcsICdpdGVtLXN1Ym1lbnVfX2xpbmsnKTtcclxuXHJcbiAgICBsaXN0TGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBgIyR7Y2F0ZWdvcnkuaWR9YCk7XHJcbiAgICBsaXN0TGluay50ZXh0Q29udGVudCA9IGNhdGVnb3J5LmNhdGVnb3J5O1xyXG5cclxuICAgIGxpc3RJdGVtLmFwcGVuZChsaXN0TGluayk7XHJcbiAgICBzdWJtZW51TGlzdC5hcHBlbmQobGlzdEl0ZW0pO1xyXG4gIH0pXHJcbiAgXHJcbiAgaXRlbVN1Ym1lbnVCdXR0b24uYXBwZW5kKHN1Ym1lbnVMaXN0KTtcclxuXHJcbn1cclxuXHJcbmNyZWF0ZUNhdGFsb2dTZWN0aW9uKClcclxuY3JlYXRlUHJvZHVjdERyb3Bkb3duKClcclxuXHJcbi8vIFNDUk9MTCBcclxubGV0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYVtocmVmXj1cIiNcIl0nKSxcclxuICAgIHRvcE9mZnNldCA9IDEwMDtcclxuXHJcbiAgbGlua3MuZm9yRWFjaChpdGVtID0+IHtcclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGxldCBocmVmID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKS5zbGljZSgxKTtcclxuXHJcbiAgICAgIGNvbnN0IHRhcmdldEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChocmVmKSxcclxuICAgICAgICBlbGVtUG9zaXRpb24gPSB0YXJnZXRFbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCxcclxuICAgICAgICBvZmZzZXRQb3NpdGlvbiA9IGVsZW1Qb3NpdGlvbiAtIHRvcE9mZnNldDtcclxuICAgICAgICBcclxuICAgICAgd2luZG93LnNjcm9sbEJ5KHtcclxuICAgICAgICB0b3A6IG9mZnNldFBvc2l0aW9uLFxyXG4gICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuXHJcbiAgbGV0IHNjcm9sQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjcm9sbC1idXR0b24nKTtcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgZnVuY3Rpb24gc2hvd1Njcm9sbEJ1dHRvbigpIHtcclxuICAgIGxldCBwb3NpdGlvbiA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcbiAgICBpZiAocG9zaXRpb24gPiAyMDAwKSBzY3JvbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzY3JvbGwtYnV0dG9uLXNob3cnKTtcclxuICAgIGVsc2Ugc2Nyb2xCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsLWJ1dHRvbi1zaG93Jyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzY3JvbGwoKSB7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuICB9XHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzaG93U2Nyb2xsQnV0dG9uLCB0cnVlKTtcclxuICBzY3JvbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNjcm9sbCk7XHJcbn0pKCk7XHJcblxyXG5cclxuLy8gTE9BRElOR1xyXG5cclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHsgXHJcblxyXG5cdGNvbnN0IHByb2dyZXNzID0gKCkgPT4ge1xyXG5cclxuXHRcdGNvbnN0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSBcclxuXHRcdGxpbmUuY2xhc3NOYW1lID0gJ3Byb2dyZXNzJ1xyXG5cdFx0XHJcblx0XHRkb2N1bWVudC5ib2R5LnByZXBlbmQobGluZSkgXHJcblxyXG5cdFx0Y29uc3QgcHJvZ3Jlc3NXaWR0aCA9ICgpID0+IHsgXHJcblx0XHRcdHJldHVybiBsaW5lLnN0eWxlLndpZHRoID0gTWF0aC5mbG9vcih3aW5kb3cucGFnZVlPZmZzZXQgLyAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodCkgKiAxMDApICsgJyUnXHJcblx0XHR9XHJcblxyXG5cdFx0cHJvZ3Jlc3NXaWR0aCgpIFxyXG5cclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRocm90dGxlKHByb2dyZXNzV2lkdGgsIDY0KSlcclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aHJvdHRsZShwcm9ncmVzc1dpZHRoLCA2NCkpIFxyXG5cclxuXHR9XHJcblxyXG5cdHByb2dyZXNzKCkgXHJcblxyXG59XHJcblxyXG5cclxuY29uc3QgdGhyb3R0bGUgPSAoZnVuYywgbXMpID0+IHsgXHJcblx0bGV0IGxvY2tlZCA9IGZhbHNlIFxyXG5cdHJldHVybiAoKSA9PiB7IFxyXG5cdFx0aWYgKGxvY2tlZCkgcmV0dXJuIFxyXG5cdFx0bG9ja2VkID0gdHJ1ZSBcclxuXHRcdHNldFRpbWVvdXQoKCkgPT4geyBcclxuXHRcdFx0ZnVuYygpIFxyXG5cdFx0XHRsb2NrZWQgPSBmYWxzZSBcclxuXHRcdH0sIG1zKSBcclxuXHR9XHJcbn1cclxuXHJcblxyXG4vLyBCVVJHRVIgXHJcblxyXG5jb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyJylcclxuXHJcbmJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKSlcclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9tb0Jsb2NrKCkge1xyXG4gIGNvbnN0IHByb21vQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgIHByb21vRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyksXHJcbiAgICBwcm9tb0NvbnN1bHRhdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpLFxyXG4gICAgcHJvbW9DbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cclxuICBwcm9tb0Rlc2NyaXB0aW9uLmlubmVySFRNTCA9ICfQndC1Jm5ic3A70LzQvtC20LXRgtC1INC+0L/RgNC10LTQtdC70LjRgtGM0YHRjz8g0JzRiyZuYnNwO9GBJm5ic3A70YPQtNC+0LLQvtC70YzRgdGC0LLQuNC10Lwg0JLQsNGBINC/0YDQvtC60L7QvdGB0YPQu9GM0YLQuNGA0YPQtdC8JztcclxuICBwcm9tb0NvbnN1bHRhdGlvbkJ1dHRvbi50ZXh0Q29udGVudCA9ICfQmtC+0L3RgdGD0LvRjNGC0LDRhtC40Y8nO1xyXG5cclxuICBwcm9tb0Jsb2NrLmNsYXNzTGlzdC5hZGQoJ3Byb21vJyk7XHJcbiAgcHJvbW9EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdwcm9tb19fZGVzY3JpcHRpb24nLCAnZGVzY3JpcHRpb24nKTtcclxuICBwcm9tb0NvbnN1bHRhdGlvbkJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcm9tb19fY29uc3VsdGF0aW9uJywgJ2J1dHRvbi1yZXNldCcpO1xyXG4gIHByb21vQ2xvc2UuY2xhc3NMaXN0LmFkZCgncHJvbW9fX2Nsb3NlJywgJ2J1dHRvbi1yZXNldCcpO1xyXG5cclxuICBwcm9tb0Jsb2NrLmFwcGVuZChwcm9tb0Rlc2NyaXB0aW9uLCBwcm9tb0NvbnN1bHRhdGlvbkJ1dHRvbiwgcHJvbW9DbG9zZSk7XHJcblxyXG4gIHByb21vQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHByb21vQmxvY2sucmVtb3ZlKCkpO1xyXG4gIFxyXG5cclxuICBpZiAod2luZG93LmlubmVyV2lkdGggPiA5ODApIHtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHByb21vQmxvY2spXHJcbiAgfSBlbHNlIHtcclxuICAgIHByb21vQmxvY2suc3R5bGUucGFkZGluZyA9ICcyMHB4IDQwcHgnO1xyXG4gICAgcHJvbW9CbG9jay5zdHlsZS5nYXAgPSAnMTBweCc7XHJcbiAgICBwcm9tb0Jsb2NrLnN0eWxlLmhlaWdodCA9ICdhdXRvJztcclxuICAgIGNvbnN0IGFib3V0VXNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0LXVzJyk7XHJcblxyXG4gICAgYWJvdXRVc1NlY3Rpb24uYmVmb3JlKHByb21vQmxvY2spXHJcbiAgfVxyXG59XHJcblxyXG5jcmVhdGVQcm9tb0Jsb2NrKClcclxuXHJcblxyXG5pZiAod2luZG93LmlubmVyV2lkdGggPiAxMDAwKSB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW0tc3VibWVudScpLm9ubW91c2VvdmVyID0gZnVuY3Rpb24oKSB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW0tc3VibWVudV9fbGlzdCcpLmNsYXNzTGlzdC5hZGQoJ29wZW4nKVxyXG4gIFxyXG59O1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbS1zdWJtZW51Jykub25tb3VzZW91dCA9IGZ1bmN0aW9uKCkge1xyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW0tc3VibWVudV9fbGlzdCcpLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKVxyXG4gIH0sIDUwMClcclxuICBcclxufTtcclxufSBlbHNlIHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbS1zdWJtZW51X19idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLXN1Ym1lbnVfX2xpc3QnKS5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJylcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLXN1Ym1lbnVfX2J1dHRvbicpLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXHJcbiAgfSlcclxufVxyXG5cclxuXHJcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIGlmIChcclxuICAgICAgICAhZS50YXJnZXQuY2xhc3NOYW1lLmluY2x1ZGVzKCdpdGVtLXN1Ym1lbnUnKVxyXG4gICAgICAgICYmICFlLnRhcmdldC5jbGFzc05hbWUuaW5jbHVkZXMoJ2l0ZW0tc3VibWVudV9fYnV0dG9uJykpIHtcclxuICAgICBjb25zdCBzdWJtZW51TGlzdE9wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbS1zdWJtZW51X19saXN0Lm9wZW4nKVxyXG4gICAgIGlmIChzdWJtZW51TGlzdE9wZW4pIHtcclxuICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLXN1Ym1lbnVfX2xpc3QnKS5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJylcclxuICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLXN1Ym1lbnVfX2J1dHRvbicpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICAgfVxyXG4gIH1cclxufSlcclxuXHJcblxyXG5cclxuIl0sImZpbGUiOiJzY3JpcHQuanMifQ==
