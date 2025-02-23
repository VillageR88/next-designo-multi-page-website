import fs from 'node:fs';
import path from 'node:path';
import DesignRoute from '../../../components/DesignRoute';
import type { ImageProps } from 'next/image';

type DesignParams = Promise<{ design: string }>;

export async function generateStaticParams(): Promise<
  {
    design: string;
  }[]
> {
  await Promise.resolve();
  return ['graphic-design', 'app-design', 'web-design'].map((design) => ({
    design,
  }));
}

export default async function Design(props: { params: DesignParams }): Promise<JSX.Element> {
  const { design } = await props.params;
  const routePath = path.join(process.cwd(), 'public', 'assets', design, 'desktop');
  const pageFiles = fs
    .readdirSync(routePath)
    .filter((file) => file.match('image*'))
    .map((file) => {
      const fileName = file.replace(/^image-/, '').replace(/\.jpg$/, '');
      return {
        src: path.join('/assets', design, 'desktop', file).replace(/\\/g, '/'),
        height: 320,
        width: 350,
        alt: fileName,
      };
    }) as ImageProps[];

  return <DesignRoute pageFiles={pageFiles} relativeDirname={design} />;
}
