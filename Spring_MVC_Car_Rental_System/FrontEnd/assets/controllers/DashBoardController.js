$('#UserDashBoard').css('display','block');

$('#UserAccount').css('display','none');
$('#UserLoginAccount').css('display','none');
$('#UserStore').css('display','none');
$('#userCarCatalogue').css('display','none');
$('#UserCheckOut').css('display','none');
$('.Home').click(function (){
    $('#UserDashBoard').css('display','block');


    $('#UserAccount').css('display','none');
    $('#UserLoginAccount').css('display','none');
    $('#UserStore').css('display','none');
    $('#userCarCatalogue').css('display','none');
    $('#UserCheckOut').css('display','none');

    $('#UserDashBoardHeadNav>ul>li>a').css('color','white');
    $(' #UserDashBoardHeadNav>ul>li:nth-child(1)>a').css('color','black');
    $('#UserDashBoardHeadNav>ul>li>a').css('font-weight','400');
    $(' #UserDashBoardHeadNav>ul>li:nth-child(1)>a').css('font-weight','800');


});


$('.Account').click(function (){
    $('#UserAccount').css('display','block');


    $('#UserDashBoard').css('display','none');
    $('#UserLoginAccount').css('display','none');
    $('#UserStore').css('display','none');
    $('#userCarCatalogue').css('display','none');
    $('#UserCheckOut').css('display','none');

    $('#UserDashBoardHeadNav>ul>li>a').css('color','black');
    $('#UserDashBoardHeadNav>ul>li>a').css('font-weight','400');
    $(' #UserDashBoardHeadNav>ul>li:nth-child(2)>a').css('font-weight','800');


});

$('#logHere').click(function (){
    $('#UserLoginAccount').css('display','block');


    $('#UserDashBoard').css('display','none');
    $('#UserAccount').css('display','none');
    $('#UserStore').css('display','none');
    $('#userCarCatalogue').css('display','none');
    $('#UserCheckOut').css('display','none');
});

$('.Store').click(function (){
    $('#UserStore').css('display','block');


    $('#UserDashBoard').css('display','none');
    $('#UserAccount').css('display','none');
    $('#UserLoginAccount').css('display','none');
    $('#userCarCatalogue').css('display','none');
    $('#UserCheckOut').css('display','none');

    $('#UserDashBoardHeadNav>ul>li>a').css('color','black');
    $('#UserDashBoardHeadNav>ul>li>a').css('font-weight','400');
    $(' #UserDashBoardHeadNav>ul>li:nth-child(3)>a').css('font-weight','800');
});

$('.viewDetail').click(function (){

    $('#userCarCatalogue').css('display','block');


    $('#UserDashBoard').css('display','none');
    $('#UserAccount').css('display','none');
    $('#UserLoginAccount').css('display','none');
    $('#UserStore').css('display','none');
    $('#UserCheckOut').css('display','none');

    $('#UserDashBoardHeadNav>ul>li>a').css('color','black');
    $('#UserDashBoardHeadNav>ul>li>a').css('font-weight','400');
    $(' #UserDashBoardHeadNav>ul>li:nth-child(3)>a').css('font-weight','800');
});

$('.CheckOut').click(function (){
    $('#UserCheckOut').css('display','block');



    $('#UserDashBoard').css('display','none');
    $('#UserAccount').css('display','none');
    $('#UserLoginAccount').css('display','none');
    $('#UserStore').css('display','none');
    $('#userCarCatalogue').css('display','none');

    $('#UserDashBoardHeadNav>ul>li>a').css('color','black');
    $('#UserDashBoardHeadNav>ul>li>a').css('font-weight','400');
    $(' #UserDashBoardHeadNav>ul>li:nth-child(4)>a').css('font-weight','800');
});
