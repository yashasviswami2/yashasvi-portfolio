import { useEffect, useRef } from "react";
import "./App.css";
import profileImage from "./assets/profile.jpeg";

function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];
    let animationFrame;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    };

    const createParticles = () => {
      const numberOfParticles = Math.min(
        65,
        Math.floor(
          (window.innerWidth * window.innerHeight) / 18000
        )
      );

      particles = [];

      for (let i = 0; i < numberOfParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          radius: Math.random() * 1.5 + 1
        });
      }
    };

    const animate = () => {
      ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
      );

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (
          particle.x < 0 ||
          particle.x > canvas.width
        ) {
          particle.vx *= -1;
        }

        if (
          particle.y < 0 ||
          particle.y > canvas.height
        ) {
          particle.vy *= -1;
        }

        ctx.beginPath();

        ctx.arc(
          particle.x,
          particle.y,
          particle.radius,
          0,
          Math.PI * 2
        );

        ctx.fillStyle =
          "rgba(236, 72, 153, 0.75)";

        ctx.fill();
      });

      for (
        let i = 0;
        i < particles.length;
        i++
      ) {
        for (
          let j = i + 1;
          j < particles.length;
          j++
        ) {
          const dx =
            particles[i].x -
            particles[j].x;

          const dy =
            particles[i].y -
            particles[j].y;

          const distance = Math.sqrt(
            dx * dx + dy * dy
          );

          if (distance < 170) {
            const opacity =
              (1 - distance / 170) * 0.18;

            ctx.beginPath();

            ctx.moveTo(
              particles[i].x,
              particles[i].y
            );

            ctx.lineTo(
              particles[j].x,
              particles[j].y
            );

            ctx.strokeStyle =
              `rgba(236, 72, 153, ${opacity})`;

            ctx.lineWidth = 0.6;

            ctx.stroke();
          }
        }
      }

      animationFrame =
        requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener(
      "resize",
      resizeCanvas
    );

    return () => {
      window.removeEventListener(
        "resize",
        resizeCanvas
      );

      cancelAnimationFrame(
        animationFrame
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="particle-background"
    />
  );
}

