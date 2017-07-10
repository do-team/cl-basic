# Samples of how to learn about existing instances
aws ec2 describe-instances
aws ec2 describe-instances | grep something
aws ec2 describe-instances --query 'Reservations[].Instances[].[Placement.AvailabilityZone, State.Name, InstanceId,InstanceType,Platform,Tags.Value,State.Code,Tags.Values]' --output table

