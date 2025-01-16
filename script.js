document.addEventListener("DOMContentLoaded" , () => {

    const form = document.getElementById("mainForm")
    const name = document.getElementById("name")
    const email = document.getElementById("email")
    const phone = document.getElementById("phone")
    const password = document.getElementById("password")
    const message = document.getElementById("message")


    form.addEventListener('submit' , (e)=>{
        e.preventDefault();
        if(checkInputs()){
            showModal()
        }
    });

    function resetInputs(){
        name.value = ""
        email.value = ""
        phone.value = ""
        password.value = ""
        message.value = ""
    }
    
    // Validations
    name.addEventListener('input' , ()=>{
        vaildateField(name , name.value.trim() !== '' , "Name cannot be blank")
    })
    

    email.addEventListener('input' , ()=>{
        vaildateField(email , isEmail(email.value.trim()), "Not a Valid Email")
    })

    phone.addEventListener('input' , ()=>{
        vaildateField(phone , isPhone(phone.value.trim()), "Not a Valid phone number")
    })

    password.addEventListener('input' , ()=>{
        vaildateField(password , password.value.trim().length >= 8 , "Password must be at least 8 charactars")
    })

    message.addEventListener('input' , ()=>{
        vaildateField(message , message.value.trim() !== '' , "Message cannot be blank")
    })


    function checkInputs(){
        let isValid = true;
        vaildateField(name , name.value.trim() !== '' , "Name cannot be blank");
        vaildateField(email , isEmail(email.value.trim()), "Not a Valid Email")
        vaildateField(phone , isPhone(phone.value.trim()), "Not a Valid phone number")
        vaildateField(password , password.value.trim().length >= 8 , "Password must be at least 8 charactars")
        vaildateField(message , message.value.trim() !== '' , "Message cannot be blank")

        document.querySelectorAll(".form-control").forEach((control) => {
            if(control.classList.contains('error')){
                isValid = false
            }
        });
        
        return isValid;
    }

    function vaildateField(input , condition , errorMSG){
        if(condition){
            setSuccess(input)
        } else{
            setError(input , errorMSG);
        }
    }

    function setError(input , message){
        const formControl = input.parentElement;
        const icon = formControl.querySelector(".icon")
        formControl.className = 'form-control error';
        icon.className = "icon fas fa-times-circle"
        input.placeholder = message;
    }
    function setSuccess(input){
        const formControl = input.parentElement;
        const icon = formControl.querySelector(".icon")
        formControl.className = 'form-control success';
        icon.className = "icon fas fa-check-circle"
    }

    function isEmail(email){
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)
    }

    function isPhone(phone){
        return /^[0-9]{11}$/.test(phone)
    }

    function showModal(){

        const modal = document.getElementById('successModal')
        modal.style.display = 'block'

        const closeBtn = document.querySelector('.close-button')

        closeBtn.onclick = function(){
            modal.style.display = 'none'
            window.location.reload()
        }

        window.onclick = function (event){
            if(event.target === modal){
                modal.style.display = "none"
                location.reload()
            }
        }
    }
})

