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
                    <button class="viewDetail btn btn-light">ViewDetail</button>
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

                     cartId =  $(this).attr('data-register')
                    loadAllCart();

                }
            );

        }
    });



}

loadAllCards();

var cartId;

function loadAllCart() {
    let pDate =$("#txtPickUpDate").val();
    let rDate =$("#txtReturnDate")
    $.ajax({
        url: baseURL+"car?registrationNumber="+cartId,
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
                        <select class="form-control" aria-label="Default select example">
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
                        <button class="btn">
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
                        <select class="form-control" aria-label="Default select example">
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
                        <button class="btn">
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
                        <select class="form-control" aria-label="Default select example">
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
                        <button class="btn">
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
                        <select class="form-control" aria-label="Default select example">
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
                        <button class="btn">
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


}
