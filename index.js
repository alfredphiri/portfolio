
    // Show loader on page load
        const pageLoader = document.getElementById('pageLoader');
        const container = document.querySelector('.container');
        window.addEventListener('load', function() {
            pageLoader.classList.add('active');
            setTimeout(() => {
                pageLoader.classList.remove('active');
                container.classList.add('visible');
            }, 2000);
        });

        const form = document.getElementById('contactForm');
        const successMsg = document.getElementById('successMessage');
        const submitBtn = form.querySelector('.submit-btn');

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            const accessKey = form.querySelector('input[name="access_key"]').value;

            // Show loader and disable submit button during submission
            pageLoader.classList.add('active');
            container.classList.remove('visible');
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';

            // Create FormData to send
            const formData = new FormData(form);

            // Send to Web3Forms API
            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Hide loader and show content
                    pageLoader.classList.remove('active');
                    container.classList.add('visible');
                    
                    // Show success message below button
                    successMsg.classList.add('show');
                    form.reset();
                    
                    setTimeout(() => {
                        successMsg.classList.remove('show');
                    }, 4000);
                } else {
                    alert('Error sending message. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error sending message. Please try again.');
            })
            .finally(() => {
                // Hide loader and re enable submit button
                pageLoader.classList.remove('active');
                container.classList.add('visible');
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';
            });
        });

        document.querySelectorAll('.skill-item').forEach(item => {
            item.addEventListener('click', function() {
                this.style.transform = 'scale(1.1) rotate(5deg)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 1000);
            });
        });

        // Set current year in footer automatically
        (function setCurrentYear(){
            const yearEl = document.getElementById('currentYear');
            if (!yearEl) return;
            const now = new Date();
            yearEl.textContent = now.getFullYear();
        })();