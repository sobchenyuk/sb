import React, { PureComponent } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

// components
import {
  Tabs,
  Tab,
} from 'material-ui/Tabs';
import classNames from 'classnames';
import { IS_MOBILE } from 'consts/browser';
import AutomaticMessages from './components/AutomaticMessages';
import MultipleSources from './components/MultipleSources';
import QuickReplies from './components/QuickReplies';
import ReturnsCases from './components/ReturnsCases';
import Tailored from './components/Tailored';
import ThreeHundredSixty from './components/ThreeHundredSixty';

import { MAIN_SCROLLBAR_ID } from 'layouts/App';

import Animation from './components/Animation';

// styles
import {
  styles,
  stylesTabs,
} from './styles';

// svg-icons
import TailoredIcon from './svg-icons/Tailored/';
import ReturnsIcon from './svg-icons/Returns/';
import MultipleIcon from './svg-icons/Multiple/';
import AutomaticIcon from './svg-icons/Automatic/';
import ThreeIcon from './svg-icons/Three/';
import QuickIcon from './svg-icons/Quick/';

// images
import featuresImg from './images/features.png';
import featuresImgMobile from './images/features1.png';

// tabs
const tabs = {
  automatic: AutomaticMessages,
  multiple: MultipleSources,
  quick: QuickReplies,
  returns: ReturnsCases,
  tailored: Tailored,
  three: ThreeHundredSixty,
};

@injectSheet(styles)
export default class Features extends PureComponent {
  static propTypes = {
    classes: PropTypes.shape(), // eslint-disable-line react/require-default-props
  };

  state = {
    animate: false,
    values: 'tailored',
    index: 0,
    counter: 0,
    indexFadeOut: '',
    component: '',
  };

  componentDidMount() {
    this.scrollGetBlock(this.findPosY(document.getElementById('animationBlock')));
  }

  componentWillUpdate() {
    const { values } = this.state;
    this.changeComponents(values);
  }

  componentWillUnmount() {
    const scroll = document.getElementById(MAIN_SCROLLBAR_ID);
    if (scroll) {
      scroll.removeEventListener('scroll', this.eventFunc);
    }
  }

  handleChange = (value) => {
    this.setState({ values: value });
  };

  handleIndex = (value) => {
    this.setState({ indexFadeOut: value });
    setTimeout(() => {
      this.setState({ index: value });
      this.setState({ indexFadeOut: -1 });
    }, 300);
  };

  scrollGetBlock = (y) => {
    if (y > 0) {
      this.eventFunc = data => this.handleScroll(data, y);
      document.getElementById(MAIN_SCROLLBAR_ID).addEventListener('scroll', this.eventFunc);
    }
  };

  handleScroll(data, y) {
    if (this.state.counter === 0) {
      if ((data.target.scrollTop + 30) > y) {
        this.setState({
          animate: true,
          counter: +1,
        });
      } else {
        this.setState({
          animate: false,
        });
      }
    } else {
      this.setState({
        animate: false,
      });
    }
  }

  findPosY = (obj) => {
    let curtop = 0;
    if (obj.offsetParent) {
      while (1) {
        curtop += obj.offsetTop;
        if (!obj.offsetParent) {
          break;
        }
        obj = obj.offsetParent;
      }
    } else if (obj.y) {
      curtop += obj.y;
    }
    return curtop;
  };

  changeComponents(values) {
    this.setState({ component: values });
  }

