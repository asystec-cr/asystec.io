'use client';

import { useRef, useState, type KeyboardEvent } from 'react';
import {
  IconArrowRight,
  IconChartBar,
  IconCircleCheck,
  IconDatabase,
  IconFileText,
  IconSettings,
  IconSpeakerphone,
  IconUsers,
} from '@tabler/icons-react';

import { NEXO_CONTACT_HREF, nexoUseCases } from '~/shared/data/agente-nexo.data';
import styles from './NexoUseCases.module.css';

const categoryIcons = {
  reportes: IconFileText,
  ventas: IconChartBar,
  marketing: IconSpeakerphone,
  redes: IconUsers,
  operaciones: IconSettings,
};

const categoryNames = {
  reportes: 'Reportes y análisis',
  ventas: 'Ventas y atención',
  marketing: 'Marketing y contenidos',
  redes: 'Redes sociales',
  operaciones: 'Operaciones y administración',
};

export default function NexoUseCases() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex: number;

    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        nextIndex = (index + 1) % nexoUseCases.length;
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        nextIndex = (index - 1 + nexoUseCases.length) % nexoUseCases.length;
        break;
      case 'Home':
        nextIndex = 0;
        break;
      case 'End':
        nextIndex = nexoUseCases.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    setSelectedIndex(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <section id="que-hace" className={styles.section} aria-labelledby="nexo-use-cases-title">
      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Posibilidades</p>
          <h2 id="nexo-use-cases-title" className={styles.heading}>
            ¿Qué trabajo le gustaría delegar?
          </h2>
          <p className={styles.intro}>Empiece por una necesidad. Nexo se configura alrededor de su proceso.</p>
        </header>

        <div role="tablist" aria-label="Áreas de trabajo de Agente Nexo" className={styles.tabs}>
          {nexoUseCases.map((useCase, index) => {
            const Icon = categoryIcons[useCase.id];

            return (
              <button
                key={useCase.id}
                ref={(element) => {
                  tabRefs.current[index] = element;
                }}
                type="button"
                role="tab"
                id={`nexo-tab-${useCase.id}`}
                aria-controls={`nexo-panel-${useCase.id}`}
                aria-selected={selectedIndex === index}
                tabIndex={selectedIndex === index ? 0 : -1}
                className={styles.tab}
                onClick={() => setSelectedIndex(index)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
              >
                <Icon size={30} stroke={1.5} aria-hidden="true" />
                <span>{useCase.label}</span>
              </button>
            );
          })}
        </div>

        {nexoUseCases.map((useCase, index) => {
          const contactHref =
            'https://wa.me/50689754741?text=' +
            encodeURIComponent(
              `Hola Asystec, me interesa Agente Nexo para mi empresa. Quiero conocer cómo automatizar procesos de ${useCase.label.toLowerCase()}.`,
            );
          const stages = [
            { title: 'Su necesidad', description: useCase.request, icon: IconFileText },
            { title: 'El trabajo de Nexo', description: useCase.work, icon: IconDatabase },
            { title: 'El resultado', description: useCase.result, icon: IconChartBar },
          ];

          return (
            <div
              key={useCase.id}
              id={`nexo-panel-${useCase.id}`}
              role="tabpanel"
              aria-labelledby={`nexo-tab-${useCase.id}`}
              hidden={selectedIndex !== index}
              tabIndex={0}
              className={styles.panel}
            >
              <div className={styles.description}>
                <p className={styles.eyebrow}>{categoryNames[useCase.id]}</p>
                <h3 className={styles.panelTitle}>{useCase.title}</h3>
                <p className={styles.body}>{useCase.description}</p>
                <ul className={styles.benefits}>
                  {useCase.benefits.map((benefit) => (
                    <li key={benefit}>
                      <IconCircleCheck size={29} stroke={1.5} aria-hidden="true" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={contactHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-analytics-event="cta_whatsapp"
                  data-analytics-location="casos-de-uso"
                  data-analytics-label={`Agente Nexo ${useCase.label}`}
                  className={styles.processLink}
                >
                  Hablemos de este proceso
                  <IconArrowRight size={23} stroke={1.8} aria-hidden="true" />
                </a>
              </div>

              <div className={styles.example} aria-label={`Ejemplo ilustrativo de ${useCase.label.toLowerCase()}`}>
                <p className={styles.exampleLabel}>Ejemplo ilustrativo</p>
                <ol className={styles.stages}>
                  {stages.map((stage, stageIndex) => {
                    const Icon = stage.icon;

                    return (
                      <li key={stage.title} className={styles.stage}>
                        <span className={styles.number} aria-hidden="true">
                          {String(stageIndex + 1).padStart(2, '0')}
                        </span>
                        <Icon size={40} stroke={1.35} aria-hidden="true" className={styles.stageIcon} />
                        <div className={styles.stageContent}>
                          <h4>{stage.title}</h4>
                          <p>{stage.description}</p>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
          );
        })}

        <a
          href={NEXO_CONTACT_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.otherProcess}
          data-analytics-event="cta_whatsapp"
          data-analytics-location="casos-de-uso"
          data-analytics-label="Agente Nexo proceso a medida"
        >
          <span>
            <strong>¿Su proceso es diferente?</strong>
            <span>Cuéntenos qué necesita automatizar.</span>
          </span>
          <IconArrowRight size={27} stroke={1.8} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
