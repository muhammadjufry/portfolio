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
          <Cursor cursorColor="#fff" />
        </span>
        <div className="bannerLinks">
          <a
            href="https://medium.com/@muhammad01317"
            target="_blank"
            rel="noreferrer"
          >
            <div style={{ display: 'block', width: '28px', height: '28px' }}>
              <Image
                src="/images/icons/medium.svg"
                alt="mediumIcon"
                width={28}
                height={28}
                layout="responsive"
              />
            </div>
          </a>
          <a
            href="https://github.com/MuhammadJufri"
            target="_blank"
            rel="noreferrer"
          >
            <div style={{ display: 'block', width: '28px', height: '28px' }}>
              <Image
                src="/images/icons/github.svg"
                alt="githubIcon"
                width={28}
                height={28}
                layout="responsive"
              />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-jufri-ba1ba1237/"
            target="_blank"
            rel="noreferrer"
          >
            <div
              style={{
                display: 'block',
                width: '28px',
                height: '28px',
              }}
            >
              <Image
                src="/images/icons/linkedin.svg"
                alt="linkedinIcon"
                width={28}
                height={28}
                layout="responsive"
              />
            </div>
          </a>
          <a
            href="https://mail.google.com/mail/u/1/#inbox?compose=DmwnWrRtsNLWHLmBbRkwFHDdmMbRkzPPSLbhnSNmzrDKklkPcXWKpGGDLbWgJGbgHDBDcdXgjzql"
            target="_blank"
            rel="noreferrer"
          >
            <div
              style={{
                display: 'block',
                width: '100%',
                height: '100%',
                maxWidth: '36px',
                maxHeight: '36px',
              }}
            >
              <Image
                src="/images/icons/email.svg"
                alt="email"
                width={36}
                height={36}
                priority
              />
            </div>
          </a>
        </div>
      </div>
      <div
        style={{
          width: '100%',
          height: '100%',
          maxWidth: '360px',
          maxHeight: '360px',
          display: 'block',
        }}
      >
        <Image
          src="/images/profile.webp"
          width="360"
          height="360"
          layout="responsive"
          priority
          placeholder="blur"
          blurDataURL="/images/profile.webp"
          className="bannerPicture"
          alt="profilePicture"
        />
      </div>
    </section>
  );
}
