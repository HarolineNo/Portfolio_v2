const prevBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");
const projectContainer = document.querySelector("#project-container");
const projectCard = document.querySelectorAll(".project-card");

let index = 0;

export function projectCarousel() {
    if (index >= projectCard.length) {
        index = 0
    };

    if (index < 0) {
        index = projectCard.length - 1;
    };

    projectContainer.style.transform = `translateX(-${index * 100}%)`;
}

prevBtn.addEventListener('click', () => {
    index--;
    projectCarousel();
});

nextBtn.addEventListener('click', () => {
    index++;
    projectCarousel();
});

projectCarousel();