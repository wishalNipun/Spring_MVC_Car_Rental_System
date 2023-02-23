function loadAllCustomers() {
    $("#tblCustomerVerification").empty();
    $.ajax({
        url: baseURL+"customer",
        dataType: "json",
        success: function (resp) {

            for (let customer of resp.data) {


                let csutomerRow = ` <tr>
                    <td>${customer.name}</td>
                    <td>${customer.nic}</td>
                    <td>${customer.drivingLicense}</td>
                    <td>${customer.contactNumber}</td>
                    <td>${customer.email}</td>
                    <td>${customer.address}</td>
                    <td>${customer.imageLocation} 
                        <button class="btn btnViewCustomerImg" data-url=" ${customer.imageLocation} ">view Image</button>
                    </td>
                    
                    <td>
                       <button class="btn btncusDeny"><i class="fas fa-check-circle"></i> Deny</button>
                       <button class="btn btncusAccept"><i class="fas fa-times-circle"></i> Accept</button>
                    </td>
                </tr>`

                if (`${customer.status}` =="Pending" ){
                    $(".btncusAccept").css("display","none")
                    $(".btncusDeny").css("display","block")
                }
                if (`${customer.status}` =="Accept"){
                    $(".btncusAccept").css("display","block")
                    $(".btncusDeny").css("display","none")
                }
                if (`${customer.status}` =="Deny"){
                    $(".btncusAccept").css("display","block")
                    $(".btncusDeny").css("display","none")
                }
                $("#tblCustomerVerification").append(csutomerRow);
            }
            $(".btnViewCustomerImg").click(function () {

                let url = $(this).attr('data-imageUrl');
                $("#modalCustomerImg").attr("src",baseURL+url);
                $("#modalCustomer").modal('show');
            });

        }
    });


}

loadAllCustomers();


