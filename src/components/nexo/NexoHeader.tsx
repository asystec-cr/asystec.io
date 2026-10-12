'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import { IconMenu2, IconX } from '@tabler/icons-react';
import NexoCta from './NexoCta';
import styles from './Nexo.module.css';

const links = [
  { href: '/agente-nexo#que-hace', label: 'Qué puede hacer' },
  { href: '/agente-nexo#como-funciona', label: 'Cómo funciona' },
  { href: '/agente-nexo#planes', label: 'A su medida' },
];

export default function NexoHeader() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  return (
    <header
      className={`${styles.theme} ${styles.header}`}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && open) {
          setOpen(false);
          toggleRef.current?.focus();
        }
      }}
    >
      <a href="#nexo-main" className={styles.skipLink}>
        Saltar al contenido
      </a>
      <div className={`${styles.container} ${styles.headerInner}`}>
        <div className={styles.brand}>
          <Link href="/" aria-label="Asystec, inicio" className={styles.wordmark}>
            Asystec
          </Link>
          <Link href="/agente-nexo" className={styles.productName} onClick={() => setOpen(false)}>
            Agente Nexo
          </Link>
        </div>
        <button
          ref={toggleRef}
          type="button"
          className={styles.menuToggle}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="nexo-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <IconX aria-hidden="true" /> : <IconMenu2 aria-hidden="true" />}
        </button>
        <nav
          id="nexo-navigation"
          aria-label="Agente Nexo"
          className={`${styles.navigation} ${open ? styles.navigationOpen : ''}`}
        >
          {links.map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <NexoCta location="encabezado" className={styles.headerCta}>
            Quiero mi agente
          </NexoCta>
        </nav>
      </div>
    </header>
  );
}
