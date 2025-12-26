/* UTILITIES */
const $ = q => document.querySelector(q);
const $$ = q => document.querySelectorAll(q);

/* PAGE LOAD */
window.addEventListener("load", () => {
    document.body.classList.add("page-loaded");
});

/* NAV SCROLL EFFECT */
const nav = $(".navbar");
window.addEventListener("scroll", () => {
    nav.classList.toggle("shadow", window.scrollY > 40);
});

/* SCROLL ANIMATIONS */
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("show");
    });
}, { threshold: 0.2 });

$$("[data-animate]").forEach(el => observer.observe(el));

/* BUTTON JS HOVER */
$$("[data-hover]").forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "translateY(-4px) scale(1.05)";
        btn.style.boxShadow = "0 12px 30px rgba(0,0,0,0.4)";
    });
    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "none";
        btn.style.boxShadow = "none";
    });
});

/* NAV ACTIVE */
$$(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        $$(".nav-link").forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});

/* LAZY LOAD */
$$("img").forEach(img => img.loading = "lazy");

/* SMOOTH SCROLL */
document.documentElement.style.scrollBehavior = "smooth";
