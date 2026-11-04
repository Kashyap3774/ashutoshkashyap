/* ---------------------------
   Single source of truth (edit here)
---------------------------- */
const DATA = {
  profile: {
    name: "Ashutosh Kashyap",
    roleLine: "Software Engineer • .NET • AWS • GenAI",
    tagline:
      "Backend engineer at Accenture building .NET Web APIs and cloud-native solutions on AWS and Azure OpenAI. Dual-degree from IIT Madras and IEM Kolkata. Interested in ML, Cybersecurity, and AI.",
    availability: "Open to opportunities • Remote / Onsite",

    email: "ashutoshk.office@gmail.com",
    whatsappNumber: "917482065988",
    whatsappMessage: "Hi Ashutosh, I found your website ashutoshkashyap.me - I’d like to connect.",

    linkedin: "https://www.linkedin.com/in/theashutoshkashyap/",
    github: "https://github.com/Kashyap3774",
    resumeUrl: "./resume.pdf",
    location: "India",
  },

  highlights: [
    { k: "Current Role", v: "Software Engineer @ Accenture" },
    { k: "IIT Madras", v: "B.S. Programming & Data Science" },
    { k: "IEM Kolkata", v: "B.Tech. CS · CGPA 9.3 / 10" },
    { k: "Focus", v: ".NET · AWS · GenAI · ML" },
  ],

  chips: [".NET (C#)", "Python", "AWS", "Azure OpenAI", "Machine Learning", "SAP UI5", "GenAI", "Data Science"],

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

function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((x) => x[0].toUpperCase())
    .join("");
}

function setTheme(next) {
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  updateThemeIcon(next);
}

function getTheme() {
  return localStorage.getItem("theme") ||
    (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
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

  $("#brandInitials").textContent = initials(p.name);
  $("#brandName").textContent = p.name;
  $("#brandRole").textContent = "Portfolio";

  $("#heroName").textContent = p.name;
  $("#heroHeadline").textContent = p.roleLine;
  $("#availabilityPill").textContent = p.availability;

  $("#aboutTagline").textContent = p.tagline;
  $("#aboutSummary").innerHTML = `
    <p>${p.tagline}</p>
    <p class="muted">Location: ${p.location}</p>
  `;

  // Chips
  const chipWrap = $("#aboutChips");
  chipWrap.innerHTML = "";
  DATA.chips.forEach((c) => {
    const span = document.createElement("span");
    span.className = "chip";
    span.textContent = c;
    chipWrap.appendChild(span);
  });

  // Highlights
  const hi = $("#highlights");
  hi.innerHTML = "";
  DATA.highlights.forEach((h) => {
    const div = document.createElement("div");
    div.className = "highlight";
    div.innerHTML = `<div class="highlight__k">${h.k}</div><div class="highlight__v">${h.v}</div>`;
    hi.appendChild(div);
  });

  // Links
  const waLink = `https://wa.me/${p.whatsappNumber}?text=${enc(p.whatsappMessage)}`;
  const mailLink = `mailto:${p.email}?subject=${enc("Hello Ashutosh")}&body=${enc("Hi Ashutosh,\n\n")}`;

  $("#emailInline").textContent = p.email;
  $("#emailInline").href = mailLink;

  $("#waInline").href = waLink;

  $("#linkedinInline").href = p.linkedin;
  $("#githubInline").href = p.github;

  $("#waBtn").href = waLink;
  $("#mailBtn").href = mailLink;
  $("#linkedinBtn").href = p.linkedin;
  $("#githubBtn").href = p.github;

  $("#fabWa").href = waLink;
  $("#fabMail").href = mailLink;

  $("#resumeBtn").href = p.resumeUrl;

  // Message template
  $("#msgTemplate").textContent = p.whatsappMessage;

  // Experience
  const exp = $("#experienceList");
  exp.innerHTML = "";
  DATA.experience.forEach((e) => {
    const item = document.createElement("div");
    item.className = "tItem";
    item.innerHTML = `
      <div class="tTop">
        <div>
          <div class="tRole">${e.title} • ${e.company}</div>
        </div>
        <div class="tMeta">${e.period}</div>
      </div>
      <ul class="tPoints">
        ${e.bullets.map((b) => `<li>${b}</li>`).join("")}
      </ul>
    `;
    exp.appendChild(item);
  });

  // Projects
  renderProjectFilters();
  renderProjects("All");

  // Skills
  const skillsGrid = $("#skillsGrid");
  skillsGrid.innerHTML = "";
  Object.entries(DATA.skills).forEach(([group, items]) => {
    const card = document.createElement("div");
    card.className = "sCard";
    card.innerHTML = `
      <h3 class="sTitle">${group}</h3>
      <div class="sList">
        ${items.map((x) => `<span class="sItem">${x}</span>`).join("")}
      </div>
    `;
    skillsGrid.appendChild(card);
  });

  // Education
  renderEducation();

  // Certifications & Awards
  renderCertifications();

  // Footer
  $("#year").textContent = String(new Date().getFullYear());
  $("#footerName").textContent = p.name;
  $("#footerLinks").innerHTML = `
    <a href="${p.github}" target="_blank" rel="noreferrer">GitHub</a>
    <span class="dot">•</span>
    <a href="${p.linkedin}" target="_blank" rel="noreferrer">LinkedIn</a>
  `;
}

/* ---------------------------
   Projects filtering
---------------------------- */
function renderProjectFilters() {
  const wrap = $("#projectFilters");
  const cats = ["All", ...Array.from(new Set(DATA.projects.map((p) => p.category)))];

  wrap.innerHTML = "";
  cats.forEach((c, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `filterBtn ${i === 0 ? "active" : ""}`;
    btn.textContent = c;

    btn.addEventListener("click", () => {
      $$(".filterBtn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderProjects(c);
    });

    wrap.appendChild(btn);
  });
}

function renderProjects(category) {
  const grid = $("#projectsGrid");
  grid.innerHTML = "";

  const list = category === "All"
    ? DATA.projects
    : DATA.projects.filter((p) => p.category === category);

  list.forEach((p) => {
    const hasLink = p.link && p.link !== "#";
    const card = document.createElement(hasLink ? "a" : "div");
    card.className = "pCard";
    if (hasLink) {
      card.href = p.link;
      card.target = "_blank";
      card.rel = "noreferrer";
    }

    card.innerHTML = `
      <h3 class="pName">${p.name}</h3>
      <p class="pDesc">${p.desc}</p>
      <div class="pTags">
        ${p.tags.map((t) => `<span class="pTag">${t}</span>`).join("")}
      </div>
      ${p.link && p.link !== "#" ? `<div class="pLink">View →</div>` : ""}
    `;

    grid.appendChild(card);
  });
}

/* ---------------------------
   Education & Certifications
---------------------------- */
function renderEducation() {
  const grid = $("#educationList");
  if (!grid) return;
  grid.innerHTML = "";
  DATA.education.forEach((e) => {
    const card = document.createElement("div");
    card.className = "eduCard";
    card.innerHTML = `
      <div class="eduTop">
        <div class="eduInst">${e.institution}</div>
        <div class="eduGrade">${e.grade}</div>
      </div>
      <div class="eduDeg">${e.degree}</div>
      <div class="eduPeriod">${e.period}</div>
    `;
    grid.appendChild(card);
  });
}

function renderCertifications() {
  const certList = $("#certList");
  const awardList = $("#awardList");

  if (certList) {
    certList.innerHTML = "";
    DATA.certifications.forEach((c) => {
      const cls = c.status === "Completed" || c.status === "A+"
        ? "completed"
        : c.status === "Ongoing"
        ? "ongoing"
        : "enrolled";
      const div = document.createElement("div");
      div.className = "certItem";
      div.innerHTML = `
        <div class="certInfo">
          <div class="certName">${c.name}</div>
          <div class="certOrg">${c.org}</div>
        </div>
        <span class="certBadge certBadge--${cls}">${c.status}</span>
      `;
      certList.appendChild(div);
    });
  }

  if (awardList) {
    awardList.innerHTML = "";
    DATA.awards.forEach((a) => {
      const div = document.createElement("div");
      div.className = "awardItem";
      div.innerHTML = `<span class="awardDot" aria-hidden="true">▸</span><span>${a}</span>`;
      awardList.appendChild(div);
    });
  }
}

/* ---------------------------
   UI behaviors
---------------------------- */
function setupMobileMenu() {
  const btn = $("#menuBtn");
  const menu = $("#mobileMenu");

  btn.addEventListener("click", () => {
    const show = !menu.classList.contains("show");
    menu.classList.toggle("show", show);
    menu.setAttribute("aria-hidden", show ? "false" : "true");
  });

  $$(".mobile__link").forEach((a) => {
    a.addEventListener("click", () => {
      menu.classList.remove("show");
      menu.setAttribute("aria-hidden", "true");
    });
  });
}

function setupTheme() {
  const theme = getTheme();
  setTheme(theme);

  $("#themeToggle").addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") || "dark";
    setTheme(current === "dark" ? "light" : "dark");
  });
}

