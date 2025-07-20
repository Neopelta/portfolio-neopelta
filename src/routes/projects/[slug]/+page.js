import { projects } from '$lib/data/projects.js';
import { getProjectDetails } from '$lib/data/projectDetails.js';
import { error } from '@sveltejs/kit';

// Lists all possible routes for the preview
export function entries() {
    return projects.map(project => ({
        slug: project.id
    }));
}

export const prerender = true;

export function load({ params }) {
    const project = projects.find(p => p.id === params.slug);
    
    if (!project) {
        throw error(404, 'Projet non trouvé');
    }
    
    const currentIndex = projects.findIndex(p => p.id === params.slug);
    const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
    const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;
    
    const similarProjects = projects
        .filter(p => p.id !== params.slug)
        .filter(p => 
            p.category === project.category || 
            p.technologies.some(tech => 
                project.technologies.some(pTech => pTech.name === tech.name)
            )
        )
        .slice(0, 3);
    
    const projectDetails = getProjectDetails(params.slug);
    
    return {
        project,
        prevProject,
        nextProject,
        similarProjects,
        projectDetails
    };
}