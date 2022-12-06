const nav = document.querySelector('#nav')

const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');


const login = () => {
  
  if (usernameInput.value === 'user' && passwordInput.value === 'pass') {
    //ons.notification.alert('Correct!');
    nav.resetToPage('pages/home.html')
  } else {
    ons.notification.alert('Wrong username/password combination');
  }
}

(function quickInit() {
  nav.resetToPage('pages/home.html')
  usernameInput.value = 'user'
  passwordInput.value = 'pass'
  setTimeout(() => 
    document.querySelector('ons-button').click()
  , 100)
})()