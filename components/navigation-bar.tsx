"use client";
import { useTranslations } from "next-intl";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { usePathname, useRouter } from '@/i18n/routing';
import Image from "next/image";
import "./navigation-bar.scss";

const NavigationBar: React.FC = () => {
  const t = useTranslations('components.NavigationBar');
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (lang: "en" | "fi") => {
    router.replace(pathname, { locale: lang });
  }

  const navLinks = [
    { title: t('services'), path: '#services'},
    { title: t('location'), path: '#location'},
    { title: t('gallery'), path: '#gallery'},
    { title: t('reviews'), path: '#reviews'},
    { title: t('contact'), path: '#contact'},
  ];

  return (
    <>
      <Navbar collapseOnSelect fixed="top" expand="lg" className="bg-body-tertiary navigation-bar">
        <Container fluid="md">
          <Navbar.Brand href="/">
            <Image
              alt=""
              src="/images/carmax-logo.png"
              width="40"
              height="40"
              className="d-inline-block align-center me-4"
            />
            {t('title')}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {navLinks.map((navLink) => (
                <Nav.Link key={navLink.title} href={navLink.path} active={pathname.endsWith(navLink.path)}>
                  {navLink.title}
                </Nav.Link>
              ))}
            </Nav>
            <Nav>
              <NavDropdown title={<><span className="bi bi-translate"></span></>} id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => changeLanguage('en')}>
                  { t('en') }
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => changeLanguage('fi')}>
                  { t('fi') }
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
