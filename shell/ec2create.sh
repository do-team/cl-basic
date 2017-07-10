#!/usr/bin/env bash
aws ec2 run-instances --image-id ami-xxxxxxxx --count 1 --instance-type t2.micro --key-name xxxxx.pem --security-group-ids sg-xxxxxxxx --subnet-id subnet-xxxxxxxx
