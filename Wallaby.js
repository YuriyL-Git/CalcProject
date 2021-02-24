module.exports = function () {
    return {
        files: [
            "src/*.js",
            //instrument: false - not to check files, good for speed
            {"pattern": "test/lib/chai.js", "instrument": false}
        ],

        tests: [
            "test/*Tests.js"
        ],
        testFramework: "mocha",
        "env": {
            "kind": "chrome"
        }

        // env: {
        //     type: 'node'
        // },
        // loose: true

        // for node.js tests you need to set env property as well
        // https://wallabyjs.com/docs/integration/node.html
    };
};