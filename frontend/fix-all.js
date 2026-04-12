const fs = require('fs');
const path = require('path');

const walk = function(dir, done) {
  let results = [];
  fs.readdir(dir, function(err, list) {
    if (err) return done(err);
    let pending = list.length;
    if (!pending) return done(null, results);
    list.forEach(function(file) {
      file = path.resolve(dir, file);
      fs.stat(file, function(err, stat) {
        if (stat && stat.isDirectory()) {
          walk(file, function(err, res) {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          results.push(file);
          if (!--pending) done(null, results);
        }
      });
    });
  });
};

walk(path.join(__dirname, 'src'), function(err, results) {
  if (err) throw err;
  
  const cssFiles = results.filter(f => f.endsWith('.css'));
  cssFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    // Most aggressive purging for light colors across pages AND components
    // This matches background: #f... or #e... or white
    content = content.replace(/background(?:-color)?:\s*#[fF][a-fA-F0-9]{2,5};?/g, '/* background purged */');
    content = content.replace(/background(?:-color)?:\s*#[eE][a-fA-F0-9]{2,5};?/g, '/* background purged */');
    content = content.replace(/background(?:-color)?:\s*white;?/g, '/* background purged */');
    
    // Aggressive purging of black/grey text on cards
    content = content.replace(/color:\s*#333(?:333)?;?/g, 'color: var(--text-primary);');
    content = content.replace(/color:\s*#495057;?/g, 'color: var(--text-primary);');
    content = content.replace(/color:\s*#666(?:666)?;?/g, 'color: var(--text-secondary);');
    content = content.replace(/color:\s*#2c3e50;?/g, 'color: var(--text-primary);');
    
    // Purge light borders
    content = content.replace(/border-bottom:\s*2px solid #[eE][a-fA-F0-9]{5};?/g, 'border-bottom: 2px solid rgba(255,255,255,0.1);');
    content = content.replace(/border(?:-bottom)?:\s*1px solid #[eE][a-fA-F0-9]{5};?/g, '/* border purged */');
    
    if (content !== original) {
      fs.writeFileSync(file, content, 'utf8');
      console.log('Deep Fixed', file);
    }
  });
});
