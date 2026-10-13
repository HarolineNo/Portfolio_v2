const toggles = document.querySelectorAll(".item-content");

toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
        const activeCard = toggle.classList.contains("active");

        toggles.forEach((card) => {
            card.classList.remove("active");
        })

        if (!activeCard) {
            toggle.classList.add("active");
        }

    })
})