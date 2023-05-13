"use strict";
const menuBtn = document.querySelector("#humberger-menu");
menuBtn.addEventListener("click", () => {
    const bodyOnMobile = document.querySelector("body");
    bodyOnMobile.classList.toggle("is-mobile");
    const menuIcons = document.querySelectorAll("#menu-icon");
    menuIcons.forEach((icon) => {
        icon.classList.toggle("bg-black");
        icon.classList.toggle("bg-white");
    });
});
const answers = document.querySelectorAll("#answer");
const questions = document.querySelectorAll("#question");
const chevronIcons = document.querySelectorAll("#chevron-icon");
questions.forEach((question, index) => {
    question.addEventListener("click", () => {
        questions.forEach((question) => {
            question.classList.add("hover:text-SoftRed");
        });
        answers.forEach((answer) => {
            answer.classList.add("hidden");
        });
        chevronIcons.forEach((icon) => {
            icon.classList.add("text-SoftBlue");
            icon.classList.remove("text-SoftRed");
            icon.classList.remove("rotate-180");
        });
        question.classList.remove("hover:text-SoftRed");
        answers[index].classList.remove("hidden");
        chevronIcons[index].classList.remove("text-SoftBlue");
        chevronIcons[index].classList.add("text-SoftRed");
        chevronIcons[index].classList.add("rotate-180");
    });
});
const tab_btns = document.querySelectorAll("#tab_btn");
const features = document.querySelectorAll("#feature");
tab_btns.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        tab_btns.forEach((tab) => {
            tab.classList.remove("text-VeryDarkBlue");
            tab.classList.remove("border-b-4");
            tab.classList.remove("border-SoftRed");
            tab.classList.add("text-GrayishBlue");
            tab.classList.add("hover:text-SoftRed");
        });
        features.forEach((feature) => {
            feature.classList.add("hidden");
        });
        tab.classList.add("text-VeryDarkBlue");
        tab.classList.add("border-b-4");
        tab.classList.add("border-SoftRed");
        tab.classList.remove("text-GrayishBlue");
        tab.classList.remove("hover:text-SoftRed");
        features[index].classList.remove("hidden");
        features[index].classList.add("flex");
    });
});
const newsletterFrom = document.getElementById("newsletter-form");
newsletterFrom.addEventListener("submit", (e) => {
    e.preventDefault();
    const newsletterInput = document.getElementById("newsletter-input");
    const parentContainer = newsletterInput.parentElement;
    const inputValue = newsletterInput.value;
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const messageContainer = document.querySelector(".error");
    if (!inputValue) {
        handleAlertMessages(parentContainer, "is-error", "Whoops, make sure it's not empty", messageContainer);
        return;
    }
    if (!inputValue.match(validRegex)) {
        handleAlertMessages(parentContainer, "is-error", "Whoops, make sure it's an email", messageContainer);
        return;
    }
    handleAlertMessages(parentContainer, "is-success", "Thank you for subscribing", messageContainer);
});
function handleAlertMessages(parentContainer, className, message, messageContainer) {
    parentContainer.classList.add(className);
    messageContainer.textContent = `${message}`;
    setTimeout(() => {
        parentContainer.classList.remove(className);
    }, 3000);
}
//# sourceMappingURL=index.js.map