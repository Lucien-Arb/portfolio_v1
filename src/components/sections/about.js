import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;
  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;
    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;
    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;
  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }
  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    &:hover,
    &:focus {
      outline: 0;
      &:after {
        top: 15px;
        left: 15px;
      }
      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }
    .img {
      position: relative;
      border-radius: var(--border-radius);
    }
    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }
    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }
    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'Python',
    'PHP / Symfony',
    'JavaScript (ES6+)',
    'VueJs',
    'NodeJs / Express',
    'WordPress',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">À propos de moi</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Depuis que je suis enfant, j'ai toujours aimé construire des choses et participé à des
              projets.
              <br></br>
              Pourquoi ?<br></br>
              J'aime ce sentiment de travail achevé, ce moment où l'on se rappel les difficultés et
              les réussites qui nous ont mené au résultat que l'on a devant nous. Ce plaisir, je le
              trouve aujourd'hui dans la tech lorsque je participe à des projets, que je vois des
              outils et solutions sur lesquelles j'ai travaillé, être utilisées au quotidien par des
              personnes à qui cela rend vraiment service.
            </p>

            <p>
              Mise à part ça, j'ai obtenu un bac+2 chez{' '}
              <a href="https://openclassrooms.com/fr/">OpenClassRooms</a>, puis un bac+3 chez{' '}
              <a href="https://ri7.fr/">Ri7 (définitivement la meilleur école).</a> <br></br>
              Depuis un an je travail chez{' '}
              <a href="https://www.novanea.fr/">Novanéa, commercialisateur d'immobilier</a> en tant
              que développeur Python / PHP.
            </p>

            <p>Voici les technologies avec lesquelles j'ai travaillé récemment :</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
