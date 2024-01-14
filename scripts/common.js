/*

    YDITS Policies Website

    Copyright (c) よね/Yone

*/

void (() => {
    $(() => {
        $("header").load("./common/header.html");
        $("footer").load("./common/footer.html");

        $(document).on('click', "#headerMenuButton", () => {
            $("#headerMenuButton").toggleClass('active');
            $("#headerMenu").toggleClass('active');
        });
    });
})();
