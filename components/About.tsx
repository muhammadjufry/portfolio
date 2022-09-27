import React from 'react';
import Link from 'next/link';

type Props = {};

export default function About({}: Props) {
  return (
    <section className="about" id="about">
      <h2>About me</h2>
      <div className="aboutContent">
        <img
          src="/images/profile.webp"
          width="240"
          height="240"
          className="aboutPicture"
          alt="profile"
        />
        <div className="aboutInfo">
          <p className="aboutInfoDesc">
            Hi, I&apos; m a web developer and a web designer, I&apos;ve been
            coding using HTML and CSS for about 4 years and I&apos;ve been
            learning and practicing responsive web design skills to make my
            projects look good and beautiful, I&apos;ve also been learning at
            CSX solving many coding challenges using JavaScript, as well as
            attending the codesmith coding events. Beside that I learn on my own
            about DOM, and writing an
            <Link
              href="https://medium.com/@muhammad01317/learning-dom-part-1-4632cee58ed6"
              target="_blank"
              className="aboutInfoDescLink"
            >
              article
            </Link>
            on Medium.
            <br />
            <br />
            If you interested in my skills please do not hesitate to contact me.
          </p>
          <a href="/resume.pdf" className="aboutButton" id="resume" download>
            See my Resume
          </a>
        </div>
      </div>
    </section>
  );
}
