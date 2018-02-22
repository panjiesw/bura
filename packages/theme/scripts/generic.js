const typestyle = require('typestyle');
const Theme = require('../lib').Theme;

const theme = new Theme({debug: false}).withGeneric();
console.log(typestyle.getStyles());
