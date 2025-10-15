
    const form = document.getElementById('contactForm');
        const successMsg = document.getElementById('successMessage');

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            successMsg.style.display = 'block';
            
            setTimeout(() => {
                form.reset();
                successMsg.style.display = 'none';
            }, 3000);

            // console.log('Form submitted:', { name, email, message });
        });

        document.querySelectorAll('.skill-item').forEach(item => {
            item.addEventListener('click', function() {
                this.style.transform = 'scale(1.1) rotate(5deg)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 400);
            });
        });