document.getElementById('purchase_btn').addEventListener("click",function(){
    const modal = document.getElementById('my_modal_1');
    modal.showModal();

})

function closePurchaseModal(){
    window.location.href = "http://127.0.0.1:5500/index.html"
}
    