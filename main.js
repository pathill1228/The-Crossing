let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    const nav = document.getElementById("navbar");

    if (window.scrollY > lastScrollY) {
        // Scrolling down → hide navbar
        nav.classList.add("hide");
    } else {
        // Scrolling up → show navbar
        nav.classList.remove("hide");
    }

    lastScrollY = window.scrollY;
});

document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");

    const navType = performance.getEntriesByType("navigation")[0].type;

    // Only show loader on new loads or refreshes
    if (navType === "reload") {

        // Minimum time the loader should stay visible (in ms)
        const MIN_TIME = 350; // 1500ms = 1.5 seconds

        const start = Date.now();

        window.addEventListener("load", () => {
            const elapsed = Date.now() - start;
            const remaining = MIN_TIME - elapsed;

            // Wait the remaining time if load finished too fast
            setTimeout(() => {
                loader.classList.add("loader--hidden");

                loader.addEventListener("transitionend", () => {
                    loader.remove();
                });
            }, remaining > 0 ? remaining : 0);
        });

    } else {
        // No loader when navigating between pages
        loader.style.display = "none";
    }
});




