let Grade = function(currentMarks, totalMarks){
    let percentage = (currentMarks/totalMarks)*100
    return percentage
}
let result = Grade(90, 100)
console.log(result)

if (result >=90) {
    console.log('You scored A+')
}else if(result >=70 && result <=89){
    console.log('You scored B+')
}else if(result >=50 && result <=69){
    console.log('You scored c+')
}else if(result >=33 && result <= 49){
    console.log('You scored D+')
}else{
    console.log('You failed')
}
