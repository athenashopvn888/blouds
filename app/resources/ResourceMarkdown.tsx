import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./resources.module.css";

function renderInline(markdown: string): ReactNode[] {
  const tokens = markdown.split(/(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g);
  return tokens.filter(Boolean).map((token, index) => {
    const strong = token.match(/^\*\*(.+)\*\*$/);
    if (strong) return <strong key={index}>{strong[1]}</strong>;
    const emphasis = token.match(/^\*(.+)\*$/);
    if (emphasis) return <em key={index}>{emphasis[1]}</em>;
    const link = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const href = link[2];
      if (href.startsWith("/")) {
        return (
          <Link key={index} href={href}>
            {link[1]}
          </Link>
        );
      }
      return (
        <a key={index} href={href}>
          {link[1]}
        </a>
      );
    }
    return token;
  });
}

export default function ResourceMarkdown({ markdown }: { markdown: string }) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const blocks: ReactNode[] = [];
  let paragraph: string[] = [];
  let bullets: string[] = [];
  let ordered: { n: number; text: string }[] = [];

  const flushParagraph = () => {
    if (!paragraph.length) return;
    blocks.push(<p key={`p-${blocks.length}`}>{renderInline(paragraph.join(" "))}</p>);
    paragraph = [];
  };
  const flushBullets = () => {
    if (!bullets.length) return;
    blocks.push(
      <ul key={`ul-${blocks.length}`}>
        {bullets.map((bullet, index) => (
          <li key={index}>{renderInline(bullet)}</li>
        ))}
      </ul>,
    );
    bullets = [];
  };
  const flushOrdered = () => {
    if (!ordered.length) return;
    blocks.push(
      <ol key={`ol-${blocks.length}`}>
        {ordered.map((item) => (
          <li key={`${item.n}-${item.text}`} value={item.n}>
            {renderInline(item.text)}
          </li>
        ))}
      </ol>,
    );
    ordered = [];
  };
  const flushAll = () => {
    flushParagraph();
    flushBullets();
    flushOrdered();
  };

  lines.forEach((rawLine) => {
    const line = rawLine.trim();
    if (!line) {
      flushAll();
      return;
    }
    if (line.startsWith("# ")) return;
    if (line.startsWith("## ")) {
      flushAll();
      blocks.push(<h2 key={`h2-${blocks.length}`}>{renderInline(line.slice(3))}</h2>);
      return;
    }
    if (line.startsWith("### ")) {
      flushAll();
      blocks.push(<h3 key={`h3-${blocks.length}`}>{renderInline(line.slice(4))}</h3>);
      return;
    }
    if (line.startsWith("Last checked:")) {
      flushAll();
      blocks.push(<p key={`p-${blocks.length}`}>{line}</p>);
      return;
    }
    const orderedMatch = line.match(/^(\d+)\.\s+(.*)$/);
    if (orderedMatch) {
      flushParagraph();
      flushBullets();
      ordered.push({ n: Number(orderedMatch[1]), text: orderedMatch[2] });
      return;
    }
    if (line.startsWith("- ")) {
      flushParagraph();
      flushOrdered();
      bullets.push(line.slice(2));
      return;
    }
    flushBullets();
    flushOrdered();
    paragraph.push(line);
  });
  flushAll();

  return <div className={styles.markdownBody}>{blocks}</div>;
}
