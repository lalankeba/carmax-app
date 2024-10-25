import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { Container } from "react-bootstrap";

export default function Home() {
  const t = useTranslations('pages.Home');

  return (
    <>
      <div>
        <Container fluid="md">
          <h1>{t('title')}</h1>
          <Link href="/about">{t('title')}</Link>
        </Container>
      </div>
    </>
  );
}
