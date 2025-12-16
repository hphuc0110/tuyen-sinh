// Import all blog post content files as raw strings
// This ensures they're bundled in production

import post1Content from "./hoc-bong-ai-toan-dan.mdx?raw";
import post2Content from "./ky-su-toan-nang.mdx?raw";
import post3Content from "./nghi-quyet-57-nq-tw.mdx?raw";
import post4Content from "./chung-chi-nvidia.mdx?raw";
import post5Content from "./tuyen-dung-nvidia.mdx?raw";
import post6Content from "./thuc-tap-ai.mdx?raw";

export const BLOG_CONTENT: Record<string, string> = {
  "hoc-bong-ai-toan-dan.mdx": post1Content,
  "ky-su-toan-nang.mdx": post2Content,
  "nghi-quyet-57-nq-tw.mdx": post3Content,
  "chung-chi-nvidia.mdx": post4Content,
  "tuyen-dung-nvidia.mdx": post5Content,
  "thuc-tap-ai.mdx": post6Content,
};
