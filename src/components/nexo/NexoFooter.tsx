import Link from 'next/link';
import { NEXO_CONTACT_HREF } from '~/shared/data/agente-nexo.data';
import styles from './Nexo.module.css';

export default function NexoFooter() {
  return (
    <footer className={`${styles.theme} ${styles.footer}`}>
      <div className={`${styles.container} ${styles.footerInner}`}>
        <div>
          <div className={styles.brand}>
            <Link href="/" className={styles.wordmark}>
              Asystec
            </Link>
            <span className={styles.productName}>Agente Nexo</span>
          </div>
          <p>Tecnología para su empresa. Costa Rica.</p>
        </div>
        <nav aria-label="Información legal y contacto">
          <Link href="/privacy">Privacidad</Link>
          <Link href="/terms">Términos</Link>
          <a
            href={NEXO_CONTACT_HREF}
            data-analytics-event="cta_whatsapp"
            data-analytics-label="Agente Nexo: pie de página"
            data-analytics-location="footer"
          >
            Contacto
          </a>
        </nav>
      </div>
    </footer>
  );
}
