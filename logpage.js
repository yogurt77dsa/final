const loginCheck = (event) => {
    event.preventDefault();
    const form = event.target;

    if (form.checkValidity()) {
        const email = form.email.value;
        const password = form.password.value;
        const rememberMe = document.getElementById("rememberMe").checked;

        if (rememberMe) {
            
            localStorage.setItem("loggedInUser", JSON.stringify({ email, password }));
        } else {
            
            localStorage.removeItem("loggedInUser");
        }

        alert("Успешно выполнен вход!");

        setTimeout(() => {
            window.location.href = 'index.html'; 
        }, 1000);
    } else {
        form.reportValidity();
    }
};


document.getElementById("loginForm").addEventListener("submit", loginCheck);


window.addEventListener("load", function() {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (user) {
        window.location.href = 'index.html'; 
    }
});
