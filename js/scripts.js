const accordionItems = document.querySelectorAll('.faq-accordion__item');
const accordionQuestions = document.querySelectorAll('.faq-accordion__question');

document.addEventListener('DOMContentLoaded', () => initApp());

const initApp = () => {

    accordionQuestions.forEach(accordionQuestion => accordionQuestion.addEventListener('click', toggleQuestion));

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