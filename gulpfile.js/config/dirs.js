module.exports = {
  'dist'   : 'dist',
  'build'  : 'build',
  'views'  : 'src/views',
  'static' : 'static',
  'styles' : 'src/styles',
  'scripts': 'src/scripts',

  // Required by `slush-phaser-plus` sub-generators.
  get states  () { return this.scripts + '/app/states'  },
  get objects () { return this.scripts + '/app/objects' },
  get plugins () { return this.scripts + '/app/plugins' }
};
