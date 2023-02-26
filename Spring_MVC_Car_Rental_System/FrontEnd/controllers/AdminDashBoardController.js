$('#adminDashBoard').css('display','block');
$('#adminCustomer').css('display','none');
$('#adminAddCar').css('display','none');
$('#adminCustomerReservation').css('display','none');
$('#adminAddDriver').css('display','none');
$('#adminManager').css('display','none');
$('#adminCarDetail').css('display','none');

$('.DashBoard').click(function (){
    $('#adminDashBoard').css('display','block');

    $('#adminCustomer').css('display','none');
    $('#adminAddCar').css('display','none');
    $('#adminCustomerReservation').css('display','none');
    $('#adminAddDriver').css('display','none');
    $('#adminManager').css('display','none');
    $('#adminCarDetail').css('display','none');
});


$('.Customer').click(function (){

    $('#adminCustomer').css('display','block');

    $('#adminDashBoard').css('display','none');
    $('#adminAddCar').css('display','none');
    $('#adminCustomerReservation').css('display','none');
    $('#adminAddDriver').css('display','none');
    $('#adminManager').css('display','none');
    $('#adminCarDetail').css('display','none');
});

$('.Cars').click(function (){
    $('#adminAddCar').css('display','block');

    $('#adminDashBoard').css('display','none');
    $('#adminCustomer').css('display','none');
    $('#adminCustomerReservation').css('display','none');
    $('#adminAddDriver').css('display','none');
    $('#adminManager').css('display','none');
    $('#adminCarDetail').css('display','none');
});

$('.Reservation').click(function (){
    $('#adminCustomerReservation').css('display','block');

    $('#adminAddCar').css('display','none');
    $('#adminDashBoard').css('display','none');
    $('#adminCustomer').css('display','none');
    $('#adminAddDriver').css('display','none');
    $('#adminManager').css('display','none');
    $('#adminCarDetail').css('display','none');

});



$('.Drivers').click(function (){
    $('#adminAddDriver').css('display','block');

    $('#adminAddCar').css('display','none');
    $('#adminDashBoard').css('display','none');
    $('#adminCustomer').css('display','none');
    $('#adminCustomerReservation').css('display','none');
    $('#adminManager').css('display','none');
    $('#adminCarDetail').css('display','none');
});

$('.Admin').click(function (){
    $('#adminManager').css('display','block');

    $('#adminAddDriver').css('display','none');
    $('#adminAddCar').css('display','none');
    $('#adminDashBoard').css('display','none');
    $('#adminCustomer').css('display','none');
    $('#adminCustomerReservation').css('display','none');
    $('#adminCarDetail').css('display','none');
});


$('#btnCarDetail').click(function (){
    $('#adminCarDetail').css('display','block');

    $('#adminManager').css('display','none');
    $('#adminAddDriver').css('display','none');
    $('#adminAddCar').css('display','none');
    $('#adminDashBoard').css('display','none');
    $('#adminCustomer').css('display','none');
    $('#adminCustomerReservation').css('display','none');

});