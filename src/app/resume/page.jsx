import "./Resume.scss";
import { FaLinkedin, FaTelegram } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { IoPinSharp } from "react-icons/io5";
import { RiDownloadLine } from "react-icons/ri";
import Image from "next/image";

export default function Resume() {
  return (
    <main className="container ">
      {/* LEFT SIDE */}
      <div className="left">
        <div className="profileText">
          <div className="imgContainer">
            <Image src="/resume.png" alt="" width={256} height={256} />
          </div>
          <h2 className="">Thareq Muhammad Azani</h2>
          <span>Full Stack Web Developer</span>
        </div>
        <hr />

        <div className="contactInfo">
          <h3 className="title">Contact Info</h3>
          <ul>
            <li>
              <span className="icon">
                <LuMail />
              </span>
              <a className="text" href="mailto:thareq@azani.dev">
                thareq@azani.dev
              </a>
            </li>
            <li>
              <span className="telegram">
                <FaTelegram />
              </span>
              <a className="text" href="https://t.me/thareqazani">
                @thareqazani
              </a>
            </li>
            <li>
              <span className="icon">
                <FaLinkedin style={{ color: "#0b65c2" }} />
              </span>
              <a
                href="https://linkedin.com/in/thareqazani"
                target="_blank"
                rel="noopener noreferrer"
                className="text"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <span className="flagpin">
                <IoPinSharp />
              </span>
              <span className="text">DKI Jakarta, Indonesia</span>
            </li>
          </ul>
        </div>
        <div className="contactInfo skills">
          <h3 className="title skill-list">Skills</h3>
          <ul>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>HTML & CSS</li>
            <li>React.Js</li>
            <li>Next.Js</li>
            <li>TailwindCSS</li>
            <li>Sass</li>
            <li>Node.Js</li>
            <li>Express.Js</li>
            <li>MySQL & PostgreSQL</li>
            <li>Sequelize</li>
            <li>JSON Web Token (JWT)</li>
            <li>Debugging</li>
          </ul>
        </div>
        <div className="contactInfo skills">
          <h3 className="title">Soft Skills</h3>
          <ul>
            <li>Teamwork</li>
            <li>Problem Solving</li>
            <li>Effective Communication</li>
            <li>Adaptability</li>
            <li>Public Speaking</li>
            <li>Critical Thinking</li>
            <li>Work Ethics</li>
            <li>Customer Focused</li>
          </ul>
        </div>
        <div className="contactInfo skills">
          <h3 className="title">Languages</h3>
          <ul>
            <li>Bahasa Indonesia</li>
            <li>English</li>
          </ul>
        </div>
        <a href="/">
          <Image src="/logo-black.svg" width={200} height={100} alt="" />
        </a>
      </div>
      {/* RIGHT SIDE */}
      <div className="right">
        <a
          className="download"
          href="/Thareq Muhammad Azani.pdf"
          download={"/Thareq Muhammad Azani.pdf"}
        >
          <span>
            <RiDownloadLine /> Download
          </span>
        </a>
        {/* SUMMARY */}
        <div className="about">
          <h2 className="title2">Profile Summary</h2>
          <p>
            Versatile IT professional with a background in culinary arts and
            hotel management, blending creativity with technical expertise to
            craft immersive digital experiences. A firm believer in the power of
            growth mindset, I am committed to continuously expanding my skills
            and knowledge in fullstack web development. Thriving under pressure
            and excelling in collaborative environments, I am driven by the
            challenge of bridging technology and hospitality to create
            innovative solutions.
          </p>
        </div>
        {/* EXPERIENCE */}
        <div className="about">
          <h2 className="title2">Experience</h2>
          <div className="box">
            <div className="year_company">
              <h5 className="year">March 2024 - Present</h5>
              <h5>bayuramanda.com</h5>
            </div>
            <div className="text">
              <h4>Freelance Web Developer</h4>
              <ul>
                <li>
                  Collaborating with clients to identify their needs for the
                  website.
                </li>
                <li>Designing the website&apos;s user interface.</li>
                <li>Developed the front-end using React. Js.</li>
                <li>
                  Developed the back-end server using Express. Js, Sequelize.
                  Js, and MySQL.
                </li>
              </ul>
            </div>
          </div>
          <div className="box">
            <div className="year_company">
              <h5 className="year">Sep 2021 - Sep 2022</h5>
              <h5>@masoi.bakedgoods</h5>
            </div>
            <div className="text">
              <h4>Procurement Officer</h4>
              <ul>
                <li>
                  Sourcing, and evaluating suppliers of products, and
                  negotiating procurement terms, and issuing RFQ/RFP to vendors.
                </li>
                <li>
                  Process purchase order, and forward it to the appropriate
                  vendors.
                </li>
                <li>
                  Receive the bought goods and ensure the quality and the
                  quantify of the goods me, met the specific standard, and store
                  them into the appropriate storing place, and process the
                  payments.
                </li>
              </ul>
            </div>
          </div>
          <div className="box">
            <div className="year_company">
              <h5 className="year">Feb 2018 - Aug 2018</h5>
              <h5>Courtyard by Marriott Seminyak Bali Resort</h5>
            </div>
            <div className="text">
              <h4>Kitchen Department Trainee</h4>
              <ul>
                <li>
                  Preparing Perishable ingredients, including seasoning, wash,
                  and peel, and chop fruits and vegetables.
                </li>
                <li>
                  Taking inventory, and working together with the Chef de Partie
                </li>
                <li>
                  Performing basic cleaning duties, and ensuring the workstation
                  is sanitized.
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* EDUCATION */}
        <div className="about">
          <h2 className="title2">Education</h2>
          <div className="box">
            <div className="text">
              <h3 className="univ">Purwadhika Digital Technology School</h3>
              <h4 className="major">
                Job Connector: Full Stack Web Development
              </h4>
              <ul>
                <li>Learning the basics and fundamental of programming</li>
                <li>
                  Learning the frontend development with HTML, CSS, and
                  JavaScript, and its frameworks (React.Js, Next.Js)
                </li>
                <li>
                  Learning the back end development, using Express.Js, MySQL,
                  and Sequelize.Js
                </li>
                <li>Earn the Best Student award</li>
              </ul>
            </div>
          </div>
          <div className="box">
            <div className="text">
              <h3 className="univ">Bandung Institute of Tourism</h3>
              <h4 className="major">
                Bachelor&apos;s Degree in Hotel Administration
              </h4>
              <ul>
                <li>GPA 3.31 / 4.0</li>
                <li>
                  Earned an Associate&apos;s degree and successfully completed a
                  Bachelor&apos;s degree extension program.
                </li>
                <li>Member of the Student Committee</li>
              </ul>
            </div>
          </div>
        </div>
        {/* HONOR AND AWARDS */}
        <div className="about">
          <h2 className="title2">Honor and Awards</h2>
          <div className="box">
            <div className="text">
              <h3 className="univ">Best Student Award</h3>
              <h4 className="major">
                Issued by: Purwadhika Digital Technology School (Mar, 2024)
              </h4>
              <Image
                src={"/best_student.jpg"}
                alt="Best Student Award"
                width={400}
                height={256}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
