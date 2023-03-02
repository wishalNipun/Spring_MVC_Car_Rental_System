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

    $.ajax({
        url: baseURL+"rentalDetail",
        dataType: "json",
        success: function (resp) {

            for (let r of resp.data) {

                if (r.rentalId == $("#selectReservationIds").val()) {
                    console.log(r.customer.name+""+r.pickupDate+""+r.returnDate)
                    $("#pcusname").text(r.customer.name);
                    $("#pcuspdate").text(r.pickupDate);
                    $("#pcusrdate").text(r.returnDate);

                    $("#tblPaymentTable").empty();
                    $("#tblPaymentTable").append(
                //         ` <tr>
                //     <td>${r.car.brand}</td>
                //     <td>none</td>
                //     <td>${r.car.}</td>
                //     <td><input type="text" class="form-control"  placeholder="Extra Km">
                //     </td>
                //     <td>Paid</td>
                // </tr>`
                    )
                }

            }

        }
    });

});


