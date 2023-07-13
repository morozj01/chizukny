import type { NextPage } from 'next';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Collapse from 'react-bootstrap/Collapse';
import { motion } from 'framer-motion';
import {
  CaretUpFill,
  Chat,
  Clock,
  Geo,
} from 'react-bootstrap-icons';
import { useState } from 'react';
import style from '../styles/index.module.css';

const Home: NextPage = () => {
  const [collapseOneOpen, setCollapseOneOpen] = useState(true);
  const [collapseTwoOpen, setCollapseTwoOpen] = useState(false);
  const [collapseThreeOpen, setCollapseThreeOpen] = useState(false);

  const toggleCollapseOn = (index:number) => {
    switch (index) {
      case 1: {
        setCollapseOneOpen(true);
        setCollapseTwoOpen(false);
        setCollapseThreeOpen(false);
        break;
      }
      case 2: {
        setCollapseOneOpen(false);
        setCollapseTwoOpen(true);
        setCollapseThreeOpen(false);
        break;
      }
      case 3: {
        setCollapseOneOpen(false);
        setCollapseTwoOpen(false);
        setCollapseThreeOpen(true);
        break;
      }
      default: {
        // do nothing
      }
    }
  };

  const toggleCollapseOff = (index:number) => {
    switch (index) {
      case 1: {
        setCollapseOneOpen(false);
        break;
      }
      case 2: {
        setCollapseTwoOpen(false);
        break;
      }
      case 3: {
        setCollapseThreeOpen(false);
        break;
      }
      default: {
        // do nothing
      }
    }
  };

  return (
    <Container fluid>
      <Row fluid style={{ minHeight: '10vh', backgroundColor: '#7699d6' }}>
        <Col className="d-flex flex-column flex-md-row align-items-center justify-content-center p-3">
          <img src="/images/star.png" style={{ height: '40px' }} alt="star" className="me-0 me-md-3" />
          <span className="text-center" style={{ color: 'white', fontSize: '32px', fontWeight: '400' }}>
            Chizuk Hatorah Worldwide
          </span>
        </Col>
      </Row>
      <Row fluid style={{ height: '90vh', backgroundColor: '#7699d6' }} className={`${style['hero-section']}`}>
        <Col md={{ offset: 3, span: 6 }} className="d-flex align-items-center justify-content-center p-3 mb-4 px-4 px-md-3">
          <div className="text-center mb-3">
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ zIndex: 1 }}
            >
              <p
                className="text-center"
                style={{
                  color: 'white', fontSize: '40px', fontWeight: '400', zIndex: '10', position: 'relative',
                }}
              >
                {`Devoted to strengthening and uplifting communities 
              throughout New York City's five boroughs.`}
              </p>
            </motion.div>

            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ zIndex: 1 }}
            >
              <a href="#about-us">
                <button
                  type="button"
                  style={{ zIndex: '10', position: 'relative' }}
                  className={`${style['hero-button']} px-4 py-2 mt-3`}
                >
                  Learn More
                </button>
              </a>
            </motion.div>

            {/* <img src="/images/people.jpeg" alt="collage" className={`${style['hero-image']}`} /> */}
          </div>
        </Col>
      </Row>

      <Row fluid style={{ minHeight: '85vh', backgroundColor: '#7699d6', borderTop: '1px solid white' }} id="about-us">
        <Col md={{ offset: 2, span: 8 }} className="d-flex align-items-center justify-content-center py-5 px-4 px-md-0">
          <div className="w-100">
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ zIndex: 1 }}
            >
              <p className="text-start d-block" style={{ color: 'white', fontSize: '40px', fontWeight: '400' }}>
                About Chizuk Hatorah
              </p>
            </motion.div>

            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ zIndex: 1 }}
            >
              <Row className={`${style['expanding-container']} mx-0 mt-3 py-4`}>
                <Col xs={11} className="px-0">
                  <span style={{ fontSize: '30px', color: 'white', fontWeight: '500' }}>Who We Are</span>
                </Col>
                <Col xs={1} className="d-flex align-items-center">
                  <motion.span
                    transition={{ duration: 0.3 }}
                    onClick={() => {
                      if (collapseOneOpen) toggleCollapseOff(1);
                      if (!collapseOneOpen) toggleCollapseOn(1);
                    }}
                    animate={{
                      rotate: collapseOneOpen ? 90 : 180,
                    }}
                  >
                    <CaretUpFill
                      size={26}
                      className={style['expanding-icon']}
                    />
                  </motion.span>
                </Col>
                <Collapse in={collapseOneOpen} className="p-0">
                  <div>
                    <p className="my-2 mt-3" style={{ color: 'white', fontSize: '24px' }}>
                      {`
                    The Congregation Chizuk Hatorah is a nonprofit organization devoted to strengthening and uplifting 
                    the diverse communities throughout New York City's five boroughs.
                    `}
                    </p>
                    <p className="my-2 mt-4" style={{ color: 'white', fontSize: '24px' }}>
                      {`
                    Established from a profound commitment 
                    to our city and its residents, our mission extends beyond traditional philanthropy. We provide a wide range 
                    of resources, from food and clothing to technological tools, ensuring that the people of New York are not 
                    only surviving, but thriving in their everyday lives.
                    `}
                    </p>
                  </div>
                </Collapse>
              </Row>
            </motion.div>

            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ zIndex: 1 }}
            >
              <Row className={`${style['expanding-container']} mx-0 mt-0 py-4`} style={{ borderTop: 'none' }}>
                <Col xs={11} className="px-0">
                  <span style={{ fontSize: '30px', color: 'white', fontWeight: '500' }}>Our Work</span>
                </Col>
                <Col xs={1} className="d-flex align-items-center">
                  <motion.span
                    transition={{ duration: 0.3 }}
                    onClick={() => {
                      if (collapseTwoOpen) toggleCollapseOff(2);
                      if (!collapseTwoOpen) toggleCollapseOn(2);
                    }}
                    animate={{
                      rotate: collapseTwoOpen ? 90 : 180,
                    }}
                  >
                    <CaretUpFill
                      size={26}
                      className={style['expanding-icon']}
                    />
                  </motion.span>
                </Col>

                <Collapse in={collapseTwoOpen} className="p-0">
                  <div>
                    <p className="my-2 mt-3" style={{ color: 'white', fontSize: '24px' }}>
                      {`
                    Recognizing the complexities of urban living and the challenges it can bring, we developed BigNY. This platform, 
                    accessible via our website and as a mobile app, aims to demystify the labyrinth of city life. BigNY is designed 
                    to bring you localized news, updates on local government programs, insights into local politicians and their policies, 
                    job opportunities within local businesses, and developments in businesses that are giving back to the community. 
                    `}
                    </p>
                    <p className="my-2 mt-4" style={{ color: 'white', fontSize: '24px' }}>
                      {`
                    Congregation Chizuk Hatorah is committed to transparency and access to information. BigNY brings you the pulse of 
                    your local neighborhood, fostering a sense of belonging and engagement, and empowering New Yorkers to be active 
                    participants in their communities.
                    `}
                    </p>
                  </div>
                </Collapse>
              </Row>
            </motion.div>

            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              style={{ zIndex: 1 }}
            >
              <Row className={`${style['expanding-container']} mx-0 mt-0 py-4`} style={{ borderTop: 'none' }}>
                <Col xs={11} className="px-0">
                  <span style={{ fontSize: '30px', color: 'white', fontWeight: '500' }}>Our Values</span>
                </Col>
                <Col xs={1} className="d-flex align-items-center">
                  <motion.span
                    transition={{ duration: 0.3 }}
                    onClick={() => {
                      if (collapseThreeOpen) toggleCollapseOff(3);
                      if (!collapseThreeOpen) toggleCollapseOn(3);
                    }}
                    animate={{
                      rotate: collapseThreeOpen ? 90 : 180,
                    }}
                  >
                    <CaretUpFill
                      size={26}
                      className={style['expanding-icon']}
                    />
                  </motion.span>
                </Col>

                <Collapse in={collapseThreeOpen} className="p-0">
                  <div>
                    <p className="my-2 mt-3" style={{ color: 'white', fontSize: '24px' }}>
                      {`
                    At the heart of our work is the belief that everyone deserves the chance to flourish. Our dedicated team 
                    tirelessly works to make sure that the heartbeat of New York City — its people — have the tools and information 
                    they need. 
                    `}
                    </p>
                    <p className="my-2 mt-4" style={{ color: 'white', fontSize: '24px' }}>
                      {`
                    Congregation Chizuk Hatorah is more than just a nonprofit; we are your neighbors, your friends, and your 
                    supporters. By providing you with the resources you need and creating an information gateway through BigNY, we 
                    strive to ensure that every New Yorker feels seen, heard, and empowered. Together, we are making a difference in 
                    the lives of our community members and shaping the future of our city.
                    `}
                    </p>
                  </div>
                </Collapse>
              </Row>
            </motion.div>

          </div>
        </Col>
      </Row>

      <Row fluid style={{ minHeight: '20vh', backgroundColor: '#e0e0db' }}>
        <Col lg={4} className="d-flex align-items-center justify-content-center py-5">
          <div className="text-center">
            <p style={{ color: '#7699d6', fontSize: '26px', fontWeight: '400' }} className="mt-1">
              <Geo size={22} style={{ margin: '-2px 8px 2px -8px' }} />
              Location
            </p>
            <p style={{ color: '#7699d6', fontSize: '20px', fontWeight: '400' }} className="mt-2">
              96 Parkville Ave
              <br />
              Brooklyn, NY 11230
            </p>
          </div>
        </Col>
        <Col lg={4} className="d-flex align-items-center justify-content-center py-5">
          <div className="text-center">
            <p style={{ color: '#7699d6', fontSize: '26px', fontWeight: '400' }} className="mt-1">
              <Clock size={22} style={{ margin: '-2px 8px 2px -8px' }} />
              Hours

            </p>
            <p style={{ color: '#7699d6', fontSize: '20px', fontWeight: '400' }} className="mt-2">
              Monday - Thursday
              <br />
              9:00am - 5:00pm
            </p>
          </div>
        </Col>
        <Col lg={4} className="d-flex align-items-center justify-content-center py-5">
          <div className="text-center">
            <p style={{ color: '#7699d6', fontSize: '26px', fontWeight: '400' }} className="mt-1">
              <Chat size={20} style={{ margin: '-2px 8px 2px -8px' }} />
              Get In Touch

            </p>
            <p style={{ color: '#7699d6', fontSize: '20px', fontWeight: '400' }} className="mt-2">
              contact@chizukny.org
              <br />
              (305) 741-8858
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
