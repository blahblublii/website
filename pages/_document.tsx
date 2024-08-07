import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const meta = {
    title: 'blahblublii',
    description: 'My website with blogs and random stuff',
  }

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="noindex" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@blahblublii" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
