module.exports = function() {
    var client = './src/client/';
    var clientApp = client + 'app/';
    var clienTest = client + 'tests/';
    var report = './report/';
    var root = './';
    var server = './src/server/';
    var specRunnerFile = 'specs.html';
    var temp = './.tmp/';
    var wiredep = require('wiredep');
    var bowerFiles = wiredep({ devDependencies: true })['js'];
    var mochaFiles = './src/serverTests/'

    var config = {
        /**
         * Files paths
         */
        alljs: [
            './src/**/*.js',
            './*.js'
        ],
        build: './build/',
        client: clientApp,
        css: temp + 'styles.css',
        fonts: ['./bower_components/font-awesome/fonts/**/*.*',
            '/bower_components/MDBootstrap/font/**/*.*'
        ],
        html: client + '**/*.html',
        htmltemplates: clientApp + 'modules/**/*.html',
        images: clientApp + 'assets/images/**/*.*',
        index: clientApp + 'index.html',
        js: [
            clientApp + '**/*.js',
            '!' + client + '**/*.spec.js'
        ],
        scss: clientApp + 'assets/styles/styles.scss',
        report: report,
        root: root,
        server: server,
        serverFiles: [server + "**/*.js"],
        temp: temp,

        /**
         * Mocha Files
         */

        mochaFiles: mochaFiles,

        /**
         * template cache
         */
        templateCache: {
            file: 'templates.js',
            options: {
                module: 'ilovevideo',
                standAlone: false,
                root: 'app/'
            }
        },

        /**
         * browser sync
         */
        browserReloadDelay: 1000,

        /**
         * Bower and NPM locations
         */
        bower: {
            json: require('./bower.json'),
            directory: './bower_components/',
            ignorePath: '../..'
        },
        packages: [
            './package.json',
            './bower.json'
        ],

        /**
         * specs.html, our HTML spec runner
         */
        specRunner: client + specRunnerFile,
        specRunnerFile: specRunnerFile,
        testlibraries: [
            'node_modules/mocha/mocha.js',
            'node_modules/chai/chai.js',
            'node_modules/mocha-clean/index.js',
            'node_modules/sinon-chai/lib/sinon-chai.js'
        ],
        specs: [clienTest + '**/*.spec.js'],

        /**
         * Karma and testing settings
         */
        specHelpers: [client + 'test-helpers/*.js'],
        serverIntegrationSpecs: [client + 'tests/server-integration/**/*.spec.js'],

        /**
         * Node settings
         */
        defaultPort: 7203,
        nodeServer: './src/server/app.js'

    };

    config.getWiredepDefaultOptions = function() {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        };
        return options;
    };

    config.karma = getKarmaOptions();

    return config;

    ////////////////

    function getKarmaOptions() {
        bowerFiles[5] = '!bower_components/MDBootstrap/js/mdb.min.js';
        var options = {
            files: [].concat(
                bowerFiles,
                config.specHelpers,
                clientApp + '**/*.js',
                config.specs,
                temp + config.templateCache.file,
                config.serverIntegrationSpecs
            ),
            exclude: [],
            coverage: {
                dir: report + 'coverage',
                reporters: [
                    { type: 'html', subdir: 'report-html' },
                    { type: 'lcov', subdir: 'report-lcov' },
                    { type: 'text-summary' }
                ]
            },
            preprocessors: {}
        };
        options.preprocessors[clienTest + '**/!(*.spec)+(.js)'] = ['coverage'];
        return options;
    }
};
