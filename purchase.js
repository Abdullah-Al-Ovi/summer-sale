document.getElementById('purchase_btn').addEventListener("click",function(){
    const modal = document.getElementById('my_modal_1');
    modal.showModal();

})

function closePurchaseModal(){
    
    document.getElementById('totalPrice').innerText = '0.00'
    document.getElementById('discount').innerText = '0.00'
    document.getElementById('finalTotal').innerText = '0.00'
    document.getElementById('choosenProductList').innerText = ''
    document.getElementById('purchase_btn').setAttribute("disabled",true)
    document.getElementById('apply_btn').setAttribute("disabled",true)
}
    