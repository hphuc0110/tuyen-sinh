import { readFileSync } from 'fs';
import { join } from 'path';

const blogPostDir = join(process.cwd(), 'components', 'blogPost');

export function loadMDXContent(filename: string): string {
  const filePath = join(blogPostDir, filename);
  return readFileSync(filePath, 'utf-8');
}

