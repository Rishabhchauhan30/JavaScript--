let myTodos = {
    day : 'Monday',
    Language : 0,
    LanguageDone : 0,
}

let addLanguage = function(todo , Language = 0){
    todo.Language = todo.Language + Language
}

let LanguageDone = function(todo , Language = 0){
    todo.LanguageDone = todo.LanguageDone - Language
}

let resetDay = function(todo) {
    todo.Language = 0
    todo.Language = 0
}

let getSummaryOfDay = function(todo){
    let LanguageLeft = todo.Language + todo.LanguageDone

    return `You have ${LanguageLeft} language to do!`
}

addLanguage(myTodos , 5)
addLanguage(myTodos , 3)
LanguageDone(myTodos , 8)
console.log(myTodos)
console.log(getSummaryOfDay(myTodos))