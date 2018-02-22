const typestyle = require('typestyle');
// const Theme = require('../lib').Theme;

// const theme = new Theme({debug: false});
// theme.withGeneric();
const rule1 = require('../lib/base/generic').rule1;
rule1({
  bodyBackgroundColor: 'red',
  bodyRendering: 'optimizeLegibility',
  bodySize: '12px',
});

console.log(typestyle.getStyles());
