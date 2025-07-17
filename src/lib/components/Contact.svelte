<script>
    const contactLinks = [
        { label: "Email", href: "mailto:ronan.pluta.fontaine@example.com" },
        { label: "LinkedIn", href: "https://linkedin.com/in/ronan-pluta-fontaine" },
        { label: "GitHub", href: "https://github.com/ronan-pluta-fontaine" }
    ];
</script>

<section id="contact" class="contact">
    <h2>Contact</h2>
    <p class="contact-info">Basé à Poitiers (86000) | Disponible en présentiel (Paris/Poitiers/Montpellier)</p>
    <div class="contact-links">
        {#each contactLinks as link}
            <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
            </a>
        {/each}
    </div>
</section>

<style>
    .contact {
        text-align: center;
        padding: var(--spacing-lg) 0;
        border-top: 1px solid var(--color-border);
    }
    
    .contact h2 {
        font-size: 1.3rem;
        font-weight: 600;
        margin-bottom: var(--spacing-md);
        color: var(--color-text);
    }
    
    .contact-info {
        color: var(--color-text-light);
        margin-bottom: var(--spacing-sm);
    }
    
    .contact-links {
        display: flex;
        justify-content: center;
        gap: var(--spacing-md);
    }
    
    .contact-links a {
        color: var(--color-green);
        text-decoration: none;
        font-size: 0.9rem;
    }
    
    .contact-links a:hover {
        text-decoration: underline;
    }
    
    @media (max-width: 600px) {
        .contact-links {
            flex-direction: column;
            align-items: center;
        }
    }
</style>