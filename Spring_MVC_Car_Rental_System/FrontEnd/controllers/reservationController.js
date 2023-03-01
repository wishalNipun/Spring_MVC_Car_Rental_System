
loadAllReservations();

function loadAllReservations() {
    $("#tblCustomerReservation").empty();
    $.ajax({
        url: baseURL+"rentalDetail",
        dataType: "json",
        success: function (resp) {

            for (let c of resp.data) {


                switch (c.status) {
                    case "Deny":
                        $("#tblCustomerReservation").append(
                            `<tr>
                    <td>${c.customer.name}</td>
                    <td>${c.car.brand}</td>
                    <td>none</td>
                    <td>${c.pickupDate}</td>
                    <td>${c.returnDate}</td>
                    <td>${c.pickupLocation}</td>
                    <td>${c.returnLocation}</td>
                    <td><button data-img="${c.damageWaiverImageLocation}"class="btn btnViewCustomerReservationImg">view Image</button></td>
                    <td><button data-id="${c.id}" data-status="Accept" class="btn  btnReservationAccept"><i class="fas fa-times-circle"></i> Accept</button>
                    </td>
                </tr>`
                        );

                        break;
                    case "Accept":
                        $("#tblCustomerReservation").append(
                            `<tr>
                    <td>${c.customer.name}</td>
                    <td>${c.car.brand}</td>
                    <td>none</td>
                    <td>${c.pickupDate}</td>
                    <td>${c.returnDate}</td>
                    <td>${c.pickupLocation}</td>
                    <td>${c.returnLocation}</td>
                    <td><button data-img="${c.damageWaiverImageLocation}"class="btn btnViewCustomerReservationImg">view Image</button></td>
                    <td>
                        <button data-id="${c.id}" data-status="Deny" class="btn btnReservationDeny"><i class="fas fa-check-circle"></i> Deny</button>
                    </td>
                </tr>`
                        );
                        break;
                    case "Pending":

                        $("#tblCustomerReservation").append(
                            `<tr>
                    <td>${c.customer.name}</td>
                    <td>${c.car.brand}</td>
                    <td>none</td>
                    <td>${c.pickupDate}</td>
                    <td>${c.returnDate}</td>
                    <td>${c.pickupLocation}</td>
                    <td>${c.returnLocation}</td>
                    <td><button data-img="${c.damageWaiverImageLocation}"class="btn btnViewCustomerReservationImg">view Image</button></td>
                    <td><button data-id="${c.id}" data-status="Accept" class="btn btnReservationAccept"><i class="fas fa-times-circle"></i> Accept</button>
                        <button data-id="${c.id}" data-status="Deny" class="btn btnReservationDeny"><i class="fas fa-check-circle"></i> Deny</button>
                    </td>
                </tr>`
                        );

                        break;
                    default:
                        $("#tblCustomerReservation").append(
                            `<tr>
                    <td>${c.customer.name}</td>
                    <td>${c.car.brand}</td>
                    <td>none</td>
                    <td>${c.pickupDate}</td>
                    <td>${c.returnDate}</td>
                    <td>${c.pickupLocation}</td>
                    <td>${c.returnLocation}</td>
                    <td><button  data-img="${c.damageWaiverImageLocation}"class="btn">view Image</button></td>
                    <td>  </td>
                </tr>`
                        );
                }

            }
            $(".btnViewCustomerReservationImg").click(function () {

                let url = $(this).attr('data-img');
                $("#modalCustomerReservationImg").attr("src", baseURL + url);
                $("#modalCustomerReservation").modal('show');
            });

            $(".btnReservationAccept").click(function () {
                let id = $(this).attr('data-id');
                let status = $(this).attr('data-status');

                $.ajax({
                    url: baseURL+'rentalDetail?id='+id+'&status='+status,
                    method: 'put',


                    success: function (res) {
                        alert(res.message);
                        loadAllReservations();
                    },
                    error:function (error){
                        let cause= JSON.parse(error.responseText).message;
                        alert(cause);
                    }

                });
            });

            $(".btnReservationDeny").click(function (){
                let nic = $(this).attr('data-id');
                let status = $(this).attr('data-status');

                $.ajax({
                    url: baseURL+'rentalDetail?id='+nic+'&status='+status,
                    method: 'put',


                    success: function (res) {
                        alert(res.message);
                        loadAllReservations();
                    },
                    error:function (error){
                        let cause= JSON.parse(error.responseText).message;
                        alert(cause);
                    }

                });
            });
        }

    });

}



