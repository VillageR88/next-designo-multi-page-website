import fs from 'node:fs';
import path from 'node:path';
import DesignRoute from '@/components/DesignRoute';

export async function generateStaticParams(): Promise<
  {
    design: string;
  }[]
> {
  // eslint-disable-next-line @typescript-eslint/await-thenable
  const designs = await ['graphic-design', 'app-design', 'web-design'];
  return designs.map((design) => ({
    design,
  }));
}

export default async function Page({ params }: { params: { design: string } }): Promise<JSX.Element> {
  // eslint-disable-next-line @typescript-eslint/await-thenable
  const { design } = await params;
  const routePath = path.join(process.cwd(), 'public', 'assets', design, 'desktop');
  const pageFiles = fs.readdirSync(routePath).filter((file) => file.match('image*'));

  return <DesignRoute pageFiles={pageFiles} relativeDirname={design} />;
}
