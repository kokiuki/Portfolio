document.addEventListener("DOMContentLoaded", () => {
    const h2Elements = document.querySelectorAll("h1 + h2");

    h2Elements.forEach(h2 => {
        h2.style.opacity = "0";
        h2.style.transition = "opacity 0.5s ease-in-out";
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
            }
        });
    });

    h2Elements.forEach(h2 => observer.observe(h2));
});