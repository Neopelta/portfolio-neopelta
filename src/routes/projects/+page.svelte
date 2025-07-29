<script>
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';
    import { detectUserLanguage } from '$lib/i18n';
    
    let isRedirecting = false;
    
    onMount(async () => {
        if (browser && !isRedirecting) {
            isRedirecting = true;
            const detectedLang = detectUserLanguage();
            console.log('Detected language for projects:', detectedLang);
            
            window.location.replace(`/${detectedLang}/projects`);
        }
    });
</script>

<main class="detection-screen">
    <div class="redirect">
        <p>Redirection en cours...</p>
        <p><a href="/fr/projects">Français</a> | <a href="/en/projects">English</a></p>
    </div>
</main>

<style>
    .detection-screen {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
    }
    
    .redirect {
        max-width: 400px;
        padding: 2rem;
    }
    
    .redirect a {
        color: #15803d;
        text-decoration: none;
        margin: 0 0.5rem;
    }
    
    .redirect a:hover {
        text-decoration: underline;
    }
</style>