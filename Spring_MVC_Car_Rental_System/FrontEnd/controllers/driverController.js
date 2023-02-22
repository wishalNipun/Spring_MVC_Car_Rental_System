$("#btnDriverSave").click(function (){

    let formData = $("#driverForm").serialize();
    alert(formData);


    $.ajax({
        url: baseURL+"driver",
        method: "post",
        data:formData,
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