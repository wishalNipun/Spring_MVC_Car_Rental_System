function loadAllCustomers() {
    $("#tblCustomerVerification").empty();
    $.ajax({
        url: baseURL+"customer",
        dataType: "json",
        success: function (resp) {

            for (let customer of resp.data) {


                switch (customer.status) {
                    case "Deny":

                        $("#tblCustomerVerification").append(` <tr>
                    <td>${customer.name}</td>
                    <td>${customer.nic}</td>
                    <td>${customer.drivingLicense}</td>
                    <td>${customer.contactNumber}</td>
                    <td>${customer.email}</td>
                    <td>${customer.address}</td>
                    <td>${customer.imageLocation} 
                        <button class="btn btnViewCustomerImg" data-url="${customer.imageLocation}">view Image</button>
                    </td>
                    
                    <td>${customer.status}
                         <button class="btn btncusAccept"><i class="fas fa-check-circle"></i> Accept</button>
                      
                    </td>
                </tr>`);
                        break;
                    case "Accept":
                        $("#tblCustomerVerification").append(` <tr>
                    <td>${customer.name}</td>
                    <td>${customer.nic}</td>
                    <td>${customer.drivingLicense}</td>
                    <td>${customer.contactNumber}</td>
                    <td>${customer.email}</td>
                    <td>${customer.address}</td>
                    <td>${customer.imageLocation} 
                        <button class="btn btnViewCustomerImg" data-url="${customer.imageLocation}">view Image</button>
                    </td>
                    
                    <td id="denytd">
   
                         <button class="btn btncusDeny"><i class="fas fa-times-circle"></i> Deny</button>
                      
                    </td>
                </tr>`);
                        // $("#denytd>.btncusDeny").click(function (){
                        //     $("#denytd").empty();
                        //     $("#denytd").append(`<button class="btn btncusAccept"><i class="fas fa-check-circle"></i> Accept</button>`);
                        // });
                        // $("#denytd>.btncusAccept").click(function (){
                        //     $("#denytd").empty();
                        //     $("#denytd").append(`<button class="btn btncusDeny"><i class="fas fa-times-circle"></i> Deny</button>`);
                        // });
                        break;
                    case "Pending":
                        $("#tblCustomerVerification").append(` <tr>
                    <td>${customer.name}</td>
                    <td>${customer.nic}</td>
                    <td>${customer.drivingLicense}</td>
                    <td>${customer.contactNumber}</td>
                    <td>${customer.email}</td>
                    <td>${customer.address}</td>
                    <td>
                        <button class="btn btnViewCustomerImg" data-url="${customer.imageLocation}">view Image</button>
                    </td>
                    
                    <td id="pendingTD">
                         <button class="btn btncusAccept"><i class="fas fa-check-circle"></i> Accept</button>
                         <button class="btn btncusDeny"><i class="fas fa-times-circle"></i> Deny</button>
                      
                    </td>
                    
                    
                </tr>`);

                        // $("#pendingTD>.btncusDeny").click(function (){
                        //     $("#pendingTD").empty();
                        //     $("#denytd").append(`<button class="btn btncusAccept"><i class="fas fa-check-circle"></i> Accept</button>`);
                        // });
                        // $("#pendingTD>.btncusAccept").click(function (){
                        //     $("#denytd").empty();
                        //     $("#denytd").append(`<button class="btn btncusDeny"><i class="fas fa-times-circle"></i> Deny</button>`);
                        // });
                        break;
                    default:
                        $("#tblCustomerVerification").append(` <tr>
                    <td>${customer.name}</td>
                    <td>${customer.nic}</td>
                    <td>${customer.drivingLicense}</td>
                    <td>${customer.contactNumber}</td>
                    <td>${customer.email}</td>
                    <td>${customer.address}</td>
                    <td>${customer.imageLocation} 
                        <button class="btn btnViewCustomerImg" data-url="${customer.imageLocation}">view Image</button>
                    </td>
                    
                    <td>${customer.status}</td>
                </tr>`);
                }
            }
            $(".btnViewCustomerImg").click(function () {

                let url = $(this).attr('data-url');
                $("#modalCustomerImg").attr("src",baseURL+url);
                $("#modalCustomer").modal('show');
            });

        }
    });


}

loadAllCustomers();
