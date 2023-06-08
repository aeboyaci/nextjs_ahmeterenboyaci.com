import React, { useRef, useEffect, useState } from 'react'
import CvItem from '../CvItem';
import SectionTitle from '../SectionTitle';
import useOnScreen from '../../utils';
import store from '../../store';
import SkillItem from '../SkillItem';

const About = () => {
  const ref = useRef();
  const emptyRef = useRef();

  const isVisible = useOnScreen(ref);

  const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1080);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  useEffect(() => {
    if (isVisible) {
      store.dispatch({ type: "setPage", payload: { page: "about", isScroll: false } });
    }
  }, [isVisible]);

  const isMobile = width <= 768;

  return (
    <React.Fragment>
      <div id="about" className="px-9 py-6 border-b-2 border-blue-500">
        <SectionTitle data={"About Me"} />
        <p className="text-justify mb-6">
            Passionate about Cyber Security and Software Engineering since my high school years, I have dedicated myself to honing my skills and knowledge in these fields. Through actively participating in workshops, trainings, and professional events, I have built a strong foundation and taken on responsibilities to further enhance my expertise. My ultimate goal is to become an expert in Cyber Security and Software Engineering by continuously improving and expanding my skill set.
        </p>

        <div className="mb-6">
          <SectionTitle data={"Skills"} />
          <SkillItem
            skill={"Programming Languages"}
            content={"Go, Java, C, C++, JavaScript, Typescript, Python"}
          />
          <div ref={isMobile ? ref : emptyRef}></div>
          <SkillItem
            skill={"Frameworks & Libraries"}
            content={"Gin‐Gonic, Gorm, ExpressJS, React, NextJS, Flutter, Redux, TailwindCSS"}
          />
          <SkillItem
            skill={"Cyber Security"}
            content={"Malware Development, Defense Evasion (AV and EDR Bypass)"}
          />
          <SkillItem
            skill={"Relevant Coursework"}
            content={"Algorithm Design, Data Structures, Game Theory, Computer Architecture, Object Oriented Programming, Computer Networks, Database Systems, Operating Systems, Big Data"}
          />
        </div>

        <div ref={isMobile ? emptyRef : ref} className="mb-6">
          <SectionTitle data={"Projects & Awards"} />
          <div className={"flex flex-col"}>
            <h3 className="text-md font-bold">EasyTK</h3>
            <p className="text-sm font-bold">2nd, given by Turkish Airlines on TEKNOFEST 2022</p>
            <p className="text-justify mt-1.5 text-sm">
              My teammates and I developed an indoor navigation application. Our solution enables passengers to find the shortest path in airports and follow the route with AR lines.
            </p>
            <p className="text-justify mt-1.5 text-sm">
              Used Technologies: <b>AR, Flutter, Turkish Airlines Developer API</b>
            </p>
          </div>
          <div className={"flex flex-col mt-2"}>
            <h3 className="text-md font-bold">ARTEAL</h3>
            <p className="text-sm font-bold">1st (in Match Challenge) {"&"} 2nd (in overall), given by PwC Deutschland on Hackathon Interschutz 2022</p>
            <p className="text-justify mt-1.5 text-sm">
              My teammates and I built a tool to train volunteers for crisis situations using VR and we used this data to match volunteers with situations to best their skills. We also build a web‑based control panel that shows all the details on a real‑world map.
            </p>
            <p className="text-justify mt-1.5 text-sm">
              Used Technologies: <b>React, Neurosky, VR, Unity 3D</b>
            </p>
          </div>
          <div className={"flex flex-col mt-2"}>
            <h3 className="text-md font-bold">Malware.Studio</h3>
            <p className="text-sm font-bold">1st, given by CBDDO (Turkish Presidency)</p>
            <p className="text-justify mt-1.5 text-sm">
              Developed a web‑based platform to create FUD unique malware with user‑requested functionality
            </p>
            <p className="text-justify mt-1.5 text-sm">
              Used Technologies: <b>React, GoFiber, MongoDB, Docker, Docker-Compose, My Go Based Unique Malwares</b>
            </p>
          </div>
        </div>

        <div className="mb-6">
          <SectionTitle data={"Experience"} />
          <CvItem
            title={"Picus Security"}
            subtitle={"Part-Time Software Engineer"}
            location={"Ankara / Turkey"}
            date={"26 September 2022 - Present"}
            content={
              <div className="mb-2 pl-8">
                <ul className="list-disc">
                  <li className="text-justify">Worked with a team responsible for the <b>back‑end</b> development of a platform used for conducting breach attack simulations and validating SIEM rules. We worked using the <b>agile</b> development methodology using <b>Go</b> as a programming language, along with many <b>AWS/</b> features such as <b>SNS/SQS queues.</b></li>
                  <li className="text-justify">Worked on various tasks on multiple repositories. Wrote migration files, and scripts to alter the database using <b>PostgreSQL</b> and unit tests for each task.</li>
                  <li className="text-justify">Implemented <b>REST API</b> endpoints using <b>Gin‑Gonic</b> and <b>Gorm</b></li>
                  <li className="text-justify">Developed insights that improve SIEM integrations’ performance and validation, such as <b>Splunk</b> and <b>IBM QRadar.</b></li>
                </ul>
              </div>
            }
          />
          <CvItem
            title={"STM"}
            subtitle={"Cyber Security Intern (Malware Researcher)"}
            location={"Ankara / Turkey"}
            date={"09 May 2022 - 26 August 2022"}
            content={
              <div className="mb-2 pl-8">
                <ul className="list-disc">
                  <li className="text-justify">Developed malwares that are <b>100%</b> undetectable at <b>VirusTotal</b> by using <b>C++</b></li>
                  <li className="text-justify">Made <b>CTF (Capture the Flag)</b> challenges for Turkey’s biggest CTF, STM CTF 2022</li>
                  <li className="text-justify">Implemented <b>REST API</b> endpoints, and developed front-end features using <b>Flask</b> for STM CTF&lsquo;s web application</li>
                  <li className="text-justify">Worked on DevOps using <b>Ansible, Docker, Docker-Compose</b></li>
                </ul>
              </div>
            }
          />
          <CvItem
            title={"BTK Academy"}
            subtitle={"Course Lecturer"}
            location={"Ankara / Turkey"}
            date={"26 July 2022 - 18 August 2022"}
            content={
              <div className="mb-2 pl-8">
                <ul className="list-disc">
                  <li className="text-justify">Lectured mobile application development with <b>Flutter</b> to university students for 24 hours in 4 weeks</li>
                </ul>
              </div>
            }
          />
          <CvItem
            title={"Baykar Technologies"}
            subtitle={"Full-Stack Development Intern"}
            location={"Istanbul / Turkey"}
            date={"31 May 2021 - 03 September 2021"}
            content={
              <div className="pl-8">
                <ul className="list-disc">
                  <li className="text-justify">Worked on a project that visualizes GIS data on a dynamic map application with <b>SDLC</b> methodology (<em>Allowed to share very little information due to <b>confidentiality</b></em>)</li>
                </ul>
              </div>
            }
          />
        </div>

        <div className="mb-6">
          <SectionTitle data={"Education"} />
          <CvItem
            title={"TOBB University of Economics and Technology"}
            subtitle={"B.S. in Computer Science"}
            location={"Ankara / Turkey"}
            date={"August 2019 - Present"}
            content={<div className="mb-2"><b>CGPA:</b> 3.53 / 4.00 (High Honor Student)</div>}
          />
          <CvItem
            title={"Sınav College"}
            subtitle={"High School"}
            location={"Ankara / Turkey"}
            date={"2015 - 2019"}
            content={<React.Fragment><b>CGPA:</b> 97.81 / 100 (School Valedictorian)</React.Fragment>}
          />
        </div>

        <div>
          <SectionTitle data={"Languages & Certificates"} />
          <div className="flex flex-col mb-2">
            <h3 className="text-md font-bold">Turkish - Native Speaker</h3>
          </div>
          <div className="flex flex-col mb-2">
            <h3 className="text-md font-bold">English - B2</h3>
            <p className="text-sm">TOEFL ITP: 540</p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-md font-bold">German - A2</h3>
            <p className="text-sm">TELC Zertifikat Start Deutsch A2 - 50.5 / 60</p>
          </div>
        </div>

      </div>
    </React.Fragment>
  )
}

export default About