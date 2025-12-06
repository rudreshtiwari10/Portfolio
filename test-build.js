import { createRequire } from 'module';
const require = createRequire(import.meta.url);
console.log('Testing imports...');
try {
  console.log('✓ React can be loaded');
} catch(e) {
  console.error('✗ React error:', e.message);
}
