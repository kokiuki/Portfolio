document.addEventListener("DOMContentLoaded", () => {
    const headers = document.querySelectorAll("h1");

    headers.forEach((header) => {
        header.addEventListener("click", () => {
            const nextH2 = header.nextElementSibling;
            if (nextH2 && nextH2.tagName === "H2") {
                nextH2.scrollIntoView({ behavior: "smooth" });

                // Reveal images below the h2
                const images = nextH2.querySelectorAll("img");
                images.forEach((img) => {
                    img.style.opacity = 1;
                    img.style.transition = "opacity 0.5s ease-in-out";
                });
            }
        });
    });
});