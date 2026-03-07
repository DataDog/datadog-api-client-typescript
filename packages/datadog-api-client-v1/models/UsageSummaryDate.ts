/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UsageSummaryDateOrg } from "./UsageSummaryDateOrg";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response with hourly report of all data billed by Datadog all organizations.
 */
export class UsageSummaryDate {
  /**
   * Shows the 99th percentile of all agent hosts over all hours in the current date for all organizations.
   */
  "agentHostTop99p"?: number;
  /**
   * Shows the 99th percentile of all Azure app services using APM over all hours in the current date all organizations.
   */
  "apmAzureAppServiceHostTop99p"?: number;
  /**
   * Shows the 99th percentile of all APM DevSecOps hosts over all hours in the current date for the given org.
   */
  "apmDevsecopsHostTop99p"?: number;
  /**
   * Shows the 99th percentile of all distinct standalone Enterprise hosts over all hours in the current date for all organizations.
   */
  "apmEnterpriseStandaloneHostsTop99p"?: number;
  /**
   * Shows the average of all APM ECS Fargate tasks over all hours in the current date for all organizations.
   */
  "apmFargateCountAvg"?: number;
  /**
   * Shows the 99th percentile of all distinct APM hosts over all hours in the current date for all organizations.
   */
  "apmHostTop99p"?: number;
  /**
   * Shows the 99th percentile of all distinct standalone Pro hosts over all hours in the current date for all organizations.
   */
  "apmProStandaloneHostsTop99p"?: number;
  /**
   * Shows the average of all Application Security Monitoring ECS Fargate tasks over all hours in the current date for all organizations.
   */
  "appsecFargateCountAvg"?: number;
  /**
   * Shows the sum of all Application Security Monitoring Serverless invocations over all hours in the current date for all organizations.
   */
  "asmServerlessSum"?: number;
  /**
   * Shows the sum of audit logs lines indexed over all hours in the current date for all organizations (To be deprecated on October 1st, 2024).
   */
  "auditLogsLinesIndexedSum"?: number;
  /**
   * Shows the number of organizations that had Audit Trail enabled in the current date.
   */
  "auditTrailEnabledHwm"?: number;
  /**
   * The average total count for Fargate Container Profiler over all hours in the current date for all organizations.
   */
  "avgProfiledFargateTasks"?: number;
  /**
   * Shows the 99th percentile of all AWS hosts over all hours in the current date for all organizations.
   */
  "awsHostTop99p"?: number;
  /**
   * Shows the average of the number of functions that executed 1 or more times each hour in the current date for all organizations.
   */
  "awsLambdaFuncCount"?: number;
  /**
   * Shows the sum of all AWS Lambda invocations over all hours in the current date for all organizations.
   */
  "awsLambdaInvocationsSum"?: number;
  /**
   * Shows the 99th percentile of all Azure app services over all hours in the current date for all organizations.
   */
  "azureAppServiceTop99p"?: number;
  /**
   * Shows the sum of all log bytes ingested over all hours in the current date for all organizations.
   */
  "billableIngestedBytesSum"?: number;
  /**
   * Shows the sum of all Bits AI Investigations over all hours in the current date for all organizations.
   */
  "bitsAiInvestigationsSum"?: number;
  /**
   * Shows the sum of all browser lite sessions over all hours in the current date for all organizations (To be deprecated on October 1st, 2024).
   */
  "browserRumLiteSessionCountSum"?: number;
  /**
   * Shows the sum of all browser replay sessions over all hours in the current date for all organizations (To be deprecated on October 1st, 2024).
   */
  "browserRumReplaySessionCountSum"?: number;
  /**
   * Shows the sum of all browser RUM units over all hours in the current date for all organizations (To be deprecated on October 1st, 2024).
   */
  "browserRumUnitsSum"?: number;
  /**
   * Shows the last value of the amount of cloud spend monitored for Enterprise over all hours in the current date for all organizations.
   */
  "ccmSpendMonitoredEntLast"?: number;
  /**
   * Shows the last value of the amount of cloud spend monitored for Pro over all hours in the current date for all organizations.
   */
  "ccmSpendMonitoredProLast"?: number;
  /**
   * Shows the sum of all CI pipeline indexed spans over all hours in the current month for all organizations.
   */
  "ciPipelineIndexedSpansSum"?: number;
  /**
   * Shows the sum of all CI test indexed spans over all hours in the current month for all organizations.
   */
  "ciTestIndexedSpansSum"?: number;
  /**
   * Shows the high-water mark of all CI visibility intelligent test runner committers over all hours in the current month for all organizations.
   */
  "ciVisibilityItrCommittersHwm"?: number;
  /**
   * Shows the high-water mark of all CI visibility pipeline committers over all hours in the current month for all organizations.
   */
  "ciVisibilityPipelineCommittersHwm"?: number;
  /**
   * Shows the high-water mark of all CI visibility test committers over all hours in the current month for all organizations.
   */
  "ciVisibilityTestCommittersHwm"?: number;
  /**
   * Host count average of Cloud Cost Management for AWS for the given date and given organization.
   */
  "cloudCostManagementAwsHostCountAvg"?: number;
  /**
   * Host count average of Cloud Cost Management for Azure for the given date and given organization.
   */
  "cloudCostManagementAzureHostCountAvg"?: number;
  /**
   * Host count average of Cloud Cost Management for GCP for the given date and given organization.
   */
  "cloudCostManagementGcpHostCountAvg"?: number;
  /**
   * Host count average of Cloud Cost Management for all cloud providers for the given date and given organization.
   */
  "cloudCostManagementHostCountAvg"?: number;
  /**
   * Average host count for Cloud Cost Management on OCI for the given date and organization.
   */
  "cloudCostManagementOciHostCountAvg"?: number;
  /**
   * Shows the sum of all Cloud Security Information and Event Management events over all hours in the current date for the given org.
   */
  "cloudSiemEventsSum"?: number;
  /**
   * Shows the high-water mark of all Static Analysis committers over all hours in the current date for the given org.
   */
  "codeAnalysisSaCommittersHwm"?: number;
  /**
   * Shows the high-water mark of all static Software Composition Analysis committers over all hours in the current date for the given org.
   */
  "codeAnalysisScaCommittersHwm"?: number;
  /**
   * Shows the 99th percentile of all Code Security hosts over all hours in the current date for the given org.
   */
  "codeSecurityHostTop99p"?: number;
  /**
   * Shows the average of all distinct containers over all hours in the current date for all organizations.
   */
  "containerAvg"?: number;
  /**
   * Shows the average of containers without the Datadog Agent over all hours in the current date for all organizations.
   */
  "containerExclAgentAvg"?: number;
  /**
   * Shows the high-water mark of all distinct containers over all hours in the current date for all organizations.
   */
  "containerHwm"?: number;
  /**
   * Shows the sum of all Cloud Security Management Enterprise compliance containers over all hours in the current date for the given org.
   */
  "csmContainerEnterpriseComplianceCountSum"?: number;
  /**
   * Shows the sum of all Cloud Security Management Enterprise Cloud Workload Security containers over all hours in the current date for the given org.
   */
  "csmContainerEnterpriseCwsCountSum"?: number;
  /**
   * Shows the sum of all Cloud Security Management Enterprise containers over all hours in the current date for the given org.
   */
  "csmContainerEnterpriseTotalCountSum"?: number;
  /**
   * Shows the 99th percentile of all Cloud Security Management Enterprise Azure app services hosts over all hours in the current date for the given org.
   */
  "csmHostEnterpriseAasHostCountTop99p"?: number;
  /**
   * Shows the 99th percentile of all Cloud Security Management Enterprise AWS hosts over all hours in the current date for the given org.
   */
  "csmHostEnterpriseAwsHostCountTop99p"?: number;
  /**
   * Shows the 99th percentile of all Cloud Security Management Enterprise Azure hosts over all hours in the current date for the given org.
   */
  "csmHostEnterpriseAzureHostCountTop99p"?: number;
  /**
   * Shows the 99th percentile of all Cloud Security Management Enterprise compliance hosts over all hours in the current date for the given org.
   */
  "csmHostEnterpriseComplianceHostCountTop99p"?: number;
  /**
   * Shows the 99th percentile of all Cloud Security Management Enterprise Cloud Workload Security hosts over all hours in the current date for the given org.
   */
  "csmHostEnterpriseCwsHostCountTop99p"?: number;
  /**
   * Shows the 99th percentile of all Cloud Security Management Enterprise GCP hosts over all hours in the current date for the given org.
   */
  "csmHostEnterpriseGcpHostCountTop99p"?: number;
  /**
   * Shows the 99th percentile of all Cloud Security Management Enterprise hosts over all hours in the current date for the given org.
   */
  "csmHostEnterpriseTotalHostCountTop99p"?: number;
  /**
   * Shows the 99th percentile of all Cloud Security Management Pro Azure app services hosts over all hours in the current date for all organizations.
   */
  "cspmAasHostTop99p"?: number;
  /**
   * Shows the 99th percentile of all Cloud Security Management Pro AWS hosts over all hours in the current date for all organizations.
   */
  "cspmAwsHostTop99p"?: number;
  /**
   * Shows the 99th percentile of all Cloud Security Management Pro Azure hosts over all hours in the current date for all organizations.
   */
  "cspmAzureHostTop99p"?: number;
  /**
   * Shows the average number of Cloud Security Management Pro containers over all hours in the current date for all organizations.
   */
  "cspmContainerAvg"?: number;
  /**
   * Shows the high-water mark of Cloud Security Management Pro containers over all hours in the current date for all organizations.
   */
  "cspmContainerHwm"?: number;
  /**
   * Shows the 99th percentile of all Cloud Security Management Pro GCP hosts over all hours in the current date for all organizations.
   */
  "cspmGcpHostTop99p"?: number;
  /**
   * Shows the 99th percentile of all Cloud Security Management Pro hosts over all hours in the current date for all organizations.
   */
  "cspmHostTop99p"?: number;
  /**
   * Shows the average number of distinct custom metrics over all hours in the current date for all organizations.
   */
  "customTsAvg"?: number;
  /**
   * Shows the average of all distinct Cloud Workload Security containers over all hours in the current date for all organizations.
   */
  "cwsContainerCountAvg"?: number;
  /**
   * Shows the average of all distinct Cloud Workload Security Fargate tasks over all hours in the current date for all organizations.
   */
  "cwsFargateTaskAvg"?: number;
  /**
   * Shows the 99th percentile of all Cloud Workload Security hosts over all hours in the current date for all organizations.
   */
  "cwsHostTop99p"?: number;
  /**
   * Shows the sum of all Data Jobs Monitoring hosts over all hours in the current date for the given org.
   */
  "dataJobsMonitoringHostHrSum"?: number;
  /**
   * The date for the usage.
   */
  "date"?: Date;
  /**
   * Shows the 99th percentile of all Database Monitoring hosts over all hours in the current date for all organizations.
   */
  "dbmHostTop99p"?: number;
  /**
   * Shows the average of all normalized Database Monitoring queries over all hours in the current date for all organizations.
   */
  "dbmQueriesCountAvg"?: number;
  /**
   * Shows the sum of all ephemeral infrastructure hosts with the Datadog Agent over all hours in the current date for the given org.
   */
  "ephInfraHostAgentSum"?: number;
  /**
   * Shows the sum of all ephemeral infrastructure hosts on Alibaba over all hours in the current date for the given org.
   */
  "ephInfraHostAlibabaSum"?: number;
  /**
   * Shows the sum of all ephemeral infrastructure hosts on AWS over all hours in the current date for the given org.
   */
  "ephInfraHostAwsSum"?: number;
  /**
   * Shows the sum of all ephemeral infrastructure hosts on Azure over all hours in the current date for the given org.
   */
  "ephInfraHostAzureSum"?: number;
  /**
   * Shows the sum of all ephemeral infrastructure hosts for Enterprise over all hours in the current date for the given org.
   */
  "ephInfraHostEntSum"?: number;
  /**
   * Shows the sum of all ephemeral infrastructure hosts on GCP over all hours in the current date for the given org.
   */
  "ephInfraHostGcpSum"?: number;
  /**
   * Shows the sum of all ephemeral infrastructure hosts on Heroku over all hours in the current date for the given org.
   */
  "ephInfraHostHerokuSum"?: number;
  /**
   * Shows the sum of all ephemeral infrastructure hosts with only Azure App Services over all hours in the current date for the given org.
   */
  "ephInfraHostOnlyAasSum"?: number;
  /**
   * Shows the sum of all ephemeral infrastructure hosts with only vSphere over all hours in the current date for the given org.
   */
  "ephInfraHostOnlyVsphereSum"?: number;
  /**
   * Shows the sum of all ephemeral APM hosts reported by the Datadog exporter for the OpenTelemetry Collector over all hours in the current date for the given org.
   */
  "ephInfraHostOpentelemetryApmSum"?: number;
  /**
   * Shows the sum of all ephemeral hosts reported by the Datadog exporter for the OpenTelemetry Collector over all hours in the current date for the given org.
   */
  "ephInfraHostOpentelemetrySum"?: number;
  /**
   * Shows the sum of all ephemeral infrastructure hosts for Pro over all hours in the current date for the given org.
   */
  "ephInfraHostProSum"?: number;
  /**
   * Shows the sum of all ephemeral infrastructure hosts for Pro Plus over all hours in the current date for the given org.
   */
  "ephInfraHostProplusSum"?: number;
  /**
   * Sum of all ephemeral infrastructure hosts for Proxmox over all hours in the current date for all organizations.
   */
  "ephInfraHostProxmoxSum"?: number;
  /**
   * Shows the sum of all Error Tracking APM error events over all hours in the current date for the given org.
   */
  "errorTrackingApmErrorEventsSum"?: number;
  /**
   * Shows the sum of all Error Tracking error events over all hours in the current date for the given org.
   */
  "errorTrackingErrorEventsSum"?: number;
  /**
   * Shows the sum of all Error Tracking events over all hours in the current date for the given org.
   */
  "errorTrackingEventsSum"?: number;
  /**
   * Shows the sum of all Error Tracking RUM error events over all hours in the current date for the given org.
   */
  "errorTrackingRumErrorEventsSum"?: number;
  /**
   * Shows the sum of all Event Management correlated events over all hours in the current date for all organizations.
   */
  "eventManagementCorrelationCorrelatedEventsSum"?: number;
  /**
   * Shows the sum of all Event Management correlated related events over all hours in the current date for all organizations.
   */
  "eventManagementCorrelationCorrelatedRelatedEventsSum"?: number;
  /**
   * Shows the sum of all Event Management correlations over all hours in the current date for all organizations.
   */
  "eventManagementCorrelationSum"?: number;
  /**
   * The average number of Profiling Fargate tasks over all hours in the current date for all organizations.
   */
  "fargateContainerProfilerProfilingFargateAvg"?: number;
  /**
   * The average number of Profiling Fargate Elastic Kubernetes Service tasks over all hours in the current date for all organizations.
   */
  "fargateContainerProfilerProfilingFargateEksAvg"?: number;
  /**
   * Shows the high-watermark of all Fargate tasks over all hours in the current date for all organizations.
   */
  "fargateTasksCountAvg"?: number;
  /**
   * Shows the average of all Fargate tasks over all hours in the current date for all organizations.
   */
  "fargateTasksCountHwm"?: number;
  /**
   * Shows the average number of Flex Logs Compute Large Instances over all hours in the current date for the given org.
   */
  "flexLogsComputeLargeAvg"?: number;
  /**
   * Shows the average number of Flex Logs Compute Medium Instances over all hours in the current date for the given org.
   */
  "flexLogsComputeMediumAvg"?: number;
  /**
   * Shows the average number of Flex Logs Compute Small Instances over all hours in the current date for the given org.
   */
  "flexLogsComputeSmallAvg"?: number;
  /**
   * Shows the average number of Flex Logs Compute Extra Large Instances over all hours in the current date for the given org.
   */
  "flexLogsComputeXlargeAvg"?: number;
  /**
   * Shows the average number of Flex Logs Compute Extra Small Instances over all hours in the current date for the given org.
   */
  "flexLogsComputeXsmallAvg"?: number;
  /**
   * Shows the average number of Flex Logs Starter Instances over all hours in the current date for the given org.
   */
  "flexLogsStarterAvg"?: number;
  /**
   * Shows the average number of Flex Logs Starter Storage Index Instances over all hours in the current date for the given org.
   */
  "flexLogsStarterStorageIndexAvg"?: number;
  /**
   * Shows the average number of Flex Logs Starter Storage Retention Adjustment Instances over all hours in the current date for the given org.
   */
  "flexLogsStarterStorageRetentionAdjustmentAvg"?: number;
  /**
   * Shows the average of all Flex Stored Logs over all hours in the current date for the given org.
   */
  "flexStoredLogsAvg"?: number;
  /**
   * Shows the sum of all log bytes forwarded over all hours in the current date for all organizations.
   */
  "forwardingEventsBytesSum"?: number;
  /**
   * Shows the 99th percentile of all GCP hosts over all hours in the current date for all organizations.
   */
  "gcpHostTop99p"?: number;
  /**
   * Shows the 99th percentile of all Heroku dynos over all hours in the current date for all organizations.
   */
  "herokuHostTop99p"?: number;
  /**
   * Shows the high-water mark of Incident Management monthly active users over all hours in the current date for all organizations.
   */
  "incidentManagementMonthlyActiveUsersHwm"?: number;
  /**
   * Shows the high-water mark of Incident Management seats over all hours on the current date for all organizations.
   */
  "incidentManagementSeatsHwm"?: number;
  /**
   * Shows the sum of all log events indexed over all hours in the current date for all organizations.
   */
  "indexedEventsCountSum"?: number;
  /**
   * Shows the 99th percentile of all distinct infrastructure hosts over all hours in the current date for all organizations.
   */
  "infraHostTop99p"?: number;
  /**
   * Shows the sum of all log bytes ingested over all hours in the current date for all organizations.
   */
  "ingestedEventsBytesSum"?: number;
  /**
   * Shows the sum of all IoT devices over all hours in the current date for all organizations.
   */
  "iotDeviceSum"?: number;
  /**
   * Shows the 99th percentile of all IoT devices over all hours in the current date all organizations.
   */
  "iotDeviceTop99p"?: number;
  /**
   * Sum of all LLM observability minimum spend over all hours in the current date for all organizations.
   */
  "llmObservabilityMinSpendSum"?: number;
  /**
   * Sum of all LLM observability sessions over all hours in the current date for all organizations.
   */
  "llmObservabilitySum"?: number;
  /**
   * Shows the sum of all mobile lite sessions over all hours in the current date for all organizations (To be deprecated on October 1st, 2024).
   */
  "mobileRumLiteSessionCountSum"?: number;
  /**
   * Shows the sum of all mobile RUM sessions on Android over all hours in the current date for all organizations (To be deprecated on October 1st, 2024).
   */
  "mobileRumSessionCountAndroidSum"?: number;
  /**
   * Shows the sum of all mobile RUM sessions on Flutter over all hours in the current date for all organizations (To be deprecated on October 1st, 2024).
   */
  "mobileRumSessionCountFlutterSum"?: number;
  /**
   * Shows the sum of all mobile RUM sessions on iOS over all hours in the current date for all organizations (To be deprecated on October 1st, 2024).
   */
  "mobileRumSessionCountIosSum"?: number;
  /**
   * Shows the sum of all mobile RUM sessions on React Native over all hours in the current date for all organizations (To be deprecated on October 1st, 2024).
   */
  "mobileRumSessionCountReactnativeSum"?: number;
  /**
   * Shows the sum of all mobile RUM sessions on Roku over all hours in the current date for all organizations (To be deprecated on October 1st, 2024).
   */
  "mobileRumSessionCountRokuSum"?: number;
  /**
   * Shows the sum of all mobile RUM sessions over all hours in the current date for all organizations (To be deprecated on October 1st, 2024).
   */
  "mobileRumSessionCountSum"?: number;
  /**
   * Shows the sum of all mobile RUM units over all hours in the current date for all organizations (To be deprecated on October 1st, 2024).
   */
  "mobileRumUnitsSum"?: number;
  /**
   * Shows the sum of all Network Device Monitoring NetFlow events over all hours in the current date for the given org.
   */
  "ndmNetflowEventsSum"?: number;
  /**
   * Shows the sum of all Network flows indexed over all hours in the current date for all organizations (To be deprecated on October 1st, 2024).
   */
  "netflowIndexedEventsCountSum"?: number;
  /**
   * Shows the 99th percentile of all Network Device Monitoring wireless devices over all hours in the current date for all organizations.
   */
  "networkDeviceWirelessTop99p"?: number;
  /**
   * Shows the 99th percentile of all distinct Cloud Network Monitoring hosts (formerly known as Network hosts) over all hours in the current date for all organizations.
   */
  "npmHostTop99p"?: number;
  /**
   * Sum of all observability pipelines bytes processed over all hours in the current date for the given org.
   */
  "observabilityPipelinesBytesProcessedSum"?: number;
  /**
   * Shows the sum of all Oracle Cloud Infrastructure hosts over all hours in the current date for the given org.
   */
  "ociHostSum"?: number;
  /**
   * Shows the 99th percentile of all Oracle Cloud Infrastructure hosts over all hours in the current date for the given org.
   */
  "ociHostTop99p"?: number;
  /**
   * Shows the high-water mark of On-Call seats over all hours in the current date for all organizations.
   */
  "onCallSeatHwm"?: number;
  /**
   * Sum of all online archived events over all hours in the current date for all organizations.
   */
  "onlineArchiveEventsCountSum"?: number;
  /**
   * Shows the 99th percentile of APM hosts reported by the Datadog exporter for the OpenTelemetry Collector over all hours in the current date for all organizations.
   */
  "opentelemetryApmHostTop99p"?: number;
  /**
   * Shows the 99th percentile of all hosts reported by the Datadog exporter for the OpenTelemetry Collector over all hours in the current date for all organizations.
   */
  "opentelemetryHostTop99p"?: number;
  /**
   * Organizations associated with a user.
   */
  "orgs"?: Array<UsageSummaryDateOrg>;
  /**
   * Sum of all product analytics sessions over all hours in the current date for all organizations.
   */
  "productAnalyticsSum"?: number;
  /**
   * Shows the 99th percentile of all profiled Azure app services over all hours in the current date for all organizations.
   */
  "profilingAasCountTop99p"?: number;
  /**
   * Shows the 99th percentile of all profiled hosts over all hours within the current date for all organizations.
   */
  "profilingHostTop99p"?: number;
  /**
   * Sum of all Proxmox hosts over all hours in the current date for all organizations.
   */
  "proxmoxHostSum"?: number;
  /**
   * 99th percentile of all Proxmox hosts over all hours in the current date for all organizations.
   */
  "proxmoxHostTop99p"?: number;
  /**
   * Shows the high-water mark of all published applications over all hours in the current date for all organizations.
   */
  "publishedAppHwm"?: number;
  /**
   * Shows the sum of all mobile sessions and all browser lite and legacy sessions over all hours in the current month for all organizations (To be deprecated on October 1st, 2024).
   */
  "rumBrowserAndMobileSessionCount"?: number;
  /**
   * Shows the sum of all browser RUM legacy sessions over all hours in the current date for all organizations (To be introduced on October 1st, 2024).
   */
  "rumBrowserLegacySessionCountSum"?: number;
  /**
   * Shows the sum of all browser RUM lite sessions over all hours in the current date for all organizations (To be introduced on October 1st, 2024).
   */
  "rumBrowserLiteSessionCountSum"?: number;
  /**
   * Shows the sum of all browser RUM Session Replay counts over all hours in the current date for all organizations (To be introduced on October 1st, 2024).
   */
  "rumBrowserReplaySessionCountSum"?: number;
  /**
   * Sum of all RUM indexed sessions over all hours in the current date for all organizations.
   */
  "rumIndexedSessionsSum"?: number;
  /**
   * Sum of all RUM ingested sessions over all hours in the current date for all organizations.
   */
  "rumIngestedSessionsSum"?: number;
  /**
   * Shows the sum of all RUM lite sessions (browser and mobile) over all hours in the current date for all organizations (To be introduced on October 1st, 2024).
   */
  "rumLiteSessionCountSum"?: number;
  /**
   * Shows the sum of all mobile RUM legacy sessions on Android over all hours in the current date for all organizations (To be introduced on October 1st, 2024).
   */
  "rumMobileLegacySessionCountAndroidSum"?: number;
  /**
   * Shows the sum of all mobile RUM legacy Sessions on Flutter over all hours in the current date for all organizations (To be introduced on October 1st, 2024).
   */
  "rumMobileLegacySessionCountFlutterSum"?: number;
  /**
   * Shows the sum of all mobile RUM legacy sessions on iOS over all hours in the current date for all organizations (To be introduced on October 1st, 2024).
   */
  "rumMobileLegacySessionCountIosSum"?: number;
  /**
   * Shows the sum of all mobile RUM legacy sessions on React Native over all hours in the current date for all organizations (To be introduced on October 1st, 2024).
   */
  "rumMobileLegacySessionCountReactnativeSum"?: number;
  /**
   * Shows the sum of all mobile RUM legacy sessions on Roku over all hours in the current date for all organizations (To be introduced on October 1st, 2024).
   */
  "rumMobileLegacySessionCountRokuSum"?: number;
  /**
   * Shows the sum of all mobile RUM lite sessions on Android over all hours in the current date for all organizations (To be introduced on October 1st, 2024).
   */
  "rumMobileLiteSessionCountAndroidSum"?: number;
  /**
   * Shows the sum of all mobile RUM lite sessions on Flutter over all hours in the current date for all organizations (To be introduced on October 1st, 2024).
   */
  "rumMobileLiteSessionCountFlutterSum"?: number;
  /**
   * Shows the sum of all mobile RUM lite sessions on iOS over all hours in the current date for all organizations (To be introduced on October 1st, 2024).
   */
  "rumMobileLiteSessionCountIosSum"?: number;
  /**
   * Shows the sum of all mobile RUM lite sessions on Kotlin Multiplatform over all hours within the current date for all organizations.
   */
  "rumMobileLiteSessionCountKotlinmultiplatformSum"?: number;
  /**
   * Shows the sum of all mobile RUM lite sessions on React Native over all hours in the current date for all organizations (To be introduced on October 1st, 2024).
   */
  "rumMobileLiteSessionCountReactnativeSum"?: number;
  /**
   * Shows the sum of all mobile RUM lite sessions on Roku over all hours within the current date for all organizations (To be introduced on October 1st, 2024).
   */
  "rumMobileLiteSessionCountRokuSum"?: number;
  /**
   * Shows the sum of all mobile RUM lite sessions on Unity over all hours within the current date for all organizations.
   */
  "rumMobileLiteSessionCountUnitySum"?: number;
  /**
   * Shows the sum of all mobile RUM replay sessions on Android over all hours within the current date for the given org.
   */
  "rumMobileReplaySessionCountAndroidSum"?: number;
  /**
   * Shows the sum of all mobile RUM replay sessions on iOS over all hours within the current date for the given org.
   */
  "rumMobileReplaySessionCountIosSum"?: number;
  /**
   * Shows the sum of all mobile RUM replay sessions on Kotlin Multiplatform over all hours within the current date for all organizations.
   */
  "rumMobileReplaySessionCountKotlinmultiplatformSum"?: number;
  /**
   * Shows the sum of all mobile RUM replay sessions on React Native over all hours within the current date for the given org.
   */
  "rumMobileReplaySessionCountReactnativeSum"?: number;
  /**
   * Shows the sum of all RUM Session Replay counts over all hours in the current date for all organizations (To be introduced on October 1st, 2024).
   */
  "rumReplaySessionCountSum"?: number;
  /**
   * Shows the sum of all browser RUM lite sessions over all hours in the current date for all organizations (To be deprecated on October 1st, 2024).
   */
  "rumSessionCountSum"?: number;
  /**
   * Sum of all RUM session replay add-on sessions over all hours in the current date for all organizations.
   */
  "rumSessionReplayAddOnSum"?: number;
  /**
   * Shows the sum of RUM sessions (browser and mobile) over all hours in the current date for all organizations.
   */
  "rumTotalSessionCountSum"?: number;
  /**
   * Shows the sum of all browser and mobile RUM units over all hours in the current date for all organizations (To be deprecated on October 1st, 2024).
   */
  "rumUnitsSum"?: number;
  /**
   * Shows the average of all Software Composition Analysis Fargate tasks over all hours in the current date for the given org.
   */
  "scaFargateCountAvg"?: number;
  /**
   * Shows the sum of the high-water marks of all Software Composition Analysis Fargate tasks over all hours in the current date for the given org.
   */
  "scaFargateCountHwm"?: number;
  /**
   * Sum of all APM bytes scanned with sensitive data scanner over all hours in the current date for all organizations.
   */
  "sdsApmScannedBytesSum"?: number;
  /**
   * Sum of all event stream events bytes scanned with sensitive data scanner over all hours in the current date for all organizations.
   */
  "sdsEventsScannedBytesSum"?: number;
  /**
   * Shows the sum of all bytes scanned of logs usage by the Sensitive Data Scanner over all hours in the current month for all organizations.
   */
  "sdsLogsScannedBytesSum"?: number;
  /**
   * Sum of all RUM bytes scanned with sensitive data scanner over all hours in the current date for all organizations.
   */
  "sdsRumScannedBytesSum"?: number;
  /**
   * Shows the sum of all bytes scanned across all usage types by the Sensitive Data Scanner over all hours in the current month for all organizations.
   */
  "sdsTotalScannedBytesSum"?: number;
  /**
   * Shows the average number of Serverless Apps with Application Performance Monitoring for Azure App Service instances for the current date for all organizations.
   */
  "serverlessAppsApmApmAzureAppserviceInstancesAvg"?: number;
  /**
   * Shows the average number of Serverless Apps with Application Performance Monitoring for Azure Function instances for the current date for all organizations.
   */
  "serverlessAppsApmApmAzureAzurefunctionInstancesAvg"?: number;
  /**
   * Shows the average number of Serverless Apps with Application Performance Monitoring for Azure Container App instances for the current date for all organizations.
   */
  "serverlessAppsApmApmAzureContainerappInstancesAvg"?: number;
  /**
   * Shows the average number of Serverless Apps with Application Performance Monitoring for Fargate Elastic Container Service tasks for the current date for all organizations.
   */
  "serverlessAppsApmApmFargateEcsTasksAvg"?: number;
  /**
   * Shows the average number of Serverless Apps with Application Performance Monitoring for Google Cloud Platform Cloud Function instances for the current date for all organizations.
   */
  "serverlessAppsApmApmGcpCloudfunctionInstancesAvg"?: number;
  /**
   * Shows the average number of Serverless Apps with Application Performance Monitoring for Google Cloud Platform Cloud Run instances for the current date for all organizations.
   */
  "serverlessAppsApmApmGcpCloudrunInstancesAvg"?: number;
  /**
   * Shows the average number of Serverless Apps with Application Performance Monitoring for the current date for all organizations.
   */
  "serverlessAppsApmAvg"?: number;
  /**
   * Shows the average number of Serverless Apps with Application Performance Monitoring excluding Fargate for Azure App Service instances for the current date for all organizations.
   */
  "serverlessAppsApmExclFargateApmAzureAppserviceInstancesAvg"?: number;
  /**
   * Shows the average number of Serverless Apps with Application Performance Monitoring excluding Fargate for Azure Function instances for the current date for all organizations.
   */
  "serverlessAppsApmExclFargateApmAzureAzurefunctionInstancesAvg"?: number;
  /**
   * Shows the average number of Serverless Apps with Application Performance Monitoring excluding Fargate for Azure Container App instances for the current date for all organizations.
   */
  "serverlessAppsApmExclFargateApmAzureContainerappInstancesAvg"?: number;
  /**
   * Shows the average number of Serverless Apps with Application Performance Monitoring excluding Fargate for Google Cloud Platform Cloud Function instances for the current date for all organizations.
   */
  "serverlessAppsApmExclFargateApmGcpCloudfunctionInstancesAvg"?: number;
  /**
   * Shows the average number of Serverless Apps with Application Performance Monitoring excluding Fargate for Google Cloud Platform Cloud Run instances for the current date for all organizations.
   */
  "serverlessAppsApmExclFargateApmGcpCloudrunInstancesAvg"?: number;
  /**
   * Shows the average number of Serverless Apps with Application Performance Monitoring excluding Fargate for the current date for all organizations.
   */
  "serverlessAppsApmExclFargateAvg"?: number;
  /**
   * Shows the average number of Serverless Apps for Azure Container App instances for the current date for all organizations.
   */
  "serverlessAppsAzureContainerAppInstancesAvg"?: number;
  /**
   * Shows the average number of Serverless Apps for Azure for the given date and given org.
   */
  "serverlessAppsAzureCountAvg"?: number;
  /**
   * Shows the average number of Serverless Apps for Azure Function App instances for the current date for all organizations.
   */
  "serverlessAppsAzureFunctionAppInstancesAvg"?: number;
  /**
   * Shows the average number of Serverless Apps for Azure Web App instances for the current date for all organizations.
   */
  "serverlessAppsAzureWebAppInstancesAvg"?: number;
  /**
   * Shows the average number of Serverless Apps for Elastic Container Service for the current date for all organizations.
   */
  "serverlessAppsEcsAvg"?: number;
  /**
   * Shows the average number of Serverless Apps for Elastic Kubernetes Service for the current date for all organizations.
   */
  "serverlessAppsEksAvg"?: number;
  /**
   * Shows the average number of Serverless Apps excluding Fargate for the current date for all organizations.
   */
  "serverlessAppsExclFargateAvg"?: number;
  /**
   * Shows the average number of Serverless Apps excluding Fargate for Azure Container App instances for the current date for all organizations.
   */
  "serverlessAppsExclFargateAzureContainerAppInstancesAvg"?: number;
  /**
   * Shows the average number of Serverless Apps excluding Fargate for Azure Function App instances for the current date for all organizations.
   */
  "serverlessAppsExclFargateAzureFunctionAppInstancesAvg"?: number;
  /**
   * Shows the average number of Serverless Apps excluding Fargate for Azure Web App instances for the current date for all organizations.
   */
  "serverlessAppsExclFargateAzureWebAppInstancesAvg"?: number;
  /**
   * Shows the average number of Serverless Apps excluding Fargate for Google Cloud Platform Cloud Functions instances for the current date for all organizations.
   */
  "serverlessAppsExclFargateGoogleCloudFunctionsInstancesAvg"?: number;
  /**
   * Shows the average number of Serverless Apps excluding Fargate for Google Cloud Platform Cloud Run instances for the current date for all organizations.
   */
  "serverlessAppsExclFargateGoogleCloudRunInstancesAvg"?: number;
  /**
   * Shows the average number of Serverless Apps for Google Cloud Platform Cloud Functions instances for the current date for all organizations.
   */
  "serverlessAppsGoogleCloudFunctionsInstancesAvg"?: number;
  /**
   * Shows the average number of Serverless Apps for Google Cloud Platform Cloud Run instances for the current date for all organizations.
   */
  "serverlessAppsGoogleCloudRunInstancesAvg"?: number;
  /**
   * Shows the average number of Serverless Apps for Google Cloud for the given date and given org.
   */
  "serverlessAppsGoogleCountAvg"?: number;
  /**
   * Shows the average number of Serverless Apps for Azure and Google Cloud for the given date and given org.
   */
  "serverlessAppsTotalCountAvg"?: number;
  /**
   * Shows the sum of all log events analyzed by Cloud SIEM over all hours in the current date for the given org.
   */
  "siemAnalyzedLogsAddOnCountSum"?: number;
  /**
   * Shows the sum of all Synthetic browser tests over all hours in the current date for all organizations.
   */
  "syntheticsBrowserCheckCallsCountSum"?: number;
  /**
   * Shows the sum of all Synthetic API tests over all hours in the current date for all organizations.
   */
  "syntheticsCheckCallsCountSum"?: number;
  /**
   * Shows the sum of all Synthetic mobile application tests over all hours in the current date for all organizations.
   */
  "syntheticsMobileTestRunsSum"?: number;
  /**
   * Shows the high-water mark of used synthetics parallel testing slots over all hours in the current date for all organizations.
   */
  "syntheticsParallelTestingMaxSlotsHwm"?: number;
  /**
   * Shows the sum of all Indexed Spans indexed over all hours in the current date for all organizations.
   */
  "traceSearchIndexedEventsCountSum"?: number;
  /**
   * Shows the sum of all ingested APM span bytes over all hours in the current date for all organizations.
   */
  "twolIngestedEventsBytesSum"?: number;
  /**
   * Shows the 99th percentile of all universal service management hosts over all hours in the current date for the given org.
   */
  "universalServiceMonitoringHostTop99p"?: number;
  /**
   * Shows the 99th percentile of all vSphere hosts over all hours in the current date for all organizations.
   */
  "vsphereHostTop99p"?: number;
  /**
   * Shows the 99th percentile of all Application Vulnerability Management hosts over all hours in the current date for the given org.
   */
  "vulnManagementHostCountTop99p"?: number;
  /**
   * Sum of all workflows executed over all hours in the current date for all organizations.
   */
  "workflowExecutionsUsageSum"?: number;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    agentHostTop99p: {
      baseName: "agent_host_top99p",
      type: "number",
      format: "int64",
    },
    apmAzureAppServiceHostTop99p: {
      baseName: "apm_azure_app_service_host_top99p",
      type: "number",
      format: "int64",
    },
    apmDevsecopsHostTop99p: {
      baseName: "apm_devsecops_host_top99p",
      type: "number",
      format: "int64",
    },
    apmEnterpriseStandaloneHostsTop99p: {
      baseName: "apm_enterprise_standalone_hosts_top99p",
      type: "number",
      format: "int64",
    },
    apmFargateCountAvg: {
      baseName: "apm_fargate_count_avg",
      type: "number",
      format: "int64",
    },
    apmHostTop99p: {
      baseName: "apm_host_top99p",
      type: "number",
      format: "int64",
    },
    apmProStandaloneHostsTop99p: {
      baseName: "apm_pro_standalone_hosts_top99p",
      type: "number",
      format: "int64",
    },
    appsecFargateCountAvg: {
      baseName: "appsec_fargate_count_avg",
      type: "number",
      format: "int64",
    },
    asmServerlessSum: {
      baseName: "asm_serverless_sum",
      type: "number",
      format: "int64",
    },
    auditLogsLinesIndexedSum: {
      baseName: "audit_logs_lines_indexed_sum",
      type: "number",
      format: "int64",
    },
    auditTrailEnabledHwm: {
      baseName: "audit_trail_enabled_hwm",
      type: "number",
      format: "int64",
    },
    avgProfiledFargateTasks: {
      baseName: "avg_profiled_fargate_tasks",
      type: "number",
      format: "int64",
    },
    awsHostTop99p: {
      baseName: "aws_host_top99p",
      type: "number",
      format: "int64",
    },
    awsLambdaFuncCount: {
      baseName: "aws_lambda_func_count",
      type: "number",
      format: "int64",
    },
    awsLambdaInvocationsSum: {
      baseName: "aws_lambda_invocations_sum",
      type: "number",
      format: "int64",
    },
    azureAppServiceTop99p: {
      baseName: "azure_app_service_top99p",
      type: "number",
      format: "int64",
    },
    billableIngestedBytesSum: {
      baseName: "billable_ingested_bytes_sum",
      type: "number",
      format: "int64",
    },
    bitsAiInvestigationsSum: {
      baseName: "bits_ai_investigations_sum",
      type: "number",
      format: "int64",
    },
    browserRumLiteSessionCountSum: {
      baseName: "browser_rum_lite_session_count_sum",
      type: "number",
      format: "int64",
    },
    browserRumReplaySessionCountSum: {
      baseName: "browser_rum_replay_session_count_sum",
      type: "number",
      format: "int64",
    },
    browserRumUnitsSum: {
      baseName: "browser_rum_units_sum",
      type: "number",
      format: "int64",
    },
    ccmSpendMonitoredEntLast: {
      baseName: "ccm_spend_monitored_ent_last",
      type: "number",
      format: "int64",
    },
    ccmSpendMonitoredProLast: {
      baseName: "ccm_spend_monitored_pro_last",
      type: "number",
      format: "int64",
    },
    ciPipelineIndexedSpansSum: {
      baseName: "ci_pipeline_indexed_spans_sum",
      type: "number",
      format: "int64",
    },
    ciTestIndexedSpansSum: {
      baseName: "ci_test_indexed_spans_sum",
      type: "number",
      format: "int64",
    },
    ciVisibilityItrCommittersHwm: {
      baseName: "ci_visibility_itr_committers_hwm",
      type: "number",
      format: "int64",
    },
    ciVisibilityPipelineCommittersHwm: {
      baseName: "ci_visibility_pipeline_committers_hwm",
      type: "number",
      format: "int64",
    },
    ciVisibilityTestCommittersHwm: {
      baseName: "ci_visibility_test_committers_hwm",
      type: "number",
      format: "int64",
    },
    cloudCostManagementAwsHostCountAvg: {
      baseName: "cloud_cost_management_aws_host_count_avg",
      type: "number",
      format: "int64",
    },
    cloudCostManagementAzureHostCountAvg: {
      baseName: "cloud_cost_management_azure_host_count_avg",
      type: "number",
      format: "int64",
    },
    cloudCostManagementGcpHostCountAvg: {
      baseName: "cloud_cost_management_gcp_host_count_avg",
      type: "number",
      format: "int64",
    },
    cloudCostManagementHostCountAvg: {
      baseName: "cloud_cost_management_host_count_avg",
      type: "number",
      format: "int64",
    },
    cloudCostManagementOciHostCountAvg: {
      baseName: "cloud_cost_management_oci_host_count_avg",
      type: "number",
      format: "int64",
    },
    cloudSiemEventsSum: {
      baseName: "cloud_siem_events_sum",
      type: "number",
      format: "int64",
    },
    codeAnalysisSaCommittersHwm: {
      baseName: "code_analysis_sa_committers_hwm",
      type: "number",
      format: "int64",
    },
    codeAnalysisScaCommittersHwm: {
      baseName: "code_analysis_sca_committers_hwm",
      type: "number",
      format: "int64",
    },
    codeSecurityHostTop99p: {
      baseName: "code_security_host_top99p",
      type: "number",
      format: "int64",
    },
    containerAvg: {
      baseName: "container_avg",
      type: "number",
      format: "int64",
    },
    containerExclAgentAvg: {
      baseName: "container_excl_agent_avg",
      type: "number",
      format: "int64",
    },
    containerHwm: {
      baseName: "container_hwm",
      type: "number",
      format: "int64",
    },
    csmContainerEnterpriseComplianceCountSum: {
      baseName: "csm_container_enterprise_compliance_count_sum",
      type: "number",
      format: "int64",
    },
    csmContainerEnterpriseCwsCountSum: {
      baseName: "csm_container_enterprise_cws_count_sum",
      type: "number",
      format: "int64",
    },
    csmContainerEnterpriseTotalCountSum: {
      baseName: "csm_container_enterprise_total_count_sum",
      type: "number",
      format: "int64",
    },
    csmHostEnterpriseAasHostCountTop99p: {
      baseName: "csm_host_enterprise_aas_host_count_top99p",
      type: "number",
      format: "int64",
    },
    csmHostEnterpriseAwsHostCountTop99p: {
      baseName: "csm_host_enterprise_aws_host_count_top99p",
      type: "number",
      format: "int64",
    },
    csmHostEnterpriseAzureHostCountTop99p: {
      baseName: "csm_host_enterprise_azure_host_count_top99p",
      type: "number",
      format: "int64",
    },
    csmHostEnterpriseComplianceHostCountTop99p: {
      baseName: "csm_host_enterprise_compliance_host_count_top99p",
      type: "number",
      format: "int64",
    },
    csmHostEnterpriseCwsHostCountTop99p: {
      baseName: "csm_host_enterprise_cws_host_count_top99p",
      type: "number",
      format: "int64",
    },
    csmHostEnterpriseGcpHostCountTop99p: {
      baseName: "csm_host_enterprise_gcp_host_count_top99p",
      type: "number",
      format: "int64",
    },
    csmHostEnterpriseTotalHostCountTop99p: {
      baseName: "csm_host_enterprise_total_host_count_top99p",
      type: "number",
      format: "int64",
    },
    cspmAasHostTop99p: {
      baseName: "cspm_aas_host_top99p",
      type: "number",
      format: "int64",
    },
    cspmAwsHostTop99p: {
      baseName: "cspm_aws_host_top99p",
      type: "number",
      format: "int64",
    },
    cspmAzureHostTop99p: {
      baseName: "cspm_azure_host_top99p",
      type: "number",
      format: "int64",
    },
    cspmContainerAvg: {
      baseName: "cspm_container_avg",
      type: "number",
      format: "int64",
    },
    cspmContainerHwm: {
      baseName: "cspm_container_hwm",
      type: "number",
      format: "int64",
    },
    cspmGcpHostTop99p: {
      baseName: "cspm_gcp_host_top99p",
      type: "number",
      format: "int64",
    },
    cspmHostTop99p: {
      baseName: "cspm_host_top99p",
      type: "number",
      format: "int64",
    },
    customTsAvg: {
      baseName: "custom_ts_avg",
      type: "number",
      format: "int64",
    },
    cwsContainerCountAvg: {
      baseName: "cws_container_count_avg",
      type: "number",
      format: "int64",
    },
    cwsFargateTaskAvg: {
      baseName: "cws_fargate_task_avg",
      type: "number",
      format: "int64",
    },
    cwsHostTop99p: {
      baseName: "cws_host_top99p",
      type: "number",
      format: "int64",
    },
    dataJobsMonitoringHostHrSum: {
      baseName: "data_jobs_monitoring_host_hr_sum",
      type: "number",
      format: "int64",
    },
    date: {
      baseName: "date",
      type: "Date",
      format: "date-time",
    },
    dbmHostTop99p: {
      baseName: "dbm_host_top99p",
      type: "number",
      format: "int64",
    },
    dbmQueriesCountAvg: {
      baseName: "dbm_queries_count_avg",
      type: "number",
      format: "int64",
    },
    ephInfraHostAgentSum: {
      baseName: "eph_infra_host_agent_sum",
      type: "number",
      format: "int64",
    },
    ephInfraHostAlibabaSum: {
      baseName: "eph_infra_host_alibaba_sum",
      type: "number",
      format: "int64",
    },
    ephInfraHostAwsSum: {
      baseName: "eph_infra_host_aws_sum",
      type: "number",
      format: "int64",
    },
    ephInfraHostAzureSum: {
      baseName: "eph_infra_host_azure_sum",
      type: "number",
      format: "int64",
    },
    ephInfraHostEntSum: {
      baseName: "eph_infra_host_ent_sum",
      type: "number",
      format: "int64",
    },
    ephInfraHostGcpSum: {
      baseName: "eph_infra_host_gcp_sum",
      type: "number",
      format: "int64",
    },
    ephInfraHostHerokuSum: {
      baseName: "eph_infra_host_heroku_sum",
      type: "number",
      format: "int64",
    },
    ephInfraHostOnlyAasSum: {
      baseName: "eph_infra_host_only_aas_sum",
      type: "number",
      format: "int64",
    },
    ephInfraHostOnlyVsphereSum: {
      baseName: "eph_infra_host_only_vsphere_sum",
      type: "number",
      format: "int64",
    },
    ephInfraHostOpentelemetryApmSum: {
      baseName: "eph_infra_host_opentelemetry_apm_sum",
      type: "number",
      format: "int64",
    },
    ephInfraHostOpentelemetrySum: {
      baseName: "eph_infra_host_opentelemetry_sum",
      type: "number",
      format: "int64",
    },
    ephInfraHostProSum: {
      baseName: "eph_infra_host_pro_sum",
      type: "number",
      format: "int64",
    },
    ephInfraHostProplusSum: {
      baseName: "eph_infra_host_proplus_sum",
      type: "number",
      format: "int64",
    },
    ephInfraHostProxmoxSum: {
      baseName: "eph_infra_host_proxmox_sum",
      type: "number",
      format: "int64",
    },
    errorTrackingApmErrorEventsSum: {
      baseName: "error_tracking_apm_error_events_sum",
      type: "number",
      format: "int64",
    },
    errorTrackingErrorEventsSum: {
      baseName: "error_tracking_error_events_sum",
      type: "number",
      format: "int64",
    },
    errorTrackingEventsSum: {
      baseName: "error_tracking_events_sum",
      type: "number",
      format: "int64",
    },
    errorTrackingRumErrorEventsSum: {
      baseName: "error_tracking_rum_error_events_sum",
      type: "number",
      format: "int64",
    },
    eventManagementCorrelationCorrelatedEventsSum: {
      baseName: "event_management_correlation_correlated_events_sum",
      type: "number",
      format: "int64",
    },
    eventManagementCorrelationCorrelatedRelatedEventsSum: {
      baseName: "event_management_correlation_correlated_related_events_sum",
      type: "number",
      format: "int64",
    },
    eventManagementCorrelationSum: {
      baseName: "event_management_correlation_sum",
      type: "number",
      format: "int64",
    },
    fargateContainerProfilerProfilingFargateAvg: {
      baseName: "fargate_container_profiler_profiling_fargate_avg",
      type: "number",
      format: "int64",
    },
    fargateContainerProfilerProfilingFargateEksAvg: {
      baseName: "fargate_container_profiler_profiling_fargate_eks_avg",
      type: "number",
      format: "int64",
    },
    fargateTasksCountAvg: {
      baseName: "fargate_tasks_count_avg",
      type: "number",
      format: "int64",
    },
    fargateTasksCountHwm: {
      baseName: "fargate_tasks_count_hwm",
      type: "number",
      format: "int64",
    },
    flexLogsComputeLargeAvg: {
      baseName: "flex_logs_compute_large_avg",
      type: "number",
      format: "int64",
    },
    flexLogsComputeMediumAvg: {
      baseName: "flex_logs_compute_medium_avg",
      type: "number",
      format: "int64",
    },
    flexLogsComputeSmallAvg: {
      baseName: "flex_logs_compute_small_avg",
      type: "number",
      format: "int64",
    },
    flexLogsComputeXlargeAvg: {
      baseName: "flex_logs_compute_xlarge_avg",
      type: "number",
      format: "int64",
    },
    flexLogsComputeXsmallAvg: {
      baseName: "flex_logs_compute_xsmall_avg",
      type: "number",
      format: "int64",
    },
    flexLogsStarterAvg: {
      baseName: "flex_logs_starter_avg",
      type: "number",
      format: "int64",
    },
    flexLogsStarterStorageIndexAvg: {
      baseName: "flex_logs_starter_storage_index_avg",
      type: "number",
      format: "int64",
    },
    flexLogsStarterStorageRetentionAdjustmentAvg: {
      baseName: "flex_logs_starter_storage_retention_adjustment_avg",
      type: "number",
      format: "int64",
    },
    flexStoredLogsAvg: {
      baseName: "flex_stored_logs_avg",
      type: "number",
      format: "int64",
    },
    forwardingEventsBytesSum: {
      baseName: "forwarding_events_bytes_sum",
      type: "number",
      format: "int64",
    },
    gcpHostTop99p: {
      baseName: "gcp_host_top99p",
      type: "number",
      format: "int64",
    },
    herokuHostTop99p: {
      baseName: "heroku_host_top99p",
      type: "number",
      format: "int64",
    },
    incidentManagementMonthlyActiveUsersHwm: {
      baseName: "incident_management_monthly_active_users_hwm",
      type: "number",
      format: "int64",
    },
    incidentManagementSeatsHwm: {
      baseName: "incident_management_seats_hwm",
      type: "number",
      format: "int64",
    },
    indexedEventsCountSum: {
      baseName: "indexed_events_count_sum",
      type: "number",
      format: "int64",
    },
    infraHostTop99p: {
      baseName: "infra_host_top99p",
      type: "number",
      format: "int64",
    },
    ingestedEventsBytesSum: {
      baseName: "ingested_events_bytes_sum",
      type: "number",
      format: "int64",
    },
    iotDeviceSum: {
      baseName: "iot_device_sum",
      type: "number",
      format: "int64",
    },
    iotDeviceTop99p: {
      baseName: "iot_device_top99p",
      type: "number",
      format: "int64",
    },
    llmObservabilityMinSpendSum: {
      baseName: "llm_observability_min_spend_sum",
      type: "number",
      format: "int64",
    },
    llmObservabilitySum: {
      baseName: "llm_observability_sum",
      type: "number",
      format: "int64",
    },
    mobileRumLiteSessionCountSum: {
      baseName: "mobile_rum_lite_session_count_sum",
      type: "number",
      format: "int64",
    },
    mobileRumSessionCountAndroidSum: {
      baseName: "mobile_rum_session_count_android_sum",
      type: "number",
      format: "int64",
    },
    mobileRumSessionCountFlutterSum: {
      baseName: "mobile_rum_session_count_flutter_sum",
      type: "number",
      format: "int64",
    },
    mobileRumSessionCountIosSum: {
      baseName: "mobile_rum_session_count_ios_sum",
      type: "number",
      format: "int64",
    },
    mobileRumSessionCountReactnativeSum: {
      baseName: "mobile_rum_session_count_reactnative_sum",
      type: "number",
      format: "int64",
    },
    mobileRumSessionCountRokuSum: {
      baseName: "mobile_rum_session_count_roku_sum",
      type: "number",
      format: "int64",
    },
    mobileRumSessionCountSum: {
      baseName: "mobile_rum_session_count_sum",
      type: "number",
      format: "int64",
    },
    mobileRumUnitsSum: {
      baseName: "mobile_rum_units_sum",
      type: "number",
      format: "int64",
    },
    ndmNetflowEventsSum: {
      baseName: "ndm_netflow_events_sum",
      type: "number",
      format: "int64",
    },
    netflowIndexedEventsCountSum: {
      baseName: "netflow_indexed_events_count_sum",
      type: "number",
      format: "int64",
    },
    networkDeviceWirelessTop99p: {
      baseName: "network_device_wireless_top99p",
      type: "number",
      format: "int64",
    },
    npmHostTop99p: {
      baseName: "npm_host_top99p",
      type: "number",
      format: "int64",
    },
    observabilityPipelinesBytesProcessedSum: {
      baseName: "observability_pipelines_bytes_processed_sum",
      type: "number",
      format: "int64",
    },
    ociHostSum: {
      baseName: "oci_host_sum",
      type: "number",
      format: "int64",
    },
    ociHostTop99p: {
      baseName: "oci_host_top99p",
      type: "number",
      format: "int64",
    },
    onCallSeatHwm: {
      baseName: "on_call_seat_hwm",
      type: "number",
      format: "int64",
    },
    onlineArchiveEventsCountSum: {
      baseName: "online_archive_events_count_sum",
      type: "number",
      format: "int64",
    },
    opentelemetryApmHostTop99p: {
      baseName: "opentelemetry_apm_host_top99p",
      type: "number",
      format: "int64",
    },
    opentelemetryHostTop99p: {
      baseName: "opentelemetry_host_top99p",
      type: "number",
      format: "int64",
    },
    orgs: {
      baseName: "orgs",
      type: "Array<UsageSummaryDateOrg>",
    },
    productAnalyticsSum: {
      baseName: "product_analytics_sum",
      type: "number",
      format: "int64",
    },
    profilingAasCountTop99p: {
      baseName: "profiling_aas_count_top99p",
      type: "number",
      format: "int64",
    },
    profilingHostTop99p: {
      baseName: "profiling_host_top99p",
      type: "number",
      format: "int64",
    },
    proxmoxHostSum: {
      baseName: "proxmox_host_sum",
      type: "number",
      format: "int64",
    },
    proxmoxHostTop99p: {
      baseName: "proxmox_host_top99p",
      type: "number",
      format: "int64",
    },
    publishedAppHwm: {
      baseName: "published_app_hwm",
      type: "number",
      format: "int64",
    },
    rumBrowserAndMobileSessionCount: {
      baseName: "rum_browser_and_mobile_session_count",
      type: "number",
      format: "int64",
    },
    rumBrowserLegacySessionCountSum: {
      baseName: "rum_browser_legacy_session_count_sum",
      type: "number",
      format: "int64",
    },
    rumBrowserLiteSessionCountSum: {
      baseName: "rum_browser_lite_session_count_sum",
      type: "number",
      format: "int64",
    },
    rumBrowserReplaySessionCountSum: {
      baseName: "rum_browser_replay_session_count_sum",
      type: "number",
      format: "int64",
    },
    rumIndexedSessionsSum: {
      baseName: "rum_indexed_sessions_sum",
      type: "number",
      format: "int64",
    },
    rumIngestedSessionsSum: {
      baseName: "rum_ingested_sessions_sum",
      type: "number",
      format: "int64",
    },
    rumLiteSessionCountSum: {
      baseName: "rum_lite_session_count_sum",
      type: "number",
      format: "int64",
    },
    rumMobileLegacySessionCountAndroidSum: {
      baseName: "rum_mobile_legacy_session_count_android_sum",
      type: "number",
      format: "int64",
    },
    rumMobileLegacySessionCountFlutterSum: {
      baseName: "rum_mobile_legacy_session_count_flutter_sum",
      type: "number",
      format: "int64",
    },
    rumMobileLegacySessionCountIosSum: {
      baseName: "rum_mobile_legacy_session_count_ios_sum",
      type: "number",
      format: "int64",
    },
    rumMobileLegacySessionCountReactnativeSum: {
      baseName: "rum_mobile_legacy_session_count_reactnative_sum",
      type: "number",
      format: "int64",
    },
    rumMobileLegacySessionCountRokuSum: {
      baseName: "rum_mobile_legacy_session_count_roku_sum",
      type: "number",
      format: "int64",
    },
    rumMobileLiteSessionCountAndroidSum: {
      baseName: "rum_mobile_lite_session_count_android_sum",
      type: "number",
      format: "int64",
    },
    rumMobileLiteSessionCountFlutterSum: {
      baseName: "rum_mobile_lite_session_count_flutter_sum",
      type: "number",
      format: "int64",
    },
    rumMobileLiteSessionCountIosSum: {
      baseName: "rum_mobile_lite_session_count_ios_sum",
      type: "number",
      format: "int64",
    },
    rumMobileLiteSessionCountKotlinmultiplatformSum: {
      baseName: "rum_mobile_lite_session_count_kotlinmultiplatform_sum",
      type: "number",
      format: "int64",
    },
    rumMobileLiteSessionCountReactnativeSum: {
      baseName: "rum_mobile_lite_session_count_reactnative_sum",
      type: "number",
      format: "int64",
    },
    rumMobileLiteSessionCountRokuSum: {
      baseName: "rum_mobile_lite_session_count_roku_sum",
      type: "number",
      format: "int64",
    },
    rumMobileLiteSessionCountUnitySum: {
      baseName: "rum_mobile_lite_session_count_unity_sum",
      type: "number",
      format: "int64",
    },
    rumMobileReplaySessionCountAndroidSum: {
      baseName: "rum_mobile_replay_session_count_android_sum",
      type: "number",
      format: "int64",
    },
    rumMobileReplaySessionCountIosSum: {
      baseName: "rum_mobile_replay_session_count_ios_sum",
      type: "number",
      format: "int64",
    },
    rumMobileReplaySessionCountKotlinmultiplatformSum: {
      baseName: "rum_mobile_replay_session_count_kotlinmultiplatform_sum",
      type: "number",
      format: "int64",
    },
    rumMobileReplaySessionCountReactnativeSum: {
      baseName: "rum_mobile_replay_session_count_reactnative_sum",
      type: "number",
      format: "int64",
    },
    rumReplaySessionCountSum: {
      baseName: "rum_replay_session_count_sum",
      type: "number",
      format: "int64",
    },
    rumSessionCountSum: {
      baseName: "rum_session_count_sum",
      type: "number",
      format: "int64",
    },
    rumSessionReplayAddOnSum: {
      baseName: "rum_session_replay_add_on_sum",
      type: "number",
      format: "int64",
    },
    rumTotalSessionCountSum: {
      baseName: "rum_total_session_count_sum",
      type: "number",
      format: "int64",
    },
    rumUnitsSum: {
      baseName: "rum_units_sum",
      type: "number",
      format: "int64",
    },
    scaFargateCountAvg: {
      baseName: "sca_fargate_count_avg",
      type: "number",
      format: "int64",
    },
    scaFargateCountHwm: {
      baseName: "sca_fargate_count_hwm",
      type: "number",
      format: "int64",
    },
    sdsApmScannedBytesSum: {
      baseName: "sds_apm_scanned_bytes_sum",
      type: "number",
      format: "int64",
    },
    sdsEventsScannedBytesSum: {
      baseName: "sds_events_scanned_bytes_sum",
      type: "number",
      format: "int64",
    },
    sdsLogsScannedBytesSum: {
      baseName: "sds_logs_scanned_bytes_sum",
      type: "number",
      format: "int64",
    },
    sdsRumScannedBytesSum: {
      baseName: "sds_rum_scanned_bytes_sum",
      type: "number",
      format: "int64",
    },
    sdsTotalScannedBytesSum: {
      baseName: "sds_total_scanned_bytes_sum",
      type: "number",
      format: "int64",
    },
    serverlessAppsApmApmAzureAppserviceInstancesAvg: {
      baseName: "serverless_apps_apm_apm_azure_appservice_instances_avg",
      type: "number",
      format: "int64",
    },
    serverlessAppsApmApmAzureAzurefunctionInstancesAvg: {
      baseName: "serverless_apps_apm_apm_azure_azurefunction_instances_avg",
      type: "number",
      format: "int64",
    },
    serverlessAppsApmApmAzureContainerappInstancesAvg: {
      baseName: "serverless_apps_apm_apm_azure_containerapp_instances_avg",
      type: "number",
      format: "int64",
    },
    serverlessAppsApmApmFargateEcsTasksAvg: {
      baseName: "serverless_apps_apm_apm_fargate_ecs_tasks_avg",
      type: "number",
      format: "int64",
    },
    serverlessAppsApmApmGcpCloudfunctionInstancesAvg: {
      baseName: "serverless_apps_apm_apm_gcp_cloudfunction_instances_avg",
      type: "number",
      format: "int64",
    },
    serverlessAppsApmApmGcpCloudrunInstancesAvg: {
      baseName: "serverless_apps_apm_apm_gcp_cloudrun_instances_avg",
      type: "number",
      format: "int64",
    },
    serverlessAppsApmAvg: {
      baseName: "serverless_apps_apm_avg",
      type: "number",
      format: "int64",
    },
    serverlessAppsApmExclFargateApmAzureAppserviceInstancesAvg: {
      baseName:
        "serverless_apps_apm_excl_fargate_apm_azure_appservice_instances_avg",
      type: "number",
      format: "int64",
    },
    serverlessAppsApmExclFargateApmAzureAzurefunctionInstancesAvg: {
      baseName:
        "serverless_apps_apm_excl_fargate_apm_azure_azurefunction_instances_avg",
      type: "number",
      format: "int64",
    },
    serverlessAppsApmExclFargateApmAzureContainerappInstancesAvg: {
      baseName:
        "serverless_apps_apm_excl_fargate_apm_azure_containerapp_instances_avg",
      type: "number",
      format: "int64",
    },
    serverlessAppsApmExclFargateApmGcpCloudfunctionInstancesAvg: {
      baseName:
        "serverless_apps_apm_excl_fargate_apm_gcp_cloudfunction_instances_avg",
      type: "number",
      format: "int64",
    },
    serverlessAppsApmExclFargateApmGcpCloudrunInstancesAvg: {
      baseName:
        "serverless_apps_apm_excl_fargate_apm_gcp_cloudrun_instances_avg",
      type: "number",
      format: "int64",
    },
    serverlessAppsApmExclFargateAvg: {
      baseName: "serverless_apps_apm_excl_fargate_avg",
      type: "number",
      format: "int64",
    },
    serverlessAppsAzureContainerAppInstancesAvg: {
      baseName: "serverless_apps_azure_container_app_instances_avg",
      type: "number",
      format: "int64",
    },
    serverlessAppsAzureCountAvg: {
      baseName: "serverless_apps_azure_count_avg",
      type: "number",
      format: "int64",
    },
    serverlessAppsAzureFunctionAppInstancesAvg: {
      baseName: "serverless_apps_azure_function_app_instances_avg",
      type: "number",
      format: "int64",
    },
    serverlessAppsAzureWebAppInstancesAvg: {
      baseName: "serverless_apps_azure_web_app_instances_avg",
      type: "number",
      format: "int64",
    },
    serverlessAppsEcsAvg: {
      baseName: "serverless_apps_ecs_avg",
      type: "number",
      format: "int64",
    },
    serverlessAppsEksAvg: {
      baseName: "serverless_apps_eks_avg",
      type: "number",
      format: "int64",
    },
    serverlessAppsExclFargateAvg: {
      baseName: "serverless_apps_excl_fargate_avg",
      type: "number",
      format: "int64",
    },
    serverlessAppsExclFargateAzureContainerAppInstancesAvg: {
      baseName:
        "serverless_apps_excl_fargate_azure_container_app_instances_avg",
      type: "number",
      format: "int64",
    },
    serverlessAppsExclFargateAzureFunctionAppInstancesAvg: {
      baseName: "serverless_apps_excl_fargate_azure_function_app_instances_avg",
      type: "number",
      format: "int64",
    },
    serverlessAppsExclFargateAzureWebAppInstancesAvg: {
      baseName: "serverless_apps_excl_fargate_azure_web_app_instances_avg",
      type: "number",
      format: "int64",
    },
    serverlessAppsExclFargateGoogleCloudFunctionsInstancesAvg: {
      baseName:
        "serverless_apps_excl_fargate_google_cloud_functions_instances_avg",
      type: "number",
      format: "int64",
    },
    serverlessAppsExclFargateGoogleCloudRunInstancesAvg: {
      baseName: "serverless_apps_excl_fargate_google_cloud_run_instances_avg",
      type: "number",
      format: "int64",
    },
    serverlessAppsGoogleCloudFunctionsInstancesAvg: {
      baseName: "serverless_apps_google_cloud_functions_instances_avg",
      type: "number",
      format: "int64",
    },
    serverlessAppsGoogleCloudRunInstancesAvg: {
      baseName: "serverless_apps_google_cloud_run_instances_avg",
      type: "number",
      format: "int64",
    },
    serverlessAppsGoogleCountAvg: {
      baseName: "serverless_apps_google_count_avg",
      type: "number",
      format: "int64",
    },
    serverlessAppsTotalCountAvg: {
      baseName: "serverless_apps_total_count_avg",
      type: "number",
      format: "int64",
    },
    siemAnalyzedLogsAddOnCountSum: {
      baseName: "siem_analyzed_logs_add_on_count_sum",
      type: "number",
      format: "int64",
    },
    syntheticsBrowserCheckCallsCountSum: {
      baseName: "synthetics_browser_check_calls_count_sum",
      type: "number",
      format: "int64",
    },
    syntheticsCheckCallsCountSum: {
      baseName: "synthetics_check_calls_count_sum",
      type: "number",
      format: "int64",
    },
    syntheticsMobileTestRunsSum: {
      baseName: "synthetics_mobile_test_runs_sum",
      type: "number",
      format: "int64",
    },
    syntheticsParallelTestingMaxSlotsHwm: {
      baseName: "synthetics_parallel_testing_max_slots_hwm",
      type: "number",
      format: "int64",
    },
    traceSearchIndexedEventsCountSum: {
      baseName: "trace_search_indexed_events_count_sum",
      type: "number",
      format: "int64",
    },
    twolIngestedEventsBytesSum: {
      baseName: "twol_ingested_events_bytes_sum",
      type: "number",
      format: "int64",
    },
    universalServiceMonitoringHostTop99p: {
      baseName: "universal_service_monitoring_host_top99p",
      type: "number",
      format: "int64",
    },
    vsphereHostTop99p: {
      baseName: "vsphere_host_top99p",
      type: "number",
      format: "int64",
    },
    vulnManagementHostCountTop99p: {
      baseName: "vuln_management_host_count_top99p",
      type: "number",
      format: "int64",
    },
    workflowExecutionsUsageSum: {
      baseName: "workflow_executions_usage_sum",
      type: "number",
      format: "int64",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageSummaryDate.attributeTypeMap;
  }

  public constructor() {}
}
