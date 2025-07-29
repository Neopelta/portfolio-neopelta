import { projects } from '$lib/data/projects.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
    const { slug } = params;
    
    const project = projects.find((p) => p.id === slug);
    if (!project) {
        throw error(404, 'Project not found');
    }
    
    return {
        slug
    };
}

export const prerender = false;