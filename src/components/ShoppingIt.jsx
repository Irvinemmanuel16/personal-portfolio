import { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { shoppingItData } from '../utils/data';
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
        titleFirst={shoppingItData.title1} 
        titleSecond={shoppingItData.title2} 
        subtitle={shoppingItData.subtitle} 
      />
      <Info description={shoppingItData.description} year={shoppingItData.year} />
      <Details 
        title={shoppingItData.detailsTitle} 
        subtitle={shoppingItData.detailsSubTitle}
        mockup={shoppingItData.detailsMockup}
        description={shoppingItData.detailsDescription}
        construction={shoppingItData.detailsConstruction} 
      />
      <MockUps mockups={shoppingItData.mockups} />
      <BthButton />
      <FooterPhrase phrase={shoppingItData.footerPhrase} autor={shoppingItData.footerAutor} />
      <Footer />
    </>
  )
}