/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The namespace associated with the tag filter entry.
 */

export type AWSNamespace =
  | typeof API_GATEWAY
  | typeof APPLICATION_ELB
  | typeof APPRUNNER
  | typeof APPSTREAM
  | typeof APPSYNC
  | typeof ATHENA
  | typeof AUTO_SCALING
  | typeof BACKUP
  | typeof BEDROCK
  | typeof BILLING
  | typeof BUDGETING
  | typeof CERTIFICATEMANAGER
  | typeof CLOUDFRONT
  | typeof CLOUDHSM
  | typeof CLOUDSEARCH
  | typeof CLOUDWATCH_EVENTS
  | typeof CLOUDWATCH_LOGS
  | typeof CODEBUILD
  | typeof CODEWHISPERER
  | typeof COGNITO
  | typeof COLLECT_CUSTOM_METRICS
  | typeof CONFIG
  | typeof CONNECT
  | typeof CRAWL_ALARMS
  | typeof CUSTOM
  | typeof DIRECTCONNECT
  | typeof DMS
  | typeof DOCUMENTDB
  | typeof DYNAMODB
  | typeof DYNAMODBACCELERATOR
  | typeof EBS
  | typeof EC2
  | typeof EC2API
  | typeof EC2SPOT
  | typeof ECR
  | typeof ECS
  | typeof EFS
  | typeof ELASTICACHE
  | typeof ELASTICBEANSTALK
  | typeof ELASTICINFERENCE
  | typeof ELASTICTRANSCODER
  | typeof ELB
  | typeof EMR
  | typeof ES
  | typeof FIREHOSE
  | typeof FSX
  | typeof GAMELIFT
  | typeof GLOBALACCELERATOR
  | typeof GLUE
  | typeof INSPECTOR
  | typeof IOT
  | typeof KEYSPACES
  | typeof KINESIS
  | typeof KINESIS_ANALYTICS
  | typeof KMS
  | typeof LAMBDA
  | typeof LEX
  | typeof MEDIACONNECT
  | typeof MEDIACONVERT
  | typeof MEDIALIVE
  | typeof MEDIAPACKAGE
  | typeof MEDIASTORE
  | typeof MEDIATAILOR
  | typeof MEMORYDB
  | typeof ML
  | typeof MQ
  | typeof MSK
  | typeof MWAA
  | typeof NAT_GATEWAY
  | typeof NEPTUNE
  | typeof NETWORK_ELB
  | typeof NETWORKFIREWALL
  | typeof NETWORKMONITOR
  | typeof OPENSEARCHSERVERLESS
  | typeof OPSWORKS
  | typeof POLLY
  | typeof PRIVATELINKENDPOINTS
  | typeof PRIVATELINKSERVICES
  | typeof RDS
  | typeof RDSPROXY
  | typeof REDSHIFT
  | typeof REKOGNITION
  | typeof ROUTE53
  | typeof ROUTE53RESOLVER
  | typeof S3
  | typeof S3STORAGELENS
  | typeof SAGEMAKER
  | typeof SAGEMAKERENDPOINTS
  | typeof SAGEMAKERLABELINGJOBS
  | typeof SAGEMAKERMODELBUILDINGPIPELINE
  | typeof SAGEMAKERPROCESSINGJOBS
  | typeof SAGEMAKERTRAININGJOBS
  | typeof SAGEMAKERTRANSFORMJOBS
  | typeof SAGEMAKERWORKTEAM
  | typeof SERVICE_QUOTAS
  | typeof SES
  | typeof SHIELD
  | typeof SNS
  | typeof SQS
  | typeof STEP_FUNCTIONS
  | typeof STORAGE_GATEWAY
  | typeof SWF
  | typeof TEXTRACT
  | typeof TRANSITGATEWAY
  | typeof TRANSLATE
  | typeof TRUSTED_ADVISOR
  | typeof USAGE
  | typeof VPN
  | typeof WAF
  | typeof WAFV2
  | typeof WORKSPACES
  | typeof XRAY
  | UnparsedObject;
