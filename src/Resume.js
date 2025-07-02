import React from 'react';
import './Resume.css'; // Assuming you have a CSS file for styles

const resumeData = {
  name: 'SAIKAT SARKAR',
  title: 'DevOps Engineer',
  contact: {
    email: 'ssarkar1997@gmail.com',
    phone: '+91 8147109973',
    location: 'Bangalore, KA'
  },
  summary: "I'm a DevOps Engineer with 2+ years of experience dedicated to transforming software delivery through automation and optimization of CI/CD pipelines and cloud infrastructure. My expertise spans AWS, Jenkins, Terraform, Docker, and Kubernetes, leveraging Python and Bash scripting to drive efficient and reliable deployments. \
            I prioritize implementing robust security best practices, maintaining stringent version control (Git, Bitbucket), and setting up comprehensive monitoring with CloudWatch. I'm committed to enhancing software delivery cycles and guaranteeing high system reliability. \
            I'm always open to connecting with fellow professionals and exploring new opportunities that align with my expertise. Feel free to reach out!",
  skills: [
    'React',
    'JavaScript (ES6+)',
    'HTML5 & CSS3',
    'Redux',
    'TypeScript',
    'REST APIs',
    'Git & GitHub',
    'Jest & Testing Library'
  ],
  experience: [
    {
      company: 'Nissan Digital India LLP',
      role: 'Software Engineer II',
      period: 'Apr 2025 - Present',
      details: [
        'Developed and maintained scalable React applications for enterprise clients.',
        'Collaborated with designers and backend developers to deliver seamless user experiences.',
        'Implemented state management using Redux and Context API.'
      ]
    },
    {
      company: 'Nissan Digital India LLP',
      role: 'Software Engineer I',
      period: 'Nov 2022 - Mar 2025',
      details: [
        'Built responsive UI components with React and styled-components.',
        'Optimized web applications for maximum speed and scalability.',
        'Wrote unit and integration tests to ensure code quality.'
      ]
    },
    {
      company: 'Syndicate Auto Components',
      role: 'Project Co-ordinator',
      period: 'Jan 2019 - Sep 2021',
      details: [
        'Supported the Sr. Design Engineer in end-to-end product design and development.',
        'Handling client interactions and supporting project planning.',
        'Coordinated with cross-functional teams to ensure project milestones were met.',
        'Handling ISO documentation for the company.'
      ]
    }
  ],
  education: [
    {
      institution: 'University of California, Berkeley',
      degree: 'B.S. in Computer Science',
      period: '2015 - 2019'
    }
  ]
};

