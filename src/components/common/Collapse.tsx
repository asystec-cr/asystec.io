'use client';

import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { useId } from 'react';
import useCollapse from '~/hooks/useCollapse';
import { CollapseProps } from '~/shared/types';

const Collapse = ({ items, classCollapseItem, iconUp, iconDown }: CollapseProps) => {
  const { activeIndex, handleSetIndex } = useCollapse();
  const accordionId = useId();

  return (
    <>
      {items.map(({ title, description }, index) => {
        const isOpen = activeIndex === index;
        const headingId = `${accordionId}-heading-${index}`;
        const panelId = `${accordionId}-panel-${index}`;

        return (
          <div key={`accordion-${index}`} className="mx-auto max-w-3xl bg-transparent text-base text-gray-700">
            <div className={classCollapseItem}>
              <h2 className="text-lg font-medium leading-6 text-gray-900 dark:text-slate-300">
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-2 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-600"
                  id={headingId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => handleSetIndex(index)}
                >
                  <span>{title}</span>
                  <span aria-hidden="true" className="shrink-0">
                    {iconDown && iconUp ? (
                      isOpen ? (
                        iconUp
                      ) : (
                        iconDown
                      )
                    ) : isOpen ? (
                      <IconChevronUp className="h-6 w-6 text-primary-600 dark:text-slate-200" />
                    ) : (
                      <IconChevronDown className="h-6 w-6 text-primary-600 dark:text-slate-200" />
                    )}
                  </span>
                </button>
              </h2>
              <div className="mt-3" aria-labelledby={headingId} id={panelId} hidden={!isOpen}>
                <p className="mt-2 text-gray-600 dark:text-slate-400">{description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Collapse;
