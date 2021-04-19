import Document, { Html, Main } from 'next/document';
import NextScript from '../components/optimizer/NextScriptCustom';
import Head from '../components/optimizer/HeadCustom';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='utf-8' />
        </Head>
        <body className='bg-primary'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
