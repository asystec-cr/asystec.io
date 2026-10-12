'use client';

import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import CobrosChat from './CobrosChat';

interface SiteChromeProps {
  children: ReactNode;
  announcement: ReactNode;
  header: ReactNode;
  footer: ReactNode;
  nexoHeader: ReactNode;
  nexoFooter: ReactNode;
}

export default function SiteChrome({
  children,
  announcement,
  header,
  footer,
  nexoHeader,
  nexoFooter,
}: SiteChromeProps) {
  const pathname = usePathname();
  const isNexo = pathname?.replace(/\/+$/, '') === '/agente-nexo';

  return (
    <>
      {!isNexo && announcement}
      {isNexo ? nexoHeader : header}
      <main>{children}</main>
      {isNexo ? nexoFooter : footer}
      <CobrosChat hidden={isNexo} />
    </>
  );
}
