import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

type Props = {};

export default function Banner({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      'A Web Developer based in Indonesia',
      'Learning and solving coding challenges at CSX',
      'Learning the Odin Project curriculum',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <section className="banner">
      <div className="bannerContent">
        <span className="hiBannerText animate__animated animate__fadeInTopLeft">
          Hi, My name is
        </span>
        <h1 className="bannerUsername animate__animated animate__fadeInTopLeft">
          <span className="usernameContentOne">
            Muhammad
            <span className="waveHandEmoji">👋</span>
          </span>
          Aljufri
        </h1>
        <span className="bannerTypeWrittingEffect animate__animated animate__fadeInTopLeft">
          <span className="text">{text}</span>
          <Cursor cursorColor="#fff" />
        </span>
        <div className="bannerLinks animate__animated animate__fadeInLeftBig">
          <a
            href="https://medium.com/@muhammad01317"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/images/icons/medium.svg"
              alt="mediumIcon"
              width="28"
              height="28"
            />
          </a>
          <a
            href="https://github.com/MuhammadJufri"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/images/icons/github.svg"
              alt="githubIcon"
              width="28"
              height="28"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-jufri-ba1ba1237/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/images/icons/linkedin.svg"
              alt="linkedinIcon"
              width="28"
              height="28"
            />
          </a>
          <a
            href="https://mail.google.com/mail/u/1/#inbox?compose=DmwnWrRtsNLWHLmBbRkwFHDdmMbRkzPPSLbhnSNmzrDKklkPcXWKpGGDLbWgJGbgHDBDcdXgjzql"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/images/icons/email.svg"
              alt="email"
              width="36"
              height="36"
            />
          </a>
        </div>
      </div>
      <img
        src="/images/profile.webp"
        width="320"
        height="320"
        className="bannerPicture animate__animated animate__bounceInRight"
        alt="profilePicture"
      />
    </section>
  );
}
