let currentSlide = 0
const slider = document.getElementById('slider')
const slides = document.querySelectorAll('.slide')

function showSlide(index) {
	if (index < 0) {
		currentSlide = slides.length - 1
	} else if (index >= slides.length) {
		currentSlide = 0
	} else {
		currentSlide = index
	}

	const newPosition = -currentSlide * 100 + '%'
	slider.style.transform = 'translateX(' + newPosition + ')'
}

function nextSlide() {
	showSlide(currentSlide + 1)
}

function prevSlide() {
	showSlide(currentSlide - 1)
}

function toggleDropdown() {
	let dropdownContent = document.querySelector('.dropdown-content')
	dropdownContent.style.display =
		dropdownContent.style.display === 'block' ? 'none' : 'block'
}

function sortExpensive() {
	// Реализация сортировки: Сначала дороже
	console.log('Сначала дороже')
	// Добавьте код для применения сортировки: Сначала дороже
}

function sortCheap() {
	// Реализация сортировки: Сначала дешевле
	console.log('Сначала дешевле')
	// Добавьте код для применения сортировки: Сначала дешевле
}

function sortAlphabet() {
	// Реализация сортировки: По алфавиту
	console.log('По алфавиту')
	// Добавьте код для применения сортировки: По алфавиту
}
// Добавьте другие функции для других фильтров

// сортировка

const products = [
	{ price: 85, name: 'Cactus plants', image: './img/catalog/catalog-1.png' },
	{ price: 105, name: 'Landak Plants', image: './img/catalog/catalog-2.png' },
	{ price: 90, name: 'Kecubung Plants', image: './img/catalog/catalog-3.png' },
	{ price: 120, name: 'Codiaeum Plants', image: './img/catalog/catalog-4.png' },
	{ price: 85, name: 'Aloe Plants', image: './img/catalog/catalog-5.png' },
]

function toggleDropdown() {
	const dropdownContent = document.querySelector('.dropdown-content')
	dropdownContent.style.display =
		dropdownContent.style.display === 'block' ? 'none' : 'block'
}

function sortCheap() {
	products.sort((a, b) => a.price - b.price)
	renderProducts()
}

function sortExpensive() {
	products.sort((a, b) => b.price - a.price)
	renderProducts()
}

function sortAlphabetical() {
	products.sort((a, b) => a.name.localeCompare(b.name))
	renderProducts()
}

// Функция для отображения товаров
function renderProducts() {
	const productsContainer = document.getElementById('catalog__list')
	productsContainer.innerHTML = ''

	products.forEach(product => {
		const productElement = document.createElement('div')
		productElement.className = 'product__item'
		productElement.dataset.price = product.price
		productElement.dataset.name = product.name

		const imageElement = document.createElement('img')
		imageElement.src = product.image
		imageElement.alt = product.name

		// Создаем элементы для отображения названия и цены товара
		const detailsElement = document.createElement('div')
		detailsElement.className = 'product__details'
		detailsElement.innerHTML = `<h3>${product.name}</h3><p class="price">IDR ${product.price}.000</p>`

		// Добавляем элементы внутрь элемента productElement
		productElement.appendChild(imageElement)
		productElement.appendChild(detailsElement)

		// Добавляем обработчик события клика на товар
		productElement.addEventListener('click', () => {
			addToCart(product) // Вызываем функцию добавления в корзину с передачей данных о товаре
		})

		// Добавляем productElement в контейнер товаров
		productsContainer.appendChild(productElement)
	})
}

// Функция для добавления товара в корзину
function addToCart(product) {
	// Здесь можно добавить логику для добавления товара в корзину, например, обновление данных в хранилище или отправка запроса на сервер
	console.log(`Товар добавлен в корзину: ${product.name}`)
}

// Вызываем функцию для отображения товаров
renderProducts()

function applyFilter(filterType) {
	// Здесь вы можете добавить логику для применения выбранного фильтра
	console.log(`Применен фильтр: ${filterType}`)

	// Обновляем текущий фильтр
	currentFilter = filterType

	// Обновляем текст в кнопке в зависимости от выбранного фильтра
	const filterTextElement = document.getElementById('filterText')
	filterTextElement.textContent = getFilterText(filterType)

	toggleDropdown() // Скрываем выпадающее меню после выбора фильтра

	// Вызываем соответствующую функцию сортировки
	switch (filterType) {
		case 'cheap':
			sortCheap()
			break
		case 'expensive':
			sortExpensive()
			break
		case 'alphabetical':
			sortAlphabetical()
			break
		default:
			break
	}
}

function getFilterText(filterType) {
	// Возвращаем текст, соответствующий выбранному фильтру
	switch (filterType) {
		case 'cheap':
			return 'Cheaper First'
		case 'expensive':
			return 'Expensive First'
		case 'alphabetical':
			return 'Alphabetically'
		default:
			return ''
	}
}
