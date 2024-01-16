// function openNav(){
//     const list = document.querySelector('.navbar-nav');

//     if(list.style.display !== 'none' ){
//         list.style.displau = 'block';
//     }else {
//         list.style.display = 'none';
//     }
// }

// const toggleButton = documet.getElementsByClassName ('hamburger-2')[0];
// const navbarlink = document.getElementsByTagName ('ul')[0];

// toggleButton.onClick =()=> {
//     navbarlink.classList.toggle('active');
// }
// const dropdown = document.querySelector('.hamburger');
// dropdown.onClick =()=>
function openNav(){
    const toggledown = document.querySelector('nav');
    // toggledown.style.display = 'block';
    if (toggledown.style.display == 'block') {
        toggledown.style.display = 'none';
    } else {
        toggledown.style.display = 'block';
    }
}