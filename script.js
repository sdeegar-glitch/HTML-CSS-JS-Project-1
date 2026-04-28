document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");

    // Email validation
    if (!email.endsWith("@uppolice.in")) {
        message.style.color = "red";
        message.textContent = "Email must end with @uppolice.in";
        return;
    }

    const userData = {
        name: name,
        email: email,
        password: password
    };

    // Dummy API (intentionally treated as failure)
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => {
            // Force failure intentionally
            throw new Error("Dummy failure");
        })
        .catch(error => {
            // Show success message even after failure
            message.style.color = "green";
            message.textContent = "Login successful (simulated)";
        });
});