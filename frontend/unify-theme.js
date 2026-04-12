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

walk(path.join(__dirname, 'src/components'), function(err, results) {
  if (err) throw err;
  
  const cssFiles = results.filter(f => f.endsWith('.css'));
  cssFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    // Purge white/grey flat backgrounds indicating legacy light mode
    content = content.replace(/background:\s*white;?/gi, '/* background purged */');
    content = content.replace(/background-color:\s*white;?/gi, '/* background purged */');
    content = content.replace(/background:\s*#fff(?:fff)?;?/gi, '/* background purged */');
    content = content.replace(/background-color:\s*#fff(?:fff)?;?/gi, '/* background purged */');
    content = content.replace(/background:\s*#f8f9fa;?/gi, '/* background purged */');
    content = content.replace(/background:\s*#f[045]f[045]f[045];?/gi, '/* background purged */');
    
    // Convert dark text #333 and #666 to use text CSS variables indicating dark mode inheritance
    content = content.replace(/color:\s*#333;?/gi, 'color: var(--text-primary);');
    content = content.replace(/color:\s*#666;?/gi, 'color: var(--text-secondary);');
    content = content.replace(/color:\s*#555;?/gi, 'color: var(--text-secondary);');
    
    // Remove box shadows that clash with glass UI
    content = content.replace(/box-shadow:[^;}]+;?/gi, '/* shadow purged */');
    
    if (content !== original) {
      fs.writeFileSync(file, content, 'utf8');
      console.log('Updated', file);
    }
  });
});
