
document.getElementById('apply_btn').addEventListener("click",function(){
   
    const totalPriceForPurchase = parseFloat(getPriceNum("totalPrice"));
    if(document.getElementById('couponCode').value === 'SELL200'){
        const discountPrice = (totalPriceForPurchase * 20) / 100;
        
        document.getElementById('discount').innerText = discountPrice.toFixed(2);
        document.getElementById('couponCode').value = '';
        const finalTotal = totalPriceForPurchase - discountPrice;
    
    setValueById("finalTotal",finalTotal)
    }
    else{
        document.getElementById('couponCode').value = ''
        alert("Enter a valid coupon code")

    }

})
