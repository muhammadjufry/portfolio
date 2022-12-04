import React from 'react';
type Props = {};

export default function About({}: Props) {
  return (
    <section className="about" id="about">
      <h2>About me</h2>
      <div className="aboutContent">
        <div className="aboutInfo">
          <p className="aboutInfoDesc">
            Hi My Name is Muhammad 👋 I have 5 Years experience in Web Developer
            role, I&apos;ve contributed to many open source projects on github
            and also I&apos;ve join the Hacktoberfest competition for open
            source projects and I&apos;m one of the hacktoberfest winner! Here
            my <a href="https://holopin.io/@sayyidmuhammad878">badges</a> that I
            got it from HacktoberFest. And also please check it out one of my
            big project on github which is
            <a href="https://github.com/SayyidMuhammadA/Job-Searcher-Extension">
              &nbsp;Job-Searcher-Extension&nbsp;
            </a>
            I created this project with my own idea but it haven&apos;t
            completed so there is no live for this project but i&apos;ve
            complete around 50% and also this project will help developers to
            find job more accurately than other websites!
          </p>
          <p>
            If you interested in my skills please do not hesitate to contact me.
          </p>
        </div>
        <a href="/resume.pdf" className="aboutButton" id="resume" download>
          See my Resume
        </a>
      </div>
    </section>
  );
}
