import { copyFile, readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const outDir = "out";
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://000ilya000.github.io/portfolio").replace(
  /\/$/,
  "",
);

await copyFile(join(outDir, "opengraph-image"), join(outDir, "og.png"));
await copyFile(join(outDir, "twitter-image"), join(outDir, "twitter.png"));
await copyFile(join(outDir, "apple-icon"), join(outDir, "apple-icon.png"));

const ogImage = `${siteUrl}/og.png`;
const twitterImage = `${siteUrl}/twitter.png`;
const appleIcon = `${siteUrl}/apple-icon.png`;

function patch(html) {
  return html
    .replace(/https?:\/\/[^"]+\/opengraph-image\?[^"]+/g, ogImage)
    .replace(/https?:\/\/[^"]+\/twitter-image\?[^"]+/g, twitterImage)
    .replace(/href="\/apple-icon\?[^"]+"/g, `href="${appleIcon}"`);
}

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(path);
      continue;
    }
    if (!entry.name.endsWith(".html")) {
      continue;
    }
    const html = await readFile(path, "utf8");
    const next = patch(html);
    if (next !== html) {
      await writeFile(path, next);
    }
  }
}

await walk(outDir);
console.log(`Social meta pointed to ${ogImage}`);
