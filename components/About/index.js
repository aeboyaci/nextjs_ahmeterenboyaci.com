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
          Since my high school years, I have great interest in Cyber Security and Software Engineering. I made huge efforts to progress in these fields. Owing to my interest, I attended and organized workshops, trainings. I built an advanced foundation by taking responsibilities in professional events and participating in trainings. My goal is improving this foundation to expertise Cyber Security and Software Engineering.
        </p>

        <div className="mb-6">
          <SectionTitle data={"Skills"} />
          <SkillItem
            skill={"Programming Languages"}
            content={"C, C++, Java, JavaScript, Golang, Python, Dart, Bash"}
          />
          <div ref={isMobile ? ref : emptyRef}></div>
          <SkillItem
            skill={"Full-Stack Development"}
            content={"React, NextJS, NodeJS, ExpressJS, GinGonic, GoFiber, REST, Flutter, Docker, Docker-Compose, MongoDB, MySQL"}
          />
          <SkillItem
            skill={"Cyber Security"}
            content={"Malware Development, Defense Evasion, Web Application Security, Linux Hardening"}
          />
          <SkillItem
            skill={"Relevant Coursework"}
            content={"Algorithm Design, Data Structures, OOP, Database Systems, Probability Theory, Algorithmic Game Theory, Big Data"}
          />
        </div>

        <div ref={isMobile ? emptyRef : ref} className="mb-6">
          <SectionTitle data={"Projects & Awards"} />
          <div className={"flex flex-col"}>
            <h3 className="text-md font-bold">EasyTK</h3>
            <p className="text-sm font-bold">2nd, given by Turkish Airlines</p>
            <p className="text-justify mt-1.5 text-sm">
              My teammates and I have placed 2nd in overall and 1st in match- challenge from PwC Deutschland in the INTERSCHUTZ - Hannover Hackathon 2022 which was held in the city of Hannover in Germany.
            </p>
            <p className="text-justify mt-1.5 text-sm">
              We build a tool named Arteal that analyzes the responder's brainwave data according to the VR simulation of the emergencies and uses that data for matching responders with situations to best their skills. Arteal also has a web-based control panel which shows all the details on the real map.
            </p>
            <p className="text-justify mt-1.5 text-sm">
              Used Technologies: <b>AR, Flutter, Turkish Airlines Developer API</b>
            </p>
          </div>
          <div className={"flex flex-col mt-2"}>
            <h3 className="text-md font-bold">ARTEAL</h3>
            <p className="text-sm font-bold">1st (in Match Challenge) {"&"} 2nd (in overall), given by PwC Deutschland</p>
            <p className="text-justify mt-1.5 text-sm">
              My teammates and I have placed 2nd in overall and 1st in match- challenge from PwC Deutschland in the INTERSCHUTZ - Hannover Hackathon 2022 which was held in the city of Hannover in Germany.
            </p>
            <p className="text-justify mt-1.5 text-sm">
              We build a tool named Arteal that analyzes the responder's brainwave data according to the VR simulation of the emergencies and uses that data for matching responders with situations to best their skills. Arteal also has a web-based control panel which shows all the details on the real map.
            </p>
            <p className="text-justify mt-1.5 text-sm">
              Used Technologies: <b>Unity 3D, NeuroSky, VR, React.js</b>
            </p>
          </div>
          <div className={"flex flex-col mt-2"}>
            <h3 className="text-md font-bold">Malware.Studio</h3>
            <p className="text-sm font-bold">1st, given by CBDDO (Turkish Presidency)</p>
            <p className="text-justify mt-1.5 text-sm">
              APT groups create attack vectors by developing malicious software that is unique and not caught by antivirus systems. However, while performing penetration testing in the cyber security sector, tools such as “msfvenom” are used, which are well-known and far from real scenarios. My project, Malware.Studio, generates malware Golang based UD malware templates at the server. Golang allows users to generate cross-platform (platform- independent) malware. There are many features in the generation section, and the user can dynamically create malware by selecting the features that the user wants in the malware. In addition, C&C servers can be created where users can control systems infected with malware. All created servers and clients are stored in the cloud to allow users to download these applications wherever wanted to download.
            </p>
            <p className="text-justify mt-1.5 text-sm">
              With this project, I was awarded the 1st place by the Presidency Digital Transformation Office. I received my award from Dr. Ali Taha Koç, the head of the Presidential Transformation Office.
            </p>
            <p className="text-justify mt-1.5 text-sm">
              Used Technologies: <b>React.js, GoFiber, MongoDB, Docker, Golang (for malware)</b>
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
                  <li className="text-justify">Working on the "Breach Attack Simulation" project using <b>React</b> and <b>GinGonic</b> in a full-stack development team</li>
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
                  <li className="text-justify">Worked on defense evasion, and developed malwares that are <b>100%</b> undetectable on <b>VirusTotal</b> using <b>C++</b></li>
                  <li className="text-justify">Made <b>CTF challenges</b> in 3 different categories for Turkey's biggest CTF, STM CTF</li>
                  <li className="text-justify">Implemented <b>REST API</b> endpoints, and developed front-end features using <b>Flask</b> for STM CTF's web application</li>
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
            content={<div className="mb-2"><b>GPA:</b> 3.53 / 4.00 (High Honor Student)</div>}
          />
          <CvItem
            title={"Sınav College"}
            subtitle={"High School"}
            location={"Ankara / Turkey"}
            date={"2015 - 2019"}
            content={<React.Fragment><b>GPA:</b> 97.81 / 100 (School Valedictorian)</React.Fragment>}
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