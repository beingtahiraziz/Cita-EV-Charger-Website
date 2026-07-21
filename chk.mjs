import { transformSync } from 'esbuild';
import fs from 'fs';
const files = [
 'src/components/ui/HeroSlideshow.tsx','src/components/ui/Carousel.tsx','src/components/ui/Lightbox.tsx',
 'src/components/products/ProductDetail.tsx','src/data/products.ts',
 'src/app/products/smart-dc-eco/page.tsx','src/app/products/smart-dc-pro/page.tsx',
 'src/app/page.tsx','src/app/partner/page.tsx','src/app/about/page.tsx',
 'src/app/contact/page.tsx','src/app/products/page.tsx','src/app/software/page.tsx',
 'src/app/industries/page.tsx','src/app/projects/page.tsx','src/app/downloads/page.tsx',
 'src/app/blog/page.tsx','src/app/certifications/page.tsx','src/components/layout/Header.tsx'
];
let fail=0;
for (const f of files){
  try{ transformSync(fs.readFileSync(f,'utf8'),{loader:'tsx',jsx:'automatic'}); }
  catch(e){ fail++; console.log('### '+f); (e.errors||[]).slice(0,4).forEach(x=>console.log('  '+x.text+' @'+(x.location?x.location.line:'?'))); }
}
console.log(fail? 'SYNTAX ERRORS='+fail : 'ALL '+files.length+' FILES OK');
