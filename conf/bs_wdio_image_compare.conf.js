const { join } = require('path');

exports.config = {

    runner: 'local',
    
    hostname: 'hub.browserstack.com',
    port: 443,
    protocol: 'https',
    path: '/wd/hub',
    
    user: process.env.BROWSERSTACK_DEMO_USER,
    key: process.env.BROWSERSTACK_DEMO_KEY,
    
    specs: [
        './test/specs/image_compare.js'
    ],
    
    exclude: [
        // 'path/to/excluded/files'
    ],
    
    maxInstances: 10,
    
    capabilities: [{
        'os': 'Windows',
        'os_version': '10',
        'browser': 'Chrome',
        'browser_version': '81.0',
        'resolution': '1280x800',

        'project': 'WebdriverIO Samples',
        'build': 'Build v1'
    }],
    
    logLevel: 'info',

    bail: 0,

    baseUrl: 'http://localhost',

    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    services: ['browserstack', ['image-comparison', {
            baselineFolder: join(process.cwd(), './screenshots/baseLineImage'),
            formatImageName: '{tag}-{logName}-{width}x{height}',
            screenshotPath: join(process.cwd(), '.tmp/'),
            savePerInstance: true,
            autoSaveBaseline: true,
            blockOutStatusBar: true,
            blockOutToolBar: true,
            // NOTE: When you are testing a hybrid app please use this setting
            // isHybridApp: true,
            // Options for the tabbing image
            tabbableOptions:{
                circle:{
                    size: 18,
                    fontSize: 18,
                    // ...
                },
                line:{
                    color: '#ff221a', // hex-code or for example words like `red|black|green`
                    width: 3,
                },
            }
        }],
    ],
    
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    
    reporters: ['spec']
}