function App() {
  return (
    <>
      <ParticleBackground />

      <div className="animated-background">
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>
        <div className="glow glow-3"></div>
      </div>

      {/* =========================
          AI BACKGROUND PARTICLES
      ========================= */}

      <div
        className="ai-particles"
        aria-hidden="true"
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* =========================
          NAVBAR
      ========================= */}

      {/* =========================
    NAVBAR
========================= */}

<nav className="navbar">

  <div className="nav-container">

    <a
      href="#home"
      className="nav-logo"
    >
      <span className="logo-symbol">
        Y
      </span>

      <span className="logo-name">
        Yashasvi
      </span>
    </a>


    <div className="nav-links">

      <a href="#home">
        Home
      </a>

      <a href="#about">
        About
      </a>

      <a href="#skills">
        Skills
      </a>

      <a href="#projects">
        Projects
      </a>

      <a href="#achievements">
        Achievements
      </a>

      <a href="#contact">
        Contact
      </a>

    </div>


    <a
      href="#contact"
      className="nav-connect"
    >
      Let's Connect
      <span>↗</span>
    </a>

  </div>

</nav>
      {/* =========================
          HERO
      ========================= */}

      {/* =========================
    HERO
========================= */}

<section id="home" className="hero">

  <div className="hero-content">

    <div className="hero-badge">
      <span className="hero-status-dot"></span>
      Available for learning & opportunities
    </div>

    <h1>
      Building Intelligent
      <br />
      <span>AI Solutions</span>
    </h1>

    <p className="hero-role">
      Computer Science Student
      <span>•</span>
      AI / ML
      <span>•</span>
      Generative AI
    </p>

    <p className="hero-description">
      I build practical applications using
      Artificial Intelligence, Machine Learning
      and Generative AI : turning ideas into
      useful, intelligent solutions.
    </p>

    <div className="hero-buttons">

      <a
        href="#projects"
        className="primary-btn"
      >
        View My Projects
        <span>↗</span>
      </a>

      <a
        href="#contact"
        className="secondary-btn"
      >
        Let's Connect
        <span>→</span>
      </a>

    </div>


    {/* Hero Stats */}

    <div className="hero-stats">

      <div className="hero-stat">

        <strong>
          4+
        </strong>

        <span>
          Projects Built
        </span>

      </div>

      <div className="hero-stat-divider"></div>

      <div className="hero-stat">

        <strong>
          5+
        </strong>

        <span>
          Programming Skills
        </span>

      </div>

      <div className="hero-stat-divider"></div>

      <div className="hero-stat">

        <strong>
          2026
        </strong>

        <span>
          Building & Learning
        </span>

      </div>

    </div>

  </div>

</section>

      {/* =========================
          ABOUT
      ========================= */}

      <section
        id="about"
        className="about"
      >

        <div className="section-heading">

          <h2>
            About Me
          </h2>

          <p>
            Computer Science student passionate
            about intelligent technology.
          </p>

        </div>

        <div className="about-container">

          <div className="about-image">

            <div className="image-glow"></div>

            <img
              src={profileImage}
              alt="Yashasvi Swami"
            />

            <div className="image-badge">
              <span>✦</span>
              AI Enthusiast
            </div>

          </div>

          <div className="about-text">

            <div className="about-label">
              WHO I AM
            </div>

            <h3>
              Building today. Learning for tomorrow.
            </h3>

            <p>
              I am a Computer Science and Engineering
              student with a strong interest in
              Artificial Intelligence, Machine Learning
              and Generative AI.
            </p>

            <p>
              I enjoy transforming ideas into practical
              software applications and exploring how
              intelligent systems can solve real-world
              problems. From voice assistants to
              database-driven applications, I love
              learning by building.
            </p>

            <p>
              My current goal is to strengthen my skills
              in Machine Learning, Deep Learning, Large
              Language Models and Generative AI while
              building meaningful projects that showcase
              what I learn.
            </p>

            <div className="about-details">

              <div className="detail-card">

                <span>🎓</span>

                <div>
                  <h4>
                    Education
                  </h4>

                  <p>
                    B.Tech CSE
                  </p>

                  <small>
                    Mody University of Science
                    & Technology
                  </small>
                </div>

              </div>

              <div className="detail-card">

                <span>🧠</span>

                <div>
                  <h4>
                    Specialization
                  </h4>

                  <p>
                    AI • ML • GenAI
                  </p>
                </div>

              </div>

              <div className="detail-card">

                <span>🚀</span>

                <div>
                  <h4>
                    Career Goal
                  </h4>

                  <p>
                    Generative AI Engineer
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================
          SKILLS
      ========================= */}

      <section
        id="skills"
        className="skills"
      >

        <div className="section-heading">

          <h2>
            Technical Skills
          </h2>

          <p>
            Technologies and tools I use to
            build, learn and experiment.
          </p>

        </div>

        <div className="skills-grid">

          {/* Programming */}

          <div className="skill-card">

            <div className="skill-top">

              <div className="skill-icon">
                🐍
              </div>

              <span className="skill-number">
                01
              </span>

            </div>

            <h3>
              Programming
            </h3>

            <p>
              Strong foundation in programming
              and problem solving.
            </p>

            <div className="skill-tags">

              <span>Python</span>
              <span>Java</span>
              <span>C++</span>
              <span>C</span>

            </div>

          </div>


          {/* AI & Machine Learning */}

          <div className="skill-card">

            <div className="skill-top">

              <div className="skill-icon">
                🧠
              </div>

              <span className="skill-number">
                02
              </span>

            </div>

            <h3>
              AI & Machine Learning
            </h3>

            <p>
              Exploring intelligent systems
              and machine learning techniques.
            </p>

            <div className="skill-tags">

              <span>Machine Learning</span>
              <span>Deep Learning</span>
              <span>NLP</span>
              <span>AI</span>

            </div>

          </div>


          {/* Generative AI */}

          <div className="skill-card featured-skill">

            <div className="skill-top">

              <div className="skill-icon">
                ✨
              </div>

              <span className="skill-number">
                03
              </span>

            </div>

            <h3>
              Generative AI
            </h3>

            <p>
              Building applications around
              modern generative AI technologies.
            </p>

            <div className="skill-tags">

              <span>LLMs</span>
              <span>Prompt Engineering</span>
              <span>AI APIs</span>
              <span>RAG</span>

            </div>

          </div>


          {/* Web Development */}

          <div className="skill-card">

            <div className="skill-top">

              <div className="skill-icon">
                🌐
              </div>

              <span className="skill-number">
                04
              </span>

            </div>

            <h3>
              Web Development
            </h3>

            <p>
              Creating responsive interfaces
              and interactive web applications.
            </p>

            <div className="skill-tags">

              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>

            </div>

          </div>


          {/* Database */}

          <div className="skill-card">

            <div className="skill-top">

              <div className="skill-icon">
                🗄️
              </div>

              <span className="skill-number">
                05
              </span>

            </div>

            <h3>
              Database
            </h3>

            <p>
              Working with relational databases
              and application connectivity.
            </p>

            <div className="skill-tags">

              <span>SQL</span>
              <span>MySQL</span>
              <span>JDBC</span>

            </div>

          </div>


          {/* Tools */}

          <div className="skill-card">

            <div className="skill-top">

              <div className="skill-icon">
                🛠️
              </div>

              <span className="skill-number">
                06
              </span>

            </div>

            <h3>
              Tools & Platforms
            </h3>

            <p>
              Tools I use for development,
              version control and experimentation.
            </p>

            <div className="skill-tags">

              <span>Git</span>
              <span>GitHub</span>
              <span>VS Code</span>
              <span>Colab</span>

            </div>

          </div>

        </div>

      </section>

      {/* =========================
          PROJECTS
      ========================= */}

      {/* =========================
    PROJECTS
========================= */}

