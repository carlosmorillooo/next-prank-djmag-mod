import Head from 'next/head'

export default function PrankHead({ title }, { subtitle }) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/djmag.png" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content="https://djm4g.netlify.app" />
      <meta property="og:image" content="/djmag.png" />
      <meta property="og:description" content={subtitle} />
      <meta property="og:site_name" content="DJMag.com - Living & Breathing Dance Music" />
    
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={subtitle} />
      
      <meta name="twitter:image" content="https://chicag0tribune.netlify.app/icon.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    </Head>
  )
}
