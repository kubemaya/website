import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'ARM Edge Device & K8s Setup',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Easily set up lightweight Kubernetes (via K3s) on edge hardware like 
        Raspberry Pi and other ARM-based devices — optimized for environments
        with limited resources.
      </>
    ),
  },
  {
    title: 'Air-Gapped Deployment Dashboard',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Intuitive web-based dashboard to deploy, manage, and monitor your AI/ML
        containerized applications — fully offline and secure, no internet
        access required.
      </>
    ),
  },
  {
    title: 'Containerized ML Ops Toolkit',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Prebuilt scripts streamline the creation, packaging, and deployment of 
        your AI/ML applications into containers, accelerating edge deployment
        workflows.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
