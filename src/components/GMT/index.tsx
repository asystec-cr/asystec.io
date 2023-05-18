import Script from 'next/script';

export const GTMscript = () => (
  <>
    <Script>{`window.dataLayer = window.dataLayer || [];`}</Script>

    <Script id="google-tag-manager" strategy="afterInteractive">
      {`
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-9JKT73W13S');
    `}
    </Script>
  </>
);

export const GTMnoscript = () => (
  <noscript
    dangerouslySetInnerHTML={{
      __html: `
      <iframe src="https://www.googletagmanager.com/gtag/js?id=G-9JKT73W13S"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>
    `,
    }}
  />
);