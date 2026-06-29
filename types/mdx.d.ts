declare module "*.mdx?raw" {
  const content: string;
  export default content;
}

declare module "*.mdx" {
  const content: string;
  export default content;
}

