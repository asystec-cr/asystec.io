import type { ReactNode } from 'react';
import { IconArrowUpRight } from '@tabler/icons-react';
import { NEXO_CONTACT_HREF } from '~/shared/data/agente-nexo.data';
import styles from './Nexo.module.css';

type Props = {
  children?: ReactNode;
  location: string;
  variant?: 'primary' | 'light';
  className?: string;
};

export default function NexoCta({
  children = 'Quiero mi agente de IA',
  location,
  variant = 'primary',
  className = '',
}: Props) {
  return (
    <a
      href={NEXO_CONTACT_HREF}
      className={`${styles.button} ${variant === 'light' ? styles.lightButton : ''} ${className}`}
      data-analytics-event="cta_whatsapp"
      data-analytics-label={`Agente Nexo: ${location}`}
      data-analytics-location={location}
      data-analytics-type="primary"
    >
      {children}
      <IconArrowUpRight size={20} stroke={1.7} aria-hidden="true" />
    </a>
  );
}
