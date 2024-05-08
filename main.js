var room1 = document.getElementById('roomsub1')
var room2 = document.getElementById('roomsub2')
var room3 = document.getElementById('roomsub3')
var room4 = document.getElementById('roomsub4')
var room5 = document.getElementById('roomsub5')
var room6 = document.getElementById('roomsub6')
var room7 = document.getElementById('roomsub7')
var room8 = document.getElementById('roomsub7')
var paymentTab = document.getElementById('Payback')
var rmPrice = document.getElementById('rmPrice')
var payPic = document.getElementById('paypic')
var X_pay = document.getElementById('X_pay')
var btn = document.getElementById('btn')
var email = document.getElementById('Email')
var cardNum = document.getElementById('Card_Number')
var expDate = document.getElementById('expDate')
var cvv = document.getElementById('CVV')
var password = document.getElementById('Password')
function cancelPaytab(){
    paymentTab.style.display = 'none'
}
function paymntSb(){
    if(email.value == ''){
        email.style.borderBottom = '1px solid red'
        email.onfocus = function(){
        email.style.borderBottom = '1px solid #1ed6fe'
        }
    }
    if(cardNum.value == ''){
        cardNum.style.borderBottom = '1px solid red'
        cardNum.onfocus = function(){
            cardNum.style.borderBottom = '1px solid #1ed6fe'
        }
    }
    if(expDate.value == ''){
        expDate.style.borderBottom = '1px solid red'
        expDate.onfocus = function(){
            expDate.style.borderBottom = '1px solid #1ed6fe'
        }
    }
    if(cvv.value == ''){
        cvv.style.borderBottom = '1px solid red'
        cvv.onfocus = function(){
            cvv.style.borderBottom = '1px solid #1ed6fe'
        }
    }
    if(password.value == ''){
        password.style.borderBottom = '1px solid red'
        password.onfocus = function(){
            password.style.borderBottom = "1px solid #1ed6fe"
        }
    }
}
function LuxRm(){
    paymentTab.style.display = 'flex'
    payPic.style.backgroundImage = 'url(HotelRoom.png)'
}
function LuxRm2(){
    paymentTab.style.display = 'flex'
    rmPrice.innerHTML = '35,000'
    payPic.style.backgroundImage = 'url(HotelRoom2.jpg)'
}
function LuxRm3(){
    paymentTab.style.display = 'flex'
    rmPrice.innerHTML = '45,000'
    payPic.style.backgroundImage = 'url(HotelRoom1.png)'
}
function LuxRm4(){
    paymentTab.style.display = 'flex'
    rmPrice.innerHTML = '30,000'
    payPic.style.backgroundImage = 'url(HotelRoom3.png)'
}
function LuxRm5(){
    paymentTab.style.display = 'flex'
    rmPrice.innerHTML = '50,000'
    payPic.style.backgroundImage = 'url(Exclusive_Family.png)'
}
function LuxRm6(){
    paymentTab.style.display = 'flex'
    rmPrice.innerHTML = '100,000'
    payPic.style.backgroundImage = 'url(VIP.png)'
}
function LuxRm7(){
    paymentTab.style.display = 'flex'
    rmPrice.innerHTML = '150,000'
    payPic.style.backgroundImage = 'url(VVIP_Suite.png)'
}
function LuxRm8(){
    paymentTab.style.display = 'flex'
    rmPrice.innerHTML = '250,000'
    payPic.style.backgroundImage = 'url(IMG_20231225_205900.jpg)'
}

var burger = document.getElementById('burger')
var burgerDrp = document.getElementById('burgerDrp')
var openMenu = document.getElementById('openMenu')
var closeMenu = document.getElementById('closeMenu')
function burgerDropdown(){
    burgerDrp.style.display = 'grid'
    openMenu.style.display = 'none'
    closeMenu.style.display = 'block'
}
function closeBurger(){
    burgerDrp.style.display = 'none'
    openMenu.style.display = 'block'
    closeMenu.style.display = 'none'
}