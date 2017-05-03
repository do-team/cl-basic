// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');

// Create EC2 service object
ec2 = new AWS.EC2({apiVersion: '2016-11-15'});

var params = {
    CidrBlock: "10.0.1.0/24",
    VpcId: "vpc-a01106c2"
};

ec2.createSubnet(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
    /* Example response from AWS API:
    data = {
        Subnet: {
        AvailabilityZone: "us-west-2c",
        AvailableIpAddressCount: 251,
        CidrBlock: "10.0.1.0/24",
        State: "pending",
        SubnetId: "subnet-9d4a7b6c",
        VpcId: "vpc-a01106c2"
        }
    }
    */
});