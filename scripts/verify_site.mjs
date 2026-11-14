import fs from 'fs';
import path from 'path';

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));
const imagesOnDisk = new Set(fs.readdirSync('assets/img'));

let errors = [];
let allLinks = new Set();
let allImgSrcs = new Set();

for (const f of htmlFiles) {
  const content = fs.readFileSync(f, 'utf8');
  
  // Check images
  const imgMatches = content.matchAll(/src=["']assets\/img\/([^"']+)["']/g);
  for (const m of imgMatches) {
    allImgSrcs.add(m[1]);
    if (!imagesOnDisk.has(m[1])) {
      errors.push(`File ${f} references missing image assets/img/${m[1]}`);
    }
  }

  // Check internal html links
  const hrefMatches = content.matchAll(/href=["']([^"'#:]+)(\#[^"']*)?["']/g);
  for (const m of hrefMatches) {
    const target = m[1];
    if (target.endsWith('.html')) {
      allLinks.add(target);
      if (!fs.existsSync(target)) {
        errors.push(`File ${f} references missing page ${target}`);
      }
    }
  }
}

// Check CSS background images
if (fs.existsSync('assets/css/style.css')) {
  const css = fs.readFileSync('assets/css/style.css', 'utf8');
  const cssImgMatches = css.matchAll(/url\(['"]?\.\.\/img\/([^'")]+)['"]?\)/g);
  for (const m of cssImgMatches) {
    allImgSrcs.add(m[1]);
    if (!imagesOnDisk.has(m[1])) {
      errors.push(`CSS references missing image assets/img/${m[1]}`);
    }
  }
}

console.log(`Tested ${htmlFiles.length} HTML files and CSS.`);
console.log(`Total unique images referenced: ${allImgSrcs.size}`);
console.log(`Unique pages linked: ${allLinks.size}`);
if (errors.length > 0) {
  console.log('Errors found:');
  errors.forEach(e => console.log(' - ' + e));
  process.exit(1);
} else {
  console.log('SUCCESS: All internal links, HTML images, and CSS background assets verified with 100% integrity!\n');
}

console.log('Nav Link Checks:');
for (const f of htmlFiles) {
  const content = fs.readFileSync(f, 'utf8');
  const hasInsetos = content.includes('dedetizacao-de-insetos.html');
  const hasRatos = content.includes('dedetizacao-de-ratos.html');
  const hasContato = content.includes('contato.html');
  console.log(`- ${f}: Insetos: ${hasInsetos} | Ratos: ${hasRatos} | Contato: ${hasContato}`);
}
