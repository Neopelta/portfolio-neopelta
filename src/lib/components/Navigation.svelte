<script>
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    import { afterNavigate } from '$app/navigation';
    import { onMount } from 'svelte';
    import Avatar from '$lib/components/Avatar.svelte';
    
    $: isHomePage = $page.route.id === '/';
    
    async function handleNavClick(event, anchor) {
        event.preventDefault();
        
        if (isHomePage) {
            const element = document.getElementById(anchor);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            await goto('/');
            setTimeout(() => {
                const element = document.getElementById(anchor);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }
    
    afterNavigate(() => {
        if ($page.url.hash) {
            setTimeout(() => {
                const anchor = $page.url.hash.substring(1);
                const element = document.getElementById(anchor);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    });
</script>

<nav class="nav">
    <div class="container">
        <div class="nav-content">
            <a href="/" class="nav-brand">
                <Avatar size="small" />
                <span>Ronan PLUTA FONTAINE</span>
            </a>
            <ul class="nav-links">
                <li>
                    <a 
                        href="/#projects" 
                        on:click={(e) => handleNavClick(e, 'projects')}
                    >
                        Projets
                    </a>
                </li>
                <li>
                    <a 
                        href="/#competences" 
                        on:click={(e) => handleNavClick(e, 'competences')}
                    >
                        Compétences
                    </a>
                </li>
                <li>
                    <a 
                        href="/#contact" 
                        on:click={(e) => handleNavClick(e, 'contact')}
                    >
                        Contact
                    </a>
                </li>
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
        cursor: pointer;
    }
    
    .nav-links a:hover {
        color: var(--color-green);
    }
    
    @media (max-width: 600px) {
        .nav-links {
            display: none;
        }
    }
    
    @media (prefers-color-scheme: dark) {
        .nav {
            background: #111;
            border-bottom-color: var(--color-border);
        }
    }
</style>