function Resume() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${process.env.PUBLIC_URL}/assets/stars-background.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '40px 0',
        overflowX: 'hidden' // Prevent horizontal scroll
      }}
    >
      {/* Navigation Bar */}
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          background: 'rgba(0,0,0,0.7)',
          padding: '12px 0',
          marginBottom: 24,
          display: 'flex',
          justifyContent: 'center',
          gap: 32,
          borderRadius: 8,
          width: '100%' // Make nav full width
        }}
      >
        <a href="#about" style={{ color: 'white', textDecoration: 'none', fontWeight: 600 }}>About</a>
        <a href="#experience" style={{ color: 'white', textDecoration: 'none', fontWeight: 600 }}>Experience</a>
        <a href="#education" style={{ color: 'white', textDecoration: 'none', fontWeight: 600 }}>Education</a>
        <a href="#skills" style={{ color: 'white', textDecoration: 'none', fontWeight: 600 }}>Skills</a>
        <a href="#contact" style={{ color: 'white', textDecoration: 'none', fontWeight: 600 }}>Contact</a>
        <a href="#certificates" style={{ color: 'white', textDecoration: 'none', fontWeight: 600 }}>Certificates</a>
      </nav>
      <div
        style={{
          width: '100%',
          fontFamily: 'Arial, sans-serif',
          background: 'rgba(255,255,255,0.13)', // Match About box background
          borderRadius: 8,                      // Match About box border radius
          padding: 24,                          // Match About box padding
          boxShadow: '0 4px 24px rgba(0,0,0,0.08)', // Match About box shadow
          color: 'white',
          textAlign: 'center',
          marginBottom: 24                      // Optional: match section spacing
        }}
      >
        <h1 style={{ fontSize: '3rem', margin: 0, fontWeight: 700, letterSpacing: 2 }}>
          {resumeData.name}
        </h1>
        <h2 style={{ fontSize: '2rem', margin: '16px 0 0 0', fontWeight: 400, letterSpacing: 1 }}>
          {resumeData.title}
        </h2>

        {/* Download Resume Button */}
        <div style={{ marginTop: 24 }}>
          <button
            onClick={handleResumeDownload}
            style={{
              display: 'inline-block',
              padding: '10px 28px',
              background: 'transparent',
              color: '#ffd700',
              borderRadius: 24, // round edge
              fontWeight: 700,
              fontSize: '1.1rem',
              textDecoration: 'none',
              boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
              transition: 'background 0.2s, color 0.2s, border 0.2s',
              border: '2px solid #ffd700',
              cursor: 'pointer'
            }}
            onMouseOver={e => {
              e.target.style.background = 'rgba(255,140,0,0.08)';
              e.target.style.border = '2px solid orange';
              e.target.style.color = 'orange';
            }}
            onMouseOut={e => {
              e.target.style.background = 'transparent';
              e.target.style.border = '2px solid #ffd700';
              e.target.style.color = '#ffd700';
            }}
          >
            Download Resume
          </button>
        </div>
      </div>

      {/* Other Sections Box */}
      <div style={{
        width: '100%',
        fontFamily: 'Arial, sans-serif',
        background: 'rgba(255,255,255,0.10)',
        borderRadius: 0,
        padding: 32,
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        color: 'white'
      }}>
        <section
          id="about"
          style={{
            background: 'rgba(255,255,255,0.13)',
            borderRadius: 8,
            padding: 24,
            marginBottom: 24,
            display: 'flex',
            flexDirection: 'row',
            gap: 32,
            alignItems: 'flex-start',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ flex: 1 }}>
            <h3
              style={{
                marginTop: 0,
                fontSize: '2.6rem',
                fontFamily: 'Segoe UI, Arial, Helvetica, sans-serif',
                fontWeight: 400, // Not bold
                color: '#ffb347',
                letterSpacing: 1
              }}
            >
              About Me
            </h3>
          </div>
          <div style={{ flex: 3, paddingRight: 120 }}>
            <p style={{
              marginTop: 8,
              fontSize: '1.18rem',
              lineHeight: 1.7,
              fontFamily: 'Segoe UI, Arial, Helvetica, sans-serif',
              letterSpacing: 0.2,
              color: '#fff'
            }}>{resumeData.summary}</p>
          </div>
        </section>
        <section id="experience" style={{ background: 'rgba(255,255,255,0.19)', borderRadius: 8, padding: 24, marginBottom: 24 }}>
          <h3
            style={{
              marginTop: 0,
              fontSize: '2.6rem',
              fontFamily: 'Segoe UI, Arial, Helvetica, sans-serif',
              fontWeight: 400,
              color: '#fff',
              letterSpacing: 1,
              textAlign: 'center'
            }}
          >
            Experience
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32, marginTop: 32 }}>
            {resumeData.experience.map((job, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 20 }}>
                {/* Milestone image */}
                <img
                  src={`${process.env.PUBLIC_URL}/assets/location-logo.png`}
                  alt="milestone"
                  style={{ width: 32, height: 32, marginTop: 4 }}
                />
                {/* Job details */}
                <div>
                  <h4 style={{
                    margin: 0,
                    fontSize: '1.3rem',
                    fontWeight: 600,
                    color: '#ffd700',
                    fontFamily: 'Segoe UI, Arial, Helvetica, sans-serif'
                  }}>
                    {job.role} <span style={{ color: '#fff', fontWeight: 400 }}>@ {job.company}</span>
                  </h4>
                  <em style={{ color: '#bbb', fontSize: '1rem' }}>{job.period}</em>
                  <ul style={{ marginTop: 8, marginBottom: 0, color: '#fff', fontSize: '1.08rem', lineHeight: 1.6 }}>
                    {job.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="education" style={{ background: 'rgba(255,255,255,0.22)', borderRadius: 8, padding: 24, marginBottom: 24 }}>
          <h3>Education</h3>
          {resumeData.education.map((edu, idx) => (
            <div key={idx}>
              <strong>{edu.institution}</strong>
              <div>{edu.degree}</div>
              <em>{edu.period}</em>
            </div>
          ))}
        </section>
        <section id="contact" style={{ background: 'rgba(255,255,255,0.25)', borderRadius: 8, padding: 24, marginBottom: 24 }}>
          <h3>Contact</h3>
          <p>
            <strong>Email:</strong> {resumeData.contact.email}<br />
            <strong>Phone:</strong> {resumeData.contact.phone}<br />
            <strong>Location:</strong> {resumeData.contact.location}
          </p>
        </section>
        <section id="certificates" style={{ background: 'rgba(255,255,255,0.28)', borderRadius: 8, padding: 24 }}>
          <h3>Certificates</h3>
          <p>List your certificates here.</p>
        </section>
      </div>
    </div>
  );
}

function handleResumeDownload() {
  const resumeUrl = `${process.env.PUBLIC_URL}/resume.pdf`;
  fetch(resumeUrl, { method: 'HEAD' })
    .then(res => {
      if (res.ok) {
        // File exists, trigger download
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        // File does not exist, redirect to 404 image
        window.location.href = `${process.env.PUBLIC_URL}/assets/404_not_found.jpg`;
      }
    })
    .catch(() => {
      window.location.href = `${process.env.PUBLIC_URL}/assets/404_not_found.jpg`;
    });
}

export default Resume;