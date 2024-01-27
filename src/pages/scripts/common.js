/*

    YDITS Policies Website

    Copyright (c) よね/Yone

*/

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
