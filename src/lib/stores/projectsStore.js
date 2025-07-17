import { writable, derived } from 'svelte/store';
import { projects } from '$lib/data/projects.js';

export const filters = writable({
    year: 'all',
    technology: 'all',
    category: 'all',
    search: '',
    featuredOnly: false
});

export const pagination = writable({
    currentPage: 1,
    itemsPerPage: 8
});

export const filteredProjects = derived(
    filters,
    ($filters) => {
        return projects.filter(project => {
            const matchesYear = $filters.year === 'all' || project.date === $filters.year;
            const matchesTech = $filters.technology === 'all' || 
                project.technologies.some(t => t.name === $filters.technology);
            const matchesCategory = $filters.category === 'all' || 
                project.category === $filters.category;
            const matchesSearch = $filters.search === '' || 
                project.title.toLowerCase().includes($filters.search.toLowerCase()) ||
                project.description.toLowerCase().includes($filters.search.toLowerCase()) ||
                project.tags.some(tag => tag.toLowerCase().includes($filters.search.toLowerCase()));
            const matchesFeatured = !$filters.featuredOnly || project.featured;
            
            return matchesYear && matchesTech && matchesCategory && matchesSearch && matchesFeatured;
        });
    }
);

export const paginatedProjects = derived(
    [filteredProjects, pagination],
    ([$filteredProjects, $pagination]) => {
        const start = ($pagination.currentPage - 1) * $pagination.itemsPerPage;
        const end = start + $pagination.itemsPerPage;
        return $filteredProjects.slice(start, end);
    }
);

export const projectsMetadata = derived(
    [filteredProjects, pagination],
    ([$filteredProjects, $pagination]) => ({
        total: $filteredProjects.length,
        totalPages: Math.ceil($filteredProjects.length / $pagination.itemsPerPage),
        currentPage: $pagination.currentPage,
        itemsPerPage: $pagination.itemsPerPage,
        hasMore: $filteredProjects.length > $pagination.currentPage * $pagination.itemsPerPage
    })
);

export const projectsActions = {
    setFilter: (key, value) => {
        filters.update(f => ({ ...f, [key]: value }));
        pagination.update(p => ({ ...p, currentPage: 1 }));
    },
    
    resetFilters: () => {
        filters.set({
            year: 'all',
            technology: 'all',
            category: 'all',
            search: '',
            featuredOnly: false
        });
        pagination.update(p => ({ ...p, currentPage: 1 }));
    },
    
    setPage: (page) => {
        pagination.update(p => ({ ...p, currentPage: page }));
    },
    
    setItemsPerPage: (items) => {
        pagination.update(p => ({ ...p, itemsPerPage: items, currentPage: 1 }));
    },
    
    nextPage: () => {
        pagination.update(p => ({ ...p, currentPage: p.currentPage + 1 }));
    },
    
    prevPage: () => {
        pagination.update(p => ({ ...p, currentPage: Math.max(1, p.currentPage - 1) }));
    }
};

export const filterOptions = {
    years: [...new Set(projects.map(p => p.date))].sort().reverse(),
    technologies: [...new Set(projects.flatMap(p => p.technologies.map(t => t.name)))].sort(),
    categories: [...new Set(projects.map(p => p.category))].sort()
};