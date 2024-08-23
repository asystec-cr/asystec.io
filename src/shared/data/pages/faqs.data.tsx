import { CallToActionProps, FAQsProps } from '~/shared/types';
import { HeroProps } from '~/shared/types';

// Hero data on FAQs page *******************
export const heroFaqs: HeroProps = {
  title: 'Preguntas Frecuentes',
  subtitle: (
    <>
      Aquí encontrarás respuestas a las preguntas más comunes que nuestros clientes suelen hacer. Esperamos que esta sección te ayude a aclarar cualquier duda o inquietud que puedas tener. Si no encuentras la respuesta que buscas, no dudes en contactarnos directamente y estaremos encantados de ayudarte.
    </>
  ),
  tagline: '',
};

// FAQS4 data on FAQs page *******************
export const faqs4Faqs: FAQsProps = {
  id: 'faqsFour-on-faqs',
  hasBackground: true,
  header: {
    title: 'Encuentra lo que necesitas',
    subtitle: '',
    position: 'center',
  },
  tabs: [
    {
      link: {
        label: 'Factura Electrónica',
        href: '/tab1',
      },
      items: [
        {
          title: '¿Qué es una factura digital o electrónica?',
          description: `La factura electrónica es un documento comercial con efectos tributarios generado y transmitido en formato electrónico. Debe cumplir con los requisitos legales que se exigen a las facturas tradicionales garantizando la autenticidad de su origen y la integridad de su contenido.
          Para que la factura electrónica tenga validez debe estar firmado por una llave criptográfica.`,
        },
        {
          title: '¿Qué es la llave criptográfica?',
          description: `La llave criptográfica es un archivo que permite garantizar la autoría e integridad de los documentos digitales, posibilitando que éstos gocen de una característica que únicamente era propia de los documentos en papel. Esta llave criptografica es generada en el sistema ATV del Ministerio de Hacienda.`,
        },
        {
          title: "¿Qué opciones existen para comenzar a facturar digitalmente?",
          description: `La Dirección General de Tributación ha autorizado a los contribuyentes a desarrollar sus propias aplicaciones o a contratar a proveedores de soluciones para la facturación electrónica. Asystec es uno de los mejores proveedores de facturación electrónica en la que brindan soporte gratuito para que puedas realizar tus facturas y cobrar a tus clientes de una forma fácil y rápida.`,
        },
        {
          title: "¿Qué exige Tributación dentro del sistema de factura electrónica?",
          description: `El sistema de facturación electrónica debe contar con una opción de consulta para la utilización de la Administración Tributaria, que admita el acceso en línea a los datos, copia o descarga en un archivo electrónico de la información consultada.`,
        },
        {
          title: '¿Se debe imprimir la factura digital o solo se envía por correo?',
          description: `En el caso de los consumidores finales se debe imprimir la factura digital a menos que el receptor especifique que prefiere recibirla por correo electrónico. Cuando la trasacción se realiza entre personas físicas o jurídicas registradas en la Administración Tributaria, para emitir y recibir documentos electrónicos no es necesaria la impresión de la factura electrónica.`,
        },
        {
          title: '¿Cuáles otros documentos se pueden emitir electrónicamente además de las facturas?',
          description: `Los comprobantes electrónicos deberán conservarse por un plazo de cinco años conforme con lo establecido en el artículo 109 del Código de Normas y Procedimientos Tributarios y sus reformas, independientemente de que los contribuyentes se encuentren obligados a enviarlos al Ministerio de Hacienda para su respectiva validación.`,
        },
        {
            title: '¿Cuánto tiempo deben conservarse los comprobantes electrónicos?',
            description: `Los comprobantes electrónicos deberán conservarse por un plazo de cinco años conforme con lo establecido en el artículo 109 del Código de Normas y Procedimientos Tributarios y sus reformas, independientemente de que los contribuyentes se encuentren obligados a enviarlos al Ministerio de Hacienda para su respectiva validación.`,
          },
          {
            title: '¿Qué validez tienen los comprobantes electrónicos para el Ministerio de Hacienda?',
            description: `La validez que los comprobantes electrónicos establecidos en la Resolución DGT-R-48-2016, tienen para el Ministerio de Hacienda, para los efectos tributarios, consiste en la eficacia jurídica y fuerza probatoria en las mismas condiciones que los comprobantes físicos autorizados.`,
          },
          {
            title: '¿Se puede modificar o anular la factura electrónica original?',
            description: `La validez que los comprobantes electrónicos establecidos en la Resolución DGT-R-48-2016, tienen para el Ministerio de Hacienda, para los efectos tributarios, consiste en la eficacia jurídica y fuerza probatoria en las mismas condiciones que los comprobantes físicos autorizados.`,
          },
          {
            title: '¿Hay sanciones por incumplimiento?',
            description: `Sí. Debido a que la facturación electrónica es obligatoria en Costa Rica, las personas que incumplan con su uso se exponen a sanciones en forma de multas económicas, que dependerán del tipo de infracción y pueden ir desde dos salarios base hasta el 2% de los ingresos brutos del infractor.`,
          },
      ],
    },
  ],
};

// CallToAction data on FAQs page *******************
export const callToActionFaqs: CallToActionProps = {
  id: 'callToAction-on-faqs',
  hasBackground: true,
  title: 'Aun tienes preguntas?',
  subtitle:
    'Para nosotros es un gusto poder ayudarle, si tiene alguna duda o consulta por favor no dude en escribirnos.',
  callToAction: {
    text: 'Contáctanos',
    href: '/contact',
  },
};
