# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- **i18n**: Complete internationalization system with French (`fr`) and English (`en`) support
  - Integrated `svelte-i18n` library for translation management
  - Created comprehensive translation files (`ui-fr.json`, `ui-en.json`) covering all interface elements
  - Implemented multilingual project data structure with `projects-fr.js` and `projects-en.js`
  - Added detailed project content translations with `projectDetails-fr.js` and `projectDetails-en.js`
- **Routing**: Multilingual URL structure with automatic language detection and redirection
  - Route structure `[lang]/...` supporting localized URLs (e.g., `/fr/projects`, `/en/projects`)
  - Automatic redirections from legacy URLs to locale-prefixed paths
  - Language switcher component in navigation menu
- **Components**: Full translation support across all interface components
  - Navigation, Hero, About, Projects, Skills, Contact, Footer components translated
  - Project-related components (ProjectCard, ProjectDetail, ProjectsFilters, ProjectsGrid, ProjectsPagination) fully localized
  - Error pages and sitemap page with complete translation support
- **Architecture**: Asynchronous data loading system for multilingual content
  - Converted `projectsStore` to async architecture with language support
  - Updated all data functions with async variants and language parameters
  - Enhanced sitemap generation script for multilingual URLs

### Changed
- **Data Loading**: Migrated from synchronous to asynchronous data loading architecture
  - All project-related functions now support async loading with language parameters
  - Enhanced error handling for missing translations with fallback to French
- **URL Structure**: Restructured all routes to support language prefixes
  - Updated internal linking system to maintain language consistency
  - Modified `.htaccess` configuration for proper multilingual routing

### Fixed
- **Security**: Added safe property access in ProjectDetail component to prevent undefined errors
- **Content**: Corrected project descriptions and removed erroneous content references
- **Images**: Updated alt attributes for better accessibility compliance
- **Data Loading**: Resolved async data loading issues in Projects and ProjectsFilters components
- **Routing**: Fixed obsolete project links after i18n routing implementation

### Removed
- **Code Cleanup**: Eliminated unused language detection functions and client-side redirection routes
- **Legacy Routes**: Removed obsolete routing structures replaced by multilingual system

## [1.1.0] - 2025-07-25

### Added
- **SEO:** Add canonical tags to all pages for duplicate content prevention
- **Accessibility:** Add title attributes to all images for better user experience
- **SEO:** Optimize page title length for better search engine visibility
- **Navigation:** Smooth scroll to top when navigating between project pages
- **Projects:** Random selection system for similar projects display (maximum 2 projects shown)

### Changed
- **Hero:** Update personal information and career objectives
- **Portfolio project:** Complete rewrite with detailed sections including technical architecture, challenges, and creation process

### Fixed
- **SEO:** Add www to non-www redirects and index file redirections for better search engine optimization
- **Apache:** Improve .htaccess configuration to resolve duplicate content issues

## [1.0.1] - 2025-07-24

### Fixed
- **Navigation:** Improved accessibility of the mobile menu overlay
- **ProjectDetail:** Resolved undefined `index` variable in image loop
- **ProjectDetail:** Restore focus to previously active element on modal close for accessibility

### Changed
- **ProjectDetail:** Simplified internal logic for image modal handling

### Chore
- Removed commented code and unused exports
- Added TODO to remove console.logs

## [1.0.0] - 2025-07-23

### Initial Release

First public release of the Neopelta Portfolio website. This version includes all core functionality for showcasing projects, skills, and professional information.

**Core Features:**
- Responsive portfolio website built with SvelteKit
- Interactive project showcase with detailed project pages
- Skills section with categorized competencies  
- Contact section with social media integration
- Mobile-responsive design with burger menu navigation
- SEO optimization with meta tags and sitemap generation
- Accessibility compliance (WCAG 4.5:1 contrast ratio)

**Project Pages:**
- Gamfed - Game development project
- SkillTracker - Skill management application
- Polysyllogism - Logic reasoning tool
- Sudoku Solver - Algorithm implementation
- Station Météo - Weather monitoring system
- Portfolio - This website's development process

**Technical Implementation:**
- SvelteKit framework with static site generation
- Responsive design with mobile-first approach
- Image optimization and lazy loading
- Apache server configuration with clean URLs
- Automated sitemap generation (XML/HTML)
- Anti-bot protection via robots.txt

**User Experience:**
- Touch-friendly carousel navigation
- Modal image viewer with keyboard navigation
- Project filtering and categorization
- Smooth animations and transitions