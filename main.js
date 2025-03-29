import { config } from './config.js';
import { loadVulnerabilityContent } from './vulnerabilities.js';
import { initLoading } from './loading.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize loading animation
    initLoading();
    
    // Delay the main initialization
    setTimeout(() => {
        setupMobileMenu();
        setupThemeToggle();
        setupLoginForm();
        setupLogoutButton();
        loadVulnerabilities();
        setupModalEvents();
        loadTeamMembers();
        loadPartners();
        handleScroll();
        window.addEventListener('scroll', handleScroll);
    }, 4000);
});

const validUsername = 'hackxpro';
const validPassword = 'aj7o';

function setupLogoutButton() {
    const logoutBtn = document.createElement('button');
    logoutBtn.className = 'logout-btn';
    logoutBtn.innerHTML = `
        <svg viewBox="0 0 24 24">
            <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/>
        </svg>
        تسجيل الخروج
    `;
    
    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('verificationExpiry');
        document.getElementById('login-overlay').style.display = 'flex';
        window.location.reload();
    });
    
    const navControls = document.querySelector('.nav-controls');
    navControls.insertBefore(logoutBtn, navControls.firstChild);
}

function setupMobileMenu() {
    const hamburger = document.createElement('button');
    hamburger.className = 'hamburger-menu';
    hamburger.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;
    
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
    
    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    document.querySelector('.main-nav').insertBefore(hamburger, navLinks);
}

function setupThemeToggle() {
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = `
        <svg class="sun-icon" viewBox="0 0 24 24">
            <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>
        </svg>
        <svg class="moon-icon" viewBox="0 0 24 24" style="display:none;">
            <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-3.03 0-5.5-2.47-5.5-5.5 0-1.82.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/>
        </svg>
    `;
    
    const navControls = document.createElement('div');
    navControls.className = 'nav-controls';
    navControls.appendChild(themeToggle);
    
    document.querySelector('.main-nav').appendChild(navControls);
    
    const currentTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcons(currentTheme);
    
    themeToggle.addEventListener('click', () => {
        const theme = document.documentElement.getAttribute('data-theme');
        const newTheme = theme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcons(newTheme);
    });
}

function updateThemeIcons(theme) {
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');
    if (theme === 'light') {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    } else {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    }
}

function setupLoginForm() {
    const loginForm = document.getElementById('login-form');
    
    // Check if already logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
        document.getElementById('login-overlay').style.display = 'none';
    }

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === validUsername && password === validPassword) {
            localStorage.setItem('isLoggedIn', 'true');
            document.getElementById('login-overlay').style.display = 'none';
        } else {
            alert('بيانات الدخول غير صحيحة');
        }
    });
}

function loadVulnerabilities() {
    const vulnGrid = document.getElementById('vulnGrid');
    const mainContent = document.querySelector('main');
    
    config.vulnerabilities.forEach(vuln => {
        const card = document.createElement('div');
        card.className = 'vuln-card';
        
        card.innerHTML = `
            <div class="vuln-card-banner" ${vuln.imageUrl ? `style="background-image: url('${vuln.imageUrl}')"` : ''}>
                ${!vuln.imageUrl ? generateSecurityPattern(vuln.type) : ''}
            </div>
            <div class="vuln-card-content">
                <h3>${vuln.title}</h3>
                <span class="vuln-severity ${vuln.severity.toLowerCase()}">${vuln.severity}</span>
                <p>${vuln.description}</p>
                <button class="access-btn">
                    <svg viewBox="0 0 24 24" style="width: 20px; height: 20px; margin-left: 8px;">
                        <path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                    </svg>
                    استخدام الثغرة
                </button>
            </div>
        `;
        vulnGrid.appendChild(card);

        const accessBtn = card.querySelector('.access-btn');
        accessBtn.addEventListener('click', () => showSubscriptionModal());
    });
}

function enableVulnAccess() {
    const vulnCards = document.querySelectorAll('.vuln-card');
    vulnCards.forEach(card => {
        const button = card.querySelector('.access-btn');
        button.classList.add('enabled');
        button.replaceWith(button.cloneNode(true));
        
        card.querySelector('.access-btn').addEventListener('click', (e) => {
            e.preventDefault();
            const vulnTitle = card.querySelector('h3').textContent;
            const vulnerability = config.vulnerabilities.find(v => v.title === vulnTitle);
            if (vulnerability && vulnerability.url) {
                loadVulnerabilityContent(vulnerability);
            } else {
                alert('جاري تحويلك للموقع...');
            }
        });
    });
}

