/**!
 * 
 * YDITS Policies Website
 * 
 * Copyright (C) よね/Yone
 * 
 */


(() => {
    initializePage();


    function initializePage() {
        loadCommonElements();
        const headerMenuButton = document.getElementById("headerMenuButton");
        headerMenuButton.addEventListener("click", (event) => onClickHeaderMenuButton(event));
    }


    function loadCommonElements() {
        $("header").load("./common/header.html");
        $("footer").load("./common/footer.html");
    }


    function onClickHeaderMenuButton(event) {
        $("#headerMenuButton").toggleClass("active");
        $("#headerMenu").toggleClass("active");
    }
})();
