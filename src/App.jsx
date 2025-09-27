 import './App.css';
 

function App() {
  return (
    <div>
      <header className="header">
        
        <h1>Teja Sri</h1>
        <p>B.Tech Student • Aspiring Web Developer</p>
      </header>
      
      {/* rest of your sections */}
    




  
    
      
      {/* Header */}
      <section className="section-spacing center">
        <h1>Teja Sri</h1>
        <p className="small">B.Tech Student • Aspiring Web Developer</p>
      </section>

      {/* About */}
      <section className="section-spacing">
        <h2>About Me</h2>
        <p>
          Hi, I’m Teja Sri 👋, a B.Tech student passionate about web development,
          React, and problem-solving. I enjoy building clean, responsive designs
          and learning new technologies.
        </p>
      </section>

      {/* Skills */}
      <section className="section-spacing">
        <h2>Skills</h2>
        <ul className="no-bullets">
          <li>💻 HTML, CSS, JavaScript</li>
          <li>⚛ React + Vite</li>
          <li>🟢 Node.js & Express (Basics)</li>
          <li>📊 Tableau, Data Visualization</li>
        </ul>
      </section>

      {/* Education */}
      <section className="section-spacing">
        <h2>Education</h2>
        <p>B.Tech in Electrical & Communication Engineering</p>
        <p>MIC College of Technology</p>
      </section>

      {/* Experience */}
      <section className="section-spacing">
        <h2>Experience</h2>
        <ul className="no-bullets">
          <li>💼 Web Development Intern at Future Intern Company</li>
          <li>📊 Data Visualization Project (DVR & Dr. HS MIC College of Technology)</li>
        </ul>
      </section>

      {/* Projects */}
      <section className="section-spacing">
        <h2>Projects</h2>
        <div className="grid">
          <div className="project-card">
            <div className="project-title">🌐 Portfolio Website</div>
            <div className="project-desc">
              A personal portfolio built with React + Vite and custom CSS.
            </div>
            <a href="https://github.com/your-username/portfolio" target="_blank" rel="noopener noreferrer">
              View Code
            </a>
          </div>

          <div className="project-card">
            <div className="project-title">✅ Todo App</div>
            <div className="project-desc">
              A simple Todo application with add, delete, and complete features.
            </div>
            <a href="https://github.com/your-username/todo-app" target="_blank" rel="noopener noreferrer">
              View Code
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-spacing">
        <h2>Contact</h2>
        <p>📧 Email: chopparaputejasri360@gmail.com</p>
        <p>📱 Phone: +91-7993880483</p>
        <p>
          🔗 LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/chopparapu-tejasri-4347a9385"
            target="_blank"
            rel="noopener noreferrer"
          >
            View My LinkedIn
          </a>
        </p>
      </section>

    </div>
  );
}

export default App;
