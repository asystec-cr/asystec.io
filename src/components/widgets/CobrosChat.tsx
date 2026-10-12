'use client';

import Script from 'next/script';
import { useEffect } from 'react';

interface CobrosChatProps {
  hidden: boolean;
}

export default function CobrosChat({ hidden }: CobrosChatProps) {
  useEffect(() => {
    if (!hidden) return;

    // The widget has no destroy API. Its existing close button also stops audio
    // recording, while keeping the conversation available on other pages.
    document.querySelectorAll<HTMLElement>('[data-cobros-chat-root]').forEach((host) => {
      const widgetRoot = host.shadowRoot ?? host;
      widgetRoot.querySelector<HTMLButtonElement>('.cc-close')?.click();
    });
  }, [hidden]);

  return (
    <>
      {hidden && (
        // Keep a late-loading widget hidden when navigation happens mid-load.
        <style>{'[data-cobros-chat-root] { display: none !important; }'}</style>
      )}
      {!hidden && (
        <Script
          id="cobros-chat-widget"
          src="https://cobros.asystec.io/widget/cobros-chat.js"
          data-cobros-widget="pk_B8rn2jbyOZKHowj8wXz4dBDLQT1vwvzAeIUK7w3w"
          strategy="afterInteractive"
        />
      )}
    </>
  );
}
