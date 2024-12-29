import React from "react";
import "../../App.css";
import Footer from "../footer";

function Resume() {
  return (
    <>
      <div className="contain">
        <div>
          <h1 className="resume">RESUME</h1>
        </div>

        <div className="intro" style={{ textAlign: "left" }}>
          <h2
            style={{
              backgroundColor: "",
              color: "#3e5780",
              padding: 0,
              marginBottom: 0,
              textAlign: "center",
              fontWeight: "600",
            }}
          >
            CHRISTINA BURGOS
          </h2>
          <h1
            style={{
              backgroundColor: "",
              color: "#3e5780",
              padding: 30,
              marginBottom: 10,
              textAlign: "center",
              fontWeight: "600",
              fontSize: 30,
            }}
          >
            DEVELOPER - DESIGNER - GYM RAT
          </h1>
          <p style={{ fontSize: 18, padding: 20, paddingBottom: 50 }}>
            Full Stack Engineer with a background in System Administration,
            managing Microsoft OS and Azure AD for 70+ employees at iNRCORE LLC.
            Currently dedicated to developing software solutions for clients,
            including the likes of Temple Law, while continuing to serve as a
            System Admin Consultant at iNRCORE LLC. When I'm not at my computer,
            you can find me in the gym lifting heavy things off the ground for
            fun.
          </p>
          <h2
            style={{ backgroundColor: "#f9ad8d", color: "white", padding: 20 }}
          >
            Skills
          </h2>
          <p
            style={{
              fontSize: 18,
              padding: 10,
              paddingTop: 30,
              paddingBottom: 20,
              marginBottom: 30,
            }}
          >
            HTML5 • CSS3 • Bootstrap • TailwindCSS • Javascript • React.js •
            Node.js • ReactNative.js • Rest APIs • AI Prompt Engineering • JSON
            • MongoDB • Wordpress • Webflow • CMS • Figma • Version Control/Git
            • Azure • Project Management • Bench Press PR 145 x 3 • Squat PR 245
            x 1 • Dead Lift PR 295 x 1
          </p>

          <div>
            <h2
              style={{
                backgroundColor: "#f9ad8d",
                color: "white",
                padding: 20,
              }}
            >
              {" "}
              Experience{" "}
            </h2>
            <br />

            <h2 style={{ fontSize: "20px", color: "#d84727" }}>
              CBTALIA DESIGNS{" "}
              <span
                style={{
                  fontSize: "20px",
                  fontStyle: "italic",
                  float: "right",
                }}
              >
                June 2023 - Present
              </span>
            </h2>
            <h3>Software Developer | Designer | IT Consultant </h3>
            <ul style={{ paddingLeft: 30, paddingBottom: 30 }}>
              <li>
                <p style={{ fontSize: 18, padding: 5 }}>
                  Exemplifying dynamic leadership, I adeptly navigate the
                  domains of app development, UX design, and tech maintenance,
                  crafting tailored solutions that intricately align with the
                  diverse needs of clientele, ultimately driving project
                  success.
                </p>
              </li>
              <li>
                <p style={{ fontSize: 18, padding: 5 }}>
                  Concurrently consult as Dynamics Admin at iNRCORE LLC, where
                  I’ve decreased downtime by 20% through proactive platform
                  maintenance, efficient troubleshooting of user and instance
                  issues, and regular documentation.{" "}
                </p>
              </li>
            </ul>

            <h2 style={{ fontSize: "20px", color: "#d84727" }}>
              TEMPLE LAW & UNIVERSITY OF PENN{" "}
              <span
                style={{
                  fontSize: "20px",
                  fontStyle: "italic",
                  float: "right",
                }}
              >
                June 2023 - Dec 2023
              </span>
            </h2>
            <h3>Contract Website Designer & Developer </h3>
            <h3 style={{ fontStyle: "italic" }}>
              {" "}
              Temple Law Career Platform - Central hub designed for the Public
              Interest Tech (P.I.T) department
            </h3>
            <ul style={{ paddingLeft: 30, paddingBottom: 10 }}>
              <li>
                <p style={{ fontSize: 18, padding: 5 }}>
                  Single-handedly designed, branded, and spearheaded the
                  development process in close coordination with the executive
                  director of the Temple School of Law to launch an
                  informational hub for the Temple Public Interest Tech Career
                  Fair. Explore the finished product at explorepitlaw.com
                </p>
              </li>
              <li>
                <p style={{ fontSize: 18, padding: 5 }}>
                  Delivered web app in 1 month timeline, led client and team
                  directly through research, design, development, and test
                  phases in weekly sprints, engaging 472 visitors upon launch
                  and roughly 40 active users a month.
                </p>
              </li>
              <li>
                <p style={{ fontSize: 18, padding: 5 }}>
                  Tech leveraged: wordpress, figma, and elementor
                </p>
              </li>
            </ul>
            <h3 style={{ fontStyle: "italic" }}>
              {" "}
              University of Penn ATJ Tech Fellows Program - Optimization of a
              non-profit's online presence
            </h3>
            <ul style={{ paddingLeft: 30, paddingBottom: 30 }}>
              <li>
                <p style={{ fontSize: 18, padding: 5 }}>
                  Structured and integrated large sets of data collections into
                  Webflow’s CMS for a nonprofit's website.
                </p>
              </li>
              <li>
                <p style={{ fontSize: 18, padding: 5 }}>
                  Successfully met client objectives by instituting design
                  consistency through the implementation of a comprehensive
                  style guide and reusable components, resulting in streamlined
                  workflow and elevated UX.
                </p>
              </li>
            </ul>

            <h2 style={{ fontSize: "20px", color: "#d84727" }}>
              RESILIENT CODERS & RC ASCEND
              <span
                style={{
                  fontSize: "20px",
                  fontStyle: "italic",
                  float: "right",
                }}
              >
                {" "}
                Feb 2023 - June 2023
              </span>
            </h2>
            <h3> Web Developer </h3>
            <ul style={{ paddingLeft: 30, paddingBottom: 30 }}>
              <li>
                <p style={{ fontSize: 18, padding: 5 }}>
                  Completed 100% of my tickets within 1 week SLA, integrating
                  JEST into application for end to end API testing and created
                  documentation for helping engineers learn best practices for
                  testing.
                </p>
              </li>
              <li>
                <p style={{ fontSize: 18, padding: 5 }}>
                  Designed and developed a comprehensive full-stack fitness
                  application leveraging OpenAI’s REST API and a Node.js
                  backend, dynamically customizing workout plans based on
                  in-depth user health profiles and feedback.
                </p>
              </li>
              <li>
                <p style={{ fontSize: 18, padding: 5 }}>
                  Designed and developed a full-stack community pinboard
                  application using OpenAI’s REST API and Node.js, empowering
                  students to share and leverage ChatGPT responses, promoting a
                  collaborative learning environment.
                </p>
              </li>
            </ul>

            <h2 style={{ fontSize: "20px", color: "#d84727" }}>
              FREELANCER
              <span
                style={{
                  fontSize: "20px",
                  fontStyle: "italic",
                  float: "right",
                }}
              >
                {" "}
                Feb 2021 - June 2021
              </span>
            </h2>
            <h3> UX Designer </h3>
            <ul style={{ paddingLeft: 30, paddingBottom: 30 }}>
              <li>
                <p style={{ fontSize: 18, padding: 5 }}>
                  Transformed client proposals into deliverable web and mobile
                  designs utilizing Figma.
                </p>
              </li>
              <li>
                <p style={{ fontSize: 18, padding: 5 }}>
                  Conducted comprehensive user research via SurveyMonkey with
                  over 80 participants to identify and address key user needs
                  effectively.
                </p>
              </li>
              <li>
                <p style={{ fontSize: 18, padding: 5 }}>
                  Prototyped 40+ original web and mobile pages, providing
                  clients with interactive flows to visualize wireframe
                  progression.
                </p>
              </li>
            </ul>

            <h2 style={{ fontSize: "20px", color: "#d84727" }}>
              INRCORE LLC
              <span
                style={{
                  fontSize: "20px",
                  fontStyle: "italic",
                  float: "right",
                }}
              >
                {" "}
                June 2020 - Feb 2023
              </span>
            </h2>
            <h3> IT Generalist | System Admin </h3>
            <ul style={{ paddingLeft: 30, paddingBottom: 30 }}>
              <li>
                <p style={{ fontSize: 18, padding: 5 }}>
                  Managed and maintained IT systems including ERP programs,
                  Microsoft Office Applications, Azure AD, and Dynamics CRM for
                  50+ employees across 5+ company branches
                </p>
              </li>
              <li>
                <p style={{ fontSize: 18, padding: 5 }}>
                  Enhanced cybersecurity by addressing software vulnerabilities
                  in compliance with ITAR regulations.
                </p>
              </li>
              <li>
                <p style={{ fontSize: 18, padding: 5 }}>
                  Conducted cybersecurity training sessions, leading to a 45%
                  reduction in phishing-related incidents based on simulated
                  tests and generated statistics.
                </p>
              </li>
            </ul>
          </div>

          <h2
            style={{
              backgroundColor: "#3e5780",
              color: "white",
              padding: 40,
              paddingBottom: 10,
            }}
          >
            EDUCATION & VOLUNTEER WORK
          </h2>
          <p
            style={{
              backgroundColor: "#3e5780",
              color: "white",
              fontSize: 18,
              paddingTop: 10,
              paddingBottom: 40,
              paddingLeft: 40,
              paddingRight: 40,
              marginBottom: 30,
            }}
          >
            PENN STATE UNIVERSITY major in accounting 2017-2019 <br />
            GOOGLE’S CERTIFICATE Foundations of User Experience (UX) March 2021
            • Technical Support Fundamentals Oct 2020 <br />
            BIG BROTHERS BIG SISTERS (BBBS) provide guidance and support to
            mentees 2022 - Pesent
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Resume;
