function loadAllCards() {
    $("#cardsStore").empty();
    $.ajax({
        url: baseURL+"car",
        dataType: "json",
        success: function (resp) {

            for (let c of resp.data) {

                $("#cardsStore").append(`
                <div class="card" style="width: 18rem;">
                <img src="assets/img/carStore.png" class="card-img-top" alt="...">
                <hr>
                <div class="card-body border-bottom-0">
                    <h5 class="card-title">${c.brand}</h5>
                    <p class="card-text">${c.type} - ${c.transmissionType}</p>
                    <button data-register="${c.registrationNumber}" class="btnViewDetail btn btn-light">ViewDetail</button>
                </div>
                <hr>
                <div class="card-body text-center">
                    <div>
                        <div>
                            <h5>Daily</h5>
                            <p>${c.dailyRate}</p>
                        </div>
                        <div>
                            <h5>Monthy</h5>
                            <p>${c.monthlyRate}</p>
                        </div>
                        <div>
                            <h5>freeMileage</h5>
                            <p>${c.freeMileage}</p>
                        </div>
                    </div>
                    <button type="button" data-register="${c.registrationNumber}" class="btn btn-primary btnAddToCart">Add To Cart</button>
                </div>

            </div>`);
            }
            $(".btnAddToCart").click(function () {

                    if (cartId.length == 0){
                        console.log(cartId.length);
                        cartId.push($(this).attr('data-register'));
                        alert("Added Cart")
                        loadAllCart();
                    }else {
                        var count =0
                        for (let id of cartId) {

                            if(id == $(this).attr('data-register')){
                               count =count+1;
                            }
                        }
                        if (count==0){
                            cartId.push($(this).attr('data-register')) ;
                            alert("Added Cart")
                            loadAllCart();
                        }else {
                            alert("Already Added");
                        }
                    }

                }
            );
            $(".btnViewDetail").click(function () {
                detail=$(this).attr('data-register')
                carDetailSet();
                $('#userCarCatalogue').css('display','block');


                $('#UserDashBoard').css('display','none');
                $('#UserAccount').css('display','none');
                $('#UserLoginAccount').css('display','none');
                $('#UserStore').css('display','none');
                $('#UserCheckOut').css('display','none');
                $('#UserViewCarRents').css('display','none');

                $('#UserDashBoardHeadNav>ul>li>a').css('color','black');
                $('#UserDashBoardHeadNav>ul>li>a').css('font-weight','400');


            });
        }
    });



}
var cartId=[];
var detail;
loadAllCards();

function carDetailSet(){
    $.ajax({
        url: baseURL+"car?registrationNumber="+detail,
        method: "get",
        dataType:"json",
        success: function (res) {
            $(".carCatelImg1").attr("src",baseURL+res.data.frontImageLocation);
            $(".carCatelImg2").attr("src",baseURL+res.data.backImageLocation);
            $(".carCatelImg3").attr("src",baseURL+res.data.bgTransparentImageLocation);
            $(".carCatelImg4").attr("src",baseURL+res.data.sideImageLocation);

            $(".carCatelBrand").text(res.data.brand);
            $(".carCatelModel").text(res.data.model);
            $(".carCatelTransmission").text(res.data.transmissionType);
            $(".carCatelFuel").text(res.data.fuelType);
            $(".carCatelType").text(res.data.type);
            $(".carCatelNoOfPassengers").text(res.data.numberOfPassengers);
            $(".carCatelFreeMileage").text(res.data.freeMileage);
            $(".carCatelFreeMonthlyMileage").text(res.data.freeMonthlyMileage);
            $(".carCatelCostPerExtraKm").text(res.data.priceForExtraKM);
            $(".carCatelDaily").text(res.data.dailyRate);
            $(".carCatelMonthly").text(res.data.monthlyRate);

            switch (res.data.type){
                case "Luxury":
                    $(".carLostDamageWaivor").text(20000);
                    break;
                case "Premium":
                    $(".carLostDamageWaivor").text(15000);
                    break;
                case "General":
                    $(".carLostDamageWaivor").text(10000);
                    break;
                default:
                    $(".carLostDamageWaivor").text("0");
            }


            $(".btnAddToCart").attr('data-register',detail);
        },
        error:function(error){
            let cause= JSON.parse(error.responseText).message;
            alert(cause);
        }
    });
}

