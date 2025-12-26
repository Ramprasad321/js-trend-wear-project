/* SHORTCUTS */
const $ = q => document.querySelector(q);
const $$ = q => document.querySelectorAll(q);

/* PAGE LOAD */
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

/* SCROLL ANIMATIONS */
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

$$("[data-animate]").forEach(el => observer.observe(el));

/* BUTTON HOVER */
$$("[data-hover]").forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "translateY(-4px) scale(1.05)";
    });
    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "none";
    });
});

/* NAV ACTIVE */
$$(".nav-item").forEach(item => {
    item.addEventListener("click", () => {
        $$(".nav-item").forEach(i => i.classList.remove("active"));
        item.classList.add("active");
    });
});

/* LAZY LOAD */
$$("img").forEach(img => img.loading = "lazy");

/* SMOOTH SCROLL */
document.documentElement.style.scrollBehavior = "smooth";
