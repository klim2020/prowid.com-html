$( document ).ready(function() {
    $(".category__block").click( ()=>{
        $("#menu-toggle").prop( "checked", !($("#menu-toggle").prop( "checked")) );
    })
});
