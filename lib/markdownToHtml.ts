import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";

export default async function markdownToHtml(markdown: any) {
  const result = await remark().use(html).use(remarkGfm).process(markdown);
  return result.toString();
}
