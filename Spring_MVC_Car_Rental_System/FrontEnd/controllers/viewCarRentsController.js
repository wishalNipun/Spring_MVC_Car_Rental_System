$("#btnReloadTable").click(function () {
    loadAllCarRents();
});
function loadAllCarRents() {
     $("#tblCarRentsView").empty();
    let email =  $("#userCheckOutEmailTag").text();
    alert(email);
    $.ajax({
        url: baseURL+"rentalDetail?em="+email,
        method: "get",
        dataType:"json",
        success: function (res) {

        alert("nic"+res.data.nic)

        },
        error:function(error){

        }
    });

}








