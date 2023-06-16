const html = require('../tasks/html')

const fs = require('fs'),
      path = './gulp/tasks',
      taskPath = fs.readdirSync(path).map(file => file = path + '/' + file)
module.exports = taskPath