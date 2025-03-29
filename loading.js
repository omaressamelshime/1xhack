export function initLoading() {
    // Create loading overlay
    const overlay = document.createElement('div');
    overlay.className = 'loading-overlay';
    
    // Create logo container
    const logoContainer = document.createElement('div');
    logoContainer.className = 'logo-container';
    
    // Add animated logo
    const animatedLogo = document.createElement('div');
    animatedLogo.className = 'animated-logo';
    animatedLogo.innerHTML = `
        <svg viewBox="0 0 24 24">
            <path class="logo-shield" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
        </svg>
    `;
    
    // Add logo text
    const logoText = document.createElement('div');
    logoText.className = 'logo-text';
    logoText.textContent = 'hackXpro';
    
    // Add loading bar
    const loadingBar = document.createElement('div');
    loadingBar.className = 'loading-bar';
    loadingBar.innerHTML = '<div class="loading-progress"></div>';
    
    // Assemble the elements
    logoContainer.appendChild(animatedLogo);
    logoContainer.appendChild(logoText);
    logoContainer.appendChild(loadingBar);
    overlay.appendChild(logoContainer);
    
    // Add to document
    document.body.appendChild(overlay);
    
    // Remove overlay after animation
    setTimeout(() => {
        overlay.classList.add('fade-out');
        setTimeout(() => {
            overlay.remove();
        }, 500);
    }, 4000);
}