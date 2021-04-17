import { useEffect } from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {
  Hero,
  Info,
  Details,
  MockUps,
  BthButton,
  FooterPhrase,
} from '../../components/projectsComponents';
import data from '../../public/data/projectsData.json';

export default function Project({ project }) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <>
      <Head>
        <title>
          Project | {`${project['title1'].content}${project['title2'].content}`}
        </title>
      </Head>
      <Header />
      <Hero
        titleFirst={project.title1}
        titleSecond={project.title2}
        subtitle={project.subtitle}
      />
      <Info description={project.description} year={project.year} />
      <Details
        title={project.detailsTitle}
        subtitle={project.detailsSubTitle}
        mockup={project.detailsMockup}
        description={project.detailsDescription}
        construction={project.detailsConstruction}
      />
      <MockUps mockups={project.mockups} />
      <BthButton />
      <FooterPhrase phrase={project.footerPhrase} autor={project.footerAutor} />
      <Footer />
    </>
  );
}

export async function getStaticProps({ params }) {
  const project = data?.projects.filter(project => {
    let title = project['title1'].content.concat('', project['title2'].content);
    return title.toLocaleLowerCase() === params?.name?.toLocaleLowerCase();
  });
  return {
    props: { project: project?.[0] || null },
  };
}

export async function getStaticPaths() {
  const paths = data?.projectTitles.map(project => ({
    params: {
      name: project,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
