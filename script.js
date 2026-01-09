// Initialize AOS Animation Library
AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true,
    offset: 50
});

// Data: Experience
const experienceData = [
    {
        title: "Senior Software Engineer",
        company: "Persistent Systems Limited",
        period: "Oct 2025 – Present",
        description: [
            "Led development of Spring Boot applications processing 2M+ insurance records daily, improving throughput by 35%.",
            "Optimized Kafka pipelines to handle 75K+ events per min (<200ms latency).",
            "Reduced release cycles from 2 weeks to 5 days by enhancing CI/CD pipelines.",
            "Reduced incident resolution time by 40% through improved observability."
        ]
    },
    {
        title: "Software Engineer",
        company: "Persistent Systems Limited",
        period: "Sep 2023 – Sep 2025",
        description: [
            "Built Spring Boot services processing 1M+ daily records, boosting performance by 30%.",
            "Achieved 99.9% uptime SLA on GCP deployments.",
            "Reduced production incidents by 15% through scalability and fault tolerance improvements."
        ]
    },
    {
        title: "Intern",
        company: "Persistent Systems Limited",
        period: "Jan 2023 – Jun 2023",
        description: [
            "Gained proficiency in Core Java, Spring MVC, and Spring Boot.",
            "Hands-on experience with Google Cloud Platform integration."
        ]
    }
];

// Data: Skills
const skillsData = [
    {
        category: "Backend & Core",
        icon: "fa-server",
        tags: ["Java", "Spring Boot", "Python", "REST APIs", "Multi-threading"]
    },
    {
        category: "Cloud & DevOps",
        icon: "fa-cloud",
        tags: ["Google Cloud Platform (GCP)", "AWS", "Docker", "Kubernetes", "Jenkins", "CI/CD"]
    },
    {
        category: "Data & Messaging",
        icon: "fa-database",
        tags: ["MongoDB", "PostgreSQL", "Apache Kafka", "Redis"]
    },
    {
        category: "Tools",
        icon: "fa-toolbox",
        tags: ["Git", "GitHub", "Bash Scripting", "JIRA"]
    }
];

// Data: Projects
const projectsData = [
    {
        title: "Nanolink",
        description: "High-performance URL shortening service designed to handle massive scale. Features basic analytics and custom alias support.",
        tech: ["Spring Boot", "Redis", "NoSQL"],
        link: "https://nanolink.harshitsathone.com" // Placeholder subdomain
    },
    {
        title: "Gadget Gizmo (Legacy)",
        description: "Microservices-based e-commerce backend with JWT authentication and Kafka-based order processing.",
        tech: ["Microservices", "GCP", "Kafka"],
        link: "#" // No link as per request, but keeping record
    }
];

// Render Experience
const experienceList = document.getElementById('experience-list');
experienceData.forEach((job, index) => {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    item.setAttribute('data-aos', 'fade-up');
    item.setAttribute('data-aos-delay', index * 100);
    
    item.innerHTML = `
        <div class="timeline-content">
            <span class="timeline-date">${job.period}</span>
            <h3>${job.title}</h3>
            <div class="timeline- company">${job.company}</div>
            <ul>
                ${job.description.map(desc => `<li>${desc}</li>`).join('')}
            </ul>
        </div>
    `;
    experienceList.appendChild(item);
});

// Render Skills
const skillsGrid = document.getElementById('skills-grid');
skillsData.forEach((skill, index) => {
    const card = document.createElement('div');
    card.className = 'skill-card';
    card.setAttribute('data-aos', 'zoom-in');
    card.setAttribute('data-aos-delay', index * 100);
    
    card.innerHTML = `
        <div class="skill-header">
            <i class="fas ${skill.icon} skill-icon"></i>
            <h3>${skill.category}</h3>
        </div>
        <div class="skill-tags">
            ${skill.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
    `;
    skillsGrid.appendChild(card);
});

// Render Projects
const projectsGrid = document.getElementById('projects-grid');
// Filtering to show Nanolink first and foremost
const activeProjects = projectsData.filter(p => p.title.includes("Nanolink"));

activeProjects.forEach((project, index) => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-aos', 'fade-up');
    
    card.innerHTML = `
        <div class="project-content">
            <div class="project-title">
                ${project.title}
                <i class="fas fa-external-link-alt" style="font-size: 1rem; opacity: 0.5;"></i>
            </div>
            <p class="project-desc">${project.description}</p>
            <div class="project-tech">
                ${project.tech.map(t => `<span class="tag">${t}</span>`).join('')}
            </div>
            <a href="${project.link}" target="_blank" class="project-link">
                Visit Project <i class="fas fa-arrow-right"></i>
            </a>
        </div>
    `;
    projectsGrid.appendChild(card);
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
