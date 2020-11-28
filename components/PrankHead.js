import Head from 'next/head'

export default function PrankHead({ title, subtitle }) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/djmag.png" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content="https://djm44g.netlify.app" />
      <meta property="og:image" content="/djmagblack.jpg" />
      <meta property="og:description" content="DJMag.com - Living & Breathing Dance Music" />
      <meta property="og:site_name" content="DJMag.com" />
    
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content="DJMag.com - Living & Breathing Dance Music" />
      
      <meta name="twitter:image" content="https://djm44g.netlify.app/djmagblack.jpg" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    </Head>
  )
}