<section id="projects" className="projects">

  <div className="section-heading">

    <h2>
      Featured Projects
    </h2>

    <p>
      Projects where I turn ideas into practical solutions.
    </p>

  </div>

  <div className="projects-grid">

    {/* =========================
        PROJECT 1 — JARVIS
    ========================= */}

    <div className="project-card featured-project">

      <div className="project-image">
        <span>🤖</span>

        <div className="project-label">
          AI PROJECT
        </div>
      </div>

      <div className="project-content">

        <div className="project-title-row">

          <h3>
            JARVIS AI Personal Assistant
          </h3>

          <span className="project-year">
            2026
          </span>

        </div>

        <p>
          A Python-based voice assistant that
          understands voice commands, responds
          through speech and performs useful
          computer tasks using AI technologies.
        </p>

        <div className="tech-stack">

          <span>Python</span>
          <span>Speech Recognition</span>
          <span>TTS</span>
          <span>OpenAI API</span>

        </div>

        <div className="project-buttons">

          <a
            href="https://github.com/yashasviswami2/Jarvis-AI-Personal-Assistant"
            target="_blank"
            rel="noreferrer"
            className="project-btn github-btn"
          >
            <span>↗</span>
            GitHub
          </a>

          <a
  href="https://github.com/yashasviswami2/Jarvis-AI-Personal-Assistant"
  target="_blank"
  rel="noreferrer"
  className="project-btn view-btn"
>
  View Project
</a>

        </div>

      </div>

    </div>


    {/* =========================
        PROJECT 2 — COLLEGE
    ========================= */}

    <div className="project-card">

      <div className="project-image">
        <span>🎓</span>

        <div className="project-label">
          JAVA PROJECT
        </div>
      </div>

      <div className="project-content">

        <div className="project-title-row">

          <h3>
            College Management System
          </h3>

          <span className="project-year">
            2025
          </span>

        </div>

        <p>
          A Java-based management application
          connected to MySQL using JDBC for
          managing and organizing college-related
          information.
        </p>

        <div className="tech-stack">

          <span>Java</span>
          <span>JDBC</span>
          <span>MySQL</span>

        </div>

        <div className="project-buttons">
  <a
    href="https://github.com/yashasviswami2/college-management-system-jdbc"
    target="_blank"
    rel="noreferrer"
    className="project-btn github-btn"
  >
    <span>↗</span>
    GitHub
  </a>

  <a
    href="https://github.com/yashasviswami2/college-management-system-jdbc"
    target="_blank"
    rel="noreferrer"
    className="project-btn view-btn"
  >
    View Project
  </a>
</div>

      </div>

    </div>


    {/* =========================
        PROJECT 3 — STOCK MARKET
    ========================= */}

    <div className="project-card">

      <div className="project-image">
        <span>📈</span>

        <div className="project-label">
          C PROJECT
        </div>
      </div>

      <div className="project-content">

        <div className="project-title-row">

          <h3>
            Stock Market Simulator
          </h3>

          <span className="project-year">
            2025
          </span>

        </div>

        <p>
          A C-based stock market simulation
          featuring virtual trading, buying and
          selling operations, portfolio tracking
          and transaction history.
        </p>

        <div className="tech-stack">

          <span>C</span>
          <span>Data Structures</span>
          <span>File Handling</span>

        </div>

        <div className="project-buttons">

        <a
  href="https://github.com/yashasviswami2/Stock-Market-Simulator"
  target="_blank"
  rel="noreferrer"
  className="project-btn github-btn"
