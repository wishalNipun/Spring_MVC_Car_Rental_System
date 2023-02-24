$("#btnAdminSave").click(function (){

    let adminData = $("#adminForm").serialize();

    $.ajax({
        url: baseURL+"admin",
        method: "post",
        data: adminData,
        dataType:"json",
        success: function (res) {
            alert(res.message);
            loadAllAdmins();
        },
        error:function(error){
            var jsObject=JSON.parse(error.responseText);
            alert(jsObject.message);
        }
    });

});

loadAllAdmins();
function loadAllAdmins() {
    $("#tblAdmin").empty();
    $.ajax({
        url: baseURL+"admin",
        dataType: "json",
        success: function (resp) {

            for (let admin of resp.data) {


                var row = '<tr><td>' + admin.adminId + '</td><td>' +admin.email+ '</td><td>' + admin.username + '</td><td>' + admin.password + '</td></tr>';
                $("#tblDriver").append(row);
            }
           // bindRowClickEvents()
         //   setTextFieldValues("","","","","","","")
        }
    });

}
//
// function bindRowClickEvents() {
//     $("#tblDriver>tr").click(function () {
//         let id = $(this).children(":eq(0)").text();
//         let name = $(this).children(":eq(1)").text();
//         let nic = $(this).children(":eq(2)").text();
//         let address = $(this).children(":eq(3)").text();
//         let licen = $(this).children(":eq(4)").text();
//         let dateOfBirth = $(this).children(":eq(5)").text();
//         let state = $(this).children(":eq(6)").text();
//
//         $("#did").val(id);
//         $("#dname").val(name);
//         $("#dnic").val(nic);
//         $("#daddress").val(address);
//         $("#dlicen").val(licen);
//         $("#dateOfBirth").val(dateOfBirth);
//         $("#state").val(state);
//
//     });
// }
//
// function setTextFieldValues(id, name, address, nic,licen,dateOfBirth,state) {
//     $("#did").val(id);
//     $("#dname").val(name);
//     $("#dnic").val(nic);
//     $("#daddress").val(address);
//     $("#dlicen").val(licen);
//     $("#dateOfBirth").val(dateOfBirth);
//     $("#state").val(state);
// }
// $("#btnDriverDelete").click(function () {
//     let id = $("#did").val();
//     $.ajax({
//         url: baseURL+"driver?id=" + id + "",
//         method: "delete",
//         dataType:"json",
//         success: function (resp) {
//             alert(resp.message);
//             loadAllDrivers();
//         },
//         error:function (error){
//             alert(JSON.parse(error.responseText).message);
//         }
//     });
// });
//
// $("#btnDriverUpdate").click(function () {
//
//     let id=  $("#did").val();
//     let dname=  $("#dname").val();
//     let dnic=  $("#dnic").val();
//     let daddress=  $("#daddress").val();
//     let dlicen=  $("#dlicen").val();
//     let dob=  $("#dateOfBirth").val();
//     let sate=  $("#state").val();
//
//     let driver={
//         driverID: id,
//         name: dname,
//         nic: dnic,
//         address: daddress,
//         drivingLicense: dlicen,
//         dob: dob,
//         status: sate
//     }
//
//     $.ajax({
//         url: baseURL+'driver',
//         method: 'put',
//         contentType:"application/json",
//         data:JSON.stringify(driver),
//         dataType:"json",
//         success: function (res) {
//             alert(res.message);
//             loadAllDrivers();
//         },
//         error:function (error){
//             let cause= JSON.parse(error.responseText).message;
//             alert(cause);
//         }
//
//     });
// });