function setupModalEvents() {
    const modal = document.getElementById('subscription-modal');
    const subscribeBtn = document.getElementById('subscribe-btn');
    const verifyCodeBtn = document.getElementById('verify-code');
    const closeModalBtn = document.getElementById('close-modal');
    
    subscribeBtn.addEventListener('click', () => {
        window.location.href = 'https://t.me/hackXproo';
    });

    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    verifyCodeBtn.addEventListener('click', async () => {
        const inviteCode = document.getElementById('invite-code').value;
        
        try {
            const isValid = config.validInviteCodes.includes(inviteCode);
            
            if (isValid) {
                const successMsg = document.createElement('div');
                successMsg.className = 'verification-message success';
                successMsg.textContent = 'تم تفعيل الوصول بنجاح!';
                document.querySelector('.modal-content').appendChild(successMsg);
                
                setTimeout(() => {
                    enableVulnAccess();
                    modal.style.display = 'none';
                    successMsg.remove();
                }, 2000);
            } else {
                const errorMsg = document.createElement('div');
                errorMsg.className = 'verification-message error';
                errorMsg.textContent = 'كود الدعوة غير صالح';
                document.querySelector('.modal-content').appendChild(errorMsg);
                
                setTimeout(() => {
                    errorMsg.remove();
                }, 3000);
            }
        } catch (error) {
            console.error('Error verifying code:', error);
            alert('حدث خطأ في التحقق من الكود');
        }
    });
}

function showSubscriptionModal() {
    document.getElementById('subscription-modal').style.display = 'flex';
    document.getElementById('invite-code').value = ''; // Clear previous input
}

function loadTeamMembers() {
    const teamGrid = document.querySelector('.team-grid');
    
    config.teamMembers.forEach(member => {
        const memberEl = document.createElement('div');
        memberEl.className = 'team-member';
        memberEl.innerHTML = `
            <div class="member-avatar" ${member.imageUrl ? `style="background-image: url('${member.imageUrl}')"` : ''}>
                ${!member.imageUrl ? `
                    <svg viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-12S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                    </svg>
                ` : ''}
            </div>
            <h3 class="member-name">${member.name}</h3>
            <p class="member-role">${member.role}</p>
        `;
        teamGrid.appendChild(memberEl);
    });
}

function loadPartners() {
    const partnersGrid = document.querySelector('.partners-grid');
    const partners = [
        { 
            name: "Google",
            logo: `<svg viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>`
        },
        { 
            name: "GitHub",
            logo: `<svg viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>`
        },
        { 
            name: "Facebook",
            logo: `<svg viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>`
        },
        { 
            name: "Telegram",
            logo: `<svg viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>`
        }
    ];

    partnersGrid.innerHTML = '';
    partners.forEach(partner => {
        const partnerEl = document.createElement('div');
        partnerEl.className = 'partner-card';
        partnerEl.innerHTML = `
            <div class="partner-logo">
                ${partner.logo}
            </div>
            <div class="partner-name">${partner.name}</div>
        `;
        partnersGrid.appendChild(partnerEl);
    });
}

function handleScroll() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isVisible = (rect.top <= window.innerHeight * 0.75);
        if (isVisible) {
            section.classList.add('visible');
        }
    });
}

function generateSecurityPattern(type) {
    const patterns = {
        xss: `<svg viewBox="0 0 100 100">
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(229, 190, 236, 0.1)" />
            </pattern>
            <rect width="100" height="100" fill="url(#grid)" />
            <circle cx="50" cy="50" r="30" fill="none" stroke="rgba(229, 190, 236, 0.2)" stroke-width="2" />
            <path d="M 30 50 L 70 50 M 50 30 L 50 70" stroke="rgba(229, 190, 236, 0.3)" stroke-width="2" />
        </svg>`,
        sql: `<svg viewBox="0 0 100 100">
            <pattern id="dots" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="5" cy="5" r="1" fill="rgba(229, 190, 236, 0.1)" />
            </pattern>
            <rect width="100" height="100" fill="url(#dots)" />
            <rect x="20" y="35" width="60" height="30" fill="none" stroke="rgba(229, 190, 236, 0.2)" stroke-width="2" />
            <path d="M 30 45 L 70 45 M 30 55 L 70 55" stroke="rgba(229, 190, 236, 0.3)" stroke-width="2" />
        </svg>`,
        auth: `<svg viewBox="0 0 100 100">
            <pattern id="hex" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 10 17.3 L -10 17.3 L -20 0 L -10 -17.3 L 10 -17.3 Z" fill="none" stroke="rgba(229, 190, 236, 0.1)" />
            </pattern>
            <rect width="100" height="100" fill="url(#hex)" />
            <circle cx="50" cy="50" r="25" fill="none" stroke="rgba(229, 190, 236, 0.2)" stroke-width="2" />
        </svg>`,
        csrf: `<svg viewBox="0 0 100 100">
            <pattern id="chain" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 0 0 L 20 20 M -5 15 L 15 -5 M 15 25 L 25 15" stroke="rgba(229, 190, 236, 0.1)" fill="none" />
            </pattern>
            <rect width="100" height="100" fill="url(#chain)" />
            <path d="M 30 50 C 30 30, 70 30, 70 50 C 70 70, 30 70, 30 50" fill="none" stroke="rgba(229, 190, 236, 0.2)" stroke-width="2" />
        </svg>`
    };
    
    return patterns[type] || patterns.xss;
}
