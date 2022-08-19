const hamburger = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

const menuBtnClick = (e) => {
  hamburger.classList.toggle('open')
  menu.classList.toggle('hidden')
}

// menu btn click listner
hamburger.addEventListener('click', menuBtnClick)
