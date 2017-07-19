/* globals Package */

Package.describe({
  name: 'hacknlove:semantic-input-binary',
  version: '0.2.0',
  summary: 'semantic button, for meteor, that loads a binary file from the filesystem and launch some events',
  git: 'https://github.com/hacknlove/meteor-semantic-input-binary',
  documentation: 'README.md'
})

Package.onUse(function (api) {
  api.versionsFrom('1.4')
  api.use('ecmascript')
  api.use('templating', 'client')
  api.use('semantic:ui@2.0.0', 'client', {weak: true})
  api.addFiles('button.html', 'client')
  api.addFiles('button.js', 'client')
})
