// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');

// Create EC2 service object
ec2 = new AWS.EC2({apiVersion: '2016-11-15'});

var params = {
  CidrBlock: "10.0.0.0/16"
};

ec2.createVpc(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
    /* Example response from AWS API:
    data = {
        Vpc: {
        CidrBlock: "10.0.0.0/16",
        DhcpOptionsId: "dopt-7a8b9c2d",
        InstanceTenancy: "default",
        State: "pending",
        VpcId: "vpc-a01106c2"
        }
    }
    */
});