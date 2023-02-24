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
                $("#tblAdmin").append(row);
            }
           bindRowClickEvents()
           setTextFieldValues("","","","")
        }
    });

}

function bindRowClickEvents() {
    $("#tblAdmin>tr").click(function () {
        let id = $(this).children(":eq(0)").text();
        let email = $(this).children(":eq(1)").text();
        let username = $(this).children(":eq(2)").text();
        let password = $(this).children(":eq(3)").text();

        $("#txtAdminId").val(id);
        $("#txtAdminEmail").val(email);
        $("#txtAdminUserName").val(username);
        $("#txtAdminPassword").val(password);

    });
}

function setTextFieldValues(id, email, username, password) {

    $("#txtAdminId").val(id);
    $("#txtAdminEmail").val(email);
    $("#txtAdminUserName").val(username);
    $("#txtAdminPassword").val(password);
}
$("#btnAdminDelete").click(function () {
    let id = $("#txtAdminId").val();
    $.ajax({
        url: baseURL+"admin?id=" + id + "",
        method: "delete",
        dataType:"json",
        success: function (resp) {
            alert(resp.message);
            loadAllAdmins();
        },
        error:function (error){
            alert(JSON.parse(error.responseText).message);
        }
    });
});

$("#btnAdminUpdate").click(function () {

    let id = $("#txtAdminId").val();
    let email = $("#txtAdminEmail").val();
    let username = $("#txtAdminUserName").val();
    let password = $("#txtAdminPassword").val();

    let admin={
        adminId: id,
        email: email,
        username: username,
        password: password,

    }

    $.ajax({
        url: baseURL+'admin',
        method: 'put',
        contentType:"application/json",
        data:JSON.stringify(admin),
        dataType:"json",
        success: function (res) {
            alert(res.message);
            loadAllDrivers();
        },
        error:function (error){
            let cause= JSON.parse(error.responseText).message;
            alert(cause);
        }

    });
});