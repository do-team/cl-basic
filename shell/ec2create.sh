#!/usr/bin/env bash
aws ec2 run-instances --image-id ami-xxxxxxxx --count 1 --instance-type t1.micro --key-name rm002.pem --security-group-ids sg-xxxxxxxx --subnet-id subnet-xxxxxxxx