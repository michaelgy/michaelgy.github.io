import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

import { AppConfig } from '@/utils/AppConfig';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Welcome to my website!👋 <br></br>
          I'm <GradientText>{AppConfig.author}</GradientText>
          <br></br>and I'm thrilled to have you here.
        </>
      }
      description={
        <>
          Explore my portfolio and discover captivating projects that showcase
          my creativity and expertise. Dive into valuable content covering a
          wide range of topics, offering inspiration and practical insights.
          <br /> <br />
          Feel free to connect with me via email at{' '}
          <a
            className="text-cyan-400 hover:underline"
            href={`mailto: ${AppConfig.email}`}
          >
            {AppConfig.email}
          </a>{' '}
          or through various social media platforms:
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://www.linkedin.com/in/michaelgy/" target="__blank">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="https://github.com/michaelgy" target="__blank">
            <HeroSocial
              src="/assets/images/github-icon.png"
              alt="Github icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
