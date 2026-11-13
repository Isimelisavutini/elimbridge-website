// Static hosts (GitHub Pages and others) serve 404.html for unknown paths.
// Copying index.html there lets React Router handle /services, /about, etc.
import { copyFileSync } from 'node:fs';
copyFileSync('dist/index.html', 'dist/404.html');
console.log('Copied dist/index.html to dist/404.html');
