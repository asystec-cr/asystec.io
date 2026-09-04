import { twMerge } from 'tailwind-merge';
import WidgetWrapper from '../common/WidgetWrapper';
import { trustpilotProfile } from '~/shared/data/trustpilot.data';

type CustomerOpinionsProps = {
  id?: string;
  hasBackground?: boolean;
  containerClass?: string;
};

const CustomerOpinions = ({
  id = 'opiniones-clientes',
  hasBackground = true,
  containerClass,
}: CustomerOpinionsProps) => (
  <WidgetWrapper
    id={id}
    hasBackground={hasBackground}
    containerClass={twMerge('py-8 md:py-10 lg:py-12', containerClass)}
  >
    <h2 className="text-2xl font-bold text-neutral-950 dark:text-white">Opiniones de clientes</h2>
    <p className="mt-3 text-base leading-7 text-neutral-700 dark:text-slate-300">
      <a
        href={trustpilotProfile.profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-4 hover:text-neutral-950 dark:hover:text-white"
        data-analytics-event="cta_trustpilot"
        data-analytics-label="Consultar opiniones de Asystec en Trustpilot"
        data-analytics-location="customer_opinions"
        data-analytics-type="external"
      >
        Consulta las opiniones de Asystec en Trustpilot
      </a>
    </p>
  </WidgetWrapper>
);

export default CustomerOpinions;
