
document.getElementById('wooden_spoon').addEventListener("click",function(){

    setProductsToList("Wooden Spoon");

    const woodenSpoonPrice = parseFloat(getPriceNum("spoonPrice"))
    const totalPrice = parseFloat(getPriceNum("totalPrice"))
    const newTotalPrice = totalPrice + woodenSpoonPrice;

    setValueById("totalPrice",newTotalPrice);
    setValueById("finalTotal",newTotalPrice);

    updatePurchaseButton();
    updateCouponButton();

})
// ...
document.getElementById('access').addEventListener("click",function(){

    setProductsToList("K. Accessories");

    const woodenSpoonPrice = parseFloat(getPriceNum("accessPrice"))
    const totalPrice = parseFloat(getPriceNum("totalPrice"))
    const newTotalPrice = totalPrice + woodenSpoonPrice;

    setValueById("totalPrice",newTotalPrice);
    setValueById("finalTotal",newTotalPrice);

    updatePurchaseButton();
    updateCouponButton();

})
// ....
document.getElementById('home_cooker').addEventListener("click",function(){

    setProductsToList("Home Cooker");

    const woodenSpoonPrice = parseFloat(getPriceNum("cookerPrice"))
    const totalPrice = parseFloat(getPriceNum("totalPrice"))
    const newTotalPrice = totalPrice + woodenSpoonPrice;

    setValueById("totalPrice",newTotalPrice);
    setValueById("finalTotal",newTotalPrice);

    updatePurchaseButton();
    updateCouponButton();

})
// ....
document.getElementById('black_cap').addEventListener("click",function(){

    setProductsToList("Sports Black Cap");

    const woodenSpoonPrice = parseFloat(getPriceNum("capPrice"))
    const totalPrice = parseFloat(getPriceNum("totalPrice"))
    const newTotalPrice = totalPrice + woodenSpoonPrice;

    setValueById("totalPrice",newTotalPrice);
    setValueById("finalTotal",newTotalPrice);

    updatePurchaseButton();
    updateCouponButton();

})
// ...
document.getElementById('jersey').addEventListener("click",function(){

    setProductsToList("Jersey");

    const woodenSpoonPrice = parseFloat(getPriceNum("jerseyPrice"))
    const totalPrice = parseFloat(getPriceNum("totalPrice"))
    const newTotalPrice = totalPrice + woodenSpoonPrice;

    setValueById("totalPrice",newTotalPrice);
    setValueById("finalTotal",newTotalPrice);

    updatePurchaseButton();
    updateCouponButton();

})
// ...
document.getElementById('cates').addEventListener("click",function(){

    setProductsToList("Sports Cates");

    const woodenSpoonPrice = parseFloat(getPriceNum("catesPrice"))
    const totalPrice = parseFloat(getPriceNum("totalPrice"))
    const newTotalPrice = totalPrice + woodenSpoonPrice;

    setValueById("totalPrice",newTotalPrice);
    setValueById("finalTotal",newTotalPrice);

    updatePurchaseButton();
    updateCouponButton();

})
