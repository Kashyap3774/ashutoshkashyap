/* ---------------------------
   Single source of truth (edit here)
---------------------------- */
const DATA = {
  profile: {
    name: "Ashutosh Kashyap",
    roleLine: "Software Engineer · .NET · AWS · GenAI",
    tagline:
      "Backend engineer at Accenture building .NET Web APIs and cloud-native solutions on AWS and Azure OpenAI. Dual-degree from IIT Madras and IEM Kolkata. Interested in ML, Cybersecurity, and AI.",
    availability: "Open to opportunities · Remote / Onsite",

    email: "ashutoshk.office@gmail.com",
    whatsappNumber: "917482065988",
    whatsappMessage: "Hi Ashutosh, I found your website ashutoshkashyap.me - I’d like to connect.",

    linkedin: "https://www.linkedin.com/in/theashutoshkashyap/",
    github: "https://github.com/Kashyap3774",
    resumeUrl: "./resume.pdf",
    location: "India",
  },

  education: [
    {
      institution: "Indian Institute of Technology (IIT), Madras",
      degree: "B.S. in Programming and Data Science",
      period: "2020 – Present",
      grade: "7.0 / 10",
    },
    {
      institution: "Institute of Engineering and Management (IEM), Kolkata",
      degree: "B.Tech. in Computer Science",
      period: "2019 – 2023",
      grade: "9.3 / 10",
    },
    {
      institution: "Jesus & Mary Academy, Darbhanga",
      degree: "Intermediate / +2",
      period: "2018",
      grade: "83.4%",
    },
    {
      institution: "Jesus & Mary Academy, Darbhanga",
      degree: "Matriculation",
      period: "2016",
      grade: "10 / 10",
    },
  ],

  experience: [
    {
      title: "Software Engineer",
      company: "Accenture",
      period: "July 2023 – Present",
      bullets: [
        "Built backend Web APIs with .NET (C#) for production-grade enterprise systems.",
        "API testing and debugging with Postman; developed comprehensive test cases.",
        "AWS: DynamoDB for data storage, Lambda for serverless compute.",
        "Hands-on with Azure OpenAI; active participant in GenAI training programs.",
        "Contributed to code reviews, technical design discussions, and team collaboration.",
      ],
    },
    {
      title: "Intern",
      company: "DRDO – SSPL, New Delhi",
      period: "Feb 2023 – Mar 2023",
      bullets: [
        "Developed a full-stack Employee Management Tool using HTML, CSS, JS, PHP, and MySQL.",
        "Built a Face Recognition system using Python and Deep Learning.",
      ],
    },
  ],

  projects: [
    {
      name: "AI in the Courtroom",
      desc: "Bot system using Python and Supervised ML to auto-generate judgements for normal court cases, reducing caseload.",
      tags: ["Python", "Machine Learning", "NLP"],
      category: "ML / AI",
      link: "#",
    },
    {
      name: "Face Recognition System",
      desc: "Deep Learning-based face recognition system built at DRDO for identity verification.",
      tags: ["Python", "Deep Learning", "OpenCV"],
      category: "ML / AI",
      link: "#",
    },
    {
      name: "Nyaya Pravah – Magazine Site",
      desc: "Responsive magazine website with Tailwind CSS, user-centric navigation, and cross-device compatibility.",
      tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
      category: "Web",
      link: "https://nyayapravah.netlify.app/",
    },
    {
      name: "Bill-Splitter Web App",
      desc: "Web app to split and distribute expenses for trips and gatherings among registered users.",
      tags: ["HTML", "CSS", "JavaScript"],
      category: "Web",
      link: "#",
    },
    {
      name: "Employee Management Tool",
      desc: "Full-stack web app built at DRDO for managing employee records with PHP backend and MySQL.",
      tags: ["HTML", "CSS", "JS", "PHP", "MySQL"],
      category: "Web",
      link: "#",
    },
    {
      name: "Quarantine Management (SAP DMC)",
      desc: "SAP DMC plugin with filters, pagination, and quarantine/unquarantine workflows for manufacturing.",
      tags: ["SAP UI5", "SAP DMC", "OData", "API"],
      category: "SAP",
      link: "#",
    },
  ],

  skills: {
    "Languages": [".NET (C#)", "Python", "JavaScript", "C", "PHP"],
    "Web & UI": ["HTML", "CSS", "Tailwind CSS", "REST APIs", "SAP UI5"],
    "Cloud & DB": ["AWS Lambda", "DynamoDB", "Azure OpenAI", "MySQL"],
    "AI / ML": ["Machine Learning", "Deep Learning", "GenAI", "Data Science"],
    "Tools": ["Postman", "Git", "GitHub", "VS Code", "Cloudflare"],
    "Research": ["Cybersecurity", "Digital Forensics", "Neural Networks", "MATLAB"],
  },

  certifications: [
    { name: "Python for Everybody", org: "University of Michigan · Coursera", status: "Completed" },
    { name: "Technical Support Fundamentals", org: "Google · Coursera", status: "Completed" },
    { name: "Cryptography and Blockchain Basics", org: "IEM, Kolkata", status: "A+" },
    { name: "Application Security – Vulnerability Assessments", org: "Cyber Security CoE, West Bengal & NASSCOM", status: "Completed" },
    { name: "Google Data Analytics Certification", org: "Google · Coursera", status: "Ongoing" },
    { name: "CS50 – Introduction to Computer Science", org: "Harvard University", status: "Ongoing" },
    { name: "Machine Learning Specialization", org: "Andrew Ng · Stanford University", status: "Enrolled" },
    { name: "Python for Data Structures", org: "University of Michigan · Coursera", status: "Ongoing" },
  ],

  awards: [
    "3rd Prize – National Article Writing Competition on ‘Education System and the Way Ahead’ by THINK INDIA [2019]",
    "Twice National Educational Council Scholarship winner [2012–13]",
    "Completed Foundational Degree in Programming and Data Science at IIT Madras",
    "Participated in SECURE BENGAL-2021 Hackathon – Application Security & Vulnerability Assessment [Aug 2021]",
  ],
};

