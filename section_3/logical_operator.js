let isVerified = false
let isLoggedIn = true
let hasPaymentToken = true
let isGuest = true

if(isVerified && isLoggedIn && hasPaymentToken){
    console.log('Welcome to our site')
    console.log('You have access to all courses')
}else if(isVerified || isGuest){
    console.log('Welcome to our site')
    console.log('You have access to free courses')
}else{
    console.log('Please reconnect error occured')
}