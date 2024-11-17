
document.getElementById("logoutButton").addEventListener("click", function() {
    
    localStorage.removeItem("loggedInUser");
    alert("Вы вышли из аккаунта!");

    
    window.location.href = 'logpage.html'; 
});


window.addEventListener("load", function() {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!user) {
        
        window.location.href = 'logpage.html'; 
    }
});
