import { launch } from 'puppeteer';
import { resolve } from 'path';

(async () => {
  const browser = await launch();
  const page = await browser.newPage();

  const imagePath = resolve(__dirname, './profile-pic.jpg');

  // HTML  and CSS content
  const content = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Charlian Imoisili - Frontend Engineer</title>
      <style>
      @import url('https://fonts.googleapis.com/css?family=Poppins');
      * {
        box-sizing: border-box;
      }
      :root {
        --body-font-size: 1rem;
        --section-header-font-size: 2.5rem;
        --section-title-font-size: 1.8rem;
        --section-tagline-font-size: 2rem;
      }
      body {
        margin: 0;
        padding: 0;
        font-family: 'Poppins', 'Helvetica Neue', Arial, Helvetica, sans-serif;
        font-size: var(--body-font-size);
        display: flex;
        flex-direction: column;
        color: #2a2a2a;
        size: A4;
        width: 210mm; /* A4 width */
        /* height: 297mm; */
        background-color: white;
        justify-content: center;
      }
      h2,
      h1,
      h3,
      h4,
      h5 {
        margin: 0;
      }
      h5 {
        font-weight: 500;
        font-size: var(--body-font-size);
      }
      header {
        margin: 1rem;
      }
      .header {
        display: flex;
      }
      .img {
        padding-left: 2rem;
      }
      .img img {
        width: 120px;
        height: 120px;
        border-radius: 50%;
      }
      .profile {
        text-align: center;
        margin: auto;
        padding-right: 5rem;
      }
      h1.name {
        font-size: 2.5rem;
        margin: 0;
      }
      h2.profession {
        margin: 0;
        font-size: 1.3rem;
        text-transform: uppercase;
        color: #645359;
        font-weight: 500;
      }
      .profile-nav {
        display: flex;
        list-style: none;
        float: left;
      }
      .profile-nav li {
        margin-left: 0.3rem;
      }
      a {
        color: #7455ee;
      }
      main {
        margin: 0rem 2rem;
      }
      section {
        padding: 0.5rem 0;
      }
      section.hero {
        padding: 0 1rem;
      }
      section.hero p {
        font-style: italic;
        text-align: center;
      }
      .section-header {
        text-align: left;
        font-size: var(--section-title-font-size);
        font-weight: 500;
      }
      section.skills ul {
        display: flex;
        justify-content: flex-center;
        margin: none;
      }
      ul {
        padding: 0;
      }
      .skill-list li {
        margin-right: 1rem;
        list-style: none;
        padding: 0.2rem 0.4rem;
        color: white;
        background-color: #645359;
        border-radius: 5px;
      }
      .tag-header {
        display: flex;
        justify-content: space-between;
        padding-top: 0.5rem;
      }
      .section-title {
        font-weight: 600;
      }
      .section-miniTitle {
        font-weight: 500;
        font-style: italic;
      }
      .right-tag {
        text-align: right;
      }
      .experiences {
        margin: 0.5rem 0;
      }
      .experiences li {
        padding: 0;
      }
      .second {
        padding-top: 0.5rem;
      }
      span {
        font-weight: 600;
        font-style: italic;
      }
      .helpbot {
        margin: 0;
      }      
      </style>
    </head>
    <body>
      <header>
        <section class="header">
          <div class="img">
          <img src="file:///C:/Users/hp/Desktop/My Projects/resume/profile-pic.jpg" />
          </div>
          <div class="profile">
            <div class="profile-container">
              <h1 class="name">Charlian Imoisili</h1>
              <h2 class="profession">Frontend Engineer</h2>
            </div>
            <nav>
              <ul class="profile-nav">
                <li class="nav-item">+2348147219184</li>
  
                <li class="nav-item">||</li>
                <li class="nav-item">
                  <a href="icharlieanne@gmail.com">icharlieanne@gmail.com</a>
                </li>
                <li class="nav-item">||</li>
                <li class="nav-item">
                  <a href="https://github.com/CharlyAnne">GitHub</a>
                </li>
                <li class="nav-item">||</li>
                <li class="nav-item">
                  <a href="https://linkedin/in/charlian-imoisili">LinkedIn</a>
                </li>
                <li class="nav-item">||</li>
                <li class="nav-item">Lagos.</li>
              </ul>
            </nav>
          </div>
        </section>
      </header>
      <main>
      <hr color="#4a4a4a" />
      <section class="hero">
        <p class="hero-p">
          Motivated Frontend Engineer with a strong foundation in web
          development, design, and programming, equipped with comprehensive
          knowledge of HTML, CSS, and JavaScript. With a year of dedicated
          learning experience and hands-on projects, I am adept at translating
          ideas into functional and user-friendly applications. My attention to
          detail and problem-solving skills have led to creative solutions in
          challenging coding scenarios. My goal is to leverage my self-taught
          expertise and practical insights to contribute effectively to your
          team's success, while gaining valuable industry experience.
        </p>
      </section>
      <section class="skills">
        <h2 class="section-header">SKILLS</h2>
        <hr color="4a4a4a" />
        <ul class="skill-list">
          <li>JavaScript</li>
          <li>React</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Jest</li>
          <li>Git</li>
          <li>NodeJS</li>
          <li>Python (Django)</li>
          <li>UI Design</li>
        </ul>
      </section>
      <section class="experience">
        <h2 class="section-header">EXPERIENCE</h2>
        <hr color="4a4a4a" />
        <div class="exp">
          <div class="tag-header">
            <div class="left-tag">
              <h3 class="section-title">FRONTEND ENGINEER - Fellow</h3>
              <h4 class="section-miniTitle">ALX Africa</h4>
            </div>
            <div class="right-tag">
              <h4 class="end">REMOTE</h4>
              <h4 class="section-miniTitle">August 2022 - Present</h4>
            </div>
          </div>
          <ul class="experiences">
            <li>
              Implemented newly-learned front-end object-oriented programming to
              develop client server systems.
            </li>
            <li>
              Participated in pair programming with 3 engineers, and reviewed
              team's code to provide additional perspective and catch previously
              missed errors.
            </li>
            <li>
              Implemented responsive design principles to enable optimal viewing
              experiences across different devices.
            </li>
            <li>Tested React components using Jest.</li>
          </ul>
          <div class="tag-header second">
            <div class="left-tag">
              <h3 class="section-title">
                OPERATIONS ASSOCIATE - Loan Underwriter
              </h3>
              <h4 class="section-miniTitle">CreditWise Financials Limited</h4>
            </div>
            <div class="right-tag">
              <h4 class="end">IKOYI, LAGOS</h4>
              <h4 class="section-miniTitle">February 2021 - April 2022</h4>
            </div>
          </div>
          <ul class="experiences">
            <li>
              Assisted senior-level credit officers with Loan bookings,
              documentations, underwriting, disbursements and recovery
            </li>
            <li>
              Provided excellent customer care to maintain and improve customer
              relations and increase sales of company's loan products, Managed
              sales, digital content and customer relations.
            </li>
          </ul>
        </div>
      </section>
      <section class="Education">
        <h2 class="section-header">EDUCATION</h2>
        <hr color="4a4a4a" />
        <div class="tag-header">
          <div class="left-tag">
            <h3 class="section-title">ALX Africa & HOLBERTON SCHOOL</h3>
            <h4 class="section-miniTitle">
              Certificate in Software Engineering
            </h4>
          </div>
          <div class="right-tag">
            <h4 class="section-miniTitle">
              Expected graduation - September 2023
            </h4>
          </div>
        </div>
        <p class="edu">
          Completed software development coursework and tasks covering front-end
          development using HTML, CSS, Bootstrap, and JavaScript, Algorithms,
          Flask and React framework for web development and APIs.<br />
          Also participated in group projects to develop and deploy web
          applications, gaining valuable experience in collaborative
          development and deployment.
        </p>
        <div class="tag-header">
          <div class="left-tag">
            <h3 class="section-title">UNIVERSITY OF BENIN</h3>
            <h4 class="section-miniTitle">
              B.Sc in Ecotourism and Wildlife Management
            </h4>
          </div>
          <div class="right-tag">
            <h4 class="section-miniTitle">2014 - 2019</h4>
          </div>
        </div>
        <div class="tag-header">
          <div class="left-tag">
            <h4>
              <a
                href="https://drive.google.com/file/d/1iq0w8UaQ_Ov9F-STBT02LjQWl78pIsF3/view?usp=sharing"
                target="_blank"
                >NYSC Certificate</a
              >
            </h4>
          </div>
          <div class="right-tag">
            <h4 class="section-miniTitle">2021</h4>
          </div>
        </div>
      </section>
      <h4>
        Ongoing Project: <span>Chabot for Customer Service Management</span>
      </h4>
      <h4 class="section-miniTitle">Team of 4 | MERN Stack</h4>
      <p class="helpbot">
        This ongoing project showcases my ability to work effectively within a
        team, my proficiency in React, NodeJS and API integration, and my
        commitment to contributing to innovative solutions.
      </p>
    </main>
      <footer></footer>
    </body>
  </html>
  `;

  await page.setContent(content);

  // PDF generator
  await page.pdf({
    path: 'Charlian_Imoisili-Resume.pdf', // Change the output path as needed
    format: 'A4',
  });

  await browser.close();
})();
