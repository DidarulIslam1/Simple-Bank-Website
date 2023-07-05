document.getElementById('btn-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    emailField.value = '';
    // -------------------------------------------------------------
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    passwordField.value = '';
    // -------------------------------------------------------------
    // Note: Don't verify email & password at the clint site:-
    if (email === 'didar@gmail.com' && password === 'secrete') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Please put the correct email & password')
    }
})