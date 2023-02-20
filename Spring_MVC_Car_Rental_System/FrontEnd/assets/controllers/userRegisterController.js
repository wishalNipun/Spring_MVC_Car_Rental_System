let baseURL="http://localhost:8080/BackEnd_war/";
$("#btnSignUp").click(function (){

    var formData = $("#userRegisterForm").serialize();
    alert(formData);
    console.log(formData);
    $.ajax({
        url: baseURL+"customer",
        method: "post",
        data: formData,
        dataType:"json",
        success: function (res) {
            // alert(res.message);
            // loadAllCustomers();
        },
        error:function(error){
            // var jsObject=JSON.parse(error.responseText);
            // alert(jsObject.message);
        }
    });
});