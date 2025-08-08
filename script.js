window.onload = function() {
    var userLang = navigator.language || navigator.userLanguage;
    document.getElementById("lang").innerHTML = userLang;

    if (userLang = "en") {
        window.location.href = "/en";
    };

    if (userLang = "cs") {
        window.location.href = "/cs";
    };
    
        };