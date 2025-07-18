<script>
    import { page } from '$app/stores';
    import Navigation from '$lib/components/Navigation.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import ProjectCard from '$lib/components/ProjectCard.svelte';
    import Avatar from '$lib/components/Avatar.svelte';
    import ProjectDetail from '$lib/components/ProjectDetail.svelte';
    import { getProjectDetails } from '$lib/data/projectDetails.js';
    import '../../../app.css';
    
    export let data;
    
    $: ({ project, prevProject, nextProject, similarProjects } = data);
</script>

<svelte:head>
    <title>{project.title} - Ronan PLUTA FONTAINE</title>
    <meta name="description" content={project.description} />
    <meta property="og:title" content="{project.title} - Ronan PLUTA FONTAINE" />
    <meta property="og:description" content={project.description} />
    <meta property="og:image" content={project.image} />
</svelte:head>

<Navigation />

<main class="container">
    <nav class="breadcrumb">
        <a href="/">Accueil</a>
        <span class="separator">→</span>
        <a href="/projects">Projets</a>
        <span class="separator">→</span>
        <span class="current">{project.title}</span>
    </nav>

    <header class="project-header">
        <div class="project-image-container">
            {#if project.image}
                <img src={project.image} alt={project.alt || project.title} class="project-image" />
            {:else}
                <div class="project-image-placeholder">
                    <Avatar size="large" />
                </div>
            {/if}
        </div>
        
        <div class="project-info">
            <div class="project-meta">
                <span class="project-category">{project.category}</span>
                <span class="project-date">{project.date}</span>
            </div>
            
            <h1 class="project-title">{project.title}</h1>
            
            <div class="project-technologies">
                {#each project.technologies as tech}
                    <span class="tech-tag" class:highlighted={tech.highlighted}>
                        {tech.name}
                    </span>
                {/each}
            </div>
            
            <div class="project-tags">
                {#each project.tags as tag}
                    <span class="tag">{tag}</span>
                {/each}
            </div>
        </div>
    </header>

    <section class="project-description">
        <div class="info-note">
            <Avatar size="medium" speaking={true} />
            <div>
                <p><strong>À propos de ce projet :</strong></p>
                <p>{project.description}</p>
            </div>
        </div>
    </section>

    <section class="project-content">
        <h2 class="section-title">Détails du projet</h2>
        
        {#if getProjectDetails(project.id)}
            <ProjectDetail projectId={project.id} {...getProjectDetails(project.id)} />
        {:else}
            <div class="content-placeholder">
                <p>Cette section sera complétée avec le contenu détaillé de ce projet.</p>
                <p>Vous pouvez y ajouter :</p>
                <ul>
                    <li>Captures d'écran supplémentaires</li>
                    <li>Explication des fonctionnalités</li>
                    <li>Défis techniques rencontrés</li>
                    <li>Apprentissages et retours d'expérience</li>
                    <li>Code snippets importants</li>
                </ul>
            </div>
        {/if}
    </section>
    <nav class="project-navigation">
        <div class="nav-item">
            {#if prevProject}
                <a href="/projects/{prevProject.id}" class="nav-link prev">
                    <span class="nav-direction">← Projet précédent</span>
                    <span class="nav-title">{prevProject.title}</span>
                </a>
            {/if}
        </div>
        
        <div class="nav-item">
            <a href="/projects" class="nav-link center">
                <span class="nav-direction">Tous les projets</span>
            </a>
        </div>
        
        <div class="nav-item">
            {#if nextProject}
                <a href="/projects/{nextProject.id}" class="nav-link next">
                    <span class="nav-direction">Projet suivant →</span>
                    <span class="nav-title">{nextProject.title}</span>
                </a>
            {/if}
        </div>
    </nav>

    {#if similarProjects.length > 0}
        <section class="similar-projects">
            <h2 class="section-title">Projets similaires</h2>
            <div class="projects-grid">
                {#each similarProjects as similarProject}
                    <ProjectCard {...similarProject} />
                {/each}
            </div>
        </section>
    {/if}
</main>

<Footer />

<style>
    .breadcrumb {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
        margin: var(--spacing-md) 0;
        font-size: 0.9rem;
    }

    .breadcrumb a {
        color: var(--color-green);
        text-decoration: none;
    }

    .breadcrumb a:hover {
        text-decoration: underline;
    }

    .separator {
        color: var(--color-text-light);
    }

    .current {
        color: var(--color-text);
        font-weight: 500;
    }

    .project-header {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--spacing-xl);
        align-items: start;
        margin: var(--spacing-xl) 0;
    }

    .project-image-container {
        position: relative;
    }

    .project-image {
        width: 100%;
        height: 400px;
        object-fit: cover;
        object-position: top;
        border-radius: 8px;
        border: 1px solid var(--color-border);
    }

    .project-image-placeholder {
        width: 100%;
        height: 400px;
        background: var(--project-image-bg);
        border-radius: 8px;
        border: 1px solid var(--color-border);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .project-meta {
        display: flex;
        align-items: center;
        gap: var(--spacing-md);
        margin-bottom: var(--spacing-sm);
    }

    .project-category {
        background: var(--color-green);
        color: white;
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        font-size: 0.8rem;
        font-weight: 500;
    }

    .project-date {
        color: var(--color-text-light);
        font-size: 0.9rem;
    }

    .project-title {
        font-size: 2.5rem;
        font-weight: 600;
        color: var(--color-text);
        margin: 0 0 var(--spacing-md) 0;
        line-height: 1.2;
    }

    .project-technologies {
        display: flex;
        flex-wrap: wrap;
        gap: var(--spacing-xs);
        margin-bottom: var(--spacing-md);
    }

    .tech-tag {
        background: var(--tech-tag-bg);
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        font-size: 0.8rem;
        color: var(--color-text-light);
    }

    .tech-tag.highlighted {
        background: var(--color-green);
        color: white;
        font-weight: 500;
    }

    .project-tags {
        display: flex;
        flex-wrap: wrap;
        gap: var(--spacing-xs);
    }

    .tag {
        background: var(--info-note-bg);
        color: var(--color-text-light);
        padding: 0.25rem 0.5rem;
        border-radius: 16px;
        font-size: 0.75rem;
        border: 1px solid var(--color-border);
    }

    .project-description {
        margin: var(--spacing-xl) 0;
    }

    .project-content {
        margin: var(--spacing-xl) 0;
    }

    .content-placeholder {
        background: var(--info-note-bg);
        padding: var(--spacing-lg);
        border-radius: 8px;
        border-left: 3px solid var(--color-green);
    }

    .content-placeholder ul {
        margin: var(--spacing-sm) 0 0 var(--spacing-md);
        color: var(--color-text-light);
    }

    .content-placeholder li {
        margin-bottom: var(--spacing-xs);
    }

    .project-actions {
        margin: var(--spacing-xl) 0;
        text-align: center;
    }

    .btn-primary {
        display: inline-block;
        padding: var(--spacing-md) var(--spacing-lg);
        background: var(--color-green);
        color: white;
        text-decoration: none;
        border-radius: 6px;
        font-weight: 500;
        font-size: 1rem;
        transition: background-color 0.2s ease;
    }

    .btn-primary:hover {
        background: #1ea54e;
    }

    .project-navigation {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        gap: var(--spacing-md);
        margin: var(--spacing-xl) 0;
        padding: var(--spacing-lg) 0;
        border-top: 1px solid var(--color-border);
        border-bottom: 1px solid var(--color-border);
    }

    .nav-item {
        display: flex;
    }

    .nav-item:first-child {
        justify-content: flex-start;
    }

    .nav-item:last-child {
        justify-content: flex-end;
    }

    .nav-item:nth-child(2) {
        justify-content: center;
    }

    .nav-link {
        display: flex;
        flex-direction: column;
        text-decoration: none;
        padding: var(--spacing-sm);
        border-radius: 6px;
        transition: background-color 0.2s ease;
        max-width: 200px;
    }

    .nav-link:hover {
        background: var(--info-note-bg);
    }

    .nav-link.center {
        background: var(--color-green);
        color: white;
    }

    .nav-link.center:hover {
        background: #1ea54e;
    }

    .nav-direction {
        font-size: 0.8rem;
        color: var(--color-text-light);
        margin-bottom: var(--spacing-xs);
    }

    .nav-link.center .nav-direction {
        color: white;
    }

    .nav-title {
        font-size: 0.9rem;
        color: var(--color-text);
        font-weight: 500;
        line-height: 1.3;
    }

    .similar-projects {
        margin: var(--spacing-xl) 0;
    }

    .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: var(--spacing-lg);
    }

    @media (max-width: 768px) {
        .project-header {
            grid-template-columns: 1fr;
            gap: var(--spacing-lg);
        }

        .project-title {
            font-size: 2rem;
        }

        .project-navigation {
            grid-template-columns: 1fr;
            gap: var(--spacing-sm);
        }

        .nav-item {
            justify-content: center !important;
        }

        .nav-link {
            max-width: none;
            width: 100%;
            text-align: center;
        }

        .projects-grid {
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: 600px) {
        .project-title {
            font-size: 1.7rem;
        }

        .project-image,
        .project-image-placeholder {
            height: 250px;
        }

        .breadcrumb {
            flex-wrap: wrap;
        }
    }
</style>