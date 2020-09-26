var Member = 'Teacher'
if(Member === "User"){
    console.log('You are verified as a user')
    console.log('you can have your enrolled courses')
}else if(Member === "Teacher"){
    console.log('You are verified as a Teacher')
    console.log('You can see you your uploaded courses')
}else{
    console.log('Member not verified')
    console.log('Please verify yourself with verification id')
}