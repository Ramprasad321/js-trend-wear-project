// 🌍 All translations in one place
const languageData = {
    en: {
        selectCountry:"Select your country",
        welcome:"Your style, your way",
        slogan:"Looks selected for you by your personal stylist",
        startNow:"Start now",
        howItWorks:"How it works",
        quizTitle:"Take your style quiz",
        quizDesc:"Tell us about your style, budget & fit!",
        boxTitle:"100% personalised box",
        boxDesc:"Picked by expert stylists",
        homeTryTitle:"Try at home",
        homeTryDesc:"Keep what you love. Return the rest."
    },
    hi: {
        selectCountry:"अपना देश चुनें",
        welcome:"आपकी शैली, आपके तरीके से",
        slogan:"आपके लिए आपके निजी स्टाइलिस्ट द्वारा चुने गए लुक्स",
        startNow:"अभी शुरू करें",
        howItWorks:"यह कैसे काम करता है",
        quizTitle:"अपनी स्टाइल क्विज़ शुरू करें",
        quizDesc:"हमें अपनी शैली, बजट और फिट के बारे में बताएं!",
        boxTitle:"100% व्यक्तिगत बॉक्स",
        boxDesc:"विशेषज्ञ स्टाइलिस्ट द्वारा चुना गया",
        homeTryTitle:"घर पर आज़माएं",
        homeTryDesc:"जो पसंद आए, वही रखें। बाकी लौटाएं।"
    },
    es: { selectCountry:"Seleccione su país" },
    fr: { selectCountry:"Sélectionnez votre pays" },
    de: { selectCountry:"Wählen Sie Ihr Land aus" },
    jp: { selectCountry:"国を選択してください" },
    cn: { selectCountry:"选择你的国家" },
    kr: { selectCountry:"국가를 선택하세요" }
};

// Save & redirect
function changeLanguage() {
    const lang = document.getElementById("countrySelect").value;
    localStorage.setItem("country", lang);
    document.getElementById("mainText").textContent = languageData[lang].selectCountry;
    setTimeout(() => window.location.href = "home.html", 600);
}

// Apply translation on every page load
function applyLanguage() {
    const lang = localStorage.getItem("country") || "en";
    document.querySelectorAll("[data-translate]").forEach(el => {
        const key = el.getAttribute("data-translate");
        if (languageData[lang][key]) {
            el.textContent = languageData[lang][key];
        }
    });
}
document.addEventListener("DOMContentLoaded", applyLanguage);
