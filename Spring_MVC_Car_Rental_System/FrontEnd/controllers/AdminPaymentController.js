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

                    setTotal();

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
                setTotal();
            }

        }
    });

    $(".PaymentButton").click(function () {

        var data=new FormData();

        data.append("rentalId",$("#selectReservationIds").val());
        data.append("amount",$("#txtPaymentTotalAmountForPay").val());
        data.append("damageCost",$("#txtPaymentDamageCost").val());
        data.append("damageDescription",$("#txtPaymentDamageDescription").val());
        data.append("extraMileage",$("#txtPaymentExtraKm").val());
        data.append("costPerExtraMileage",$("#txtPaymentDamageCost").val());
        data.append("driverWages",$("#txtPaymentDriverWages").val());

        $.ajax({
            url: baseURL+"payment",
            data:data,
            success: function (resp) {

            }
        });

    });

});

function setTotal() {
    var total=0.0;
    let TotalDueAmount=0.0;
    let TotalPaidLossDamageWaiverAmount=0.0;
    let DamageCost = 0.0;
    let ExtraKm=0.0;
    let ExtraKmCost=0.0;
    let ReturnDamageWaiverAmount=0.0;
    let DriverWages=0.0;
    TotalDueAmount= parseInt($("#txtPaymentTotalDueAmount").val());
    TotalPaidLossDamageWaiverAmount= parseInt($("#txtPaymentTotalPaidLossDamageWaiverAmount").val());




    total=TotalDueAmount+TotalPaidLossDamageWaiverAmount;
    $(".txtInputPayment").on('keyup',function (){
        console.log("keyup");
        DamageCost = parseInt($("#txtPaymentDamageCost").val());
        ExtraKm=    parseInt($("#txtPaymentExtraKm").val());
        ExtraKmCost= parseInt($("#txtPaymentExtraKmCost").val()) ;
        ReturnDamageWaiverAmount=  parseInt($("#txtPaymentReturnDamageWaiverAmount").val()) ;
        DriverWages=  parseInt($("#txtPaymentDriverWages").val());
        total=0;
        total=TotalDueAmount+TotalPaidLossDamageWaiverAmount+DamageCost+(ExtraKm*ExtraKmCost)-ReturnDamageWaiverAmount+DriverWages;
        console.log(total)
        $("#txtPaymentTotalAmountForPay").val(total);
    });
    $("#txtPaymentTotalAmountForPay").val(total);


}

