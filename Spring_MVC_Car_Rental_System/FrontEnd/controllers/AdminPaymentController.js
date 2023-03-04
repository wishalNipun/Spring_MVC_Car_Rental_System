loadRentalIds();
function loadRentalIds() {
    $("#selectReservationIds").empty();
    $.ajax({
        url: baseURL+"rental",
        dataType: "json",
        success: function (resp) {

            for (let r of resp.data) {
                $("#selectReservationIds").append(
                    `<option value="${r.rentalId}" >${r.rentalId}</option>`
                );

            }

        }
    });

}
$("#selectReservationIds").change(function () {
    $("#tblPaymentTable").empty();
    $.ajax({
        url: baseURL+"rentalDetail",
        dataType: "json",
        success: function (resp) {

            for (let r of resp.data) {

                if (r.rentalId == $("#selectReservationIds").val()) {

                    $("#pcusname").text(r.customer.name);
                    $("#pcuspdate").text(r.pickupDate);
                    $("#pcusrdate").text(r.returnDate);

                    $("#tblPaymentTable").append(
                        ` <tr>
                    <td>${r.car.brand}</td>
                    <td>none</td>
                    <td>${r.amount}</td>
                    <td>${r.totalDamageWaiverAmount}</td>      
                </tr>`)



                }

            }

        }
    });
    $.ajax({
        url: baseURL+"rental",
        dataType: "json",
        success: function (resp) {

            for (let r of resp.data) {
                if (r.rentalId == $("#selectReservationIds").val()) {

                    $("#txtPaymentTotalDueAmount").val(r.amount);
                    $("#txtPaymentTotalPaidLossDamageWaiverAmount").val(r.totalDamageWaiverAmount);

                }
            }

        }
    });
    var test=0;
    $(".txtInputPayment").on('keyup',function (){

        $("#txtPaymentTotalDueAmount").val();
        $("#txtPaymentTotalPaidLossDamageWaiverAmount").val()
        $("#txtPaymentDamageCost").val()
        $("#txtPaymentExtraKm").val()
        $("#txtPaymentExtraKmCost").val()
        $("#txtPaymentReturnDamageWaiverAmount").val()
        $("#txtPaymentDriverWages").val()
        $("#txtPaymentDamageDescription").val()
        $("#txtPaymentTotalAmountForPay").val()




    });

});


