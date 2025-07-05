import React, { useState, useEffect } from 'react';
import './Resume.css'; // Optional: if you have extra CSS
import ArrowCircleUpSharpIcon from '@mui/icons-material/ArrowCircleUpSharp';
import SchoolIcon from '@mui/icons-material/School';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

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
    'CI/CD',
    'Version Control',
    'IaC',
    'Containerization',
    'Container Orchestration',
    'Cloud Computing',
    'Monitoring & Logging',
    'Automation',
    'Networking & Security',
    'Security best practices',
    'Artifact Management',
    'API Management',
    'JavaScript',
    'Java',
    'Python',
    'Shell Scripting',
    'SQL',
    'JIRA'
  ],
  experience: [
    {
      company: 'Nissan Digital India LLP',
      role: 'Software Engineer II',
      period: 'Apr 2025 - Present',
      location: 'Trivandrum, Kerala',
      details: [
        'Engaging with Japan, US and Europe teams to align on DevOps practices and standards.',
        'Developing Jenkins shared libraries for standardized CI/CD pipelines.',
        'Creating reusable Jenkins pipeline templates to streamline deployment processes.',
        'Implemented infrastructure as code (IaC) using Terraform, ensuring scalable cloud deployments.',
        'Integrating AWS services like ECS, Lambda, and S3 into CI/CD workflows.'
      ]
    },
    {
      company: 'Nissan Digital India LLP',
      role: 'Software Engineer I',
      period: 'Nov 2022 - Mar 2025',
      location: 'Trivandrum, Kerala',
      details: [
        'Developed and maintained CI/CD pipelines using Jenkins for cloud and on-premise deployments.',
        'Automated Jenkins pipeline creation using Python, reducing manual efforts by 30%.',
        'Created and optimized Dockerfiles for containerized applications.',
        'Managed artifacts with Nexus and enforced code quality standards using SonarQube & Veracode.',
        'Wrote shell scripts to automate deployments on AWS ECS and Lambda.',
        'Integrated Bitbucket for version control and improved repository management.',
        'Onboarded and configured APIGEE products, streamlining API management.'
      ]
    },
    {
      company: 'Syndicate Auto Components',
      role: 'Project Co-ordinator',
      period: 'Jan 2019 - Sep 2021',
      location: 'Rudrapur, Uttarakhand',
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
      institution: 'The Centre for Development of Advanced Computing (CDAC)',
      degree: 'Post Graduate Diploma in Advanced Computing',
      period: 'Mar 2022 - Sep 2022'
    },
    {
      institution: 'Visvesvaraya Technological University (VTU)',
      degree: 'B.E. in Mechanical Engineering',
      period: '2014 - 2018'
    },
    {
      institution: 'Kendriya Vidyalaya',
      degree: 'Senior Secondary Education - Physics, Chemistry, Mathematics, and Biology',
      board: 'CBSE',
      period: '2013 - 2014'
    },
    {
      institution: 'Kendriya Vidyalaya',
      degree: 'Secondary Education',
      board: 'CBSE',
      period: '2011 - 2012'
    }
  ]
};

