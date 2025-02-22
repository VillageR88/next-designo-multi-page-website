import fs from 'node:fs';
import path from 'node:path';
import DesignRoute from '../../../components/DesignRoute';

type Params = Promise<{
  design: string;
  pageFiles: string[];
}>;

export async function generateStaticParams(): Promise<
  {
    design: string;
    pageFiles: string[];
  }[]
> {
  const designs = ['graphic-design', 'app-design', 'web-design'];
  return Promise.all(
    designs.map((design) => {
      const routePath = path.join(process.cwd(), 'public', 'assets', design, 'desktop');
      const pageFiles = fs.readdirSync(routePath).filter((file) => file.match('image*'));
      return {
        design,
        pageFiles,
      };
    }),
  );
}

export default async function Design({ params }: { params: Params }): Promise<JSX.Element> {
  const { design, pageFiles } = await params;
  return <DesignRoute pageFiles={pageFiles} relativeDirname={design} />;
}
