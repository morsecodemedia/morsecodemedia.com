var requireDir = require('require-dir');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./__build/gulp/tasks', { recurse: true });

