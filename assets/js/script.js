const toggle = document.getElementById('icon-menu'),
    sideBar = document.getElementById('side-bar'),
    headerSideBar = document.getElementById('header-side-bar'),
    containerUser = document.getElementById('container-user'),
    user = document.getElementById('user'),
    main = document.getElementById('main')

toggle.addEventListener('click', () => {
    sideBar.classList.toggle('show')
    logo.classList.toggle('active')
    headerSideBar.classList.toggle('active_space_between')
    user.classList.toggle('active_flex')
    containerUser.classList.toggle('active_space_between')
    main.classList.toggle('active_margin_main')
})

const navLink = document.querySelectorAll('#nav-link')

function activeBackground () {
    navLink.forEach(i => i.classList.remove('active_background'));

    this.classList.add('active_background') 
}

navLink.forEach(i => i.addEventListener('click', activeBackground))