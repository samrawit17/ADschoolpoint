const fs = require('fs');
let content = fs.readFileSync('src/pages/Index.tsx', 'utf8');

// Remove imports for deleted components
content = content.replace(/import ServicesSection from "@\/components\/ServicesSection";\n/g, '');
content = content.replace(/import TechnologyStackSection from "@\/components\/TechnologyStackSection";\n/g, '');
content = content.replace(/import TechRadar from "@\/components\/TechRadar";\n/g, '');

// Remove standard SchoolPoint components from Index view to make way later for simple ones
content = content.replace(/<ServicesSection \/>\n\s*/g, '');
content = content.replace(/<TechnologyStackSection \/>\n\s*/g, '');
content = content.replace(/<TechRadar \/>\n\s*/g, '');

fs.writeFileSync('src/pages/Index.tsx', content, 'utf8');
console.log('Index.tsx patched');
