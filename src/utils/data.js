import noteitBg from '../assets/images/note-it.svg'
import textitBg from '../assets/images/text-it.svg'
import shoppinitBg from '../assets/images/shoppin-it.svg'
import noteItDesktopMockup from '../assets/images/noteit-mock-up.svg'
import noteItDesktopMockup2 from '../assets/images/noteit-mock-up2.svg'
import noteItMobileMockup from '../assets/images/noteit-mobile-mock-up.svg'
import noteItMobileMockup2 from '../assets/images/noteit-mobile-mock-up2.svg'
import noteItMockup from '../assets/images/noteit-principal-mock-up.svg'
import textItDesktopMockup from '../assets/images/textit-mock-up.svg'
import textItDesktopMockup2 from '../assets/images/textit-mock-up2.svg'
import textItDesktopMockup3 from '../assets/images/textit-mock-up3.svg'
import textItMobileMockup from '../assets/images/textit-mobile-mock-up.svg'
import textItMobileMockup2 from '../assets/images/textit-mobile-mock-up2.svg'
import textItMockup from '../assets/images/textit-principal-mock-up.svg'
import shoppingItDesktopMockup from '../assets/images/shoppingit-mock-up.svg'
import shoppingItDesktopMockup2 from '../assets/images/shoppingit-mock-up2.svg'
import shoppingItDesktopMockup3 from '../assets/images/shoppingit-mock-up3.svg'
import shoppingItDesktopMockup4 from '../assets/images/shoppingit-mock-up4.svg'
import shoppingItDesktopMockup5 from '../assets/images/shoppingit-mock-up5.svg'
import shoppingItDesktopMockup6 from '../assets/images/shoppingit-mock-up6.svg'
import shoppingItMobileMockup from '../assets/images/shoppingit-mobile-mock-up.svg'
import shoppingItMobileMockup2 from '../assets/images/shoppingit-mobile-mock-up2.svg'
import shoppingItMockup from '../assets/images/shoppingit-principal-mock-up.svg'


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
    to: '/shoppingIt',
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
  footerPhrase: 'El diseño, es el embajador silencioso de tu marca.',
  footerAutor: 'Paul Rand'
}

const textItData = {
  title1: {
    color: 'text-lightBlue',
    content: 'Text'
  },
  title2: {
    color: 'text-orange',
    content: 'It'
  },
  subtitle: 'React - Socket.Io - Tailwindcss',
  description: 'Conéctate con las personas que quieres, rápido, fácil y sencillo, con un sistema de mensajería que puedes usar desde tu navegador',
  year: 2021,
  detailsTitle: 'Fresco, Innovador y',
  detailsSubTitle: 'versátil',
  detailsMockup: textItMockup,
  detailsDescription: 'Conectar de forma sencilla a nuestros usuarios es el principal motor de este proyecto. Personalizar tu perfil, agregar contactos y enviar emojis, son algunas de las funciones que TextIt, que no tiene nada que envidiarle a ningun sistema de mensajeria, puede ofrecer a sus usuarios.',
  detailsConstruction: 'Por otra parte, TextIt involucra las principales tecnologías de desarrollo web, como css y html.',
  mockups: {
    mobile: [textItMobileMockup, textItMobileMockup2],
    desktop: [textItDesktopMockup, textItDesktopMockup2, textItDesktopMockup3]
  },
  footerPhrase: 'El diseño, es el embajador silencioso de tu marca.',
  footerAutor: 'Paul Rand'
}

const shoppingItData = {
  title1: {
    color: 'text-lightBlue',
    content: 'Shopping'
  },
  title2: {
    color: 'text-lightBlue',
    content: ' it'
  },
  subtitle: 'React - AWS - Tailwindcss',
  description: 'Find the products you want, manage your store and connect with your clients on a easy way.',
  year: 2021,
  detailsTitle: 'Intuitive, innovative and',
  detailsSubTitle: 'versatile',
  detailsMockup: shoppingItMockup,
  detailsDescription: 'An ecommerce made thinking on the user experience, offering an easy way to buy. For the side of the seller, we designed an interface to manage the whole store, from updating the stock to selecting the products that are shown to users.',
  detailsConstruction: '',
  mockups: {
    mobile: [shoppingItMobileMockup, shoppingItMobileMockup2],
    desktop: [shoppingItDesktopMockup, shoppingItDesktopMockup2, shoppingItDesktopMockup3, shoppingItDesktopMockup4, shoppingItDesktopMockup5, shoppingItDesktopMockup6]
  },
  footerPhrase: 'Don\'t try to be original, just try to be good.',
  footerAutor: 'Paul Rand'
}

export {sliderData, noteItData, textItData, shoppingItData};