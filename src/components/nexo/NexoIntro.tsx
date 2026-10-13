import {
  IconAdjustmentsHorizontal,
  IconArrowRight,
  IconCheck,
  IconClock,
  IconFileText,
  IconLink,
  IconMessage2,
} from '@tabler/icons-react';
import NexoCta from './NexoCta';
import styles from './Nexo.module.css';

const steps = [
  ['Reunir información', 'Consultar las fuentes acordadas'],
  ['Organizar resultados', 'Dar estructura a la información'],
  ['Preparar el reporte', 'Entregar un documento para revisar'],
];
const benefits = [
  {
    icon: IconAdjustmentsHorizontal,
    title: 'A su medida',
    text: 'Un agente diseñado para sus procesos, objetivos y forma de trabajar.',
  },
  {
    icon: IconClock,
    title: 'Trabajo continuo',
    text: 'Procesos que pueden operar día y noche, según las reglas que definamos.',
  },
  {
    icon: IconLink,
    title: 'Con sus herramientas',
    text: 'Evaluamos cómo conectar la información y los sistemas de su empresa.',
  },
];

export default function NexoIntro({ variant = 'product' }: { variant?: 'home' | 'product' }) {
  const isHome = variant === 'home';

  return (
    <section className={`${styles.theme} ${styles.hero}`} aria-labelledby="nexo-title">
      <div className={styles.container}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <h1 id="nexo-title">
              {isHome ? (
                <>
                  Asystec: software e IA <span>para su empresa.</span>
                </>
              ) : (
                <>
                  Nexo de Asystec: su agente de IA, <span>24/7.</span>
                </>
              )}
            </h1>
            <p className={styles.heroDescription}>
              {isHome
                ? 'Conozca Nexo, el agente de inteligencia artificial de Asystec para empresas en Costa Rica. Automatice reportes, ventas, marketing y operaciones según las necesidades de su negocio.'
                : 'Nexo es el agente de inteligencia artificial de Asystec para empresas en Costa Rica. Automatice reportes, ventas, marketing y operaciones con una solución diseñada para su negocio.'}
            </p>
            <div className={styles.heroActions}>
              {isHome ? (
                <a
                  href="/agente-nexo"
                  className={styles.button}
                  data-analytics-event="cta_navigation"
                  data-analytics-label="Conocer Nexo de Asystec"
                  data-analytics-location="hero"
                >
                  Conocer Nexo de Asystec <IconArrowRight size={20} aria-hidden="true" />
                </a>
              ) : (
                <NexoCta location="hero" />
              )}
              <a
                href="/agente-nexo#que-hace"
                className={styles.textLink}
                data-analytics-event="cta_navigation"
                data-analytics-label="Explorar posibilidades de Nexo"
                data-analytics-location="hero"
              >
                Qué puede hacer Nexo <IconArrowRight size={20} aria-hidden="true" />
              </a>
            </div>
            <p className={styles.heroNote}>Usted define la necesidad. Diseñamos su Nexo.</p>
          </div>
          <figure
            className={styles.processPreview}
            aria-label="Ejemplo ilustrativo de un proceso de reportes; no es una ejecución en vivo"
          >
            <figcaption className={styles.previewTitle}>
              <strong>Un proceso, de principio a fin</strong>
              <span>Ejemplo ilustrativo</span>
            </figcaption>
            <div className={styles.previewBody}>
              <div className={styles.previewWorkflow}>
                <div className={styles.request}>
                  <IconMessage2 size={22} aria-hidden="true" />
                  <p>Prepare el reporte de esta semana.</p>
                </div>
                <ol className={styles.taskSteps}>
                  {steps.map(([title, text]) => (
                    <li key={title}>
                      <span className={styles.checkCircle}>
                        <IconCheck size={18} aria-hidden="true" />
                      </span>
                      <div>
                        <strong>{title}</strong>
                        <p>{text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <div className={styles.report}>
                <IconFileText size={32} stroke={1.7} aria-hidden="true" />
                <h2>Resumen semanal</h2>
                <p>Ventas · Actividad · Pendientes</p>
                <div className={styles.documentLines} aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <div className={styles.chart} aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <div className={styles.reportStatus}>
                  <IconCheck size={18} aria-hidden="true" />
                  <span>Listo para revisar</span>
                </div>
              </div>
            </div>
          </figure>
        </div>
        <div className={styles.benefits}>
          {benefits.map(({ icon: Icon, title, text }) => (
            <div key={title} className={styles.benefit}>
              <Icon size={32} stroke={1.5} aria-hidden="true" />
              <div>
                <h2>{title}</h2>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
