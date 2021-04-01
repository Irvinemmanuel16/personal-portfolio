import noteitBg from '../assets/images/note-it.svg'
import textitBg from '../assets/images/text-it.svg'
import shoppinitBg from '../assets/images/shoppin-it.svg'
import noteItDesktopMockup from '../assets/images/noteit-mock-up.svg'
import noteItDesktopMockup2 from '../assets/images/noteit-mock-up2.svg'
import noteItMobileMockup from '../assets/images/noteit-mobile-mock-up.svg'
import noteItMobileMockup2 from '../assets/images/noteit-mobile-mock-up2.svg'
import noteItMockup from '../assets/images/noteit-principal-mock-up.svg'

const sliderData = [
  {
    image: noteitBg,
    title: 'NoteIt',
    alt: 'A litle demonstration of the NoteIt project',
    to: '/noteIt',
    id: '123'
  },
  {
    image: textitBg,
    title: 'TextIt',
    alt: 'A litle demonstration of the texIt project',
    to: '/textIt',
    id: '456'
  },
  {
    image: shoppinitBg,
    title: 'ShoppingIt',
    alt: 'A litle demonstration of the shoppingIt project',
    to: '/',
    id: '789'
  }
]

const noteItData = {
  title1: {
    color: 'text-blue',
    content: 'Note'
  },
  title2: {
    color: 'text-blue',
    content: 'It'
  },
  subtitle: 'React - Express - Tailwindcss',
  description: 'Organiza, anota y guarda tus apuntes importantes, todo en una única cuenta, sin complicaciones y con una interfaz intuitiva',
  year: 2020,
  detailsTitle: 'Fresco, Innovador y',
  detailsSubTitle: 'versátil',
  detailsMockup: noteItMockup,
  detailsDescription: 'Pensada para el usuario de agenda muy organizada, asi como para aquellos más espontáneos, brindando simplicidad y elegancia unificada en una app que puedes usar desde tu navegador.',
  detailsConstruction: 'NoteIt está realizada con MERN stack, CSS y HTML.',
  mockups: {
    mobile: [noteItMobileMockup, noteItMobileMockup2],
    desktop: [noteItDesktopMockup, noteItDesktopMockup2]
  },
  footerPhrase: '"El diseño, es el embajador silencioso de tu marca."',
  footerAutor: 'Paul Rand'
}

export {sliderData, noteItData};