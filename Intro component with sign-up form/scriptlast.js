

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
         
         
            //border color
            var inputEl = document.getElementsByTagName('input');
            for (var i = 0; i < inputEl.length; i++) {
                inputEl[i].classList.add("invalidInput");
            }


            
          
          //icon error
         document.getElementById("icon-error").style.visibility = "visible";
         
        showErrorMessage(input , getFieldName(input) +"  " + "cannot be empty")
        
        }
        else
        {
            
            
               //hide icon
            icon = document.getElementById("icon-error");
            if (icon){
                icon.style.display = 'none';
                document.getElementById("icon-error").style.visibility = "hidden";
            }
            //change border color
             
             var inputEle = document.getElementsByTagName('input');
             for (var i = 0; i < inputEle.length; i++) {
                 inputEle[i].classList.remove("invalidInput")
             }
          
               
           
            showSuccessMessage(input);
           
        }
    });
}
//event listener
form.addEventListener('submit' , function(e) {

    e.preventDefault();

    checkRequired([firstName,lastName,email,password]);
});