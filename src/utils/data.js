const sliderData = [
  {
    image: 'https://ik.imagekit.io/yw2w0b4ajqv/portfolio_images/note-it_flozhHfhD3.svg',
    title: 'NoteIt',
    alt: 'A litle demonstration of the NoteIt project',
    to: '/noteIt',
    id: '123'
  },
  {
    image: 'https://ik.imagekit.io/yw2w0b4ajqv/portfolio_images/text-it_mPtv8W8Xyi.svg',
    title: 'TextIt',
    alt: 'A litle demonstration of the texIt project',
    to: '/textIt',
    id: '456'
  },
  {
    image: 'https://ik.imagekit.io/yw2w0b4ajqv/portfolio_images/shoppin-it_JhIpr036s.svg',
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
  description: 'Organize, annotate and save your important notes, all in a single account, without complications and with an intuitive interface',
  year: 2020,
  detailsTitle: 'Intuitive, innovative and',
  detailsSubTitle: 'versatile',
  detailsMockup: 'https://ik.imagekit.io/yw2w0b4ajqv/portfolio_images/noteit-principal-mock-up_eFaBQWFnK.svg',
  detailsDescription: 'Designed for the user with a very organized agenda, as well as for those who are more spontaneous, providing simplicity and unified elegance in an app that you can use from your browser.',
  detailsConstruction: 'Note It was made with MongoDB, React, Tailwindcss and the serverless methodology.',
  mockups: {
    mobile: ['https://ik.imagekit.io/yw2w0b4ajqv/portfolio_images/noteit-mobile-mock-up_8ejSZU7n9.svg', 'https://ik.imagekit.io/yw2w0b4ajqv/portfolio_images/noteit-mobile-mock-up2_6bO1_S2oX.svg'],
    desktop: ['https://ik.imagekit.io/yw2w0b4ajqv/portfolio_images/noteit-mock-up_m4PGtECBVj.svg', 'https://ik.imagekit.io/yw2w0b4ajqv/portfolio_images/noteit-mock-up2_BHfWTvr9Fv.svg']
  },
  footerPhrase: 'Design is the silent ambassador of your brand.',
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
  description: 'Connect with your loved ones, quick, easy and simple with an app that you can use from your web browser',
  year: 2021,
  detailsTitle: 'Intuitive, innovative and',
  detailsSubTitle: 'versatile',
  detailsMockup: 'https://ik.imagekit.io/yw2w0b4ajqv/portfolio_images/textit-principal-mock-up_bldTurvDKL.svg',
  detailsDescription: 'Connecting our users in a simple way is the main reason for this project. Customizing your profile, adding contacts and sending emojis are some of the functions that TextIt, which has nothing to envy to any messaging system, can offer its users.',
  detailsConstruction: 'On the other hand, TextIt involves the main web development technologies, such as css and html.',
  mockups: {
    mobile: ['https://ik.imagekit.io/yw2w0b4ajqv/portfolio_images/textit-mobile-mock-up_t_oqRCWak.svg', 'https://ik.imagekit.io/yw2w0b4ajqv/portfolio_images/textit-mobile-mock-up2_vhjy9N9ugZ.svg'],
    desktop: ['https://ik.imagekit.io/yw2w0b4ajqv/portfolio_images/textit-mock-up_EHr5sUFv89.svg', 'https://ik.imagekit.io/yw2w0b4ajqv/portfolio_images/textit-mock-up2_EYXA4gmSzd.svg', 'https://ik.imagekit.io/yw2w0b4ajqv/portfolio_images/textit-mock-up3_mqGA_T30q7.svg']
  },
  footerPhrase: 'Simplicity is not the goal',
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
  description: 'Find the products you want, manage your store and connect with your clients in a easy way.',
  year: 2021,
  detailsTitle: 'Intuitive, innovative and',
  detailsSubTitle: 'versatile',
  detailsMockup: 'https://ik.imagekit.io/yw2w0b4ajqv/portfolio_images/shoppingit-principal-mock-up__MXmq7S9U.svg',
  detailsDescription: 'An ecommerce made thinking on the user experience, offering an easy way to buy. For the side of the seller, we designed an interface to manage the whole store, from updating the stock to selecting the products that are shown to users.',
  detailsConstruction: '',
  mockups: {
    mobile: ['https://ik.imagekit.io/yw2w0b4ajqv/portfolio_images/shoppingit-mobile-mock-up_76HXo_i8iP.svg', 'https://ik.imagekit.io/yw2w0b4ajqv/portfolio_images/shoppingit-mobile-mock-up2_oN_Q71sYXs.svg'],
    desktop: ['https://ik.imagekit.io/yw2w0b4ajqv/portfolio_images/shoppingit-mock-up_Rr0XG7jYkZ.svg', 'https://ik.imagekit.io/yw2w0b4ajqv/portfolio_images/shoppingit-mock-up2_6iDy_355D.svg', 'https://ik.imagekit.io/yw2w0b4ajqv/portfolio_images/shoppingit-mock-up3_nwcDg1CFf.svg', 'https://ik.imagekit.io/yw2w0b4ajqv/portfolio_images/shoppingit-mock-up4_GLqS7xvbP2.svg', 'https://ik.imagekit.io/yw2w0b4ajqv/portfolio_images/shoppingit-mock-up5_fUkF-mc1bJ.svg', 'https://ik.imagekit.io/yw2w0b4ajqv/portfolio_images/shoppingit-mock-up6_ijQ4T4eksM.svg']
  },
  footerPhrase: 'Don\'t try to be original, just try to be good.',
  footerAutor: 'Paul Rand'
}

export {sliderData, noteItData, textItData, shoppingItData};