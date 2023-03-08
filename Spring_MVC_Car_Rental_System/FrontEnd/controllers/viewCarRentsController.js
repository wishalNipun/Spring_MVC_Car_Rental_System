$("#btnReloadTable").click(function () {
    loadAllCarRents();
});
function loadAllCarRents() {
     $("#tblCarRentsView").empty();
    let email =  $("#userCheckOutEmailTag").text();
    alert(email);
    $.ajax({
        url: baseURL+"rentalDetail?emm="+email,
        dataType: "json",
        success: function (res) {
            for (let c of res.data) {
                    $("#tblCarRentsView").append(`
                <tr>
                        <td>${c.car.brand}</td>
                        <td class="tblcolDriver">
                            <div>none</div>
<!--                            <button class="btn">-->
<!--                                Driver Detail-->
<!--                            </button>-->
    
                        </td>
                        <td>${c.amount}</td>
                        <td >
                            <div class="tblcoldate"><div>
                                <h1>From</h1>
                                <h2>${c.pickupDate}</h2>
                            </div>
                            <div>
                                <h1>To</h1>
                                <h2>${c.returnDate}</h2>
                            </div></div>
                        </td>
                        <td>${c.status}</td>
    
                        <td class="tblcoldelete">
                            <button class="btn">
                                <img src="assets/img/circleDelete.png"></img>
                            </button>
    
                        </td>
                    </tr>
                `);
                $("#returnPlace").val(c.returnLocation);
                $("#pickupPlace").val(c.pickupLocation);
            }



        },
        error:function(error){

        }
    });

}








