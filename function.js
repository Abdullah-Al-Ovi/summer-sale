function setProductsToList(product){
    const createList = document.getElementById('choosenProductList');
    const p = document.createElement('p');
    let count = createList.childElementCount;
    p.innerHTML = `
           ${count+1}. ${product}
    `
    createList.appendChild(p)
}
// ...
function getPriceNum(priceId){
    const productPriceStr = document.getElementById(priceId).innerText;
    const productPrice = parseFloat(productPriceStr);
    return productPrice;
}
// .....
function setValueById(calcId,value){
  const  valueDec = value.toFixed(2)
    document.getElementById(calcId).innerText = valueDec;
}
// //
function updatePurchaseButton(){
    const totalPriceForPurchase = parseFloat(getPriceNum("totalPrice"));
    if(totalPriceForPurchase > 0){
        document.getElementById('purchase_btn').removeAttribute('disabled')
    }
}
// //
function updateCouponButton(){
    const totalPriceForPurchase = parseFloat(getPriceNum("totalPrice"));
    if(totalPriceForPurchase === 200 || totalPriceForPurchase > 200  ){
        document.getElementById('apply_btn').removeAttribute('disabled')
    }
}
