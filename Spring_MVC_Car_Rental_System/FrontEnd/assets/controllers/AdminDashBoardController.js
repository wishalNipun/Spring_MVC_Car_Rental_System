$('#adminDashBoard').css('display','block');
$('#adminCustomer').css('display','none');
$('#adminAddCar').css('display','none');


$('.DashBoard').click(function (){
    $('#adminDashBoard').css('display','block');

    $('#adminCustomer').css('display','none');
    $('#adminAddCar').css('display','none');


});


$('.Customer').click(function (){

    $('#adminCustomer').css('display','block');

    $('#adminDashBoard').css('display','none');
    $('#adminAddCar').css('display','none');

});

$('.Cars').click(function (){
    $('#adminAddCar').css('display','block');

    $('#adminDashBoard').css('display','none');
    $('#adminCustomer').css('display','none');
});

$('.Reservation').click(function (){


});



$('.Payment').click(function (){

});