function Resume() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [navOpen, setNavOpen] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button only when user is near the bottom (within 200px)
      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = document.body.offsetHeight - 200;
      setShowBackToTop(scrollPosition >= threshold);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        overflowX: 'hidden'
      }}
    >
      {/* Name, Nav and Role Section with .webp background */}
      <div
        style={{
          width: '100%',
          fontFamily: 'Arial, sans-serif',
          borderRadius: 0, // No border radius
          padding: 0,
          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
          color: 'black',
          textAlign: 'center',
          marginBottom: 24,
          overflow: 'hidden',
          minHeight: 320,
          position: 'relative',
          background: 'none'
        }}
      >
        {/* Full background image with overlay */}
        <img
          src={`${process.env.PUBLIC_URL}/assets/devops-infinity.webp`}
          alt="DevOps Background"
          style={{
            width: '100vw', // Cover 100% of viewport width
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 0,
            minHeight: 320,
            borderRadius: 0, // No border radius
            padding: 0
          }}
        />
        {/* Light overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100vw', // Match image width
            height: '100%',
            background: 'rgba(255,255,255,0.2)',
            zIndex: 1,
            borderRadius: 0, // No border radius
            padding: 0
          }}
        />
        {/* Nav Bar centered at 70% width */}
        <nav
          className="main-nav"
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
            width: '100%',
            marginLeft: 'auto',
            marginRight: 'auto',
            backdropFilter: 'blur(2px)'
          }}
        >
          <button
            className="hamburger"
            aria-label="Toggle navigation"
            onClick={() => setNavOpen(!navOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: 28,
              cursor: 'pointer',
              position: 'absolute',
              left: 16,
              top: 28,
              zIndex: 20
            }}
          >
            &#9776;
          </button>
          <div className={`nav-links${navOpen ? ' open' : ''}`}>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
            <a href="#skills">Skills</a>
            <a href="#certificates">Certificates</a>
          </div>
        </nav>
        {/* Content */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          padding: 80
        }}>
          <h1 style={{ fontSize: '3rem', margin: 0, fontWeight: 700, letterSpacing: 2, color: '#fff', textShadow: '0 2px 8px rgba(0,0,0,0.18)' }}>
            {resumeData.name}
          </h1>
          <h2 style={{ fontSize: '2.5rem', margin: '50px 0 0 0', fontWeight: 400, letterSpacing: 1, color: '#fff', textShadow: '0 2px 8px rgba(0,0,0,0.18)' }}>
            {resumeData.title}
          </h2>
          {/* Download Resume Button */}
          <div style={{ marginTop: 40 }}>
            <button
              onClick={handleResumeDownload}
              style={{
                display: 'inline-block',
                padding: '10px 28px',
                background: 'transparent',
                color: '#fff',
                borderRadius: 24,
                fontWeight: 700,
                fontSize: '1.5rem',
                textDecoration: 'none',
                boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
                transition: 'background 0.2s, color 0.2s, border 0.2s',
                border: '4px solid #fff',
                cursor: 'pointer'
              }}
              onMouseOver={e => {
                e.target.style.background = '#fff';
                e.target.style.border = '4px solid #fff';
                e.target.style.color = '#0074d9';
              }}
              onMouseOut={e => {
                e.target.style.background = 'transparent';
                e.target.style.border = '4px solid #fff';
                e.target.style.color = '#fff';
              }}
            >
              Download Resume
            </button>
          </div>
        </div>
      </div>

      {/* Other Sections Box */}
      <div style={{
        width: '100%',
        fontFamily: 'Arial, sans-serif',
        background: 'rgba(255,255,255,0.10)',
        padding: 0,
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        color: 'white'
      }}>
        <section
          id="about"
          style={{
            background: 'rgba(255,255,255,0.95)',
            padding: 24,
            marginBottom: 24,
            display: 'flex',
            flexDirection: 'row',
            gap: 32,
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            color: '#222'
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
                letterSpacing: 1,
                textAlign: 'center'
              }}
            >
              About Me
            </h3>
          </div>
          <div style={{ flex: 3 }}>
            <p style={{
              marginTop: 8,
              fontSize: '1.18rem',
              lineHeight: 1.7,
              fontFamily: 'Segoe UI, Arial, Helvetica, sans-serif',
              letterSpacing: 0.2,
              color: '#222',
              marginRight: 5
            }}>{resumeData.summary}</p>
          </div>
        </section>
        <section id="experience" style={{ background: 'rgba(240,240,240,0.95)', borderRadius: 8, padding: 24, marginBottom: 24, color: '#222' }}>
          <h3
            style={{
              marginTop: 0,
              fontSize: '2.6rem',
              fontFamily: 'Segoe UI, Arial, Helvetica, sans-serif',
              fontWeight: 400,
              color: '#ffb347',
              letterSpacing: 1,
              textAlign: 'center'
            }}
          >
            Experience
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32, marginTop: 32 }}>
            {/* Group jobs by company */}
            {(() => {
              // Group jobs by company
              const companyMap = {};
              resumeData.experience.forEach(job => {
                if (!companyMap[job.company]) companyMap[job.company] = [];
                companyMap[job.company].push(job);
              });
              return Object.entries(companyMap).map(([company, jobs], idx) => {
                // Dynamically calculate total years/months for the company based on all job periods
                const parseDate = str => {
                  // Handles "Apr 2025" or "Present"
                  if (!str || str.trim() === 'Present') return new Date();
                  const [mon, year] = str.split(' ');
                  const monthNum = {
                    Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
                    Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
                  }[mon];
                  return new Date(Number(year), monthNum, 1);
                };
                // Find min start and max end from all jobs at this company
                let minStart = null, maxEnd = null;
                jobs.forEach(job => {
                  const [startStr, endStr] = job.period.split(' - ');
                  const start = parseDate(startStr);
                  const end = parseDate(endStr);
                  if (!minStart || start < minStart) minStart = start;
                  if (!maxEnd || end > maxEnd) maxEnd = end;
                });
                // Calculate total months
                let months = (maxEnd.getFullYear() - minStart.getFullYear()) * 12 + (maxEnd.getMonth() - minStart.getMonth()) + 1;
                const totalYears = Math.floor(months / 12);
                const totalMonths = months % 12;
                const totalStr = totalYears > 0
                  ? `${totalYears} yr${totalYears > 1 ? 's' : ''}${totalMonths > 0 ? ` ${totalMonths} mo${totalMonths > 1 ? 's' : ''}` : ''}`
                  : `${totalMonths} mo${totalMonths > 1 ? 's' : ''}`;

                // Use location from the first job (customize if needed)
                const location = jobs[0].location || resumeData.contact.location;

                return (
                  <div key={company}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                      <WorkOutlineIcon style={{ fontSize: 28, color: '#0074d9' }} />
                      <span style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0074d9', fontFamily: 'Segoe UI, Arial, Helvetica, sans-serif' }}>{company}</span>
                    </div>
                    <div style={{ color: '#888', fontSize: '1.08rem', marginBottom: 4, marginLeft: 40 }}>
                      {totalStr}
                      {location && <span style={{ marginLeft: 16, color: '#444' }}>| {location}</span>}
                    </div>
                    {jobs.map((job, jidx) => (
                      <div key={jidx} style={{ marginTop: 18 }}>
                        <div style={{ fontWeight: 600, fontSize: '1.15rem', color: '#d7263d', fontFamily: 'Segoe UI, Arial, Helvetica, sans-serif', marginLeft: 40 }}>
                          {job.role}
                        </div>
                        <div style={{ color: '#888', fontSize: '1rem', marginBottom: 4, marginLeft: 40 }}>{job.period}</div>
                        <ul style={{ marginTop: 8, marginBottom: 0, color: '#222', fontSize: '1.08rem', lineHeight: 1.6, marginLeft: 20 }}>
                          {job.details.map((detail, i) => (
                            <li key={i}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                );
              });
            })()}
          </div>
        </section>
        <section id="education" style={{ background: 'rgba(255,255,255,0.95)', borderRadius: 8, padding: 24, marginBottom: 24, color: '#222' }}>
          <h3
            style={{
              marginTop: 0,
              fontSize: '2.6rem',
              fontFamily: 'Segoe UI, Arial, Helvetica, sans-serif',
              fontWeight: 400,
              color: '#ffb347',
              letterSpacing: 1,
              textAlign: 'center'
            }}
          >
            Education
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32, marginTop: 32 }}>
            {resumeData.education.map((edu, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 20 }}>
                {/* School icon instead of image */}
                <SchoolIcon style={{ fontSize: 32, color: 'black', marginTop: 4 }} />
                {/* Education details */}
                <div>
                  <h4 style={{
                    margin: 0,
                    fontSize: '1.3rem',
                    fontWeight: 600,
                    color: 'rgb(0, 109, 252)',
                    fontFamily: 'initial'
                  }}>
                    {edu.institution}
                  </h4>
                  <em style={{ color: '#888', fontSize: '1rem' }}>{edu.period}</em>
                  <p> <span style={{ color: '#222', fontWeight: 400, fontSize: '1.25rem', fontFamily: 'initial' }}>{edu.degree}</span></p>
                  {edu.board && (
                    <div style={{ color: '#222', fontSize: '1.15rem', marginTop: 8, fontStyle: 'italic', fontFamily: 'inherit' }}>
                      Board: {edu.board}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Skills Section */}
        <section id="skills" style={{ background: 'rgba(240,240,240,0.95)', borderRadius: 8, padding: 24, marginBottom: 24, color: '#222' }}>
          <h3
            style={{
              marginTop: 0,
              fontSize: '2.6rem',
              fontFamily: 'Segoe UI, Arial, Helvetica, sans-serif',
              fontWeight: 400,
              color: '#ffb347',
              letterSpacing: 1,
              textAlign: 'center'
            }}
          >
            Skills
          </h3>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 16,
              marginTop: 24
            }}
          >
            {resumeData.skills.map((skill, idx) => (
              <div
                key={idx}
                style={{
                  background: '#fff',
                  color: '#0074d9',
                  border: '2px solid #0074d9',
                  borderRadius: 16,
                  padding: '10px 22px',
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  margin: 4,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                  textAlign: 'center',
                  minWidth: 100
                }}
              >
                {skill}
              </div>
            ))}
          </div>
        </section>
        {/* Certificates Section with badge images */}
        <section id="certificates" style={{ background: 'rgba(255,255,255,0.95)', borderRadius: 8, padding: 24, color: '#222', textAlign: 'center' }}>
          <h3
            style={{
              marginTop: 0,
              fontSize: '2.6rem',
              fontFamily: 'Segoe UI, Arial, Helvetica, sans-serif',
              fontWeight: 400,
              color: '#ffb347',
              letterSpacing: 1,
              textAlign: 'center'
            }}
          >
            Certificates
          </h3>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 24,
            marginTop: 24
          }}>
            {/* Example certificate badges, replace src and alt as needed */}
            <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="c0e5a990-39e6-449f-856a-ab42548bf729" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
            <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="e83631e7-4042-4d4e-8260-1cb8892c712d" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
          </div>
        </section>
        {/* Get in touch section */}
        <section
          style={{
            background: '#e6f2ff',
            borderRadius: 8,
            padding: 32,
            margin: '32px 0',
            color: '#003366',
            textAlign: 'center'
          }}
        >
          <h3
            style={{
              marginTop: 0,
              fontSize: '2.6rem',
              fontFamily: 'Segoe UI, Arial, Helvetica, sans-serif',
              fontWeight: 400,
              color: '#0074d9',
              letterSpacing: 1,
              textAlign: 'center'
            }}
          >
            Get in touch
          </h3>
          <button
            onClick={() => window.open('https://www.linkedin.com/in/saikat-sarkar-2203/', '_blank')}
            style={{
              padding: '12px 32px',
              background: '#0074d9',
              color: '#fff',
              border: 'none',
              borderRadius: 24,
              fontWeight: 700,
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'background 0.2s, color 0.2s'
            }}
            onMouseOver={e => {
              e.target.style.background = '#fff';
              e.target.style.color = '#0074d9';
              e.target.style.border = '2px solid #0074d9';
            }}
            onMouseOut={e => {
              e.target.style.background = '#0074d9';
              e.target.style.color = '#fff';
              e.target.style.border = 'none';
            }}
          >
            Connect on LinkedIn
          </button>
        </section>
      </div>
      {/* Footer Section */}
      <div
        style={{
          width: '100%',
          background: '#f5f7fa',
          color: '#222',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '18px 32px',
          fontFamily: 'Segoe UI, Arial, Helvetica, sans-serif',
          fontSize: '1rem',
          borderTop: '1px solid #e0e0e0',
          marginTop: 0,
          overflowX: 'auto' // <-- Add this to prevent icons from being cut off
        }}
      >
        <div>
          © {new Date().getFullYear()} Saikat Sarkar. All rights reserved.
        </div>
        <div style={{ display: 'flex', gap: 15, alignItems: 'right', minWidth: 150, marginRight: 20 }}>
          {/* GitHub */}
          <a
            href="https://github.com/Saikat2203"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center' }}
            title="GitHub"
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/github-icon.png`}
              alt="GitHub"
              style={{ width: 28, height: 28, verticalAlign: 'middle', opacity: 0.8, transition: 'opacity 0.2s', objectFit: 'contain' }}
              onMouseOver={e => (e.currentTarget.style.opacity = 1)}
              onMouseOut={e => (e.currentTarget.style.opacity = 0.8)}
            />
          </a>
          {/* Stack Overflow */}
          <a
            href="https://stackoverflow.com/users/11709937/saikat-sarkar"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center' }}
            title="Stack Overflow"
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/stackoverflow-icon.webp`}
              alt="Stack Overflow"
              style={{ width: 28, height: 28, verticalAlign: 'middle', opacity: 0.8, transition: 'opacity 0.2s', objectFit: 'contain' }}
              onMouseOver={e => (e.currentTarget.style.opacity = 1)}
              onMouseOut={e => (e.currentTarget.style.opacity = 0.8)}
            />
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/saikat-sarkar-2203/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center' }}
            title="LinkedIn"
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/linkedin-icon.png`}
              alt="LinkedIn"
              style={{ width: 28, height: 28, verticalAlign: 'middle', opacity: 0.8, transition: 'opacity 0.2s', objectFit: 'contain' }}
              onMouseOver={e => (e.currentTarget.style.opacity = 1)}
              onMouseOut={e => (e.currentTarget.style.opacity = 0.8)}
            />
          </a>
        </div>
      </div>
      {/* End of Footer Section */}
      {/* Back to Top Button */}
      {showBackToTop && (
        <div
          style={{
            position: 'fixed',
            left: '50%',
            bottom: 32,
            transform: 'translateX(-50%)',
            zIndex: 1000,
          }}
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              padding: '8px 16px',
              borderRadius: 24,
              background: '#0074d9',
              color: '#fff',
              border: 'none',
              fontWeight: 700,
              fontSize: '1.1rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              cursor: 'pointer',
              opacity: 0.85,
              transition: 'opacity 0.2s',
              display: 'flex',
              alignItems: 'center',
              gap: 8
            }}
            onMouseOver={e => (e.currentTarget.style.opacity = 1)}
            onMouseOut={e => (e.currentTarget.style.opacity = 0.85)}
            aria-label="Back to top"
          >
            <ArrowCircleUpSharpIcon style={{ fontSize: 32, color: '#fff' }} />
          </button>
        </div>
      )}
    </div>
  );
}

function handleResumeDownload() {
  const resumeUrl = `${process.env.PUBLIC_URL}/assets/Saikat_Sarkar_CV.pdf`;
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