document.addEventListener('DOMContentLoaded', () => {

    // --- NAVBAR SCROLL EFFECT ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-sm');
            navbar.style.background = 'rgba(255, 255, 255, 1)';
        } else {
            navbar.classList.remove('shadow-sm');
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });

    // --- DIAMOND BUILDER TABS LOGIC ---
    const builderTabs = document.querySelectorAll('.b-tab');
    const builderContents = document.querySelectorAll('.builder-content');

    builderTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            builderTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');

            // Hide all contents
            builderContents.forEach(content => content.classList.remove('active'));

            // Show target content
            const target = tab.getAttribute('data-tab');
            document.querySelector(`.builder-content[data-content="${target}"]`).classList.add('active');
        });
    });

    // --- HELPER FUNCTION: SMOOTH IMAGE UPDATE ---
    function updateImage(imgId, newSrc) {
        const img = document.getElementById(imgId);
        if(img && newSrc) {
            img.style.opacity = '0.5'; // Fade out
            setTimeout(() => {
                img.src = newSrc;
                img.onload = () => { img.style.opacity = '1'; }; // Fade in when loaded
                setTimeout(() => img.style.opacity = '1', 50);   // Fallback
            }, 150);
        }
    }

    // --- GENERIC HANDLER FOR ALL BUILDER BUTTONS ---
    // This one function handles Shape, Carat, Color, Clarity, and Cut
    function setupBuilderButtons(buttonSelector, labelId, imageId, labelSuffix = '') {
        const buttons = document.querySelectorAll(buttonSelector);
        const label = document.getElementById(labelId);

        buttons.forEach(btn => {
            btn.addEventListener('click', function() {
                // 1. Toggle Active State
                buttons.forEach(b => b.classList.remove('active'));
                this.classList.add('active');

                // 2. Update Label
                // If button has specific 'data-label', use it. Otherwise use button text.
                const labelText = this.getAttribute('data-label') || this.textContent;
                if(label) label.textContent = `${labelText}${labelSuffix}`;

                // 3. Update Image (Read directly from HTML attribute)
                const newImageSrc = this.getAttribute('data-image');
                updateImage(imageId, newImageSrc);
            });
        });
    }

    // Initialize all groups
    setupBuilderButtons('.shape-btn', 'shapeLabel', 'shapeImage'); 
    setupBuilderButtons('[data-carat]', 'caratLabel', 'caratImage', ' Carat');
    setupBuilderButtons('[data-color]', 'colorLabel', 'colorImage', ' - Color');
    setupBuilderButtons('[data-clarity]', 'clarityLabel', 'clarityImage', ' - Clarity');
    setupBuilderButtons('[data-cut]', 'cutLabel', 'cutImage');

});