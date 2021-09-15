const form  = document.getElementById("form")
const firstName  = document.getElementById("firstName")
const lastName  = document.getElementById("lastName")
const email  = document.getElementById("email")
const password  = document.getElementById("password")
//show error message
const showErrorMessage = ( input , message ) => {
    const span = document.querySelector("."+input.id)  
    console.log(span.innerText = message);
}
// Show input success message
const showSuccessMessage = ( input ) => {
    const span = document.querySelector("."+input.id)
    span.innerText = "";
}
//get field name
const getFieldName = (input) =>{
    return input.name;   
} 
// check required fields
const checkRequired = (inputArr) => {    
    inputArr.forEach( (input)=>{ 
        if ( input.value.trim() === "")
        { 
            showErrorMessage(input , getFieldName(input) +"  " + "cannot be empty")
             //icon error    
             var erIcon = document.querySelectorAll(".iconError")
             for (var i = 0; i < erIcon.length; i++) {
                erIcon[i].style.visibility = "visible";;
             }    
            // place holder email color
           var El = getFieldName(input)      
           if (El === "email"){
             var emailEl = document.getElementById("email")
                emailEl.classList.add("emailInvalidInput");
                emailEl.placeholder='email@example.com';
           } else{
            document.getElementsByName('first Name')[0].placeholder='';
            document.getElementsByName('last Name')[0].placeholder='';
            document.getElementsByName('password')[0].placeholder='';
           }
           // border color        
            var inputEl = document.getElementsByTagName('input');
            for (var i = 0; i < inputEl.length; i++) {
                inputEl[i].classList.add("invalidInput");
            }         
        }
        else
        {
            showSuccessMessage(input);
            //hide icon
            var erIcon = document.querySelectorAll(".iconError")
             for (var i = 0; i < erIcon.length; i++) {               
                erIcon[i].style.display = "none";
                            }            
            //change border color
            if (input.value != ""){
                input.classList.add("validInput")     
            }             
    }
    });
}
//event listener
form.addEventListener('submit' , function(e) {
    e.preventDefault();
    checkRequired([firstName,lastName,email,password]);
});