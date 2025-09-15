// Simple form validation
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (name.length < 2) {
        alert('Name must be at least 2 characters');
        return;
    }
    
    if (!email.includes('@') || !email.includes('.')) {
        alert('Please enter a valid email');
        return;
    }
    
    if (message.length < 10) {
        alert('Message must be at least 10 characters');
        return;
    }
    
    alert('Message sent successfully!');
    this.reset();
});