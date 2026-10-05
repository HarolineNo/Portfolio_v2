const prevBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");
const projectContainer = document.querySelector("#project-container");

let index = 0;

export function projectCarousel() {
    const projectCard = document.querySelectorAll(".project-card");

    if (index > projectCard.length - 3) {
        index = 0
    };

    if (index < 0) {
        index = projectCard.length - 3;
    };

    projectContainer.style.transform = `translateX(-${index * 35}%)`;
}

prevBtn.addEventListener('click', () => {
    index--;
    projectCarousel();
});

nextBtn.addEventListener('click', () => {
    index++;
    projectCarousel();
});

