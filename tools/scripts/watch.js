const watch = require('node-watch');
const cp = require('child_process');
const tk = require('tree-kill');

let changed = true;

watch('libs/af/shared', { recursive: true }, function(_evt, _name) {
  changed = true;
});

watch('apps', { recursive: true }, function(_evt, _name) {
  changed = true;
});

function run() {
  if (changed) {
    changed = false;
    // cp.execSync('nx run-many --target=build --projects=af-shared-sql-in-memory,af-shared-system-metadata-main,af-shared-system-auth-main,af-shared-projects-project-entity-main --parallel --maxParallel=8 --with-deps', {
    cp.execSync('nx build  apr-af-example-api --with-deps --parallel --maxParallel=8', {
      stdio: [0, 1, 2],
      env: { ...process.env, FORCE_COLORS: 'true' }
    });
  }
  setTimeout(() => run(), 1000);
}

process.on('exit', s => {
  tk(s);
});

run();
console.log('I am watching shared folder');
