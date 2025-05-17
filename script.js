// Login-Überprüfung
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Demo-Check (ersetzen für echte Nutzung!)
    if (username === "admin" && password === "1234") {
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("errorMsg").style.display = "block";
    }
});

// Logout-Button
document.getElementById("logoutBtn")?.addEventListener("click", function() {
    window.location.href = "index.html";
});