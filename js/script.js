$(".show_hide").click(function(e){
    e.preventDefault();
    $(this).toggleClass("active");
    if($(this).hasClass("active")){
    $(".txt").attr("type","text");
    $( ".show_hide" ).addClass( "fa-eye-slash" ).removeClass("fa-eye");
    }else{
    $(".txt").attr("type","password");
    $( ".show_hide" ).addClass( "fa-eye" ).removeClass("fa-eye-slash");
    }
    })
    