var dirs = require('./dirs');


module.exports = {
  'views': {
    get data      () { return dirs.views + '/data/*.json'     },
    get partials  () { return dirs.views + '/partials/*.hbs'  },
    get templates () { return dirs.views + '/templates/*.hbs' }
  },

  get styles  () { return dirs.styles  + '/*.less'  },
  get assets  () { return dirs.static  + '/**'      },
  get scripts () { return dirs.scripts + '/**/*.js' }
};