//
// $("#btnCarUpdate").click(function () {
//
//
//
//     let carRegistrationNumber =  $("#txtCarUpdateRegistrationNumber").val();
//     let carBrand =  $("#txtCarUpdateBrand").val();
//     let carModel =  $("#txtCarUpdateModel").val();
//     let carType = $("#selectCarUpdateType").val();
//     let carTransmission =$("#selectCarUpdateTransmission").val();
//     let carFuel = $("#selectCarUpdateFuel").val();
//     let carNumberOfPassengers =  $("#txtCarUpdateNumberOfPassengers").val();
//     let carColor =$("#txtCarUpdateColor").val();
//     let  carFreeMileage = $("#txtCarUpdateFreeMileage").val( );
//     let carFreeMonthlyMileage =$("#txtCarUpdateMonthlyFreeMileage").val();
//     let carDailyRate =$("#txtCarUpdateDailyRate").val();
//     let carMonthlyRate = $("#txtCarUpdateMonthlyRate").val();
//     let carPriceOfExtraKm = $("#txtCarUpdatePriceOfExtraKm").val();
//     let carLastServiceMileage =  $("#txtCarUpdateLastServiceMileage").val();
//     let availability =  $("#selectCarUpdateAvailability").val();
//     var frontImageLocation ;
//     var backImageLocation ;
//     var bgTransparentImageLocation ;
//     var sideImageLocation ;
//
//     $.ajax({
//         url: baseURL+"car?registrationNumber="+carRegistrationNumber,
//         method: "get",
//         dataType:"json",
//         success: function (res) {
//             frontImageLocation= res.data.frontImageLocation;
//             backImageLocation=res.data.backImageLocation;
//             bgTransparentImageLocation=res.data.bgTransparentImageLocation;
//             sideImageLocation=res.data.sideImageLocation;
//
//             let car={
//
//
//
//                 registrationNumber:carRegistrationNumber,
//                 type:carType,
//                 brand:carBrand,
//                 model: carModel,
//                 fuelType:carFuel,
//                 transmissionType:carTransmission,
//                 numberOfPassengers:carNumberOfPassengers,
//                 color:carColor,
//                 lastServiceMileage:carLastServiceMileage,
//                 freeMileage:carFreeMileage,
//                 freeMonthlyMileage:carFreeMonthlyMileage,
//                 frontImageLocation:frontImageLocation,
//                 sideImageLocation:sideImageLocation,
//                 backImageLocation:backImageLocation,
//                 bgTransparentImageLocation:bgTransparentImageLocation,
//                 dailyRate:carDailyRate,
//                 monthlyRate:carMonthlyRate,
//                 priceForExtraKM:carPriceOfExtraKm,
//                 availability:availability
//             }
//
//             $.ajax({
//                 url: baseURL+'car',
//                 method: 'put',
//                 contentType:"application/json",
//                 data:JSON.stringify(car),
//                 dataType:"json",
//                 success: function (res) {
//                     alert(res.message);
//                     loadAllCars();
//                 },
//                 error:function (error){
//                     let cause= JSON.parse(error.responseText).message;
//                     alert(cause);
//                 }
//
//             });
//
//         },
//         error:function(error){
//             // let cause= JSON.parse(error.responseText).message;
//             // alert(cause);
//         }
//     });
//     setccTextFieldValues("","","","","","","","","","","","","","","","","","","",)
//
// });





