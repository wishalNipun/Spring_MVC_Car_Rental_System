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
        },
        error:function(error){
            var jsObject=JSON.parse(error.responseText);
            alert(jsObject.message);
        }
    });
});

