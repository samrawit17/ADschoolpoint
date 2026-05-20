const fs = require('fs');

// Fix Header.tsx
let header = fs.readFileSync('src/components/Header.tsx', 'utf-8');
header = header.replace('className="flex items-center gap-2 group flex-shrink-0 relative z-10 w-[120px]"', 'className="flex items-center gap-2 group flex-shrink-0 relative z-10 flex-1 min-w-[140px]"');
header = header.replace('h-8 w-auto', 'h-7 md:h-8 w-auto object-contain');
header = header.replace('w-[120px]">', 'flex-1 justify-end min-w-[140px]">');
fs.writeFileSync('src/components/Header.tsx', header);

// Fix TrustSection.tsx
let trust = fs.readFileSync('src/components/TrustSection.tsx', 'utf-8');
trust = trust.replace(
  '{ name: "Hawassa University", logo: "https://www.hu.edu.et//images/huimages/logos/hwu%20logo.png" }',
  '{ name: "Hawassa University", logo: "https://upload.wikimedia.org/wikipedia/en/1/1d/Awasa_University.png" }'
);
trust = trust.replace(
  '{ name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svconst fs = require('fs');

6.
// Fix Header.tsx
let h"Cilet header = fs.psheader = header.replace('className="flex items-center gap-2 group ueheader = header.replace('h-8 w-auto', 'h-7 md:h-8 w-auto object-contain');
header = header.replace('w-[120px]">', 'flex-1 justify-end min-w-[140px]">');
fs.writeFileSync('src/compo',
  '{ name: "IBM", lheader = header.replace('w-[120px]">', 'flex-1 justify-end min-w-[140px]"svfs.writeFileSync('src/components/Header.tsx', header);

// Fix TrustSection.tr
// Fix TrustSection.tsx
let trust = fs.readFileSync(d:hlet trust = fs.readFileFtrust = trust.rmponents/TrustSection.tsx', trust);

console.log("Fixed!");