></a>

          <a
            href="https://github.com/yashasviswami2/Stock-Market-Simulator"
            target="_blank"
            rel="noreferrer"
            className="project-btn view-btn"
          >
            View Project
          </a>

        </div>

      </div>

    </div>
    {/* =========================
        PROJECT 4 — AI SMART ATTENDANCE
    ========================= */}

    <div className="project-card featured-project">

      <div className="project-image">
        <span>🤖</span>

        <div className="project-label">
          AI / COMPUTER VISION
        </div>
      </div>

      <div className="project-content">

        <div className="project-title-row">

          <h3>
            AI Smart Attendance System
          </h3>

          <span className="project-year">
            2026
          </span>

        </div>

        <p>
          An AI-powered attendance management system
          combining facial recognition and hand gesture
          verification to automate classroom attendance.
          Features session management, student enrollment
          and an interactive analytics dashboard.
        </p>

        <div className="tech-stack">

          <span>Python</span>
          <span>OpenCV</span>
          <span>MediaPipe</span>
          <span>Streamlit</span>
          <span>SQLite</span>
          <span>Pandas</span>
          <span>Plotly</span>

        </div>

        <div className="project-buttons">

          <a
            href="https://github.com/yashasviswami2/AI-Smart-Attendance-System"
            target="_blank"
            rel="noreferrer"
            className="project-btn github-btn"
          >
            <span>↗</span>
            GitHub
          </a>

          <a
  href="https://github.com/yashasviswami2/AI-Smart-Attendance-System"
  target="_blank"
  rel="noreferrer"
  className="project-btn view-btn"
>
  View Project
</a>
        </div>
      </div>
    </div>

    {/* PROJECT 5 — KABADISETU */}

    <div className="project-card featured-project">

      <div className="project-image">
        <span>♻️</span>

        <div className="project-label">
          SIH HACKATHON PROJECT
        </div>
      </div>

      <div className="project-content">

        <div className="project-title-row">

          <h3>
            KabadiSetu
          </h3>

          <span className="project-year">
            2026
          </span>

        </div>

        <p>
          A technology-driven waste management
          platform designed to promote efficient
          waste collection and recycling.
          The project qualified for the Smart India
          Hackathon (SIH) Internal Hackathon.
        </p>

        <div className="tech-stack">
          <span>Waste Management</span>
          <span>Recycling</span>
          <span>Web Development</span>
        </div>

        <div className="project-buttons">

          <a
            href="https://github.com/yashasviswami2/KabadiSetu"
            target="_blank"
            rel="noreferrer"
            className="project-btn github-btn"
          >
            <span>↗</span>
            GitHub
          </a>

          <a
            href="https://github.com/yashasviswami2/KabadiSetu"
            target="_blank"
            rel="noreferrer"
            className="project-btn view-btn"
          >
            View Project
          </a>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* =========================
          ACHIEVEMENTS
      ========================= */}

      {/* =========================
    ACHIEVEMENTS
========================= */}

<section id="achievements" className="achievements">

  <div className="section-heading">

    <h2>
      Achievements & Credentials
    </h2>

    <p>
      Milestones, certifications and experiences
      that reflect my learning journey.
    </p>

  </div>

  <div className="achievements-grid">

    {/* =========================
        MICROSOFT LEARN
    ========================= */}

    <div className="achievement-card featured-achievement">

      <div className="achievement-icon">
        🏆
      </div>

      <div className="achievement-content">

        <div className="achievement-top">

          <span className="achievement-category">
            CERTIFICATION
          </span>

          <span className="achievement-year">
            2026
          </span>

        </div>

        <h3>
          Microsoft Learn Achievements
        </h3>

        <p>
          Completed Microsoft Learn learning
          activities and earned achievement badges
          while developing knowledge in modern
          cloud and technology concepts.
        </p>

        <a
          href="https://learn.microsoft.com/en-us/users/yashasvis-2510/achievements#badges-section"
          target="_blank"
          rel="noreferrer"
          className="credential-link"
        >
          View Credentials
          <span>↗</span>
        </a>

      </div>

    </div>


    {/* =========================
        AZURE WORKSHOP
    ========================= */}

    <div className="achievement-card">

      <div className="achievement-icon">
        ☁️
      </div>

      <div className="achievement-content">

        <div className="achievement-top">

          <span className="achievement-category">
            WORKSHOP
          </span>

          <span className="achievement-year">
            2026
          </span>

        </div>

        <h3>
          Microsoft Azure Workshop
        </h3>

        <p>
          Participated in a Microsoft Azure
          workshop to explore cloud computing,
          Azure services and modern cloud-based
          technologies.
        </p>

        <a
          href="https://learn.microsoft.com/api/achievements/share/en-us/YashasviS-2510/JHG5P3CT?sharingId=E5155B7B784641B1"
          target="_blank"
          rel="noreferrer"
          className="credential-link"
        >
          View Achievement
          <span>↗</span>
        </a>

      </div>

    </div>


    {/* =========================
        ACADEMIC PROJECTS
    ========================= */}

    <div className="achievement-card">

      <div className="achievement-icon">
        🎓
      </div>

      <div className="achievement-content">

        <div className="achievement-top">

          <span className="achievement-category">
            ACADEMIC
          </span>

          <span className="achievement-year">
            2025–26
          </span>

        </div>

        <h3>
          Computer Science Projects
        </h3>

        <p>
          Built multiple academic and personal
          projects across Python, Java, C++,
          C, databases and Artificial Intelligence.
        </p>

        <a
          href="#projects"
          className="credential-link"
        >
          Explore Projects
          <span>→</span>
        </a>

      </div>

    </div>


    {/* =========================
        GITHUB
    ========================= */}

    <div className="achievement-card">

      <div className="achievement-icon">
        💻
      </div>

      <div className="achievement-content">

        <div className="achievement-top">

          <span className="achievement-category">
            DEVELOPMENT
          </span>

          <span className="achievement-year">
            2026
          </span>

        </div>

        <h3>
          GitHub Project Portfolio
        </h3>

        <p>
          Building and maintaining a growing
          collection of programming, AI and
          software development projects on GitHub.
        </p>

        <a
          href="https://github.com/yashasviswami2"
          target="_blank"
          rel="noreferrer"
          className="credential-link"
        >
          Visit GitHub
          <span>↗</span>
        </a>

      </div>

    </div>

  </div>

