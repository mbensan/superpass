const nav = document.querySelector('#nav')
const menu = document.querySelector('#menu')

const login = () => {
  
  if (usernameInput.value === 'user' && passwordInput.value === 'pass') {
    //ons.notification.alert('Correct!');
    nav.resetToPage('pages/home.html')
  } else {
    ons.notification.alert('Wrong username/password combination');
  }
}

function openMenu() {
  menu.open()
}

function loadPage(page) {
  menu.close()
  nav.bringPageTop('pages/' + page, {animation: 'ade'})
}

