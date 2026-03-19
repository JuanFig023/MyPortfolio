/**
 * projects.js
 *
 * Single source of truth for all portfolio project data.
 * Render functions build project cards from the data array and inject
 * them into the #projects-grid container at the bottom of this file.
 *
 */

// ─── Data ─────────────────────────────────────────────────────────────────────

const PROJECTS = [
  {
    type: "solo",
    module: "Deployment Module Project",
    title: "BookShelf",
    image: "images/deploymentProject.png",
    imageAlt: "BookShelf Screenshot",
    description:
      "A full-stack library management system I designed and built end to end, featuring a GraphQL API, JWT authentication, role-based access control, and a fully automated CI/CD pipeline via GitHub Actions.",
    tags: [
      { label: "TypeScript",     color: "blue"   },
      { label: "React.js",          color: "blue"   },
      { label: "GraphQL",        color: "green"  },
      { label: "Node.js",        color: "green"  },
      { label: "PostgreSQL",     color: "orange" },
      { label: "Prisma ORM",     color: "purple" },
      { label: "GitHub Actions", color: "slate"  },
    ],
    links: [
      { label: "GitHub",     href: "https://github.com/JuanFig023/bookshelf", style: "dark"    },
      { label: "Live App ↗", href: "https://bookshelf-frontend-mz1m.onrender.com/", style: "primary" },
      { label: "Demo Video", href: "https://www.youtube.com/watch?v=KTjNUda7s-8", style: "outline" },
    ],
    
    features: [
      "Browse, search, and filter books",
      "Checkout system with due date tracking",
      "Admin panel and inventory management",
      "Role-based access control",
      "User authentication and registration",
      "CI/CD via GitHub Actions",
    ],
    reflection:
      "This solo project brought together everything I developed throughout the apprenticeship — front end, back end, DevOps, and security. Owning the full implementation from schema design to deployment gave me a deep, end-to-end understanding of how production systems are built and maintained.",
  },

  {
    type: "group",
    module: "Back End Module Project",
    title: "The Wish Granting API",
    image: "images/wishGrantingApi.png",
    imageAlt: "Wish Granting API Screenshot",
    description:
      "A RESTful back-end service built with a team, featuring Google OAuth 2.0, JWT authentication, role-based authorization, and AI-generated genie outcomes via Google Gemini.",
    tags: [
      { label: "JavaScript",        color: "yellow" },
      { label: "Node.js",           color: "green"  },
      { label: "Express.js",        color: "green"  },
      { label: "JWT / OAuth 2.0",   color: "blue"   },
      { label: "SQLite / Sequelize", color: "orange" },
      { label: "Jest / Supertest",  color: "red"    },
    ],
    links: [
      { label: "GitHub",     href: "https://github.com/FairyOddTeam/The-Wish-Granting-API", style: "dark"    },
      { label: "Demo Video", href: "https://www.youtube.com/watch?v=psR3YDZe-sY",           style: "outline" },
    ],
    features: [
      "Google OAuth 2.0 + local login",
      "JWT authorization",
      "CRUD for Wishes, Fairies, Users",
      "AI genie outcomes via Gemini",
      "Role-based access control",
      "Jest unit tests",
    ],
    reflection:
      "This project deepened my understanding of authentication and authorization architecture. Working with a team accelerated my ability to write reliable, testable API endpoints and integrate external services responsibly.",
  },

  {
    type: "group",
    module: "Front End Module Project",
    title: "Music Discovery App",
    image: "images/FrontEnd.png",
    imageAlt: "Music Discovery App Screenshot",
    description:
      "A Spotify-inspired React SPA built as a team, integrating real-time Spotify Web API playback. Features a unique circular queue visualizer and a dynamic color scheme that adapts to album art.",
    tags: [
      { label: "React.js",        color: "blue"   },
      { label: "TypeScript",      color: "blue"   },
      { label: "Material UI",     color: "purple" },
      { label: "Spotify Web API", color: "green"  },
      { label: "Chroma.js",       color: "yellow" },
      { label: "Vite",            color: "orange" },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/FrontEndProjectMV/music-discovery-app", style: "dark" },
    ],
    features: [
      "Spotify OAuth2 (PKCE)",
      "Real-time playback controls",
      "Circular queue visualizer",
      "Dynamic album art color scheme",
      "Music search (tracks, artists)",
      "Global Context API state",
    ],
    reflection:
      "This project sharpened my skills in component-based architecture, global state management, and real-time API integration. Working collaboratively pushed me to communicate design decisions clearly and write predictable, maintainable components.",
  },

  {
    type: "solo",
    module: "Final Bootcamp Project",
    title: "Vacation Booking App",
    image: "images/VacationBookingApp.png",
    imageAlt: "Vacation Booking App Screenshot",
    description:
      "A full-stack vacation booking application I built independently, combining a Laravel API back end with a React SPA. Includes secure authentication, admin workflows, and end-to-end test coverage with Cypress and Pest.",
    tags: [
      { label: "Laravel",   color: "red"    },
      { label: "React.js",     color: "blue"   },
      { label: "Sanctum Auth", color: "purple" },
      { label: "Cypress",      color: "green"  },
      { label: "Pest",         color: "yellow" },
      { label: "Bootstrap",    color: "orange" },
    ],
    links: [
      { label: "GitHub",     href: "https://github.com/JuanFig023/VacationBookingApp",    style: "dark"    },
      { label: "Demo Video", href: "https://www.youtube.com/watch?v=OYlJetmZvMQ",        style: "outline" },
    ],
    features: [
      "Browse and book vacation packages",
      "Admin CRUD workflows",
      "RESTful API (Laravel 12)",
      "Laravel Sanctum authentication",
      "Cypress + Pest test suites",
      "Responsive Bootstrap UI",
    ],
    reflection:
      "Building this solo pushed me to own every layer of the stack — API design, database migrations, frontend state, and test coverage. It sharpened my instinct for writing maintainable, testable code and anticipating integration pain points early.",
  },

  {
    type: "group",
    module: "Inventory Full Stack Application",
    title: "Inventory App",
    image: "images/DJP.png",
    imageAlt: "Inventory App Screenshot",
    description:
      "A full-stack e-commerce inventory tracking system built as a team, demonstrating three-tier architecture and RESTful CRUD operations across a React front end, Node.js/Express API, and SQL database.",
    tags: [
      { label: "React.js",   color: "blue"   },
      { label: "Node.js",    color: "green"  },
      { label: "Express.js", color: "green"  },
      { label: "Sequelize",  color: "orange" },
      { label: "SQL",        color: "yellow" },
      { label: "Jest",       color: "red"    },
    ],
    links: [
      { label: "GitHub",     href: "https://github.com/JuanFig023/inventory-app",       style: "dark"    },
      { label: "Demo Video", href: "https://www.youtube.com/watch?v=MFk8Emz2Ixg",       style: "outline" },
    ],
    features: [
      "View and manage inventory items",
      "Add, edit, and delete items",
      "User and order models",
      "Search and cart support",
      "Admin validation",
      "Mobile-responsive UI",
    ],
    reflection:
      "The first full-stack team project that pulled together everything from the first seven weeks — REST API design, database modeling, and collaborative Git workflows. It taught me how to break down features into tasks and deliver working software as part of a team.",
  },
];

