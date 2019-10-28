import React from 'react';
import Head from '@react-ssr/express/head';
import {
  Layout,
  BasicCard,
  TitleCard,
  HoverableCard,
} from '../components';

const Home = (props) => {
  const {
    title,
    script, // injected by @react-ssr/express
  } = props;

  return (
    <Layout
      script={script} // pass it for dynamic SSR
    >
      <Head>
        <title>{title}</title>
      </Head>
      <TitleCard>
        {title}
      </TitleCard>
      <BasicCard>
        <a href="/next">Go to next page</a>
      </BasicCard>
      <HoverableCard>
        With <code>:hover</code>.
      </HoverableCard>
    </Layout>
  );
};

export default Home;
