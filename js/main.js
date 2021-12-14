jQuery(function ($) {

    $(".sidebar-dropdown > a").click(function () {

        if (!$(this).parent().hasClass("active")) {
            $(this).next(".sidebar-submenu").slideDown(200);
            $(this).addClass("active");
            $(this).parent().addClass("active");            
        } else {
            $(this).next(".sidebar-submenu").slideUp(200);
            $(this).removeClass("active");
            $(this).parent().removeClass("active");
        }

    });

   
    
    $(".page-wrapper").addClass("pinned");
    $("#sidebar").hover(
        function () {
            $(".page-wrapper").addClass("sidebar-hovered");
        },
        function () {
            $(".page-wrapper").removeClass("sidebar-hovered");
        }
    )

    

});





