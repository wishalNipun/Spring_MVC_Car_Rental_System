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
                    <a href="#" class="btn btn-primary">Add To Cart</a>
                </div>

            </div>`);


            }
            // $(".btnViewCustomerImg").click(function () {
            //
            //     let url = $(this).attr('data-url');
            //     $("#modalCustomerImg").attr("src",baseURL+url);
            //     $("#modalCustomer").modal('show');
            // });

        }
    });


}

loadAllCards();
