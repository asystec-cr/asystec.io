import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { CallToActionType, LinkOrButton } from '~/shared/types';

const CTA = ({ callToAction, containerClass, linkClass, iconClass }: LinkOrButton) => {
  const { text, href, icon: Icon, targetBlank, trackingEvent, trackingLabel } = callToAction as CallToActionType;
  const analyticsProps = {
    'data-analytics-event': trackingEvent,
    'data-analytics-label': trackingLabel ?? text,
  };

  return (
    <>
      {href && (text || Icon) && (
        <div className={twMerge('flex w-auto cursor-pointer', containerClass)}>
          {targetBlank ? (
            <Link
              className={twMerge('inline-flex items-center justify-center w-full sm:mb-0', linkClass)}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              {...analyticsProps}
            >
              {Icon && <Icon className={twMerge(`w-5 h-5 ${text ? 'mr-1 rtl:mr-0 rtl:ml-1' : ''}`, iconClass)} />}
              {text}
            </Link>
          ) : (
            <Link
              className={twMerge('inline-flex items-center justify-center w-full sm:mb-0 ', linkClass)}
              href={href}
              {...analyticsProps}
            >
              {Icon && <Icon className={twMerge(`w-5 h-5 ${text ? 'mr-1 rtl:mr-0 rtl:ml-1' : ''}`, iconClass)} />}
              {text}
            </Link>
          )}
        </div>
      )}
    </>
  );
};

export default CTA;