function loadAllCart() {
    let pDate =$("#txtPickUpDate").val();
    let rDate =$("#txtReturnDate").val();
    $.ajax({
        url: baseURL+"car?registrationNumber="+cartId[cartId.length-1],
        method: "get",
        dataType:"json",
        success: function (res) {
            switch (res.data.type) {
                case "Luxury":
                    $("#tableCheckOutCart").append(
                        `<tr>
                    <td>${res.data.brand}</td>
                    <td>${res.data.dailyRate}</td>
                    <td>${res.data.monthlyRate}</td>
                    <td>20000</td>
                    <td class="tblcoldate">
                        <div>
                            <h1>From</h1>
                            <h2>${pDate}</h2>
                        </div>
                        <div>
                            <h1>To</h1>
                            <h2>${rDate}</h2>
                        </div>
                    </td>
                    <td class="tblcolSelect">
                        <select data-id="${res.data.registrationNumber}" class="form-control" aria-label="Default select example">
                            <option selected="">None</option>
                            <option  value="Driver added">add Driver</option>

                        </select>
                    </td>
                    <td class="tblcolDamageUpload">
                        <div>
                            <img src="assets/img/uploadIcon.png">
                            <div>
                                <p>Lost Damage Waiver</p>
                                <input type="file"  >
                            </div>
                        </div>

                    </td>
                    <td class="tblcoldelete">
                        <button data-id="${res.data.registrationNumber}" type="button " class="btn btnCartDeleteCheckOut">
                            <img src="assets/img/circleDelete.png">
                        </button>

                    </td>
                </tr>`);
                    break;
                case "Premium":
                    $("#tableCheckOutCart").append(
                        `<tr>
                    <td>${res.data.brand}</td>
                    <td>${res.data.dailyRate}</td>
                    <td>${res.data.monthlyRate}</td>
                    <td>15000</td>
                    <td class="tblcoldate">
                        <div>
                            <h1>From</h1>
                            <h2>${pDate}</h2>
                        </div>
                        <div>
                            <h1>To</h1>
                            <h2>${rDate}</h2>
                        </div>
                    </td>
                    <td class="tblcolSelect">
                        <select data-id="${res.data.registrationNumber}" class="form-control" aria-label="Default select example">
                            <option selected="">None</option>
                            <option value="Driver added">add Driver</option>

                        </select>
                    </td>
                    <td class="tblcolDamageUpload">
                        <div>
                            <img src="assets/img/uploadIcon.png">
                            <div>
                                <p>Lost Damage Waiver</p>
                                <input type="file"  >
                            </div>
                        </div>

                    </td>
                    <td class="tblcoldelete">
                         <button data-id="${res.data.registrationNumber}" type="button" class="btn btnCartDeleteCheckOut">
                            <img src="assets/img/circleDelete.png">
                        </button>

                    </td>
                </tr>`);
                    break;
                case "General":
                    $("#tableCheckOutCart").append(
                        `<tr>
                    <td>${res.data.brand}</td>
                    <td>${res.data.dailyRate}</td>
                    <td>${res.data.monthlyRate}</td>
                    <td>10000</td>
                    <td class="tblcoldate">
                        <div>
                            <h1>From</h1>
                            <h2>${pDate}</h2>
                        </div>
                        <div>
                            <h1>To</h1>
                            <h2>${rDate}</h2>
                        </div>
                    </td>
                    <td class="tblcolSelect">
                        <select data-id="${res.data.registrationNumber}" class="form-control" aria-label="Default select example">
                            <option selected="">None</option>
                            <option value="Driver added">add Driver</option>

                        </select>
                    </td>
                    <td class="tblcolDamageUpload">
                        <div>
                            <img src="assets/img/uploadIcon.png">
                            <div>
                                <p>Lost Damage Waiver</p>
                                <input type="file"  >
                            </div>
                        </div>

                    </td>
                    <td class="tblcoldelete">
                         <button data-id="${res.data.registrationNumber}" type="button" class="btn btnCartDeleteCheckOut">
                            <img src="assets/img/circleDelete.png">
                        </button>

                    </td>
                </tr>`);
                    break;
                default:
                    $("#tableCheckOutCart").append(
                        `<tr>
                    <td>${res.data.brand}</td>
                    <td>${res.data.dailyRate}</td>
                    <td>${res.data.monthlyRate}</td>
                    <td>0</td>
                    <td class="tblcoldate">
                        <div>
                            <h1>From</h1>
                            <h2>${pDate}</h2>
                        </div>
                        <div>
                            <h1>To</h1>
                            <h2>${rDate}</h2>
                        </div>
                    </td>
                    <td class="tblcolSelect">
                        <select data-id="${res.data.registrationNumber}" class="form-control" aria-label="Default select example">
                            <option selected="">None</option>
                            <option value="Driver added">add Driver</option>

                        </select>
                    </td>
                    <td class="tblcolDamageUpload">
                        <div>
                            <img src="assets/img/uploadIcon.png">
                            <div>
                                <p>Lost Damage Waiver</p>
                                <input type="file"  >
                            </div>
                        </div>

                    </td>
                    <td class="tblcoldelete">
                         <button data-id="${res.data.registrationNumber}" type="button" class="btn btnCartDeleteCheckOut">
                            <img src="assets/img/circleDelete.png">
                        </button>

                    </td>
                </tr>`);
                    ;
            }


        },
        error:function(error){
            let cause= JSON.parse(error.responseText).message;
            alert(cause);
        }
    });
    // for(var customer of customers){
    //     var row = `<tr><td>${customer.id}</td><td>${customer.name}</td><td>${customer.address}</td><td>${customer.salary}</td></tr>`;
    //     $("#tblCustomers").append(row);
    // }

}
// function searchRegisterNumber(id){
//     for(let c of cartId){
//         console.log(c);
//
//         if (c.id == id){
//             console.log("aaaa"+c);
//             return c;
//         }
//     }
//     return null;
//
// }
//
// function deleteCart(id) {
//     let c = searchRegisterNumber(id);
//     if (c != null) {
//         let indexNumber = cartId.indexOf(c);
//         cartId.splice(indexNumber, 1);
//        // loadAllCart();
//         return true;
//     } else {
//         return false;
//     }
// }
//
// $(".btnCartDeleteCheckOut").click(function (){
//     let deleteID = $(this).attr('data-id');
//
//     Swal.fire({
//         title: 'Are you sure?',
//         text: "You won't be able to revert this!",
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonColor: '#3085d6',
//         cancelButtonColor: '#d33',
//         confirmButtonText: 'Yes, delete it!'
//     }).then((result) => {
//         if (result.isConfirmed) {
//             deleteCart(deleteID)
//
//             Swal.fire(
//                 'Deleted!',
//                 'Cart data is deleted.',
//                 'success'
//             )
//
//         }
//     })
//
//
//
// });