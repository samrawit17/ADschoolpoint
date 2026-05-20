const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Remove imports
content = content.replace(/import Solutions from "\.\/pages\/Solutions";\n/g, '');
content = content.replace(/import Careers from "\.\/pages\/Careers";\n/g, '');
content = content.replace(/import Portfolio from "\.\/pages\/Portfolio";\n/g, '');
content = content.replace(/import ApplicationDevelopment from "\.\/pages\/services\/ApplicationDevelopment";\n/g, '');
content = content.replace(/import WebsiteDevelopment from "\.\/pages\/services\/WebsiteDevelopment";\n/g, '');
content = content.replace(/import SecuritySolutions from "\.\/pages\/services\/SecuritySolutions";\n/g, '');
content = content.replace(/import AIIntegration from "\.\/pages\/services\/AIIntegration";\n/g, '');
content = content.replace(/import DigitalMarketing from "\.\/pages\/services\/DigitalMarketing";\n/g, '');
content = content.replace(/import AutomationCloudDevOps from "\.\/pages\/services\/AutomationCloudDevOps";\n/g, '');

// Remove routes
content = content.replace(/<Route path="\/solutions" element={<Solutions \/>} \/>\n\s*/g, '');
content = content.replace(/<Route path="\/careers" element={<Careers \/>} \/>\n\s*/g, '');
content = content.replace(/<Route path="\/portfolio" element={<Portfolio \/>} \/>\n\s*/g, '');
content = content.replace(/<Route path="\/services\/application-development" element={<ApplicationDevelopment \/>} \/>\n\s*/g, '');
content = content.replace(/<Route path="\/services\/website-development" element={<WebsiteDevelopment \/>} \/>\n\s*/g, '');
content = content.replace(/<Route path="\/services\/security-solutions" element={<SecuritySolutions \/>} \/>\n\s*/g, '');
content = content.replace(/<Route path="\/services\/ai-integration" element={<AIIntegration \/>} \/>\n\s*/g, '');
content = content.replace(/<Route path="\/services\/digital-marketing" element={<DigitalMarketing \/>} \/>\n\s*/g, '');
content = content.replace(/<Route path="\/services\/automation-cloud-devops" element={<AutomationCloudDevOps \/>} \/>\n\s*/g, '');

fs.writeFileSync('src/App.tsx', content, 'utf8');
console.log('App.tsx patched');
