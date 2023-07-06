/* SHOW MENU */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* MENU SHOW */

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* MENU HIDDEN */

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* REMOVE MENU MOBILE */
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* CHANGE BACKGROUND HEADER */
function scrollHeader() {
    const header = document.getElementById('header')
    
    if (this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* BASKET */

var basket = [];
var totalPrice = 0;

function openBasket() {
    document.getElementById("basketPopup").style.display = "block";
    displayBasketItems();
}

function closeBasket() {
    document.getElementById("basketPopup").style.display = "none";
}

function displayBasketItems() {
    var basketItems = document.getElementById("basketItems");
    basketItems.innerHTML = "";

    basket.forEach(function (item) {
        var li = document.createElement("li");
        var span = document.createElement("span");
        span.textContent = item.name;
        li.appendChild(span);
        li.appendChild(document.createTextNode("Price: £" + item.price.toFixed(2)));
        basketItems.appendChild(li);
    });

    document.getElementById("totalPrice").textContent = "Total Price: £" + totalPrice.toFixed(2);
}

function addItem(name, price) {
    var item = {
        name: name,
        price: price

    };



    basket.push(item);
    totalPrice += price;
    displayBasketItems();
}

function removeItem(index) {
    var item = basket[index];
    totalPrice -= item.price;
    basket.splice(index, 1);
    displayBasketItems();
}

function checkout() {
    alert("Checkout completed! Total Price: £" + totalPrice.toFixed(2));
    basket = [];
    totalPrice = 0;
    displayBasketItems();
}





/* QUESTIONS ACCORDION */
const accordionItems = document.querySelectorAll('.questions__item')

accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.questions__header')

    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if (openItem && openItem !== item) {
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) => {
    const accordionContent = item.querySelector('.questions__content')

    if (item.classList.contains('accordion-open')) {
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }

}

/* SCROLL SECTIONS ACTIVE LINK */
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* SHOW SCROLL UP */
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    
    if (this.scrollY >= 400) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