/* ---------------------------
   Helpers
---------------------------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const enc = encodeURIComponent;
const bareUrl = (url) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
const ext = `target="_blank" rel="noreferrer"`;

function setTheme(next) {
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch {}
  updateThemeIcon(next);
}

function updateThemeIcon(theme) {
  const icon = $("#themeIcon");
  if (!icon) return;

  // Simple visual toggle: sun for light, moon for dark (inline SVG path swap)
  if (theme === "light") {
    icon.innerHTML = `
      <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" fill="currentColor"/>
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    `;
  } else {
    icon.innerHTML = `
      <path d="M21 13.2A7.8 7.8 0 0 1 10.8 3a6.6 6.6 0 1 0 10.2 10.2Z" fill="currentColor"/>
    `;
  }
}

/* ---------------------------
   Render
---------------------------- */
function render() {
  const p = DATA.profile;
  const waLink = `https://wa.me/${p.whatsappNumber}?text=${enc(p.whatsappMessage)}`;
  const mailLink = `mailto:${p.email}?subject=${enc("Hello Ashutosh")}`;

  // Hero
  $("#heroName").textContent = p.name;
  $("#heroRole").textContent = p.roleLine;
  $("#heroSummary").textContent = p.tagline;
  $("#heroMeta").textContent = `Based in ${p.location} · ${p.availability}`;
  $("#resumeBtn").href = p.resumeUrl;
  $("#mailBtn").href = mailLink;
  $("#linkedinBtn").href = p.linkedin;
  $("#githubBtn").href = p.github;

  // Experience
  $("#experienceList").innerHTML = DATA.experience.map((e) => `
    <article class="entry">
      <div class="entry__head">
        <h3 class="entry__title">${e.title} <span class="entry__org">· ${e.company}</span></h3>
        <span class="entry__date">${e.period}</span>
      </div>
      <ul class="bullets">${e.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>
    </article>
  `).join("");

  // Projects
  $("#projectsGrid").innerHTML = DATA.projects.map((pr) => {
    const hasLink = pr.link && pr.link !== "#";
    return `
      <article>
        <h3 class="project__name">${hasLink ? `<a href="${pr.link}" ${ext}>${pr.name} ↗</a>` : pr.name}</h3>
        <p class="project__desc">${pr.desc}</p>
        <p class="project__tags">${pr.tags.join(" · ")}</p>
      </article>
    `;
  }).join("");

  // Skills
  $("#skillsList").innerHTML = Object.entries(DATA.skills)
    .map(([group, items]) => `<div><dt>${group}</dt><dd>${items.join(", ")}</dd></div>`)
    .join("");

  // Education
  $("#educationList").innerHTML = DATA.education.map((e) => `
    <article class="entry">
      <div class="entry__head">
        <h3 class="entry__title">${e.degree}</h3>
        <span class="entry__date">${e.period}</span>
      </div>
      <p class="entry__sub">${e.institution} · ${e.grade}</p>
    </article>
  `).join("");

  // Certifications & Awards
  $("#certList").innerHTML = DATA.certifications.map((c) => `
    <article class="entry">
      <div class="entry__head">
        <h3 class="entry__title">${c.name}</h3>
        <span class="entry__date">${c.status}</span>
      </div>
      <p class="entry__sub">${c.org}</p>
    </article>
  `).join("");

  $("#awardList").innerHTML = DATA.awards.map((a) => `<li>${a}</li>`).join("");

  // Contact
  $("#contactList").innerHTML = `
    <div><dt>Email</dt><dd><a href="${mailLink}">${p.email}</a></dd></div>
    <div><dt>LinkedIn</dt><dd><a href="${p.linkedin}" ${ext}>${bareUrl(p.linkedin)}</a></dd></div>
    <div><dt>GitHub</dt><dd><a href="${p.github}" ${ext}>${bareUrl(p.github)}</a></dd></div>
    <div><dt>WhatsApp</dt><dd><a href="${waLink}" ${ext}>Send a message</a></dd></div>
  `;

  $("#year").textContent = String(new Date().getFullYear());
}

/* ---------------------------
   UI behaviors
---------------------------- */
function setupMobileMenu() {
  const btn = $("#menuBtn");
  const menu = $("#mobileMenu");
  const toggle = (open) => {
    menu.hidden = !open;
    btn.setAttribute("aria-expanded", String(open));
  };

  btn.addEventListener("click", () => toggle(menu.hidden));
  $$(".mobile__link").forEach((a) => a.addEventListener("click", () => toggle(false)));
}

function setupTheme() {
  // Initial theme is set by the inline script in <head>
  updateThemeIcon(document.documentElement.dataset.theme || "light");

  $("#themeToggle").addEventListener("click", () => {
    setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
  });
}

function setupActiveNav() {
  const links = $$(".nav__link");
  const sections = links.map((a) => $(a.getAttribute("href")));

  // Active = last section whose top passed 40% of the viewport; the last one once scrolled to the bottom
  const onScroll = () => {
    const h = document.documentElement;
    let current = -1;
    sections.forEach((s, i) => {
      if (s.getBoundingClientRect().top <= innerHeight * 0.4) current = i;
    });
    if (innerHeight + scrollY >= h.scrollHeight - 2) current = sections.length - 1;
    links.forEach((a, i) => a.classList.toggle("active", i === current));
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ---------------------------
   Init
---------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  setupTheme();
  render();
  setupMobileMenu();
  setupActiveNav();
});
