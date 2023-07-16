import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Programming challenges"
        description="Repository of my solutions for competitive programming challenges."
        link="https://github.com/michaelgy/PROBLEMS_PROGRAMMING"
        img={{
          src: '/assets/images/project-programming.png',
          alt: 'Project programming challengues',
        }}
        category={
          <>
            <Tags color={ColorTags.PURPLE}>Competitive</Tags>
            <Tags color={ColorTags.AMBER}>Python</Tags>
            <Tags color={ColorTags.SKY}>C++</Tags>
            <Tags color={ColorTags.ROSE}>C</Tags>
          </>
        }
      />
      <Project
        name="CAP devices"
        description="Custom PCBs development for the CAP in Pontificia Universidad Javeriana Cali."
        link="https://github.com/cap-repositories/Ruteadora"
        img={{
          src: '/assets/images/electronics.png',
          alt: 'Project CAP devices',
        }}
        category={
          <>
            <Tags color={ColorTags.SKY}>PCB</Tags>
            <Tags color={ColorTags.GREEN}>Electronics</Tags>
            <Tags color={ColorTags.AMBER}>EasyEDA</Tags>
            <Tags color={ColorTags.ORANGE}>Microcontrollers</Tags>
            <Tags color={ColorTags.BLUE}>Arduino</Tags>
          </>
        }
      />
      <Project
        name="Libraries"
        description="Libraries that I made."
        link="https://github.com/michaelgy/Libraries"
        img={{
          src: '/assets/images/libraries.png',
          alt: 'Project libraries',
        }}
        category={
          <>
            <Tags color={ColorTags.AMBER}>Python</Tags>
            <Tags color={ColorTags.LIME}>Linux</Tags>
            <Tags color={ColorTags.PURPLE}>Raspberry pi OS</Tags>
            <Tags color={ColorTags.SKY}>Wifi</Tags>
            <Tags color={ColorTags.ROSE}>Java</Tags>
          </>
        }
      />
      <Project
        name="PCB router"
        description="Documentation to indicate to students how to use a router."
        link="https://github.com/cap-repositories/Ruteadora"
        img={{
          src: '/assets/images/electronics.png',
          alt: 'Project PCB router',
        }}
        category={
          <>
            <Tags color={ColorTags.PURPLE}>PCB</Tags>
            <Tags color={ColorTags.SKY}>CNC</Tags>
            <Tags color={ColorTags.ROSE}>Markdown</Tags>
            <Tags color={ColorTags.AMBER}>EasyEDA</Tags>
            <Tags color={ColorTags.LIME}>G-Code</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
