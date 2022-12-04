import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Image from 'next/image';

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
        <span className="hiBannerText">Hi, There my name is</span>
        <h1 className="bannerUsername">
          <span className="usernameContentOne">
            Sayyid
            <span className="waveHandEmoji">👋</span>
          </span>
          Muhammad
        </h1>
        <span className="bannerTypeWrittingEffect">
          <span className="text">{text}</span>
          <Cursor />
        </span>
        <div className="bannerLinks">
          <a
            href="https://medium.com/@muhammad01317"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/images/icons/medium.svg"
              alt="mediumIcon"
              width={28}
              height={28}
            />
          </a>
          <a
            href="https://github.com/SayyidMuhammad878"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/images/icons/github.svg"
              alt="githubIcon"
              width={28}
              height={28}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-jufri-ba1ba1237/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/images/icons/linkedin.svg"
              alt="linkedinIcon"
              width={28}
              height={28}
            />
          </a>
          <a
            href="https://mail.google.com/mail/u/1/#inbox?compose=DmwnWrRtsNLWHLmBbRkwFHDdmMbRkzPPSLbhnSNmzrDKklkPcXWKpGGDLbWgJGbgHDBDcdXgjzql"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/images/icons/email.svg"
              alt="email"
              width={36}
              height={36}
            />
          </a>
        </div>
      </div>
      <Image
        src="/images/profile.webp"
        width="320"
        height="320"
        className="bannerPicture"
        alt="profilePicture"
      />
    </section>
  );
}
