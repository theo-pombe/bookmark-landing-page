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
//# sourceMappingURL=index.js.map