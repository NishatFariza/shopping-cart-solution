function updateProductNumber(product, price, isIncreasing){
    const productInput =document.getElementById(product +'-number');
   let productInputNumber =productInput.value;

   if(isIncreasing == true){
    productInputNumber =parseInt(productInputNumber) + 1 ;
   }
  else if (productInputNumber > 0){
    productInputNumber =parseInt(productInputNumber) - 1 ;
  }
  productInput.value =productInputNumber;

  //update total
  const productTotal = document.getElementById(product + '-total');
  productTotal.innerText = productInputNumber * price;
}

// phone increase decrease event
document.getElementById('phone-plus').addEventListener('click', function(){
   updateProductNumber('phone', 1229, true);
});
document.getElementById('phone-minus').addEventListener('click', function(){
   updateProductNumber('phone',1229, false );
})


//handle case increase decrease event
document.getElementById('case-plus').addEventListener('click', function(){
   updateProductNumber('case', 59, true);
//    console.log(caseInputNumber);
});
document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber('case', 59, false);
})