#!/usr/bin/env bash
aws ec2 create-tags --resources i-xxxxxxxx --tags Key=Name,Value=MyInstance Key=Creator,Value=rm002 Key=Owner,Value=rm002 Key=CostCenter,Value=Ledger