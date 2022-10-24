import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type Props = {};

export default function About({}: Props) {
  return (
    <section className="about" id="about">
      <h2>About me</h2>
      <div className="aboutContent">
        <div
          style={{
            width: '100%',
            height: '100%',
            maxWidth: '320px',
            maxHeight: '320px',
            display: 'block',
          }}
        >
          <Image
            src="/images/profile.webp"
            width="320"
            height="320"
            layout="responsive"
            blurDataURL="/images/profile.webp"
            priority
            placeholder="blur"
            className="bannerPicture"
            alt="profilePicture"
          />
        </div>
        <div className="aboutInfo">
          <p className="aboutInfoDesc">
            Hi, I&apos;m 12 years old from Indonesia, I&apos;ve 5 years
            experience as a web developer and also I&apos;ve contributed to open
            source projects on github. One of them is&nbsp;
            <a
              href="https://github.com/sarvesh4396/freeresourceshub"
              target="_blank"
              rel="noreferrer"
            >
              FreeResourceHub
            </a>
            &nbsp;using React JS. I&apos;ve also been learning at CSX solving
            many coding challenges using JavaScript to improve my skills, as
            well as attending the codesmith coding events
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
