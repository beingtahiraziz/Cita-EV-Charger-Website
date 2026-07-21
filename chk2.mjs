import { transformSync } from 'esbuild';
import fs from 'fs';
const files=['src/components/ui/Lightbox.tsx','src/components/ui/Carousel.tsx','src/components/layout/Header.tsx'];
let fail=0;
for(const f of files){try{transformSync(fs.readFileSync(f,'utf8'),{loader:'tsx',jsx:'automatic'});}catch(e){fail++;console.log('### '+f);(e.errors||[]).slice(0,4).forEach(x=>console.log('  '+x.text+' @'+(x.location?x.location.line:'?')));}}
console.log(fail?'ERRORS='+fail:'ALL OK');
