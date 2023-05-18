import Script from 'next/script';

export const GTMscript = () => (
  <>
    <Script>{`window.dataLayer = window.dataLayer || [];`}</Script>

    <Script id="google-tag-manager" strategy="afterInteractive">
      {`
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-YCBVLEFV3Q');
    `}
    </Script>
  </>
);

export const GTMnoscript = () => (
  <noscript
    dangerouslySetInnerHTML={{
      __html: `
      <iframe src="https://www.googletagmanager.com/gtag/js?id=G-YCBVLEFV3Q" 
      height="0" width="0" style="display:none;visibility:hidden"></iframe>
    `,
    }}
  />
);