function setupCopy() {
  $("#copyEmailBtn").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(DATA.profile.email);
      toast("Email copied ✅");
    } catch {
      toast("Copy failed");
    }
  });

  $("#copyMsgBtn").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(DATA.profile.whatsappMessage);
      toast("Message copied ✅");
    } catch {
      toast("Copy failed");
    }
  });
}

function toast(text) {
  let el = $("#toast");
  if (!el) {
    el = document.createElement("div");
    el.id = "toast";
    el.style.position = "fixed";
    el.style.left = "50%";
    el.style.bottom = "86px";
    el.style.transform = "translateX(-50%)";
    el.style.padding = "10px 14px";
    el.style.borderRadius = "999px";
    el.style.border = "1px solid rgba(255,255,255,.18)";
    el.style.background = "rgba(0,0,0,.55)";
    el.style.color = "white";
    el.style.backdropFilter = "blur(10px)";
    el.style.zIndex = "100";
    el.style.fontSize = "13px";
    document.body.appendChild(el);
  }
  el.textContent = text;
  el.style.opacity = "1";
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => {
    el.style.opacity = "0";
  }, 1400);
}

function setupScrollProgress() {
  const bar = $(".scroll-progress");
  const onScroll = () => {
    const h = document.documentElement;
    const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    bar.style.width = `${Math.min(100, Math.max(0, pct))}%`;
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function setupReveal() {
  const els = $$(".reveal");
  if (!("IntersectionObserver" in window)) {
    els.forEach((e) => e.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) en.target.classList.add("is-visible");
    });
  }, { threshold: 0.12 });

  els.forEach((e) => io.observe(e));
}

function setupActiveNav() {
  const links = $$(".nav__link");
  const sections = links.map((a) => $(a.getAttribute("href")));

  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const id = `#${en.target.id}`;
      links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === id));
    });
  }, { rootMargin: "-40% 0px -55% 0px", threshold: 0.01 });

  sections.forEach((s) => s && io.observe(s));
}

/* ---------------------------
   Init
---------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  setupTheme();
  render();
  setupMobileMenu();
  setupCopy();
  setupScrollProgress();
  setupReveal();
  setupActiveNav();
});