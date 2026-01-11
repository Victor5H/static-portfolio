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

// Data: Skills (Updated with Devicons)
const skillsData = [
    {
        // Flattening categories for the distinctive grid look, or keeping categories?
        // Let's keep categories but use logos.
        category: "Backend Core",
        icon: "fa-server",
        items: [
            { name: "Java", icon: "devicon-java-plain" },
            { name: "Spring Boot", icon: "devicon-spring-original" },
            { name: "Python", icon: "devicon-python-plain" },
            { name: "Microservices", icon: "fas fa-network-wired" } // Fallback to FA
        ]
    },
    {
        category: "Cloud & DevOps",
        icon: "fa-cloud",
        items: [
            { name: "GCP", icon: "devicon-googlecloud-plain" },
            { name: "Docker", icon: "devicon-docker-plain" },
            { name: "Kubernetes", icon: "devicon-kubernetes-plain" },
            { name: "Jenkins", icon: "devicon-jenkins-line" }
        ]
    },
    {
        category: "Data & Streams",
        icon: "fa-database",
        items: [
            { name: "MongoDB", icon: "devicon-mongodb-plain" },
            { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
            { name: "Redis", icon: "devicon-redis-plain" },
            { name: "Kafka", icon: "devicon-apachekafka-original" } // Needs checking if available, usually is.
        ]
    }
];

// Data: Certifications
const certsData = [
    {
        title: "Professional Cloud Architect",
        issuer: "Google Cloud",
        date: "May 2024",
        icon: "fab fa-google" // Or custom GCP logo
    },
    {
        title: "Associate Cloud Engineer",
        issuer: "Google Cloud",
        date: "Dec 2023",
        icon: "fab fa-google"
    }
];

// Data: Projects
const projectsData = [
    {
        title: "Nanolink",
        description: "High-performance URL shortening service designed to handle massive scale. Features basic analytics and custom alias support.",
        tech: ["Spring Boot", "Redis", "Kafka","SQL"],
        link: "https://nanolink.harshit-tech.com"
    },
    {
        title: "Gadget Gizmo",
        description: "Microservices-based e-commerce backend with JWT authentication and Kafka-based order processing.",
        tech: ["Microservices", "GCP", "Kafka"],
        link: "#"
    }
];

// Helper: Typer Effect for Terminal
function typeWriter(element, text, speed = 50) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Render Terminal Content
const terminalContent = document.getElementById('terminal-content');
const terminalLines = [
    `<span class="prompt">harshit@server:~$</span> java -jar portfolio-backend.jar`,
    `<span class="output info">[INFO] Starting PortfolioApplication v1.0.0</span>`,
    `<span class="output">[OK] Loaded Profile: <span class="success">Senior Software Engineer</span></span>`,
    `<span class="output">[OK] Active Module: <span class="success">Spring Boot Microservices</span></span>`,
    `<span class="output">[OK] Active Module: <span class="success">Google Cloud Architecture</span></span>`,
    `<span class="output">Server started on port 8080 (http). Ready to scale. 🚀</span>`,
    `<span class="prompt">harshit@server:~$</span> <span class="cursor">_</span>`
];

let lineIndex = 0;
function typeTerminal() {
    if (lineIndex < terminalLines.length) {
        const line = document.createElement('div');
        line.className = 'command-line';
        // If it's the last line (prompt with cursor), don't type it letter by letter, just show it
        if (lineIndex === terminalLines.length - 1) {
            line.innerHTML = terminalLines[lineIndex];
            terminalContent.appendChild(line);
        } else {
            // Just set HTML for simplicity and speed, or type text content
            // For rich HTML typing, it's complex. Let's just fade in lines for "boot" effect.
            line.innerHTML = terminalLines[lineIndex];
            line.style.opacity = 0;
            line.style.animation = "fadeIn 0.3s forwards";
            terminalContent.appendChild(line);
            setTimeout(typeTerminal, 600); // Delay between lines
        }
        lineIndex++;
    }
}
// Add simple fade keyframe dynamically
const styleSheet = document.createElement("style");
styleSheet.innerText = `@keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }`;
document.head.appendChild(styleSheet);

// Start terminal typing after a small delay
setTimeout(typeTerminal, 1000);


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

// Render Skills (New Logo Grid)
const skillsGrid = document.getElementById('skills-grid');
skillsData.forEach((category, index) => {
    // Instead of category cards, let's just dump all logos in a nice grid or grouped by category?
    // Using previous card structure but with logos inside.
    const card = document.createElement('div');
    card.className = 'skill-card';
    card.setAttribute('data-aos', 'zoom-in');
    card.setAttribute('data-aos-delay', index * 100);

    card.innerHTML = `
        <div class="skill-header">
            <i class="fas ${category.icon} skill-icon" style="font-size: 1.5rem; margin-right: 0.5rem"></i>
            <h3>${category.category}</h3>
        </div>
        <div class="skill-tags" style="justify-content: center; gap: 1.5rem; margin-top: 1rem;">
            ${category.items.map(item => `
                <div class="tag-logo" title="${item.name}" style="text-align: center;">
                    <i class="${item.icon} skill-icon-large"></i>
                    <div style="font-size: 0.8rem; color: #94a3b8; margin-top: 5px;">${item.name}</div>
                </div>
            `).join('')}
        </div>
    `;
    skillsGrid.appendChild(card);
});

// Render Certifications
const certsGrid = document.getElementById('certs-grid');
if (certsGrid) {
    certsData.forEach((cert, index) => {
        const card = document.createElement('div');
        card.className = 'cert-card';
        card.setAttribute('data-aos', 'fade-up');
        card.setAttribute('data-aos-delay', index * 100);

        card.innerHTML = `
            <i class="${cert.icon} cert-icon"></i>
            <div class="cert-info">
                <h3>${cert.title}</h3>
                <div class="cert-issuer">${cert.issuer} • ${cert.date}</div>
            </div>
        `;
        certsGrid.appendChild(card);
    });
}

// Render Projects
const projectsGrid = document.getElementById('projects-grid');

projectsData.forEach((project, index) => {
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
