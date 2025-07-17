<script>
    import Avatar from '$lib/components/Avatar.svelte';
</script>

<nav class="nav">
    <div class="container">
        <div class="nav-content">
            <a href="/" class="nav-brand">
                <Avatar size="small" />
                <span>Ronan PLUTA FONTAINE</span>
            </a>
            <ul class="nav-links">
                <li><a href="#projects">Projets</a></li>
                <li><a href="#competences">Compétences</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </div>
</nav>

<style>
    .nav {
        padding: var(--spacing-md) 0;
        border-bottom: 1px solid var(--color-border);
        position: sticky;
        top: 0;
        background: #fff;
        z-index: 10;
    }
    
    .nav-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .nav-brand {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
        font-weight: 600;
        color: var(--color-text);
        text-decoration: none;
    }
    
    .nav-links {
        display: flex;
        gap: var(--spacing-md);
        list-style: none;
    }
    
    .nav-links a {
        color: var(--color-text-light);
        text-decoration: none;
        font-size: 0.9rem;
    }
    
    .nav-links a:hover {
        color: var(--color-green);
    }
    
    @media (max-width: 600px) {
        .nav-links {
            display: none;
        }
    }
    
    /* Support du mode sombre */
    @media (prefers-color-scheme: dark) {
        .nav {
            background: #111;
            border-bottom-color: var(--color-border);
        }
    }
</style>