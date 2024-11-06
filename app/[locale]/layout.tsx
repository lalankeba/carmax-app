import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Exo_2 } from "next/font/google";
import NavigationBar from "@/components/navigation-bar";
import FooterBar from "@/components/footer-bar";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import "./globals.scss";

const exo2 = Exo_2({ subsets: ["latin"]});

export async function generateMetadata ({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: '' });

  return {
    title: {
      template: `%s - ${t('title')}`,
      default: `${t('title')}`,
    },
    description: t('description'),
    keywords: t('keywords'),
    openGraph: {
      title: {
        template: `%s - ${t('title')}`,
        default: `${t('title')}`,
      },
      description: t('description'),
      url: "https://carmaxautorepair.vercel.app",
      siteName: 'carmaxautorepair',
      type: 'website',
      locale: 'en_US',
      images: [
        {
          url: '/images/carmaxautorepair.png',
          width: 1023,
          height: 537,
          alt: 'carmax-auto-repair',
        },
        {
          url: '/images/carmaxautorepairs.png',
          width: 600,
          height: 314,
          alt: 'carmax-auto-repair',
        },
      ],
    }
  };
};

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  type Locale = (typeof routing.locales)[number];

  if (!routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }

  const messages = await getMessages();

  return (
    <html lang={locale} data-bs-theme="dark">
      <body className={`${exo2.className}`}>
        <NextIntlClientProvider messages={messages}>
          <div className="app">
            <header>
              <NavigationBar />
            </header>
            <main>
              {children}
            </main>
            <footer>
              <FooterBar />
            </footer>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
