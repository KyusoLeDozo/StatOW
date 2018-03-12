function ajaxGet(url, callback) {
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            // Appelle la fonction callback en lui passant la réponse de la requête
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });
    req.send(null);
}

ajaxGet("https://ow-api.com/v1/stats/pc/eu/Kyuso-21706/complete",function (reponse){
    var result = JSON.parse(reponse);
    var div = document.getElementById("stats");
    var nom = document.createElement("h2");
    nom.textContent = result.name;
    var ico = document.createElement("img");
    ico.setAttribute("src",result.icon);
    div.appendChild(nom);
    div.appendChild(ico);
})
