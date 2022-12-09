const nav = document.querySelector('#nav')
const menu = document.querySelector('#menu')


function openMenu() {
  menu.open()
}

function loadPage(page) {
  menu.close()
  nav.bringPageTop('pages/' + page, {animation: 'ade'})
}

