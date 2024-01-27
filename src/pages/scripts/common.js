/*

    YDITS Policies Website

    Copyright (c) よね/Yone

*/

"use strict";

(() => {
    $(() => {
        const onClickHeaderMenuButton = () => {
            $("#headerMenuButton").toggleClass('active');
            $("#headerMenu").toggleClass('active');
        }

        $("header").load("./common/header.html");
        $("footer").load("./common/footer.html");

        $(document).on(
            'click',
            "#headerMenuButton",
            () => onClickHeaderMenuButton()
        );
    });
})();
