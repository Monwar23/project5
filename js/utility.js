
document.getElementById('Scroll').addEventListener('click', function () {
    const goto = document.getElementById('goto')
    goto.scrollIntoView(true)
})

const allBtn = document.getElementsByClassName('seat-btn')
let ticketCount = 0
for (const btn of allBtn) {
    btn.addEventListener('click', function () {
        if (ticketCount < 4) {
            this.style.backgroundColor = '#1DD100'
            ticketCount++
            ticketInfo('current-ticket', 'sell-seat-no')
            totalCost('total-cost')
            totalCost('grand-total')
            enableNextButton();

        }
        btn.disabled=true
        const selectContainer = document.getElementById(
            "seat-details"
          );
          const p11 = document.createElement("p");
          p11.innerText = btn.innerText;
          const p22=document.createElement('p')
          p22.innerText='Economy'
          const p33 = document.createElement("p");
          p33.innerText = '550';
      
          selectContainer.appendChild(p11)
          selectContainer.appendChild(p22)
          selectContainer.appendChild(p33)
    })
}

function ticketInfo(elementId, soldTicket) {
    const element = document.getElementById(elementId)
    const elementValueText = element.innerText
    const value = parseInt(elementValueText)
    element.innerText = value - 1
    const element1 = document.getElementById(soldTicket)
    const elementValue = element1.innerText
    const value1 = parseInt(elementValue)
    element1.innerText = value1 + 1

}
function totalCost(elementId) {
    const element = document.getElementById(elementId)
    const elementValueText = element.innerText
    const value = parseInt(elementValueText)
    element.innerText = value + 550
}

function applyCouponCode() {
    const couponCodeInput = document.getElementById('coupon-code').value;
    let discount = 0

    if (couponCodeInput === 'NEW15') {
        discount = 15
    } else if (couponCodeInput === 'Couple 20') {
        discount = 20
    }
    else{
        alert('Please provide the valid coupon code')
    }
    applyDiscount(discount)

    document.getElementById('coupon-code-btn').removeEventListener('click', applyCouponCode)

    document.getElementById('coupon-code').value = "";
}

document.getElementById('coupon-code-btn').addEventListener('click', applyCouponCode);

function applyDiscount(discountPercentage) {
    const grandTotalElement = document.getElementById('grand-total')
    const totalCostValue = parseInt(grandTotalElement.innerText)
    const discountAmount = (totalCostValue * discountPercentage) / 100
    const grandTotalValue = totalCostValue - discountAmount
    grandTotalElement.innerText = grandTotalValue


    const selectedContainer = document.getElementById(
        "discount-container"
      );
      const p = document.createElement("p")
      p.innerText = 'Discounted price'
      const p2 = document.createElement("p")
      p2.innerText = discountAmount
  
      selectedContainer.appendChild(p);
      selectedContainer.appendChild(p2);

   
}
function enableNextButton() {
    const phoneInput = document.getElementById('phone')
    const nextButton = document.getElementById('btn')

    if (phoneInput.value > 0 && ticketCount > 0) {
        nextButton.disabled = false
    } else {
        nextButton.disabled = true
    }
}
document.getElementById('phone').addEventListener('input', enableNextButton)

function finished(){
    hideElementByID('first')
    showElementByID('last')
}
function couponApply(){
    hideElementByID('one')
}
function hideElementByID(elementId){
    const element=document.getElementById(elementId)
    element.classList.add('hidden')
}
function showElementByID(elementId){
    const element=document.getElementById(elementId)
    element.classList.remove('hidden')
}
