$("#btnDriverSave").click(function (){

    // let driverData = $("#driverForm").serialize();
    // alert(driverData);
  let id=  $("#did").val();
  let dname=  $("#dname").val();
  let dnic=  $("#dnic").val();
  let daddress=  $("#daddress").val();
  let dlicen=  $("#did").val();
  let dob=  $("#dateOfBirth").val();
  let sate=  $("#state").val();


    let driver={
        driverID: id,
        name: dname,
        nic: dnic,
        address: daddress,
        drivingLicense: dlicen,
        dob: dob,
        status: sate
    }
    alert(driver);

    $.ajax({
        url:baseURL+"driver",
        method: "post",
        data:JSON.stringify(driver),
        contentType:"application/json",
        dataType:"json",
        success: function (res) {
            alert(res.message);
            loadAllDrivers();
        },
        error:function(error){
            var jsObject=JSON.parse(error.responseText);
            alert(jsObject.message);
        }
    });
});

loadAllDrivers();
function loadAllDrivers() {
    $("#tblDriver").empty();
    $.ajax({
        url: baseURL+"driver",
        dataType: "json",
        success: function (resp) {
            console.log(resp);
            for (let driver of resp.data) {
                var row = '<tr><td>' + driver.driverID + '</td><td>' + driver.name+ '</td><td>' + driver.nic + '</td><td>' + driver.address + '</td><td>' + driver.drivingLicense + '</td><td>' + driver.dob + '</td><td>' + driver.status+ '</td></tr>';
                $("#tblDriver").append(row);
            }

        }
    });

}