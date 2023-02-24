let baseURL="http://localhost:8080/CarRental/";
$("#btnSignUp").click(function (){

    let customerName = $("#txtCustomerName").val();
    let customerNIC = $("#txtCustomerNIC").val();
    let customerDrivingLicense = $("#txtCustomerDrivingLicense").val();
    let contactNumber = $("#txtCustomerContactNumber").val();
    let customerEmail = $("#txtCustomerEmail").val();
    let customerAddress = $("#txtCustomerAddress").val();
    let customerPassword = $("#txtCustomerPassword").val();
    let customerStatus = "Pending";

    var data = new FormData();
    let file = $("#file")[0].files[0];
    let fileName = $("#file")[0].files[0].name;

    data.append("name",customerName);
    data.append("nic",customerNIC);
    data.append("drivingLicense",customerDrivingLicense);
    data.append("email",customerEmail);
    data.append("password",customerPassword);
    data.append("contactNumber",contactNumber);
    data.append("address",customerAddress);

    data.append("img", file, fileName);

    data.append("status",customerStatus);

    $.ajax({
        url: baseURL+"customer",
        method: "post",
        data:data,
        async:true,
        contentType: false,
        processData: false,

        success: function (res) {
            alert(res.message);
            $('#UserViewCarRents').css('display','block');

            $('#UserDashBoard').css('display','none');
            $('#UserAccount').css('display','none');
            $('#UserLoginAccount').css('display','none');
            $('#UserStore').css('display','none');
            $('#userCarCatalogue').css('display','none');
            $('#UserCheckOut').css('display','none');

            $('#UserDashBoardHeadNav>ul>li>a').css('color','black');
            $('#UserDashBoardHeadNav>ul>li>a').css('font-weight','400');
            $(' #UserDashBoardHeadNav>ul>li:nth-child(3)>a').css('font-weight','800');
        },
        error:function(error){
            alert(JSON.parse(error.responseText).message);
        }
    });
});


$("#btnSignnUp").click(function (){

    let email =  $("#txtLogEmail").val();
    let password = $("#txtLogPassword").val();
    $.ajax({
        url: baseURL+"customer?email="+email+"&password="+password,
        method: "get",
        dataType:"json",
        success: function (res) {
            alert(res.message);
            if (res.data.password==password  && res.data.email == email){

                $("#txtCustomerUName").val(res.data.id);
                $("#txtCustomerUAddress").val(res.data.address);
                $("#txtCustomerUContactNumber").val(res.data.contactNumber);


                $('.userNameTag').text(res.data.name);
                $('.userEmailTag').text(res.data.email);
                $('#UserViewCarRents').css('display','block');

                $('#UserDashBoard').css('display','none');
                $('#UserAccount').css('display','none');
                $('#UserLoginAccount').css('display','none');
                $('#UserStore').css('display','none');
                $('#userCarCatalogue').css('display','none');
                $('#UserCheckOut').css('display','none');

                $('#UserDashBoardHeadNav>ul>li>a').css('color','black');
                $('#UserDashBoardHeadNav>ul>li>a').css('font-weight','400');
                $(' #UserDashBoardHeadNav>ul>li:nth-child(2)>a').css('font-weight','800');
            }
            $("#txtLogEmail").val("");
            $("#txtLogPassword").val("");

            $(".Account").click(function (){
                $('.userNameTag').text(res.data.name);
                $('.userEmailTag').text(res.data.email);
                $('#UserViewCarRents').css('display','block');

                $('#UserDashBoard').css('display','none');
                $('#UserAccount').css('display','none');
                $('#UserLoginAccount').css('display','none');
                $('#UserStore').css('display','none');
                $('#userCarCatalogue').css('display','none');
                $('#UserCheckOut').css('display','none');

                $('#UserDashBoardHeadNav>ul>li>a').css('color','black');
                $('#UserDashBoardHeadNav>ul>li>a').css('font-weight','400');
                $(' #UserDashBoardHeadNav>ul>li:nth-child(2)>a').css('font-weight','800');

            });
        },
        error:function(error){
            alert("Invalid email or password");
        }
    });
});

$("#customerUpdateModalShow").click(function (){
    $("#customerUpdatePopUp").modal('show');

});

$("#btnUpdateCustomer").click(function (){
    // let id=  $("#did").val();
    // let dname=  $("#dname").val();
    // let dnic=  $("#dnic").val();
    // let daddress=  $("#daddress").val();
    // let dlicen=  $("#dlicen").val();
    // let dob=  $("#dateOfBirth").val();
    // let sate=  $("#state").val();
    //
    // let driver={
    //     driverID: id,
    //     name: dname,
    //     nic: dnic,
    //     address: daddress,
    //     drivingLicense: dlicen,
    //     dob: dob,
    //     status: sate
    // }

    // $.ajax({
    //     url: baseURL+'customer',
    //     method: 'put',
    //     contentType:"application/json",
    //     data:JSON.stringify(driver),
    //     dataType:"json",
    //     success: function (res) {
    //         alert(res.message);
    //         loadAllDrivers();
    //     },
    //     error:function (error){
    //         let cause= JSON.parse(error.responseText).message;
    //         alert(cause);
    //     }
    //
    // });
});