</section>

      {/* =========================
          CONTACT
      ========================= */}

      {/* =========================
    CONTACT
========================= */}

<section id="contact" className="contact">

  <div className="contact-container">

    <div className="contact-left">

      <div className="contact-label">
        LET'S CONNECT
      </div>

      <h2>
        Let's build something
        <span> intelligent.</span>
      </h2>

      <p>
        I'm always interested in learning,
        building new projects and connecting
        with people working on exciting ideas
        in technology and Artificial Intelligence.
      </p>

      <a
        href="mailto:yashasvis.work@gmail.com"
        className="email-card"
      >

        <div className="email-icon">
          ✉
        </div>

        <div>
          <span>Email me at</span>
          <strong>
            yashasvis.work@gmail.com
          </strong>
        </div>

        <span className="email-arrow">
          ↗
        </span>

      </a>

    </div>


    <div className="contact-right">

      <div className="contact-card">

        <div className="contact-card-top">

          <span className="status-dot"></span>

          <span>
            OPEN TO OPPORTUNITIES
          </span>

        </div>

        <h3>
          Find me online
        </h3>

        <p>
          Connect with me through my professional
          profiles and explore what I'm building.
        </p>


        <div className="social-links">

          <a
            href="https://github.com/yashasviswami2"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >

            <div className="social-icon">
              GH
            </div>

            <div>
              <strong>GitHub</strong>
              <span>
                Projects & code
              </span>
            </div>

            <span className="social-arrow">
              ↗
            </span>

          </a>


          <a
            href="https://www.linkedin.com/in/yashasvis150221/"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >

            <div className="social-icon">
              in
            </div>

            <div>
              <strong>LinkedIn</strong>
              <span>
                Professional profile
              </span>
            </div>

            <span className="social-arrow">
              ↗
            </span>

          </a>


          <a
            href="mailto:yashasvis.work@gmail.com"
            className="social-link"
          >

            <div className="social-icon">
              @
            </div>

            <div>
              <strong>Email</strong>
              <span>
                Let's talk
              </span>
            </div>

            <span className="social-arrow">
              ↗
            </span>

          </a>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* =========================
          FOOTER
      ========================= */}

    <footer className="footer">
  <div className="footer-container">

    <div className="footer-brand">
      <a href="#home" className="footer-logo">
        <span className="footer-logo-symbol">Y</span>
        <span>Yashasvi Swami</span>
      </a>

      <p>
        Aspiring Generative AI Engineer building intelligent solutions
        with curiosity and code.
      </p>
    </div>

    <div className="footer-links">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>

    <div className="footer-socials">
      <a
        href="https://github.com/yashasviswami2"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        GH
      </a>

      <a
        href="https://www.linkedin.com/in/yashasvis150221/"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        in
      </a>

      <a
        href="mailto:yashasvis.work@gmail.com"
        aria-label="Email"
      >
        @
      </a>
    </div>

  </div>

  <div className="footer-bottom">
    <span>© 2026 Yashasvi Swami</span>

    <span className="footer-made">
      Built with React <span className="footer-heart">♥</span>
    </span>
  </div>
  </footer>
    </>
  );
}

export default App;
