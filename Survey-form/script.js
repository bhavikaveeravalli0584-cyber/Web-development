const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const numberInput = document.getElementById('number');
const messageInput = document.getElementById('message');
const messageBox = document.getElementById('form-message');

form.addEventListener('submit',function(event){
    event.preventDefault();
    
    const namee =nameInput ? nameInput.value.trim() : "";
    const email =emailInput ? emailInput.value.trim() : "";
    const number =numberInput ? numberInput.value.trim() : "";
    const message =messageInput ? messageInput.value.trim() : "";

    if (namee === "" || email === "" || number === "" || message === ""){
        alert("Please fill in all the fields.");
        return;
    }
    if (!email.includes("@")){
        messageBox.textContent = "Please enter a valid email address.";
        messageBox.className = "error";
        return;
    }

    if (!/^\d{10}$/.test(number)){
        if(messageBox){
            messageBox.textContent = "Please enter a valid phone number.";
            messageBox.className = "error";
        }
        return;
    }
    if(messageBox){
    messageBox.textContent = "Form submitted successfully!";
    messageBox.className = "success";
    }
    form.reset();
});
    