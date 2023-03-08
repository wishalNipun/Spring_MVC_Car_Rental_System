
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
                    <td>${c.id}</td>
                    <td>${c.customer.name}</td>
                    <td>${c.car.brand}</td>
                    <td>none</td>
                    <td>${c.pickupDate}</td>
                    <td>${c.returnDate}</td>
                    <td>${c.pickupLocation}</td>
                    <td>${c.returnLocation}</td>
                    <td>${c.amount}</td>
                    <td>${c.totalDamageWaiverAmount}</td>
                    <td><button data-img="${c.damageWaiverImageLocation}"class="btn btnViewCustomerReservationImg">view Image</button></td>
                    <td><button data-id="${c.id}" data-status="Accept" class="btn  btnReservationAccept"><i class="fas fa-check-circle"></i> Accept</button>
                    </td>
                </tr>`
                        );

                        break;
                    case "Accept":
                        $("#tblCustomerReservation").append(
                            `<tr>
                   <td>${c.id}</td>
                    <td>${c.customer.name}</td>
                    <td>${c.car.brand}</td>
                    <td>none</td>
                    <td>${c.pickupDate}</td>
                    <td>${c.returnDate}</td>
                    <td>${c.pickupLocation}</td>
                    <td>${c.returnLocation}</td>
                    <td>${c.amount}</td>
                    <td>${c.totalDamageWaiverAmount}</td>
                    <td><button data-img="${c.damageWaiverImageLocation}"class="btn btnViewCustomerReservationImg">view Image</button></td>
                    <td>
                        <button data-id="${c.id}" data-status="Deny" class="btn btnReservationDeny"><i class="fas fa-times-circle"></i></i> Deny</button>
                    </td>
                </tr>`
                        );
                        break;
                    case "Pending":

                        $("#tblCustomerReservation").append(
                            `<tr>
                     <td>${c.id}</td>
                    <td>${c.customer.name}</td>
                    <td>${c.car.brand}</td>
                    <td>none</td>
                    <td>${c.pickupDate}</td>
                    <td>${c.returnDate}</td>
                    <td>${c.pickupLocation}</td>
                    <td>${c.returnLocation}</td>
                    <td>${c.amount}</td>
                    <td>${c.totalDamageWaiverAmount}</td>
                    <td><button data-img="${c.damageWaiverImageLocation}"class="btn btnViewCustomerReservationImg">view Image</button></td>
                    <td><button data-id="${c.id}" data-status="Accept" class="btn btnReservationAccept"><i class="fas fa-check-circle"></i>  Accept</button>
                        <button data-id="${c.id}" data-status="Deny" class="btn btnReservationDeny"><i class="fas fa-times-circle"></i> Deny</button>
                    </td>
                </tr>`
                        );

                        break;
                    default:
                        $("#tblCustomerReservation").append(
                            `<tr>
                     <td>${c.id}</td>
                    <td>${c.customer.name}</td>
                    <td>${c.car.brand}</td>
                    <td>none</td>
                    <td>${c.pickupDate}</td>
                    <td>${c.returnDate}</td>
                    <td>${c.pickupLocation}</td>
                    <td>${c.returnLocation}</td>
                    <td>${c.amount}</td>
                    <td>${c.totalDamageWaiverAmount}</td>
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








