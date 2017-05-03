// Full description: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#runInstances-property

var AWS = require('aws-sdk');

// Create EC2 service object
var ec2 = new AWS.EC2({apiVersion: '2016-11-15'});

var params = {
   ImageId: 'ami-10fd7020',
   InstanceType: 't1.micro',
   MinCount: 1,
   MaxCount: 1,
   SecurityGroups: ['STRING_VALUE','STRING_VALUE'],
   SubnetId: 'STRING_VALUE'
};

// Create the instance
ec2.runInstances(params, function(err, data) {
   if (err) {
      console.log("Could not create instance", err);
      return;
   }
   var instanceId = data.Instances[0].InstanceId;
   console.log("Created instance", instanceId);
   // Add tags to the instance
   params = {Resources: [instanceId], Tags: [
      {
         Key: 'Name',
         Value: 'SDK Sample'
      },
      {
         Key: 'Creator',
         Value: 'rm002'
      }
   ]};
   ec2.createTags(params, function(err) {
      console.log("Tagging instance", err ? "failure" : "success");
      // CreateTags does not return any value, if succefull, thus there is only error handler.
   });
});