export const API_GATEWAY = "api_gateway";
export const APPLICATION_ELB = "application_elb";
export const APPRUNNER = "apprunner";
export const APPSTREAM = "appstream";
export const APPSYNC = "appsync";
export const ATHENA = "athena";
export const AUTO_SCALING = "auto_scaling";
export const BACKUP = "backup";
export const BEDROCK = "bedrock";
export const BILLING = "billing";
export const BUDGETING = "budgeting";
export const CERTIFICATEMANAGER = "certificatemanager";
export const CLOUDFRONT = "cloudfront";
export const CLOUDHSM = "cloudhsm";
export const CLOUDSEARCH = "cloudsearch";
export const CLOUDWATCH_EVENTS = "cloudwatch_events";
export const CLOUDWATCH_LOGS = "cloudwatch_logs";
export const CODEBUILD = "codebuild";
export const CODEWHISPERER = "codewhisperer";
export const COGNITO = "cognito";
export const COLLECT_CUSTOM_METRICS = "collect_custom_metrics";
export const CONFIG = "config";
export const CONNECT = "connect";
export const CRAWL_ALARMS = "crawl_alarms";
export const CUSTOM = "custom";
export const DIRECTCONNECT = "directconnect";
export const DMS = "dms";
export const DOCUMENTDB = "documentdb";
export const DYNAMODB = "dynamodb";
export const DYNAMODBACCELERATOR = "dynamodbaccelerator";
export const EBS = "ebs";
export const EC2 = "ec2";
export const EC2API = "ec2api";
export const EC2SPOT = "ec2spot";
export const ECR = "ecr";
export const ECS = "ecs";
export const EFS = "efs";
export const ELASTICACHE = "elasticache";
export const ELASTICBEANSTALK = "elasticbeanstalk";
export const ELASTICINFERENCE = "elasticinference";
export const ELASTICTRANSCODER = "elastictranscoder";
export const ELB = "elb";
export const EMR = "emr";
export const ES = "es";
export const FIREHOSE = "firehose";
export const FSX = "fsx";
export const GAMELIFT = "gamelift";
export const GLOBALACCELERATOR = "globalaccelerator";
export const GLUE = "glue";
export const INSPECTOR = "inspector";
export const IOT = "iot";
export const KEYSPACES = "keyspaces";
export const KINESIS = "kinesis";
export const KINESIS_ANALYTICS = "kinesis_analytics";
export const KMS = "kms";
export const LAMBDA = "lambda";
export const LEX = "lex";
export const MEDIACONNECT = "mediaconnect";
export const MEDIACONVERT = "mediaconvert";
export const MEDIALIVE = "medialive";
export const MEDIAPACKAGE = "mediapackage";
export const MEDIASTORE = "mediastore";
export const MEDIATAILOR = "mediatailor";
export const MEMORYDB = "memorydb";
export const ML = "ml";
export const MQ = "mq";
export const MSK = "msk";
export const MWAA = "mwaa";
export const NAT_GATEWAY = "nat_gateway";
export const NEPTUNE = "neptune";
export const NETWORK_ELB = "network_elb";
export const NETWORKFIREWALL = "networkfirewall";
export const NETWORKMONITOR = "networkmonitor";
export const OPENSEARCHSERVERLESS = "opensearchserverless";
export const OPSWORKS = "opsworks";
export const POLLY = "polly";
export const PRIVATELINKENDPOINTS = "privatelinkendpoints";
export const PRIVATELINKSERVICES = "privatelinkservices";
export const RDS = "rds";
export const RDSPROXY = "rdsproxy";
export const REDSHIFT = "redshift";
export const REKOGNITION = "rekognition";
export const ROUTE53 = "route53";
export const ROUTE53RESOLVER = "route53resolver";
export const S3 = "s3";
export const S3STORAGELENS = "s3storagelens";
export const SAGEMAKER = "sagemaker";
export const SAGEMAKERENDPOINTS = "sagemakerendpoints";
export const SAGEMAKERLABELINGJOBS = "sagemakerlabelingjobs";
export const SAGEMAKERMODELBUILDINGPIPELINE = "sagemakermodelbuildingpipeline";
export const SAGEMAKERPROCESSINGJOBS = "sagemakerprocessingjobs";
export const SAGEMAKERTRAININGJOBS = "sagemakertrainingjobs";
export const SAGEMAKERTRANSFORMJOBS = "sagemakertransformjobs";
export const SAGEMAKERWORKTEAM = "sagemakerworkteam";
export const SERVICE_QUOTAS = "service_quotas";
export const SES = "ses";
export const SHIELD = "shield";
export const SNS = "sns";
export const SQS = "sqs";
export const STEP_FUNCTIONS = "step_functions";
export const STORAGE_GATEWAY = "storage_gateway";
export const SWF = "swf";
export const TEXTRACT = "textract";
export const TRANSITGATEWAY = "transitgateway";
export const TRANSLATE = "translate";
export const TRUSTED_ADVISOR = "trusted_advisor";
export const USAGE = "usage";
export const VPN = "vpn";
export const WAF = "waf";
export const WAFV2 = "wafv2";
export const WORKSPACES = "workspaces";
export const XRAY = "xray";
