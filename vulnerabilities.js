// Functions moved from main.js
export function loadVulnerabilityContent(vulnerability) {
    // Only load 1xbet vulnerability in-site
    if (vulnerability.title.includes('1xbet')) {
        // Hide all sections
        document.querySelectorAll('main > section').forEach(section => {
            section.style.display = 'none';
        });

        // Create vulnerability view container if it doesn't exist
        let vulnView = document.getElementById('vulnerability-view');
        if (!vulnView) {
            vulnView = document.createElement('div');
            vulnView.id = 'vulnerability-view';
            document.querySelector('main').appendChild(vulnView);
        }

        // Show vulnerability content
        vulnView.innerHTML = `
            <div class="vuln-header">
                <button class="back-btn" onclick="window.location.reload()">
                    <svg viewBox="0 0 24 24" style="width: 24px; height: 24px;">
                        <path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
                    </svg>
                    العودة للرئيسية
                </button>
                <h2>${vulnerability.title}</h2>
            </div>
            <div class="vuln-content">
                <iframe src="${vulnerability.url}" 
                        sandbox="allow-same-origin allow-scripts allow-forms" 
                        style="width:100%; height:80vh; border:none;">
                </iframe>
            </div>
        `;
        vulnView.style.display = 'block';
    } else {
        // For all other vulnerabilities, redirect directly
        window.location.href = vulnerability.url;
    }
}