function validate() {
    const fullName = document.myForm.fullname.value;
    const emailAddress = document.myForm.email.value;
    const phoneNumber = document.myForm.phone.value;

    const nameError = document.querySelector('.nameErr');
    const emailError = document.querySelector('.emailErr');
    const phoneError = document.querySelector('.numberErr');

    if (fullName == '') {
        nameError.innerHTML = 'This field is empty.';
        return false;
    }else {
        nameError.innerHTML = '';
    }
    // return false;
    if (isNaN(fullName)) {
        nameError.innerHTML = '';
    }else{
        nameError.innerHTML = ' This field should contain letters only.'
        return false;
    }
    // return false;
    if (emailAddress == '') {
        emailError.innerHTML = 'This field is empty.';
        return false;
    }else {
        emailError.innerHTML = '';
    }
    // return false;
    if (isNaN(emailAddress)) {
        emailError.innerHTML = '';
    }else {
        emailError.innerHTML = 'This field does not require number.';
        return false;
    }
    // return false;
    if (phoneNumber == '') {
        phoneError.innerHTML = 'This field is empty.';
        return false;
    }else {
        phoneError.innerHTML = '';
    }
    // return false;
    if (phoneNumber.length !== 11) {
        phoneError.innerHTML = '11 digits required.';
        return false;
    }else {
        phoneError.innerHTML = '';
    }
    // return false;
    if (isNaN(phoneNumber)) {
        phoneError.innerHTML = 'Numbers required.';
        // return false;
    }else {
        phoneError.innerHTML = '';
    }
    // return false;
}

const hamburger = document.querySelector('.hamburger');

hamburger.onclick =()=> {
    const dropdown = document.querySelector('nav');
    // dropdown.style.display = 'block';
    if (dropdown.style.display == 'none') {
        dropdown.style.display = 'block';
    }else {
        dropdown.style.display = 'none';
    }
}

// function openNav(){
//     const toggledown = document.querySelector('nav');
//     // toggledown.style.display = 'block';
//     if (toggledown.style.display == 'block') {
//         toggledown.style.display = 'none';
//     } else {
//         toggledown.style.display = 'block';
//     }
// }