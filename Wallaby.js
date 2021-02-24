module.exports = function (wallaby) {
    return {
        files: [
            {pattern: 'node_modules/chai/chai.js', instrument: false},
            'src/*.js'
        ],

        tests: [
            'test/*Tests.js'
        ],
        env: {
            type: 'node'
        },
        testFramework: "mocha", //may cause error!
        // loose: true

        // for node.js tests you need to set env property as well
        // https://wallabyjs.com/docs/integration/node.html
    };
};