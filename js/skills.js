/**
 * skills.js
 *
 * Single source of truth for the skills carousel.
 * To add / remove a skill: edit ROW_1 or ROW_2 only.
 * Icons are loaded from the Simple Icons CDN (simpleicons.org).
 * Format: https://cdn.simpleicons.org/<slug>/<hex-color-no-hash>
 */

// ─── Data ─────────────────────────────────────────────────────────────────────

// Row 1 scrolls left  → languages + front-end frameworks
const ROW_1 = [
  { label: "JavaScript",  icon: "https://cdn.simpleicons.org/javascript/F7DF1E"  },
  { label: "TypeScript",  icon: "https://cdn.simpleicons.org/typescript/3178C6"  },
  { label: "PHP",         icon: "https://cdn.simpleicons.org/php/777BB4"         },
  { label: "Python",      icon: "https://cdn.simpleicons.org/python/3776AB"      },
  { label: "HTML5",       icon: "https://cdn.simpleicons.org/html5/E34F26"       },
  { label: "CSS3",        icon: "https://cdn.simpleicons.org/css3/1572B6"        },
  { label: "React",       icon: "https://cdn.simpleicons.org/react/61DAFB"       },
  { label: "Tailwind CSS",icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { label: "GraphQL",     icon: "https://cdn.simpleicons.org/graphql/E10098"     },
  { label: "Material UI", icon: "https://cdn.simpleicons.org/mui/007FFF"         },
  { label: "Laravel",     icon: "https://cdn.simpleicons.org/laravel/FF2D20"     },
  { label: "Bootstrap",   icon: "https://cdn.simpleicons.org/bootstrap/7952B3"   },
];

// Row 2 scrolls right → back-end, databases, DevOps tools
const ROW_2 = [
  { label: "Node.js",        icon: "https://cdn.simpleicons.org/nodedotjs/339933"  },
  { label: "Express.js",     icon: "https://cdn.simpleicons.org/express/ffffff"    },
  { label: "Drupal",         icon: "https://cdn.simpleicons.org/drupal/0678BE"     },
  { label: "PostgreSQL",     icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { label: "Sequelize",      icon: "https://cdn.simpleicons.org/sequelize/52B0E7"  },
  { label: "Prisma ORM",     icon: "https://cdn.simpleicons.org/prisma/ffffff"     },
  { label: "Git",            icon: "https://cdn.simpleicons.org/git/F05032"        },
  { label: "GitHub",         icon: "https://cdn.simpleicons.org/github/ffffff"     },
  { label: "GitHub Actions", icon: "https://cdn.simpleicons.org/githubactions/2088FF" },
  { label: "Jest",           icon: "https://cdn.simpleicons.org/jest/C21325"       },
  { label: "Cypress",        icon: "https://cdn.simpleicons.org/cypress/ffffff"    },
  { label: "Vite",           icon: "https://cdn.simpleicons.org/vite/646CFF"       },
];

// ─── Renderer ────────────────────────────────────────────────────────────────

function renderSkillCard({ label, icon }) {
  return `
    <div class="skill-card">
      <img src="${icon}" alt="${label} logo" width="36" height="36" loading="lazy" onerror="this.style.display='none'">
      <span>${label}</span>
    </div>`.trim();
}

/**
 * Creates one full-width carousel row.
 * Items are tripled so the seamless-loop illusion holds at any viewport width.
 */
function renderCarouselRow(skills, direction) {
  // Triple the items so the loop never shows a gap on wide screens
  const tripled = [...skills, ...skills, ...skills];
  const cards   = tripled.map(renderSkillCard).join("\n      ");
  return `
  <div class="carousel-wrapper">
    <div class="carousel-track scroll-${direction}">
      ${cards}
    </div>
  </div>`.trim();
}

// ─── Bootstrap ────────────────────────────────────────────────────────────────

const carouselRoot = document.getElementById("skills-carousel");
if (carouselRoot) {
  carouselRoot.innerHTML = `
    ${renderCarouselRow(ROW_1, "left")}
    ${renderCarouselRow(ROW_2, "right")}
  `;
}
