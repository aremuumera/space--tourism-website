const openMenu =document.querySelector('.menu svg:first-child');
const closeMenu =document.querySelector('.menu svg:last-child');
const nav = document.getElementsByTagName('nav')[0];

if(window.innerWidth <= 970){
    nav.style.display = 'none';  
}else{
    nav.style.display = 'block'; 
}
openMenuValidation = () =>{
    openMenu.style.display = 'none';
    closeMenu.style.display = 'block';
    nav.style.display = 'block';
    nav.classList.add('slide-left');
}
openMenu.addEventListener('click', openMenuValidation);


closeMenuValidation = () =>{
    openMenu.style.display = 'block';
    closeMenu.style.display = 'none';
    nav.style.display = 'none';
    nav.classList.add('slide-out-right');
}
closeMenu.addEventListener('click', closeMenuValidation);



let navActive = document.querySelector('.l-active');
// let nav_before_active = window.getComputedStyle(navActive, '::before');

const navLinks = document.querySelectorAll('nav ul li a');
const navLink = document.querySelector('nav ul li a');
let activeNav = document.querySelector('.nav.active');
// navLinks.forEach((link) => {
//     link.addEventListener('click', (e) => {
//         // e.preventDefault();
//         console.log(e);
//         if(e.isTrusted === true){
//             navActive.classList.remove('not-active');
//             link.classList.add('not-active');
//             navActive = link;

//             return;
//         }
//     });
// });

// document.addEventListener('DOMContentLoaded', () => {
//     // Get the current page URL
//     const currentPage = window.location.pathname;
  
//     // Highlight the active link
//     const activeLink = document.querySelector(`navLink[href="${currentPage}"]`);
//     if (activeLink) {
//       activeLink.classList.add('active');
//     }
  
//     // Add click event listeners to update the active link
//     const navLinks = document.querySelectorAll('nav ul li a');
//     navLinks.forEach(link => {
//       link.addEventListener('click', function(event) {
//         // Remove 'active' class from the previously active link
//         const prevActiveLink = document.querySelector('.l-active');
//         if (prevActiveLink ) {
//           prevActiveLink.classList.remove('active');
//         }
  
//         // Add 'active' class to the clicked link
//         link.classList.add('active');
//       });
//     });
//   });
  


// document.addEventListener('DOMContentLoaded', () => {
// navLinks.forEach(link => {
//     link.addEventListener('click', () => {
//         // e.preventDefault(); // Prevent the default behavior of the link
//         // Removed 'active' class from the currently active link
//         navActive.classList.remove('active');
//         // Added 'active' class to the clicked link
//         link.classList.add('active');
//         // Updated the reference to the currently active link
//         navActive = link;
//         // nav_before_active = window.getComputedStyle(navActive, '::before');
//         // Display the ::before pseudo-element for the currently active/clicked link
//         // link.setProperty('display', 'block', 'important');
//         link.style.display = 'block';
//     });
// });
// });

// navLinks.forEach(link =>{

//     l
//     link.classList.add('nav-active');
//     link.addEventListener('click', linkValidation);
// });

// //  navActive.getComputedStyle(':before').style.display = 'none';
// link.getComputedStyle(':before').style.display = 'block';
// navActive.getComputedStyle(':before') = link.getComputedStyle(':before')


// const techLink = document.querySelectorAll('.tech-link');
// const techActiveLink = document.querySelectorAll('.tech-active-link');

// techActiveLink .forEach(tech => {
//         tech.addEventListener('click', (e) => {
//             console.log(e);
//             tech.classList.add('tech-li');
//             tech.classList.remove('tech-li');
//             techActiveLink = tech;
//             tech.style.display = 'block';
//             console.log(e);
//         });
//     });

// console.log(techActiveLink);