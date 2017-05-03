var AWS = require('aws-sdk');

// Create EC2 service object
var ec2 = new AWS.EC2({apiVersion: '2016-11-15'});

var params = {
  InstanceIds: ['STRING_VALUE','STRING_VALUE'],
  DryRun: true
};

ec2.terminateInstances(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});