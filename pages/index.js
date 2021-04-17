import Head from 'next/head';
import App from '../components/Home/Home';
export default function Home() {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <title>Irvin Meneses | Full Stack Developer</title>
      </Head>
      <App />
    </>
  );
}
