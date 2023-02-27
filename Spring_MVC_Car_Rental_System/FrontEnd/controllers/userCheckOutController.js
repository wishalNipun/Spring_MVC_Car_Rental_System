//
// $("#btnSignUp").click(function (){
//
//     let customerName = $("#txtCustomerName").val();
//     let customerNIC = $("#txtCustomerNIC").val();
//     let customerDrivingLicense = $("#txtCustomerDrivingLicense").val();
//     let contactNumber = $("#txtCustomerContactNumber").val();
//     let customerEmail = $("#txtCustomerEmail").val();
//     let customerAddress = $("#txtCustomerAddress").val();
//     let customerPassword = $("#txtCustomerPassword").val();
//     let customerStatus = "Pending";
//
//     $('.userNameTag').text(customerName);
//     $('.userEmailTag').text(customerEmail);
//
//     var data = new FormData();
//     let file = $("#file")[0].files[0];
//     let fileName = $("#file")[0].files[0].name;
//
//     data.append("name",customerName);
//     data.append("nic",customerNIC);
//     data.append("drivingLicense",customerDrivingLicense);
//     data.append("email",customerEmail);
//     data.append("password",customerPassword);
//     data.append("contactNumber",contactNumber);
//     data.append("address",customerAddress);
//
//     data.append("img", file, fileName);
//
//     data.append("status",customerStatus);
//
//     $.ajax({
//         url: baseURL+"customer",
//         method: "post",
//         data:data,
//         async:true,
//         contentType: false,
//         processData: false,
//
//         success: function (res) {
//             alert(res.message);
//             $('#UserViewCarRents').css('display','block');
//
//             $('#UserDashBoard').css('display','none');
//             $('#UserAccount').css('display','none');
//             $('#UserLoginAccount').css('display','none');
//             $('#UserStore').css('display','none');
//             $('#userCarCatalogue').css('display','none');
//             $('#UserCheckOut').css('display','none');
//
//             $('#UserDashBoardHeadNav>ul>li>a').css('color','black');
//             $('#UserDashBoardHeadNav>ul>li>a').css('font-weight','400');
//             $(' #UserDashBoardHeadNav>ul>li:nth-child(3)>a').css('font-weight','800');
//
//             $(".Account").click(function (){
//                 $('#UserViewCarRents').css('display','block');
//
//                 $('#UserDashBoard').css('display','none');
//                 $('#UserAccount').css('display','none');
//                 $('#UserLoginAccount').css('display','none');
//                 $('#UserStore').css('display','none');
//                 $('#userCarCatalogue').css('display','none');
//                 $('#UserCheckOut').css('display','none');
//
//                 $('#UserDashBoardHeadNav>ul>li>a').css('color','black');
//                 $('#UserDashBoardHeadNav>ul>li>a').css('font-weight','400');
//                 $(' #UserDashBoardHeadNav>ul>li:nth-child(2)>a').css('font-weight','800');
//
//             });
//         },
//         error:function(error){
//             alert(JSON.parse(error.responseText).message);
//         }
//     });
// });




$("#btnSendRentalRequest").click(function (){

    let email =  $("#userCheckOutEmailTag").text();
    console.log(objectArray);


    $.ajax({
        url: baseURL+"customer?em="+email,
        method: "get",
        dataType:"json",
        success: function (res) {

            switch (res.data.status){
                case "Accept":


                    for (const o of objectArray) {

                        var data = new FormData();
                        data.append("registrationId",o.id)
                        data.append("mail",email)
                        data.append("PickUpDate",o.pickUpdate)
                        data.append("ReturnDate",o.returnDate)
                        data.append("totalDamageWaiverAmount",$('#txtPickUpVenueCheckOut').val())
                        data.append("pickupLocation",$('#txtPickUpVenueCheckOut').val())
                        data.append("returnLocation",$('#txtReturnVenueCheckOut').val())
                        data.append("img", o.file, o.filename);

                        $.ajax({
                            url: baseURL+"rental",
                            method: "post",
                            data:data,
                            async:true,
                            contentType: false,
                            processData: false,

                            success: function (res) {
                                alert(res.message);

                            },
                            error:function(error){
                                alert(JSON.parse(error.responseText).message);
                            }
                        });
                    }
                    break;
                case "Deny":
                    alert(res.data.name +" Register Denied by Admin");

                    break;
                case "Pending":
                    alert(res.data.name +" Register Pending need to Accept Admin");
                    break;
                default:
                    alert(res.data.name +" try again");
            }


        },
        error:function(error){
            alert("login and try again");
        }
    });
});