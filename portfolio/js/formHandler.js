/* ==========================================
   FORM HANDLER - Contact Form
   ========================================== */

class FormHandler {
    constructor(formId) {
        this.form = document.getElementById(formId);
        
        if (this.form) {
            this.init();
        }
    }
    
    init() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }
    
    handleSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData);
        
        // Validate
        if (!this.validate(data)) {
            return;
        }
        
        // Log data (in production, send to server)
        console.log('Form submitted:', data);
        
        // Show success message
        this.showSuccess();
        
        // Reset form
        this.form.reset();
    }
    
    validate(data) {
        if (!data.name || data.name.trim().length < 2) {
            this.showError('Please enter a valid name');
            return false;
        }
        
        if (!data.email || !this.isValidEmail(data.email)) {
            this.showError('Please enter a valid email');
            return false;
        }
        
        if (!data.message || data.message.trim().length < 10) {
            this.showError('Please enter a message (at least 10 characters)');
            return false;
        }
        
        return true;
    }
    
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    showError(message) {
        alert(message);
    }
    
    showSuccess() {
        alert('Thank you for your message! I will get back to you soon.');
    }
}

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FormHandler;
}