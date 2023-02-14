$('#UserDashBoard').css('display','block');

$('#UserAccount').css('display','none');

$('.Home').click(function (){
    $('#UserDashBoard').css('display','block');

    $('#UserAccount').css('display','none');
});


$('.Account').click(function (){
    $('#UserAccount').css('display','block');

    $('#UserDashBoard').css('display','none');

});
