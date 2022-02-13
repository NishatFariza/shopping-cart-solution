function updateCaseNumber(isIncreasing){
    const caseInput =document.getElementById('case-number');
   let caseInputNumber =caseInput.value;

   if(isIncreasing == true){
    caseInputNumber =parseInt(caseInputNumber) + 1 ;
   }
  else if (caseInputNumber > 0){
    caseInputNumber =parseInt(caseInputNumber) - 1 ;
  }
  caseInput.value =caseInputNumber;

  //update case total
  const caseTotal = document.getElementById('case-total');
  caseTotal.innerText = caseInputNumber * 59;
}


document.getElementById('case-plus').addEventListener('click', function(){
   updateCaseNumber(true);
//    console.log(caseInputNumber);
});
document.getElementById('case-minus').addEventListener('click', function(){
    updateCaseNumber(false);
})