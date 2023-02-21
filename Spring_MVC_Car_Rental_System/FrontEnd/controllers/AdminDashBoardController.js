//$('#adminDashBoard').css('display','block');
$('#adminCustomer').css('display','none');
$('#adminAddCar').css('display','none');
$('#adminCustomerReservation').css('display','none');


$('.DashBoard').click(function (){
    $('#adminDashBoard').css('display','block');

    $('#adminCustomer').css('display','none');
    $('#adminAddCar').css('display','none');
    $('#adminCustomerReservation').css('display','none');


});


$('.Customer').click(function (){

    $('#adminCustomer').css('display','block');

    $('#adminDashBoard').css('display','none');
    $('#adminAddCar').css('display','none');
    $('#adminCustomerReservation').css('display','none');

});

$('.Cars').click(function (){
    $('#adminAddCar').css('display','block');

    $('#adminDashBoard').css('display','none');
    $('#adminCustomer').css('display','none');
    $('#adminCustomerReservation').css('display','none');
});

$('.Reservation').click(function (){
    $('#adminCustomerReservation').css('display','block');

    $('#adminAddCar').css('display','none');
    $('#adminDashBoard').css('display','none');
    $('#adminCustomer').css('display','none');

});



$('.Payment').click(function (){

});
