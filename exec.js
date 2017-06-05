var fs = require('fs-extra')
var shell = require('shelljs')
var opn = require('opn')
var colors = require('colors')
var projects = fs.readFileSync('./file.txt').toString().split(/\r?\n/)

const template = function(project) {
  return `<!DOCTYPE html>
            <html lang="en">
              <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>${project}</title>
              </head>
              <body>
                <h1>${project}</h1>
              </body>
            </html>
            `
}

shell.rm('-rf', './projects')
shell.mkdir('./projects')

projects.forEach(project => {
  shell.mkdir(`./projects/${project}`)
  fs.outputFileSync(`./projects/${project}/index.html`, template(project))
  console.log('------------------------------'.white)
  console.log(project.yellow)
  opn(`./projects/${project}/index.html`)
})
