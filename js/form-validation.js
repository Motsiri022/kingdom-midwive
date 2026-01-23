/* ========================================
   Kingdom Midwives - Form Validation
   Contact form validation and submission
   ======================================== */

// ========================================
// Form Validation Logic
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');

  if (!contactForm) return;

  // Form fields
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const messageTypeSelect = document.getElementById('messageType');
  const messageTextarea = document.getElementById('message');

  // Error messages
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageTypeError = document.getElementById('messageTypeError');
  const messageError = document.getElementById('messageError');

  // Success message
  const successMessage = document.getElementById('successMessage');

  // ========================================
  // Validation Functions
  // ========================================

  // Validate name
  const validateName = () => {
    const value = nameInput.value.trim();

    if (value === '') {
      showError(nameInput, nameError, 'Please enter your name');
      return false;
    }

    if (value.length < 2) {
      showError(nameInput, nameError, 'Name must be at least 2 characters');
      return false;
    }

    hideError(nameInput, nameError);
    return true;
  };

  // Validate email
  const validateEmail = () => {
    const value = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (value === '') {
      showError(emailInput, emailError, 'Please enter your email address');
      return false;
    }

    if (!emailRegex.test(value)) {
      showError(emailInput, emailError, 'Please enter a valid email address');
      return false;
    }

    hideError(emailInput, emailError);
    return true;
  };

  // Validate message type
  const validateMessageType = () => {
    const value = messageTypeSelect.value;

    if (value === '') {
      showError(messageTypeSelect, messageTypeError, 'Please select a message type');
      return false;
    }

    hideError(messageTypeSelect, messageTypeError);
    return true;
  };

  // Validate message
  const validateMessage = () => {
    const value = messageTextarea.value.trim();

    if (value === '') {
      showError(messageTextarea, messageError, 'Please enter your message');
      return false;
    }

    if (value.length < 10) {
      showError(messageTextarea, messageError, 'Message must be at least 10 characters');
      return false;
    }

    hideError(messageTextarea, messageError);
    return true;
  };

  // ========================================
  // Helper Functions
  // ========================================

  // Show error
  const showError = (input, errorElement, message) => {
    input.style.borderColor = '#dc2626';
    errorElement.textContent = message;
    errorElement.classList.add('active');
  };

  // Hide error
  const hideError = (input, errorElement) => {
    input.style.borderColor = '';
    errorElement.classList.remove('active');
  };

  // ========================================
  // Real-time Validation (on blur)
  // ========================================
  nameInput.addEventListener('blur', validateName);
  emailInput.addEventListener('blur', validateEmail);
  messageTypeSelect.addEventListener('blur', validateMessageType);
  messageTextarea.addEventListener('blur', validateMessage);

  // Remove error on input
  nameInput.addEventListener('input', () => {
    if (nameInput.value.trim() !== '') {
      hideError(nameInput, nameError);
    }
  });

  emailInput.addEventListener('input', () => {
    if (emailInput.value.trim() !== '') {
      hideError(emailInput, emailError);
    }
  });

  messageTypeSelect.addEventListener('change', () => {
    if (messageTypeSelect.value !== '') {
      hideError(messageTypeSelect, messageTypeError);
    }
  });

  messageTextarea.addEventListener('input', () => {
    if (messageTextarea.value.trim() !== '') {
      hideError(messageTextarea, messageError);
    }
  });

  // ========================================
  // Form Submission
  // ========================================
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validate all fields
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isMessageTypeValid = validateMessageType();
    const isMessageValid = validateMessage();

    // If all validations pass
    if (isNameValid && isEmailValid && isMessageTypeValid && isMessageValid) {
      // Hide any previous success message
      successMessage.style.display = 'none';

      // Get form data
      const formData = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        phone: phoneInput.value.trim(),
        messageType: messageTypeSelect.value,
        message: messageTextarea.value.trim(),
        timestamp: new Date().toISOString()
      };

      // Log form data (In production, this would be sent to a server)
      console.log('Form submitted:', formData);

      // Simulate form submission
      simulateFormSubmission(formData);
    } else {
      // Scroll to first error
      const firstError = contactForm.querySelector('.form-error.active');
      if (firstError) {
        const errorInput = firstError.previousElementSibling;
        if (errorInput) {
          errorInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
          errorInput.focus();
        }
      }
    }
  });

  // ========================================
  // Simulate Form Submission
  // ========================================
  const simulateFormSubmission = (formData) => {
    // Disable submit button
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;
    submitButton.disabled = true;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

    // Simulate API call delay
    setTimeout(() => {
      // Re-enable submit button
      submitButton.disabled = false;
      submitButton.innerHTML = originalButtonText;

      // Show success message
      successMessage.style.display = 'block';

      // Reset form
      contactForm.reset();

      // Scroll to success message
      successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

      // Hide success message after 10 seconds
      setTimeout(() => {
        successMessage.style.display = 'none';
      }, 10000);

      // In production, you would send the data to your server:
      /*
      fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(data => {
        // Handle success
        successMessage.style.display = 'block';
        contactForm.reset();
      })
      .catch(error => {
        // Handle error
        console.error('Error:', error);
        alert('There was an error sending your message. Please try again.');
      });
      */

    }, 1500); // 1.5 second delay to simulate network request
  };

  // ========================================
  // Phone Number Formatting (Optional Enhancement)
  // ========================================
  if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, ''); // Remove non-digits

      // Format as: (123) 456-7890
      if (value.length > 0) {
        if (value.length <= 3) {
          value = `(${value}`;
        } else if (value.length <= 6) {
          value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
        } else {
          value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
        }
      }

      e.target.value = value;
    });
  }

  // ========================================
  // Auto-resize Textarea
  // ========================================
  if (messageTextarea) {
    const autoResize = () => {
      messageTextarea.style.height = 'auto';
      messageTextarea.style.height = messageTextarea.scrollHeight + 'px';
    };

    messageTextarea.addEventListener('input', autoResize);

    // Initial resize
    autoResize();
  }

  // ========================================
  // Character Counter (Optional Enhancement)
  // ========================================
  const addCharacterCounter = () => {
    if (!messageTextarea) return;

    const counter = document.createElement('div');
    counter.style.cssText = 'text-align: right; font-size: 0.875rem; color: hsl(var(--muted-foreground)); margin-top: 4px;';
    counter.textContent = `0 characters`;

    messageTextarea.parentElement.appendChild(counter);

    messageTextarea.addEventListener('input', () => {
      const length = messageTextarea.value.length;
      counter.textContent = `${length} character${length !== 1 ? 's' : ''}`;

      // Change color based on length
      if (length < 10) {
        counter.style.color = '#dc2626';
      } else if (length < 50) {
        counter.style.color = '#f59e0b';
      } else {
        counter.style.color = '#10b981';
      }
    });
  };

  // Initialize character counter
  addCharacterCounter();
});
