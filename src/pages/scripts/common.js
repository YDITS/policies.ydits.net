/*

    YDITS Policies Website

    Copyright (c) よね/Yone

*/

"use strict";

(() => {
    const initializePage = () => {
        const onClickHeaderMenuButton = () => {
            $("#headerMenuButton").toggleClass('active');
            $("#headerMenu").toggleClass('active');
        }


        const loadCommonElements = () => {
            $("header").load("./common/header.html");
            $("footer").load("./common/footer.html");
        }


        loadCommonElements();


        $(document).on(
            'click',
            "#headerMenuButton",
            () => onClickHeaderMenuButton()
        );
    }


    $(() => initializePage());
})();
