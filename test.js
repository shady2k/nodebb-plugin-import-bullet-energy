var fs = require('fs-extra');

require('./index').testrun({
    dbhost: 'localhost',
    dbport: 3306,
    dbname: 'database_name',
    dbuser: 'database_user',
    dbpass: 'database_password',

    tablePrefix: 'dle_'
}, function(err, results) {
    //fs.writeFileSync('./results.json', JSON.stringify(results, undefined, 2));
});
