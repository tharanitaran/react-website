import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Services',
    paragraph:  ''
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/implementation_1.png')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Implementation & Training
                    </h4>
                  <p className="m-0 text-sm">
                    Business development
                  </p>
                  <p className="m-0 text-sm">
                    System Design & Implementation
                  </p>
                  <p className="m-0 text-sm">
                    Salesforce Governance
                  </p>
                  <p className="m-0 text-sm">
                    Solution Documentation
                  </p>
                  <p className="m-0 text-sm">
                    Training
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-02.svg')}
                      alt="Features tile icon 02"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">
                        System Optimisation
                    </h4>
                    <p className="m-0 text-sm">
                        System Design
                    </p>
                    <p className="m-0 text-sm">
                        Consultation
                    </p>
                    <p className="m-0 text-sm">
                        System Health Check
                    </p>
                    <p className="m-0 text-sm">
                    Data Cleanup
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-03.svg')}
                      alt="Features tile icon 03"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                <h4 className="mt-0 mb-8">
                    Managed Services
                    </h4>
                    <p className="m-0 text-sm">
                      Salesforce Administration
                    </p>
                    <p className="m-0 text-sm">
                    Business development
                    </p>
                    <p className="m-0 text-sm">
                    Health Check
                    </p>
                    <p className="m-0 text-sm">
                    Release Readiness
                    </p>
                    <p className="m-0 text-sm">
                    Change Management
                    </p>
                    <p className="m-0 text-sm">
                    User Training and Governance
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-04.svg')}
                      alt="Features tile icon 04"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                <h4 className="mt-0 mb-8">
                    Lightning Migration
                    </h4>
                    <p className="m-0 text-sm">
                      Impact Assessment
                    </p>
                    <p className="m-0 text-sm">
                    Deployement Plan
                    </p>
                    <p className="m-0 text-sm">
                    Training and Documentation
                    </p>
                    <p className="m-0 text-sm">
                    Salesforce Governance
                    </p>
                    <p className="m-0 text-sm">
                    Solution Documentation
                    </p>
                    <p className="m-0 text-sm">
                    Training
                    </p>
                </div>
              </div>
            </div>

             {/* <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-05.svg')}
                      alt="Features tile icon 05"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                <h4 className="mt-0 mb-8">
                    Implementation & Training
                    </h4>
                    <p className="m-0 text-sm">
                      Business development
                    </p>
                    <p className="m-0 text-sm">
                    Business development
                    </p>
                    <p className="m-0 text-sm">
                    System Design & Implementation
                    </p>
                    <p className="m-0 text-sm">
                    Salesforce Governance
                    </p>
                    <p className="m-0 text-sm">
                    Solution Documentation
                    </p>
                    <p className="m-0 text-sm">
                    Training
                    </p>
                </div>
              </div>
            </div> 

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-06.svg')}
                      alt="Features tile icon 06"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Robust Workflow
                    </h4>
                  <p className="m-0 text-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                    </p>
                </div>
              </div>
            </div>  */}

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;