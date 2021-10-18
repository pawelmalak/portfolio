import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Fragment } from 'react';
import 'tailwindcss/tailwind.css';
import { Layout } from '../components/UI';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Fragment>
      <Head>
        <title>Paweł Malak | Portfolio</title>
      </Head>
      <div className='bg-gray-white'>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </Fragment>
  );
};
export default App;
