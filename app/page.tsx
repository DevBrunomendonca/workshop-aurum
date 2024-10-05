import Head from 'next/head';
import React, { Suspense, lazy } from 'react';

const Main = lazy(() => import('./_components/main'));
const About = lazy(() => import('./_components/about'));
const Speaker = lazy(() => import('./_components/speaker'));
const Location = lazy(() => import('./_components/location'));

const App = () => {
  return (
    <>
      <Suspense fallback={<div>Carregando...</div>}>
      <Head>
        <link rel="preload" href="./_components/main" as="script" />
      </Head >
        <Main />
        <About />
        <Speaker />
        <Location />
      </Suspense>
    </>
  );
};

export default App;
