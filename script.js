// Get the img object using its Id
img = document.getElementById("img1");
// Function to increase image size
function enlargeImg() {
  // Set image size to 1.5 times original
  img.style.transform = "scale(1.1)";
  // Animation effect 
  img.style.transition = "transform 0.25s ease";
}
// Function to reset image size
function resetImg() {
  // Set image size to original
  img.style.transform = "scale(1)";
  img.style.transition = "transform 0.25s ease";
}

//Begin onload function
window.onload = function test(){
  //Get all DOM form elements
  var formListener = document.forms.form_user;
  //Function processes & validates form data, if so desired
  function formProcess() {
    //DOM form elements variables
    var nameInput = formListener.name;
    var emailInput = formListener.email;
    var numberInput = formListener.number;
    var dobInput = formListener.dob;

      /*function go(){
        let formInputs=document.getElementsByClassName("userInput");
        for (let item of formInputs) {
          alert(item.value);
        }
      }
*/
  }
    
    //Event Listeners
    formListener.onsubmit = formProcess;
}



function go(){
  
    alert("Thank you we will be in contact shortly");
  }