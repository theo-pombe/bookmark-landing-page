"use strict";
const answers = document.querySelectorAll("#answer");
const questions = document.querySelectorAll("#question");
const chevronIcons = document.querySelectorAll("#chevron-icon");
questions.forEach((question, index) => {
    question.addEventListener("click", () => {
        answers.forEach((answer) => {
            answer.classList.add("hidden");
        });
        chevronIcons.forEach((icon) => {
            icon.classList.remove("rotate-180");
            icon.classList.remove("text-SoftRed");
            icon.classList.add("text-SoftBlue");
        });
        answers[index].classList.toggle("hidden");
        chevronIcons[index].classList.toggle("text-SoftRed");
        chevronIcons[index].classList.toggle("text-SoftBlue");
        chevronIcons[index].classList.toggle("rotate-180");
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
//# sourceMappingURL=index.js.map