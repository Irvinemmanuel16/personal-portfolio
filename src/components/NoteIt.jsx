import { useEffect } from "react";
import { noteItData } from '../utils/data';
import Header from "./Header";
import Footer from "./Footer";
import { Hero, Info, Details, MockUps, BthButton, FooterPhrase} from './projectsComponents'

export default function NoteIt({ match }) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [])

  return(
    <>
      <Header match={match}/>
      <Hero 
        titleFirst={noteItData.title1} 
        titleSecond={noteItData.title2} 
        subtitle={noteItData.subtitle} 
      />
      <Info description={noteItData.description} year={noteItData.year} />
      <Details 
        title={noteItData.detailsTitle} 
        subtitle={noteItData.detailsSubTitle}
        mockup={noteItData.detailsMockup}
        description={noteItData.detailsDescription}
        construction={noteItData.detailsConstruction} 
      />
      <MockUps mockups={noteItData.mockups} />
      <BthButton />
      <FooterPhrase phrase={noteItData.footerPhrase} autor={noteItData.footerAutor} />
      <Footer />
    </>
  )
}