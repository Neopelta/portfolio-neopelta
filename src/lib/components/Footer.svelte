<script>
    $: currentYear = new Date().getFullYear();
</script>

<footer class="footer">
    <div class="container">
        <div class="footer-content">
            <div class="footer-left">
                <p>&copy; {currentYear} Ronan PLUTA FONTAINE</p>
                <span class="location">Disponible pour alternance</span>
            </div>
            
            <div class="footer-right">
                <a 
                    href="mailto:rplutafontaine@protonmail.com" 
                    class="contact-link"
                >
                    rplutafontaine@protonmail.com
                </a>
                <div class="social-links">
                    <a 
                        href="https://linkedin.com/in/ronan-pluta-fontaine" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        class="social-link"
                    >
                        LinkedIn
                    </a>
                    <span class="separator">•</span>
                    <a 
                        href="https://github.com/Neopelta" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        class="social-link"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    </div>
</footer>

<style>
    .footer {
        background: var(--nav-bg);
        border-top: 1px solid var(--color-border);
        margin-top: var(--spacing-xl);
        padding: var(--spacing-lg) 0;
    }
    
    .footer-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: var(--spacing-md);
    }
    
    .footer-left p {
        margin: 0 0 var(--spacing-xs) 0;
        font-size: 0.9rem;
        color: var(--color-text);
        font-weight: 500;
    }
    
    .location {
        font-size: 0.8rem;
        color: var(--color-text-light);
    }
    
    .footer-right {
        text-align: right;
        display: flex;
        flex-direction: column;
        gap: var(--spacing-xs);
    }
    
    .contact-link {
        color: var(--color-green);
        text-decoration: none;
        font-size: 0.9rem;
        font-weight: 500;
    }
    
    .contact-link:hover {
        text-decoration: underline;
    }
    
    .social-links {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
        font-size: 0.8rem;
    }
    
    .social-link {
        color: var(--color-text-light);
        text-decoration: none;
        transition: color 0.2s ease;
    }
    
    .social-link:hover {
        color: var(--color-green);
    }
    
    .separator {
        color: var(--color-text-light);
    }
    
    @media (max-width: 600px) {
        .footer-content {
            flex-direction: column;
            text-align: center;
            gap: var(--spacing-sm);
        }
        
        .footer-right {
            text-align: center;
        }
    }
</style>