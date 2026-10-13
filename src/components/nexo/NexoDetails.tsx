import {
  IconChartBar,
  IconClipboardText,
  IconLink,
  IconMinus,
  IconPlayerPlay,
  IconPlus,
  IconSettings,
  IconTarget,
} from '@tabler/icons-react';
import { nexoFaqs } from '~/shared/data/agente-nexo.data';
import NexoCta from './NexoCta';
import styles from './NexoDetails.module.css';

const steps = [
  {
    title: 'Entendemos su necesidad',
    description: 'La tarea, las herramientas y el resultado que espera.',
    icon: IconClipboardText,
  },
  {
    title: 'Definimos el alcance',
    description: 'Las acciones, los datos y las revisiones necesarias.',
    icon: IconTarget,
  },
  {
    title: 'Configuramos y probamos',
    description: 'Validamos el proceso antes de su puesta en marcha.',
    icon: IconSettings,
  },
  {
    title: 'Ponemos a Nexo a trabajar',
    description: 'Acordamos cómo revisar resultados y ajustar el proceso.',
    icon: IconPlayerPlay,
  },
];

const scopeFactors = [
  { title: 'Procesos', description: 'El trabajo que quiere delegar.', icon: IconSettings },
  { title: 'Integraciones', description: 'Las herramientas que necesita conectar.', icon: IconLink },
  { title: 'Volumen', description: 'La frecuencia y cantidad de tareas.', icon: IconChartBar },
];

export default function NexoDetails() {
  return (
    <div className={styles.details}>
      <section id="como-funciona" className={styles.process} aria-labelledby="nexo-process-title">
        <div className={styles.container}>
          <div className={styles.processHeading}>
            <h2 id="nexo-process-title">Cómo implementamos Nexo en su empresa.</h2>
            <p>Definimos el trabajo, conectamos la información necesaria y probamos el proceso con usted.</p>
          </div>

          <ol className={styles.steps}>
            {steps.map(({ title, description, icon: Icon }, index) => (
              <li key={title} className={styles.step}>
                <span className={styles.stepNumber} aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <Icon className={styles.stepIcon} stroke={1.5} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ol>

          <section id="planes" className={styles.scope} aria-labelledby="nexo-scope-title">
            <span id="a-medida" className={styles.anchor} aria-hidden="true" />
            <h2 id="nexo-scope-title">Una solución a la medida de su empresa.</h2>
            <div className={styles.scopeContent}>
              <dl className={styles.scopeFactors}>
                {scopeFactors.map(({ title, description, icon: Icon }) => (
                  <div key={title} className={styles.scopeFactor}>
                    <dt>
                      <Icon size={28} stroke={1.5} aria-hidden="true" />
                      <span>{title}</span>
                    </dt>
                    <dd>{description}</dd>
                  </div>
                ))}
              </dl>
              <NexoCta location="scope" className={styles.scopeCta}>
                Definir mi solución
              </NexoCta>
              <p className={styles.scopeNote}>La propuesta se define según el alcance de su proyecto.</p>
            </div>
          </section>
        </div>
      </section>

      <section id="preguntas" className={styles.faq} aria-labelledby="nexo-faq-title">
        <div className={`${styles.container} ${styles.faqGrid}`}>
          <div className={styles.faqHeading}>
            <h2 id="nexo-faq-title">Preguntas sobre Nexo de Asystec.</h2>
            <p>Resolvamos las preguntas sobre su próximo agente.</p>
          </div>
          <div className={styles.questions}>
            {nexoFaqs.map(({ question, answer }, index) => (
              <details key={question} className={styles.question} open={index === 0}>
                <summary>
                  <span>{question}</span>
                  <IconPlus className={styles.plus} size={24} stroke={1.5} aria-hidden="true" />
                  <IconMinus className={styles.minus} size={24} stroke={1.5} aria-hidden="true" />
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className={styles.contact} aria-labelledby="nexo-contact-title">
        <div className={styles.container}>
          <h2 id="nexo-contact-title">¿Qué trabajo quiere delegar?</h2>
          <p>Cuéntenos su necesidad y diseñemos su agente Nexo.</p>
          <NexoCta location="final" variant="light" className={styles.contactCta} />
        </div>
      </section>
    </div>
  );
}
