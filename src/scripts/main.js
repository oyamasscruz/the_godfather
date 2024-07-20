document.addEventListener('DOMContentLoaded', function() {
    const buttonShows = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    for (let i = 0; i < buttonShows.length; i++) {
        buttonShows[i].addEventListener('click', function(btn){
            const tabTarget = btn.target.dataset.tabButton;
            const tabs = document.querySelector(`[data-tab-id=${tabTarget}]`);
            hideTabs();
            tabs.classList.add('about__tab--is--active');
            hideStyleButton();
            btn.target.classList.add('about__tabs__button--is--active');
        })
    }

    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', closeOrOpen);
    }
})

function hideTabs() {
    const tabContainer = document.querySelectorAll('[data-tab-id]');

        for (let i = 0; i < tabContainer.length; i++) {
            tabContainer[i].classList.remove('about__tab--is--active');
        }
}

function hideStyleButton() {
    const buttonShows = document.querySelectorAll('[data-tab-button]');

        for (let i = 0; i < buttonShows.length; i++) {
            buttonShows[i].classList.remove('about__tabs__button--is--active');
        }
}

function closeOrOpen(element) {
    const faqClass = 'faq__questions__item--is-open';
    const elementNode = element.target.parentNode;

    elementNode.classList.toggle(faqClass);
} 