  render() {
    const { classes } = this.props;
    const {
      index,
      animate,
      counter,
      indexFadeOut,
      component,
      values,
    } = this.state;
    const ComponentToRender = tabs[component === '' ? values : component];
    return (
      <section
        className={classNames(
          classes.features,
          { [`${classes.featuresMobile}`]: IS_MOBILE },
        )}
      >

        <div
          className={classNames(
            classes.featuresText,
            { [`${classes.featuresTextMobile}`]: IS_MOBILE },
          )}
        >
          <h2
            className={classNames(
              classes.featuresTextTitle,
              { [`${classes.featuresTextTitleMobile}`]: IS_MOBILE },
              )}
          >
            Features
          </h2>
          <p
            className={classNames(
              classes.featuresTextSubscribe,
               { [`${classes.featuresTextTitleMobile}`]: IS_MOBILE },
               )}
          >
            Built to boost up your <br style={IS_MOBILE ? { display: 'block' } : { display: 'none' }} /> performance and increase sales
          </p>
        </div>

        <div
          className={classNames(
            classes.featuresContainer,
            { [`${classes.featuresContainerMobile}`]: IS_MOBILE },
          )}
        >
          <div
            className="featuresImg"
            style={stylesTabs.featuresImg}
          >
            <img src={!IS_MOBILE ? featuresImg : ''} alt="" />
          </div>

          <Tabs
            tabItemContainerStyle={
              IS_MOBILE ? stylesTabs.tabItemContainerStyleMobile : stylesTabs.tabItemContainerStyle
            }
            inkBarStyle={stylesTabs.inkBarStyle}
            inkBarContainerStyle={stylesTabs.inkBarContainerStyle}
            value={this.state.values}
            onChange={this.handleChange}
          >
            <Tab
              icon={
                <TailoredIcon
                  width="35"
                  height="64"
                  viewBox="0 0 38 49"
                  transform="translate(0px, -4px)"
                  opacity={index === 0 ? 1 : 0.2}
                />
              }
              buttonStyle={
                index === 0 ? stylesTabs.iconStyleActive : stylesTabs.iconStyle
              }
              label="Tailored"
              value="tailored"
              style={
                IS_MOBILE ? stylesTabs.tabStyleMobile : stylesTabs.tabStyle
              }
              onActive={() => this.handleIndex(0)}
            >
              <Animation fadeIn={(counter > 0 && index === 0) || animate} fadeOut={indexFadeOut === 0}>
                <ComponentToRender showAnimation={(counter > 0 && index === 0) || animate} />
              </Animation>
            </Tab>
            <Tab
              icon={
                <ReturnsIcon
                  width="37"
                  height="64"
                  viewBox="0 0 40 36"
                  transform="translate(0px, -4px)"
                  opacity={index === 1 ? 1 : 0.2}
                />
              }
              buttonStyle={
                index === 1 ? stylesTabs.iconStyleActive : stylesTabs.iconStyle
              }
              label="Returns & Cases"
              value="returns"
              style={
                IS_MOBILE ? stylesTabs.tabStyleMobile : stylesTabs.tabStyle
              }
              onActive={() => this.handleIndex(1)}
            >
              <Animation fadeIn={index === 1} fadeOut={indexFadeOut === 1}>
                <ComponentToRender />
              </Animation>
            </Tab>
            <Tab
              icon={
                <MultipleIcon
                  width="40"
                  height="64"
                  viewBox="0 0 40 36"
                  transform="translate(0px, -4px)"
                  opacity={index === 2 ? 1 : 0.2}
                />
              }
              buttonStyle={
                index === 2 ? stylesTabs.iconStyleActive : stylesTabs.iconStyle
              }
              label="Multiple Sources"
              value="multiple"
              style={
                IS_MOBILE ? stylesTabs.tabStyleMobile : stylesTabs.tabStyle
              }
              onActive={() => this.handleIndex(2)}
            >
              <Animation fadeIn={index === 2} fadeOut={indexFadeOut === 2}>
                <ComponentToRender />
              </Animation>
            </Tab>
            <Tab
              icon={
                <AutomaticIcon
                  width="38"
                  height="64"
                  viewBox="0 0 38 36"
                  transform="translate(0px, -4px)"
                  opacity={index === 3 ? 1 : 0.2}
                />
              }
              buttonStyle={
                index === 3 ? stylesTabs.iconStyleActive : stylesTabs.iconStyle
              }
              label="Automatic Messages"
              value="automatic"
              style={
                IS_MOBILE ? stylesTabs.tabStyleMobile : stylesTabs.tabStyle
              }
              onActive={() => this.handleIndex(3)}
            >
              <Animation fadeIn={index === 3} fadeOut={indexFadeOut === 3}>
                <ComponentToRender />
              </Animation>
            </Tab>
            <Tab
              icon={
                <ThreeIcon
                  width="48"
                  height="64"
                  viewBox="0 0 47 32"
                  transform="translate(0px, -4px)"
                  opacity={index === 4 ? 1 : 0.2}
                />
              }
              buttonStyle={
                index === 4 ? stylesTabs.iconStyleActive : stylesTabs.iconStyle
              }
              label="360°"
              value="three"
              style={
                IS_MOBILE ? stylesTabs.tabStyleMobile : stylesTabs.tabStyle
              }
              onActive={() => this.handleIndex(4)}
            >
              <Animation fadeIn={index === 4} fadeOut={indexFadeOut === 4}>
                <ComponentToRender />
              </Animation>
            </Tab>
            <Tab
              icon={
                <QuickIcon
                  width="40"
                  height="64"
                  viewBox="0 0 40 40"
                  transform="translate(0px, -4px)"
                  opacity={index === 5 ? 1 : 0.2}
                />
              }
              buttonStyle={
                index === 5 ? stylesTabs.iconStyleActive : stylesTabs.iconStyle
              }
              label="Quick replies"
              value="quick"
              style={
                IS_MOBILE ? stylesTabs.tabStyleMobile : stylesTabs.tabStyle
              }
              onActive={() => this.handleIndex(5)}
            >
              <Animation fadeIn={index === 5} fadeOut={indexFadeOut === 5}>
                <ComponentToRender />
              </Animation>
            </Tab>
          </Tabs>
        </div>
      </section>
    );
  }
}
