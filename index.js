var LambdaForwarder = require("aws-lambda-ses-forwarder");

exports.handler = function(event, context, callback) {
    // See aws-lambda-ses-forwarder/index.js for all options.
    var overrides = {
        config: {
            fromEmail: "support@sokkin.jp",
            emailBucket: "sokkin-email",
            emailKeyPrefix: "support/",
            forwardMapping: {
                "support@sokkin.jp": [
                    "zqkyf6ze@inbound.intercom-mail.com"
                ]
            }
        }
    };
    LambdaForwarder.handler(event, context, callback, overrides);
};