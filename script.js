const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const sideBar = document.querySelector('.container .left-section');
const sideBarItems = document.querySelectorAll('.container .left-section .sidebar .item');

menuOpen.addEventListener('click', () => {
    sideBar.style.top = '0';
});

menuClose.addEventListener('click', () => {
    sideBar.style.top = '-60vh';
});

let activeItem = sideBarItems[0];
sideBarItems.forEach(element => {
    element.addEventListener('click', () => {
        console.log('Clicked on an item');
        if (activeItem) {
            console.log('Removing active class from:', activeItem);
            activeItem.classList.remove('active');
        }
        console.log('Adding active class to:', element);
        element.classList.add('active');
        activeItem = element;
    });
});
