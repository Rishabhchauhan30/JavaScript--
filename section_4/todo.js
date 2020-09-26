const mytodos = []
mytodos.push('complete Data Structures')
mytodos.push('complete Java Script')
mytodos.push('complete CSS')

mytodos.forEach(function(todo, index){
    console.log(`your task number ${index + 1} is -- ${todo}`)
})

for (let i= 0; i < mytodos.length; i++) {
    console.log(mytodos[i]);
}