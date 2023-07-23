import type { NextPage } from 'next';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Collapse from 'react-bootstrap/Collapse';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { motion } from 'framer-motion';
import {
  CaretUpFill,
  Chat,
  Clock,
  Geo,
  List,
  XCircleFill,
} from 'react-bootstrap-icons';
import { useState } from 'react';
import Link from 'next/link';
import style from '../styles/index.module.css';

const NavBar: NextPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <Row fluid style={{ minHeight: '10vh', backgroundColor: '#7699d6' }} className="d-flex align-items-center">
      <Col lg={{ offset: 1, span: 5 }}>
        <Link href="/" className="d-flex flex-column flex-md-row align-items-center p-3">
          <img src="/images/star.png" style={{ height: '40px' }} alt="star" className="me-0 me-md-3" />
          <span className="text-center" style={{ color: 'white', fontSize: '32px', fontWeight: '400' }}>
            Chizuk Hatorah Worldwide
          </span>
        </Link>

      </Col>
      <Col lg={{ span: 5 }} className="d-none d-lg-flex flex-column flex-md-row align-items-center justify-content-end p-3">
        <span className={`${style['nav-item']} me-5`} style={{ fontSize: '22px' }}>
          <Link href="#about-us">Our Work</Link>
        </span>
        <span className={`${style['nav-item']} ${style['nav-item']} me-5`} style={{ fontSize: '22px' }}>
          <Link href="/">Contact</Link>
        </span>
        <span className={`${style['nav-item']} ${style['nav-item']} me-5`} style={{ fontSize: '22px' }}>
          <Link href="/">Donate</Link>
        </span>
      </Col>

      <Col
        className="d-lg-none text-center py-3"
        style={{
          borderTop: '1px solid white',
          borderBottom: '1px solid white',
        }}
      >
        <Offcanvas style={{ backgroundColor: '#7699d6' }} show={open} onHide={() => { setOpen(false); }}>
          <Offcanvas.Body style={{ overflow: 'hidden' }}>
            <XCircleFill
              style={{ color: 'white' }}
              size={32}
              onClick={() => {
                setOpen(false);
              }}
            />

            <Row className="d-flex align-items-center" style={{ height: '95%' }}>
              <Col className="text-center">
                <Link href="#about-us"><p className={style['nav-item']} style={{ fontSize: '22px' }}>Our Work</p></Link>
                <hr className={style['nav-seperator']} />
                <Link href="/"><p className={style['nav-item']} style={{ fontSize: '22px' }}>Contact</p></Link>
                <hr className={style['nav-seperator']} />
                <Link href="/"><p className={style['nav-item']} style={{ fontSize: '22px' }}>Donate</p></Link>
              </Col>
            </Row>

          </Offcanvas.Body>
        </Offcanvas>

        <List
          style={{ color: 'white' }}
          size={28}
          onClick={() => {
            setOpen(true);
          }}
        />

      </Col>
    </Row>
  );
};

export default NavBar;
