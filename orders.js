const orderShipped = document.getElementById("shipOrder");
const orderCancelled = document.getElementById("orderCancelled");
let btnClickedCancel = 0;

document.getElementById("shipOrder").onclick = function() {
    if(btnClickedCancel == 1)
    {
        orderShipped.classList.toggle("cancel");
    }
    else
    {
        orderShipped.classList.toggle("shipped");

        orderShipped.textContent = "ORDER SHIPPED";
    }
}

document.getElementById("orderCancelled").onclick = function() {
    btnClickedCancel = 1;

    orderShipped.classList.toggle("cancel");

    orderCancelled.textContent = "ORDER CANCELLED";
}