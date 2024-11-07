"use client";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Container, Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap";
import { usePathname, useRouter } from '@/i18n/routing';
import Image from "next/image";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import "./navigation-bar.scss";

const NavigationBar: React.FC = () => {
  const t = useTranslations('components.NavigationBar');
  const router = useRouter();
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [navBarMinHeight, setNavBarMinHeight] = useState<number>(56);
  const [navBarMaxHeight, setNavBarMaxHeight] = useState<number>(72);

  useEffect(() => {
    const rootStyle = getComputedStyle(document.documentElement);

    const minHeightRem = rootStyle.getPropertyValue('--navigation-bar-min-height').trim();
    const minHeight = remToPx(minHeightRem);
    setNavBarMinHeight(minHeight);

    const maxHeightRem = rootStyle.getPropertyValue('--navigation-bar-max-height').trim();
    const maxHeight = remToPx(maxHeightRem);
    setNavBarMaxHeight(maxHeight);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > navBarMinHeight);

    let newHeightRem;
    if (latest > navBarMinHeight) {
      newHeightRem =  pxToRem(navBarMinHeight);
    } else {
      newHeightRem = pxToRem(navBarMaxHeight);
    }
    document.documentElement.style.setProperty('--navigation-bar-height', newHeightRem);
  });

  const pxToRem = (px: number): string => {
    const rootFontSize = 16;
    return `${px / rootFontSize}rem`;
  };

  const remToPx = (remString: string): number => {
    const remValue = parseFloat(remString);
    const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
    return parseInt(`${remValue * rootFontSize}`);
  };

  const handleLinkClick = () => {
    const newHeightRem =  pxToRem(navBarMinHeight);
    document.documentElement.style.setProperty('--navigation-bar-height', newHeightRem);
  }

  const changeLanguage = (lang: "en" | "fi") => {
    router.replace(pathname, { locale: lang });
  }

  const getRelativePath = (path: string) => {
    if (pathname !== "/") {
      return `/${path}`;
    }
    return `${path}`;
  }

  const navLinks = [
    { title: t('services'), path: getRelativePath('#services')},
    { title: t('location'), path: getRelativePath('#location')},
    { title: t('gallery'), path: getRelativePath('#gallery')},
    { title: t('reviews'), path: getRelativePath('#reviews')},
    { title: t('contact'), path: getRelativePath('#contact')},
  ];

  return (
    <>
      <Navbar
        collapseOnSelect
        fixed="top"
        expand="lg"
        className="bg-body-tertiary bg-opacity-75 navigation-bar"
        as={motion.nav}
        initial={{ boxShadow: 'none', height: pxToRem(navBarMaxHeight) }}
        animate={{ 
          boxShadow: isScrolled ? '0px 6px 20px rgba(var(--bs-body-color-rgb), 0.4)' : 'none',
          height: isScrolled ? pxToRem(navBarMinHeight) : pxToRem(navBarMaxHeight)
        }}
        transition={{ duration: 0.3 }}
      >
        <Container fluid="md">
          <Navbar.Brand as={Link} href="/">
            <Image
              alt=""
              src="/images/carmax-logo.png"
              width="40"
              height="40"
              className="d-inline-block align-center me-4"
            />
            {t('title')}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvas-navbar" />

          <Navbar.Offcanvas
            id={`offcanvas-navbar`}
            aria-labelledby={`offcanvas-navbar-label`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvas-navbar-label`}>
                {t('title')}
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="me-auto flex-grow-1 pe-3">
                {navLinks.map((navLink) => (
                  <Nav.Link key={navLink.title} as={Link} href={navLink.path} active={pathname.endsWith(navLink.path)} onClick={handleLinkClick}>
                    {navLink.title}
                  </Nav.Link>
                ))}
              </Nav>
              <Nav>
                <NavDropdown
                  title={<><span className="bi bi-translate"></span></>}
                  id="basic-nav-dropdown"
                  align="end"
                >
                  <NavDropdown.Item onClick={() => changeLanguage('en')}>
                    { t('en') }
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => changeLanguage('fi')}>
                    { t('fi') }
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