// ─── Renderers ────────────────────────────────────────────────────────────────

const CHEVRON_SVG = `
  <svg class="chevron w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
  </svg>`.trim();

const LINK_CLASSES = {
  dark:    "bg-slate-900 hover:bg-slate-700 text-white",
  primary: "bg-violet-600 hover:bg-violet-700 text-white",
  outline: "border border-slate-300 hover:border-violet-500 text-slate-600 hover:text-violet-600",
};

function renderTag({ label, color }) {
  return `<span class="tag tag-${color}">${label}</span>`;
}

function renderLink({ label, href, style }) {
  return `<a href="${href}" target="_blank" rel="noopener noreferrer"
     class="${LINK_CLASSES[style]} text-sm font-semibold px-4 py-2 rounded-full transition-colors"
  >${label}</a>`;
}

function renderBulletList(items) {
  return items
    .map(item => `<li class="flex gap-2"><span class="text-violet-500 shrink-0">&#9656;</span>${item}</li>`)
    .join("\n            ");
}

function renderFeatures(features) {
  return `
        <div>
          <h4 class="font-semibold text-slate-800 mb-2">Key Features</h4>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            ${renderBulletList(features)}
          </ul>
        </div>`;
}

function renderProjectCard(project) {
  const typeBadge = project.type === "solo"
    ? `<span class="bg-violet-100 text-violet-700 text-xs font-semibold px-2.5 py-1 rounded-full">Solo Project</span>`
    : `<span class="bg-indigo-100 text-indigo-700 text-xs font-semibold px-2.5 py-1 rounded-full">Group Project</span>`;

  return `
  <div class="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden card-hover">
    <div class="project-card-grid">
      <div class="project-card-img">
        <img src="${project.image}" alt="${project.imageAlt}"
             class="project-img">
      </div>
      <div class="project-card-body p-4 md:p-8">
        <div class="flex flex-wrap items-center gap-2 mb-2">
          ${typeBadge}
          <span class="bg-slate-200 text-slate-600 text-xs font-semibold px-2.5 py-1 rounded-full">${project.module}</span>
        </div>
        <h3 class="text-2xl font-bold text-slate-900 mt-1 mb-3">${project.title}</h3>
        <p class="text-slate-600 mb-5">${project.description}</p>
        <div class="flex flex-wrap gap-2 mb-6">
          ${project.tags.map(renderTag).join("\n          ")}
        </div>
        <div class="flex flex-wrap gap-3">
          ${project.links.map(renderLink).join("\n          ")}
        </div>
        <details class="mt-6">
          <summary class="flex items-center gap-2 text-sm font-semibold text-violet-600 hover:text-violet-800 select-none">
            <span>View full details</span>
            ${CHEVRON_SVG}
          </summary>
          <div class="mt-4 pt-4 border-t border-slate-200 space-y-4 text-sm text-slate-600">
            ${renderFeatures(project.features)}
            <p>
              <strong class="text-slate-800">Reflection:</strong> ${project.reflection}
            </p>
          </div>
        </details>
      </div>
    </div>
  </div>`;
}

// ─── Bootstrap ────────────────────────────────────────────────────────────────
// Script is placed at the end of <body> so the grid element is already in the
// DOM when this runs — no DOMContentLoaded wrapper needed.

const grid = document.getElementById("projects-grid");
if (grid) {
  grid.innerHTML = PROJECTS.map(renderProjectCard).join("\n");
}
