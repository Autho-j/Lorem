
// Page redirecting Section
function redirectPage1() {
    window.location.href = './login.html';
    
}

function redirectPage2() {
    window.location.href = './sign-up.html';
}
// Local Storage

// Sign up Section

var userName = document.getElementById('signup-username').value;
var userEmail = document.getElementById('signup-email').value;
var userPassword = document.getElementById('signup-password').value;

var signUp = document.querySelector('.signup-btn');

signUp.addEventListener('click', () => {
    localStorage.setItem('usename', userName);
    localStorage.setItem('email', userEmail);
    localStorage.setItem('password', userPassword);
});

// Login Section
var dataEmil = document.getElementById('login-email').value;
var dataPassword = document.getElementById('login-password').value;

var logIn = document.querySelector('login-btn');

logIn.addEventListener('click', () => {
    if (dataEmil === userEmail & dataPassword === userPassword) {
        window.location.href = './landing.html';
    } else {
        alert("Username or password is incorrect");
    }
});