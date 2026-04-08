const fs = require('fs');
const path = require('path');

function getFilesRecursively(dir) {
  const files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getFilesRecursively(fullPath));
    } else if (/\.(ts|tsx)$/.test(entry.name)) {
      files.push(fullPath);
    }
  }
  return files;
}

const files = getFilesRecursively(path.join(process.cwd(), 'src'));
function escapeRegExp(string) { return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  const replaceClass = (target, replacement) => {
    const regex = new RegExp('(?<![a-zA-Z0-9\\-:])' + escapeRegExp(target) + '(?![a-zA-Z0-9\\-])', 'g');
    content = content.replace(regex, replacement);
  };

  replaceClass('bg-navy', 'bg-navy dark:bg-[#0a0f1a]');

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log('Updated bg-navy in ' + file);
  }
});
