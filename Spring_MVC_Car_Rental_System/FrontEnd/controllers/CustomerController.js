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
                    <td>
                        <button class="btn btnViewCustomerImg" data-url="${customer.imageLocation}">view Image</button>
                    </td>
                    
                    <td>
                         <button type="button" data-nic="${customer.nic}" data-status="Accept" class="btn btncusAccept"><i class="fas fa-check-circle"></i> Accept</button>
                      
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
                    <td>
                        <button class="btn btnViewCustomerImg" data-url="${customer.imageLocation}">view Image</button>
                    </td>
                    
                    <td id="denytd">
   
                         <button type="button" data-nic="${customer.nic}" data-status="Deny" class="btn btncusDeny"><i class="fas fa-times-circle"></i> Deny</button>
                      
                    </td>
                </tr>`);

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
                         <button type="button" data-nic="${customer.nic}" data-status="Accept" class="btn btncusAccept"><i class="fas fa-check-circle"></i> Accept</button>
                         <button type="button" data-nic="${customer.nic}" data-status="Deny" class="btn btncusDeny"><i class="fas fa-times-circle"></i> Deny</button>
                      
                    </td>
                    
                    
                </tr>`);


                        break;
                    default:
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
                    
                    <td>${customer.status}</td>
                </tr>`);
                }
            }
            $(".btnViewCustomerImg").click(function () {

                let url = $(this).attr('data-url');
                $("#modalCustomerImg").attr("src",baseURL+url);
                $("#modalCustomer").modal('show');
            });

            $(".btncusAccept").click(function () {
                let nic = $(this).attr('data-nic');
                let status = $(this).attr('data-status');

                $.ajax({
                    url: baseURL+'customer/?nic='+nic+'&status='+status,
                    method: 'put',


                    success: function (res) {
                        alert(res.message);
                        loadAllCustomers();
                    },
                    error:function (error){
                        let cause= JSON.parse(error.responseText).message;
                        alert(cause);
                    }

                });
            });

            $(".btncusDeny").click(function (){
                let nic = $(this).attr('data-nic');
                let status = $(this).attr('data-status');

                $.ajax({
                    url: baseURL+'customer/?nic='+nic+'&status='+status,
                    method: 'put',


                    success: function (res) {
                        alert(res.message);
                        loadAllCustomers();
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

loadAllCustomers();
