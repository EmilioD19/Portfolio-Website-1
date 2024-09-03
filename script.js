function toggleMenu () {
    const menu = document.querySelector(".menu-links"); // document is an element on the web-page. menu will access something on the webpage
    const icon = document.querySelector(".hamburger-icon"); // document is an element on the web-page. menu will access something on the webpage
    menu.classList.toggle("open"); // when menu or icon element is clicked, it will either open or close the elements class 
    icon.classList.toggle("open");
}