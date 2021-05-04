document.addEventListener('click', function (e) {
        const menuDrop = document.getElementById('js-menu-dropdown');
        const popup = document.querySelector('.dropdown-content');
        const target = e.target;
        if (target.id != 'js-menu-dropdown') {
            popup.classList.remove("active");

        } else {
            popup.classList.toggle("active");
        }
})