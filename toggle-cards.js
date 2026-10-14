const toggles = document.querySelectorAll(".card-toggle");

toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
        const activeCard = toggle.parentNode.classList.contains("active");

        toggles.forEach((card) => {
            card.parentNode.classList.remove("active");
        })

        if (!activeCard) {
            toggle.parentNode.classList.add("active");
        }

    })
})