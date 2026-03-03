const fs = require('fs');
const path = require('path');

const files = [
    'app/about/page.tsx',
    'app/works/page.tsx',
    'app/services/page.tsx',
    'components/uitripled/contact-form-section-shadcnui.tsx',
    'components/services-banner-section.tsx',
    'components/faq-section.tsx',
    'components/header.tsx',
];

function convertToMonochrome(filePath) {
    const fullPath = path.join(__dirname, filePath);
    if (!fs.existsSync(fullPath)) return;

    let content = fs.readFileSync(fullPath, 'utf8');

    // Replace prominent colors with monochrome equivalents
    // Purple (#7a6af6) -> White
    content = content.replace(/#7a6af6/gi, '#ffffff');
    // Dark Purple (#6858e8) -> Light Gray (#e5e5e5)
    content = content.replace(/#6858e8/gi, '#e5e5e5');
    // RGB shadows (purple) -> rgb(255,255,255)
    content = content.replace(/122,106,246/g, '255,255,255');

    // About Page distinctive colors to white
    content = content.replace(/#38BDF8/gi, '#ffffff');
    content = content.replace(/#FACC15/gi, '#ffffff');
    content = content.replace(/#4ADE80/gi, '#ffffff');
    content = content.replace(/#F472B6/gi, '#ffffff');
    content = content.replace(/#F97316/gi, '#ffffff');

    // Fix buttons that end up with bg-white text-white
    content = content.replace(/bg-\[#ffffff\] text-white/gi, 'bg-white text-black');
    content = content.replace(/bg-white px-10 py-4 text-sm font-semibold text-white/g, 'bg-white px-10 py-4 text-sm font-semibold text-black');

    fs.writeFileSync(fullPath, content);
    console.log('Processed', filePath);
}

files.forEach(convertToMonochrome);
console.log('Complete');
