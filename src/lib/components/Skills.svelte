<script>
    import Avatar from '$lib/components/Avatar.svelte';

    const skillCategories = [
        {
            title: "Développement Logiciel",
            skills: [
                { name: "Java", highlighted: true },
                { name: "React", highlighted: true },
                { name: "TypeScript", highlighted: true },
                { name: "APIs REST", highlighted: true },
                { name: "Git", highlighted: true }
            ]
        },
        {
            title: "Data & Analyse",
            skills: [
                { name: "SQL (MySQL, SQLite)", highlighted: true },
                { name: "Python (Pandas, NumPy)", highlighted: true },
                { name: "Big Data (concepts)", highlighted: false },
                { name: "Visualisation de données", highlighted: false },
                { name: "Traitement de données", highlighted: false }
            ]
        },
        {
            title: "Outils & Méthodologies",
            skills: [
                { name: "Make", highlighted: true },
                { name: "Agile/Scrum", highlighted: true },
                { name: "Clean Code", highlighted: true },
                { name: "Tests unitaires", highlighted: false },
                { name: "Documentation technique", highlighted: false }
            ]
        }
    ];
</script>

<section id="competences" class="section">
    <div class="skills">
        <h2 class="section-title">Compétences</h2>
        <div class="skills-grid">
            {#each skillCategories as category}
                <div class="skill-category">
                    <h3>{category.title}</h3>
                    <ul class="skill-list">
                        {#each category.skills as skill}
                            <li class:highlighted={skill.highlighted}>{skill.name}</li>
                        {/each}
                    </ul>
                </div>
            {/each}
        </div>

        <div class="info-note">
            <Avatar size="medium" speaking={true} />
            <div>
                <p><strong>Spécialisation :</strong> Développement d'applications logicielles avec une approche orientée qualité et automatisation des processus.</p>
            </div>
        </div>
    </div>
</section>

<style>
    .skills {
        margin-bottom: var(--spacing-xl);
    }
    
    .skills-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--spacing-lg);
    }
    
    .skill-category h3 {
        font-size: 1.1rem;
        font-weight: 600;
        margin-bottom: var(--spacing-md);
        color: var(--color-text);
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
    }
    
    .skill-list {
        list-style: none;
    }
    
    .skill-list li {
        padding: var(--spacing-xs) 0;
        position: relative;
        padding-left: 1.5rem;
        color: var(--color-text-light);
        font-size: 0.9rem;
        border-bottom: 1px solid #f5f5f5;
    }

    .skill-list li:before {
        content: "▹";
        position: absolute;
        left: 0;
        color: var(--color-green);
    }
    
    .skill-list li:last-child {
        border-bottom: none;
    }

    .skill-list li.highlighted {
        color: var(--color-text);
        font-weight: 500;
    }

    .skill-list li.highlighted:before {
        content: "▸";
        font-weight: bold;
    }
    
    @media (max-width: 600px) {
        .skills-grid {
            grid-template-columns: 1fr;
        }
    }
</style>