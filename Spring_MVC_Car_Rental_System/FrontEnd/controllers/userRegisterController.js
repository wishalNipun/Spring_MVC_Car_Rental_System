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


var uNIC;
var uDrivingLicense;
var uEmail;
let uPassword;
let uImgL;
let uStatus;
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

                $("#txtCustomerUName").val(res.data.name);
                $("#txtCustomerUContactNumber").val(res.data.contactNumber);
                $("#txtCustomerUAddress").val(res.data.address);
                uNIC=res.data.nic;
                uDrivingLicense=res.data.name;
                uEmail=res.data.email;
                uPassword=res.data.password;
                uImgL=res.data.nic;
                uStatus=res.data.status;

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
    let cname=  $("#txtCustomerUName").val();
    let ccnumber=  $("#txtCustomerUContactNumber").val();
    let ccddress=  $("#txtCustomerUAddress").val();


    let cutomer={

        name: cname,
        nic: uNIC,
        address: ccddress,
        drivingLicense: uDrivingLicense,
        email: uEmail,
        password: uPassword,
        contactNumber: ccnumber,
        imageLocation: uImgL,
        status: uStatus
    }

    $.ajax({
        url: baseURL+'customer',
        method: 'put',
        contentType:"application/json",
        data:JSON.stringify(cutomer),
        dataType:"json",
        success: function (res) {
            alert(res.message);
        },
        error:function (error){
            let cause= JSON.parse(error.responseText).message;
            alert(cause);
        }

    });

    $("#customerUpdatePopUp").modal('toggle');
});
