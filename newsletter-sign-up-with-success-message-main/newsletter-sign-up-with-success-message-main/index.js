let submit = document.querySelector('.btn-one');
submit.onclick =()=> {
    let success = document.querySelector('.second-div');
    let active = document.querySelector('.first-section');
    let email = document.querySelector('input').value;
    
    let error = document.querySelector('.error')
    let errorDisplay = document.querySelector('input');
    // success.display = "block";
    if (isNaN(email) && email != "" && email.includes("@") ) {
        error.innerHTML = ""
        success.style.display = "block";
        active.style.display = "none";
    }else {
        error.innerHTML = " Valid email required."
        success.style.display = "none";
        active.style.display = "block";
        errorDisplay.style.backgroundColor = "hsla(4, 85%, 79%, 0.5)";
        errorDisplay.style.borderColor = "hsl(4, 100%, 67%) "
        errorDisplay.style.color = "hsl(4, 100%, 67%)"
        
    }
    // if (success == "block") {
    //     success.style.display = "none";
    //     active.style.display = "block";
    // }else {
    //     success.style.display = "block";
    //     active.style.display = "none";
        
    // }
}

let back = document.querySelector('.btn-two');
back.onclick = ()=> {
    let active = document.querySelector('.first-section');
    let success = document.querySelector('.second-div');
    if (active == "block"){
        active.style.display = "none";
        success.style.display = "block";
    }else {
        active.style.display = "block";
        success.style.display = "none";
    }
}

// let email = document.querySelector('input').value;
// let error = document.querySelector('.error')

// function validation() {
//     if (isNaN.email) {
//         error.innerHTML = ""
//     }else {
//         error.innerHTML = " Valid email required."
//     }
// }