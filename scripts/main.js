/*

    main.js | YDITS Policies Website

    (c) よね/Yone

*/

$(() => {
    $("header").load("./common/header.html");
    $("footer").load("./common/footer.html");

    $(document).on('click', "#headerMenuButton", (e) => {
        $("#headerMenuButton").toggleClass('active');
        $("#headerMenu").toggleClass('active');
    });
});
