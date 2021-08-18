const menuItems = document.querySelectorAll('.navbar-item');
const menuLinks = document.querySelectorAll('.navbar-link');


menuLinks.forEach(link =>{
    link.addEventListener('click', () =>{
        menuItems.forEach(item =>{
            item.classList.remove('active-item');
        });
        link.parentElement.classList.add('active-item');

    });
});