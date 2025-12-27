function validateForm(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const age = document.getElementById("age").value.trim();
    
    if (!name) {
        alert("Name is required");
        return false;
    }
    
    if (!email || !email.includes("@")) {
        alert("Valid email is required");
        return false;
    }
    
    if (!password || password.length < 6) {
        alert("Password must be at least 6 characters");
        return false;
    }
    
    if (!age || age < 18 || age > 120) {
        alert("Age must be between 18 and 120");
        return false;
    }
    
    alert("Form submitted successfully!");
    return true;
}