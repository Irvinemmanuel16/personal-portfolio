import { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { textItData } from '../utils/data';
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
        titleFirst={textItData.title1} 
        titleSecond={textItData.title2} 
        subtitle={textItData.subtitle} 
      />
      <Info description={textItData.description} year={textItData.year} />
      <Details 
        title={textItData.detailsTitle} 
        subtitle={textItData.detailsSubTitle}
        mockup={textItData.detailsMockup}
        description={textItData.detailsDescription}
        construction={textItData.detailsConstruction} 
      />
      <MockUps mockups={textItData.mockups} />
      <BthButton />
      <FooterPhrase phrase={textItData.footerPhrase} autor={textItData.footerAutor} />
      <Footer />
    </>
  )
}