/**
 * Created by HP on 3/4/2019.
 */

$(document).ready(function () {
    var wow = new WOW({});
    wow.init();


    $('[data-toggle="tooltip"]').tooltip();

    $('.btn').click(function (event) {
        // event.preventDefault();
        // $(this).prop('disabled');
        // $(this).append('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>');
    });

    $('.fancy').fancybox({
        'autoSize':false,
        'width':700,
        'height':800
    });

    $('.slick-carousel').slick({
        autoplay:true,
        // dots:true,
        // arrows:true,
        slidesToShow:1,
        infinite:true,
        centerPadding:'30px'
    });

    $('.form-btn').click(function (event) {
        event.preventDefault();
        // $('.data-area').slideDown(500);
        $('.data-area').css('display','block');
        var firstName = $('.first-name').val();
        var lastName = $('.last-name').val();
        var message = $('.message').val();

        var $numberValidation = /[0-9]{10,11}$/;
        var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2}-{4}/igm;
        var $result = $numberValidation.test(lastName);
        var emailValidation = re.test(firstName);

        $('.name-value').text(firstName);
        $('.last-name-value').text(lastName);
        $('.message-value').text(message);

        if(emailValidation=='' || emailValidation==false){
            alert('email is not valid!');
        }
    });

    $('.first-name').keyup(function () {
        var re =/^[0-9]/igm;
        var value = $(this).val();
        var result = re.test(value);

        $('.first-name').focusout(function () {
            if(result==true){
                $('.alert').text('numeric value is not allowed!');
            }else{
                $('.alert').text('valid');
            }
        });

    });
    
    var ourBlog = $('.our-blog');
    var navBar = $('nav');

    ourBlog.waypoint(function (direction) {
        if(direction=='down'){
            navBar.removeClass('translate-top-100');
            navBar.addClass('navbar-sticky');

        }else{
            navBar.removeClass('navbar-sticky');
        }
    });

    var slider = $('.slider');
    slider.waypoint(function (direction) {
        if(direction=='down'){
            navBar.addClass('translate-top-100');
        }else{
            navBar.removeClass('translate-top-100');
        }
    });

    var accordion = $('#accordion');

    accordion.accordion({
        heightStyle: "content",
        collapsible:true,
    });
    // ourBlog.waypoint(function (direction) {
    //
    // });

});

// var navBar = $('nav');
// var navHeight = $('nav').height();
// navHeight = navHeight + 50;
// $(window).scroll(function () {
//    var scrollHeight = $(this).scrollTop();
//    if(scrollHeight==navHeight){
//        navBar.addClass('translate-top-100');
//    }
// });



