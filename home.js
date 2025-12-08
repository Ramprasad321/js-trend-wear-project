const translations = {
en: {
    women: "Women",
    men: "Men",
    login: "Log in"
},
hi: {
    women: "महिला",
    men: "पुरुष",
    login: "लॉगिन"
}
};

function applyLanguage() {
    const lang = localStorage.getItem("country") || "en";
    const t = translations[lang] || translations["en"];
    document.querySelectorAll("[data-translate]").forEach(el=>{
        el.textContent = t[ el.getAttribute("data-translate") ];
    });
}
applyLanguage();
