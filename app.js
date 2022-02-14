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

  //calculate total
  calculateTotal();
}


//calculate total
function getInputValue(product){
   const productInput =document.getElementById(product + '-number');
   const productNumber = parseInt(productInput.value);
   return productNumber;
}

function calculateTotal(){
   const phoneTotal =  getInputValue('phone') *1219;
   const caseTotal =  getInputValue('case') * 59;
   const subTotal =phoneTotal + caseTotal;
   const tax =subTotal /10;
   const totalamount = subTotal +tax;
  //update on the html
  document.getElementById('sub-total').innerText = subTotal;
  document.getElementById('tax-amount').innerText = tax;
  document.getElementById('total-price').innerText = totalamount;
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