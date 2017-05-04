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
        Values: ['testrabbit']
    }]
};

exports.handler = (event, context, callback) => {

    ec2.describeInstances(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else console.log(data); // successful response
        var allIds = [];
        data.Reservations.forEach(function(reservation){
            reservation.Instances.forEach(function(instance) {
                allIds.push(instance.InstanceId);
                console.log('I am about to start this instance for you:' + instance.InstanceId);
            });
        });


        var params = {
            InstanceIds: allIds, // Third parameter of running this script is instance id
            DryRun: false
        };


        ec2.startInstances(params, function(err, data) {
                    if (err) {
                        console.log("Error", err);
                    } else if (data) {
                        console.log("Success", data.StartingInstances);
                    }
                });


    });

};