let iamGlobal = 'Some value'

if(true){
    var iamLocal = 'Some more value'  // if let is replace by var then this local variable 
    iamGlobal = 'Superman'            //become global variable and can be accessed outside the scope.
    console.log(iamGlobal)
    console.log(iamLocal)
}

console.log(iamLocal)
console.log(iamGlobal)