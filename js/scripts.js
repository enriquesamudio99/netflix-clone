const heroForm = document.getElementById('hero-form');
const faqForm = document.getElementById('faq-form');

const accordionItems = document.querySelectorAll('.faq-accordion__item');
const accordionQuestions = document.querySelectorAll('.faq-accordion__question');

const emailRE = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

document.addEventListener('DOMContentLoaded', () => initApp());

const initApp = () => {

    accordionQuestions.forEach(accordionQuestion => accordionQuestion.addEventListener('click', toggleQuestion));

    heroForm.addEventListener('submit', submitForm);
    faqForm.addEventListener('submit', submitForm);

}

const toggleQuestion = (e) => {

    let actualItem;

    if (e.target.classList.contains('faq-accordion__question')) {
        actualItem = e.target.parentNode;
    } else {
        actualItem = e.target.parentNode.parentNode;
    }

    actualItem.classList.toggle('faq-accordion__item--active');

    accordionItems.forEach(accordionItem => {
        if(actualItem != accordionItem) {
            accordionItem.classList.remove("faq-accordion__item--active");
        }
    });

}

const submitForm = (e) => {

    e.preventDefault();
    const emailInput = e.target.querySelector('input[type="email"]');

    const email = emailInput.value.toLowerCase();

    if (!email.match(emailRE)) {
        emailInput.parentNode.classList.add('form__input-container--invalid');
        emailInput.focus();
        return;
    } 

    emailInput.parentNode.classList.remove('form__input-container--invalid');
    emailInput.value = "";

}