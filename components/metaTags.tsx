import Head from 'next/head';

function MetaTags() {
  return (
    <Head>
      <title>Chizuk Hatorah Worldwide</title>
      <meta
        name="description"
        content="Non-profit organization devoted to strengthening and uplifting communities throughout New York City's five boroughs."
        key="description"
      />
      <meta
        name="keywords"
        content="Non-profit, Media, Jewish Organization, New York, New York City, Communities, News, Information"
      />
      <link rel="icon" href="/images/star.png" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      {/* eslint-disable-next-line */}
      <link href="https://fonts.googleapis.com/css2?family=Wix+Madefor+Display:wght@400;500;600;700&display=swap" rel="stylesheet"/>
    </Head>
  );
}

export default MetaTags;
