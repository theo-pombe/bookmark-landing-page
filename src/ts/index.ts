// FAQ Accordion
const answers = document.querySelectorAll(
  "#answer"
) as NodeListOf<HTMLDListElement>;
const questions = document.querySelectorAll(
  "#question"
) as NodeListOf<HTMLDListElement>;
const chevronIcons = document.querySelectorAll(
  "#chevron-icon"
) as NodeListOf<HTMLDivElement>;

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
