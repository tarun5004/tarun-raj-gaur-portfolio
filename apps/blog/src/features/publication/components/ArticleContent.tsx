import type { ContentBlock } from '@/features/publication/data/content';

export function ArticleContent({ blocks }: { blocks: ContentBlock[] }) {
  return <div className="article-content">{blocks.map((block, index) => {
    if (block.type === 'image') return <figure key={`${block.type}-${index}`} className="article-figure"><img src={block.url} alt={block.alt} /><figcaption>{block.caption}</figcaption></figure>;
    if (block.type === 'quote') return <blockquote key={`${block.type}-${index}`}>{block.text}</blockquote>;
    if (block.type === 'code') return <div className="article-code" key={`${block.type}-${index}`}><span>{block.language}</span><pre>{block.code}</pre></div>;
    return <p key={`${block.type}-${index}`}>{block.text}</p>;
  })}</div>;
}