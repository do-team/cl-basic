var AWS = require('aws-sdk');
console.log('Loading function');

// Create EC2 service object
ec2 = new AWS.EC2({
    apiVersion: '2016-11-15'
});

var params = {
    DryRun: false,
    Filters: [{
        Name: 'tag:Service',
        Values: ['CL-ClouderaCluster']
    }]
};

exports.handler = (event, context, callback) => {

    ec2.describeInstances(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else console.log(data); // successful response
        var allIds = [];
        data.Reservations[0].Instances.forEach(function(instance) {
            allIds = allIds + instance.InstanceId;
        console.log('I am about to stop this instance for you:' + instance.InstanceId);
        });

        var params = {
            InstanceIds: allIds, // Third parameter of running this script is instance id
            DryRun: true
        };

/*
        ec2.stopInstances(params, function(err, data) {
            if (err && err.code === 'DryRunOperation') {
                params.DryRun = true;
                ec2.stopInstances(params, function(err, data) {
                    if (err) {
                        console.log("Error", err);
                    } else if (data) {
                        console.log("Success", data.StoppingInstances);
                    }
                });
            } else {
                console.log("You don't have permission to stop instances");
            }
        });

*/
    });

};