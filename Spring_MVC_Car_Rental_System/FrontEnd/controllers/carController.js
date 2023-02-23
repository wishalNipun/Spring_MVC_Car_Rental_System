let baseURL="http://localhost:8080/CarRental/";
$("#btnCarSave").click(function (){

    let carBrand = $("#txtCarBrand").val();
    let carModel = $("#txtCarModel").val();
    let carType= $("#txtCarType").val();
    let carTransmission = $("#txtCarTransmission").val();
    let carFuel = $("#txtCarFuel").val();
    let carNumberOfPassengers = $("#txtCarNumberOfPassengers").val();
    let carColor = $("#txtCarColor").val();
    let carRegistrationNumber = $("#txtCarRegistrationNumber").val();
    let carFreeMileage = $("#txtCarFreeMileage").val();
    let carDailyRate = $("#txtCarDailyRate").val();
    let carMonthlyRate = $("#txtCarMonthlyRate").val();
    let carPriceOfExtraKm = $("#txtCarPriceOfExtraKm").val();
    let carLastServiceMileage = $("#txtCarLastServiceMileage").val();
    let availability = "available";
    var data = new FormData();
    let file1 = $("#file1")[0].files[0];
    let file1Name = $("#file1")[0].files[0].name;
    let file2 = $("#file2")[0].files[0];
    let file2Name = $("#file2")[0].files[0].name;
    let file3 = $("#file3")[0].files[0];
    let file3Name = $("#file3")[0].files[0].name;
    let file4 = $("#file4")[0].files[0];
    let file4Name = $("#file4")[0].files[0].name;

    data.append("brand",carBrand);
    data.append("model",carModel);
    data.append("type",carType);
    data.append("transmissionType",carTransmission);
    data.append("fuelType",carFuel);
    data.append("numberOfPassengers",carNumberOfPassengers);
    data.append("color",carColor);
    data.append("registrationNumber", carRegistrationNumber);
    data.append("freeMileage",carFreeMileage);
    data.append("dailyRate",carDailyRate);
    data.append("monthlyRate",carMonthlyRate);
    data.append("priceForExtraKM",carPriceOfExtraKm);
    data.append("lastServiceMileage",carLastServiceMileage);
    data.append("availability",availability);

    data.append("img1", file1, file1Name);
    data.append("img2", file2, file2Name);
    data.append("img3", file3, file3Name);
    data.append("img4", file4, file4Name);
    alert(data);

    $.ajax({
        url: baseURL+"car",
        method: "post",
        data:data,
        async:true,
        contentType: false,
        processData: false,

        success: function (res) {
            alert(res.message);
        },
        error:function(error){

        }
    });
});