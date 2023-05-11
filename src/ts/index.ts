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

// Features navigation tabs
const tab_btns = document.querySelectorAll(
  "#tab_btn"
) as NodeListOf<HTMLButtonElement>;
const features = document.querySelectorAll(
  "#feature"
) as NodeListOf<HTMLDivElement>;

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

// CTA Form Error Handling
const ctaFrom = document.getElementById("cta-form") as HTMLFormElement;

// cta-form
ctaFrom.addEventListener("submit", (e: SubmitEvent) => {
  e.preventDefault();

  const ctaInput = document.getElementById("cta-input") as HTMLInputElement;
  const parentContainer = ctaInput.parentElement as HTMLDivElement;

  const inputValue: string = ctaInput.value;

  // Define a regular expression for validating email address
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  // Check if the input value matches with regular expression
  if (inputValue.match(validRegex)) {
    parentContainer.classList.remove("is-error");
  } else {
    const error = document.querySelector(".error") as HTMLParagraphElement;

    parentContainer.classList.add("is-error");
    error.textContent = "Whoops, make sure it's an email";

    setTimeout(() => {
      parentContainer.classList.remove("is-error");
    }, 3000);
  }
});
