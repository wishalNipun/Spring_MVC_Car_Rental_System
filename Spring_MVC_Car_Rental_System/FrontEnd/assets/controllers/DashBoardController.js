$('#UserDashBoard').css('display','block');

$('#UserAccount').css('display','none');
$('#UserLoginAccount').css('display','none');



$('.Home').click(function (){
    $('#UserDashBoard').css('display','block');


    $('#UserAccount').css('display','none');
    $('#UserLoginAccount').css('display','none');

    $('#UserDashBoardHeadNav>ul>li>a').css('color','white');
    $(' #UserDashBoardHeadNav>ul>li:nth-child(1)>a').css('color','black');
    $('#UserDashBoardHeadNav>ul>li>a').css('font-weight','400');
    $(' #UserDashBoardHeadNav>ul>li:nth-child(1)>a').css('font-weight','800');

});


$('.Account').click(function (){
    $('#UserAccount').css('display','block');
    $('#UserAccountNav').css('display','block');

    $('#UserDashBoard').css('display','none');
    $('#UserLoginAccount').css('display','none');

    $('#UserDashBoardHeadNav>ul>li>a').css('color','black');
    $('#UserDashBoardHeadNav>ul>li>a').css('font-weight','400');
    $(' #UserDashBoardHeadNav>ul>li:nth-child(2)>a').css('font-weight','800');


});

$('#logHere').click(function (){
    $('#UserLoginAccount').css('display','block');


    $('#UserDashBoard').css('display','none');
    $('#UserAccount').css('display','none');

});
