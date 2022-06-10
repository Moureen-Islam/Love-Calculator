const firstName = document.querySelector ('#left_name')
const partnerName = document.querySelector ('#right_name')
const button = document.querySelector('.calculate')



button.addEventListener ('click', loveCalculator)
function loveCalculator (){
    let love = Math.random () * 100
    love = Math.floor (love) +1
    // alert ('Your score is ' + love)
    if (firstName.value === "" || partnerName.value === ""){
        alert("Please Enter Name!")
    }else{
        document.querySelector('#result').value = love

    }
    

}
   
    
