import { Metadata } from 'next';
import { revalidatePath } from 'next/cache';

import { siteConfig } from '@/site.config';

import { H1, Link, P } from './ui/components/CommonElements';

export const metadata: Metadata = {
  title: '404 - Page Not Found',
};

export default function NotFound() {
  revalidatePath('/', 'layout');

  return (
    <>
      <H1>Page Not Found</H1>
      <P>
        The requested page is not found on the server. It is either removed or
        never existed.
      </P>
      <P>
        <Link href="/">
          You may want to return to {siteConfig.metadata.title}
        </Link>
      </P>
    </>
  );
}
