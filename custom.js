$(document).ready(function () {
  $(".accounting").bind("mouseover hover", function () {
    $(".nav__listdropdown").show(500);
  });
    $(".nav__listdropdown").mouseleave(function () {
      $(".nav__listdropdown").hide(300);
    });
    $("#lang__dropdown").bind("mouseover hover", function () {
      $(".nav__listdropdownlanguage").show(500);
    });
    $(".nav__listdropdownlanguage").mouseleave(function () {
      $(".nav__listdropdownlanguage").hide(300);
    });

    $("#odds__dropdown").bind("mouseover hover", function () {
      $(".nav__listdropdownodds").show(500);
    });
    $(".nav__listdropdownodds").mouseleave(function () {
      $(".nav__listdropdownodds").hide(300);
    });
  
    $("#settings__icon").on('click', function(){
        $("#account__link").removeClass("active");
        $(this).addClass("active");
        $("#account__settings").hide(300);
        $("#settings__accordion").show(300);
        
    });
     $("#account__link").on("click", function () {
       $("#settings__icon").removeClass("active");
       $(this).addClass("active");
       $("#settings__accordion").hide(300);
       $("#account__settings").show(300);
     });

     $("#user-profile").click(function(){
        $("#account-popup").toggle(300);
     });

     $(document).mouseup(function (e) {
       var container = $("#account-popup");
       // if the target of the click isn't the container nor a descendant of the container
       if (!container.is(e.target) && container.has(e.target).length === 0) {
         container.hide();
       }
     });
});
