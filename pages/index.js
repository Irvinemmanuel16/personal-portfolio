import Head from 'next/head';
import App from '../components/Home/Home';
export default function Home() {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <title>Irvin Meneses | Full Stack Developer</title>
        <meta
          name='description'
          content="This is my personal portfolio, here you'll get to know me better. But in case you don't know me, my name is Irvin Meneses and I´m a self taught Full Stack developer"
        />
      </Head>
      <App />
    </>
  );
}
