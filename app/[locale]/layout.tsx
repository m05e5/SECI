import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import RootLayout from './RootLayout';
import { Metadata } from 'next';

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: 'SECI',
  };
};

export default async function ServerLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider messages={messages}>
      <RootLayout locale={locale}>{children}</RootLayout>
    </NextIntlClientProvider>
  );
}