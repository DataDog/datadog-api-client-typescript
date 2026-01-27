/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsByRetention } from "./LogsByRetention";
import { UsageSummaryDate } from "./UsageSummaryDate";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response summarizing all usage aggregated across the months in the request for all organizations, and broken down by month and by organization.
 */
export class UsageSummaryResponse {
  /**
   * Shows the 99th percentile of all agent hosts over all hours in the current month for all organizations.
   */
  "agentHostTop99PSum"?: number;
  /**
   * Shows the 99th percentile of all Azure app services using APM over all hours in the current month all organizations.
   */
  "apmAzureAppServiceHostTop99PSum"?: number;
  /**
   * Shows the 99th percentile of all APM DevSecOps hosts over all hours in the current month for all organizations.
   */
  "apmDevsecopsHostTop99PSum"?: number;
  /**
   * Shows the sum of the 99th percentile of all distinct standalone Enterprise hosts over all hours in the current month for all organizations.
   */
  "apmEnterpriseStandaloneHostsTop99PSum"?: number;
  /**
   * Shows the average of all APM ECS Fargate tasks over all hours in the current month for all organizations.
   */
  "apmFargateCountAvgSum"?: number;
  /**
   * Shows the 99th percentile of all distinct APM hosts over all hours in the current month for all organizations.
   */
  "apmHostTop99PSum"?: number;
  /**
   * Shows the sum of the 99th percentile of all distinct standalone Pro hosts over all hours in the current month for all organizations.
   */
  "apmProStandaloneHostsTop99PSum"?: number;
  /**
   * Shows the average of all Application Security Monitoring ECS Fargate tasks over all hours in the current month for all organizations.
   */
  "appsecFargateCountAvgSum"?: number;
  /**
   * Shows the sum of all Application Security Monitoring Serverless invocations over all hours in the current months for all organizations.
   */
  "asmServerlessAggSum"?: number;
  /**
   * Shows the sum of all audit logs lines indexed over all hours in the current month for all organizations (To be deprecated on October 1st, 2024).
   */
  "auditLogsLinesIndexedAggSum"?: number;
  /**
   * Shows the total number of organizations that had Audit Trail enabled over a specific number of months.
   */
  "auditTrailEnabledHwmSum"?: number;
  /**
   * The average total count for Fargate Container Profiler over all hours in the current month for all organizations.
   */
  "avgProfiledFargateTasksSum"?: number;
  /**
   * Shows the 99th percentile of all AWS hosts over all hours in the current month for all organizations.
   */
  "awsHostTop99PSum"?: number;
  /**
   * Shows the average of the number of functions that executed 1 or more times each hour in the current month for all organizations.
   */
  "awsLambdaFuncCount"?: number;
  /**
   * Shows the sum of all AWS Lambda invocations over all hours in the current month for all organizations.
   */
  "awsLambdaInvocationsSum"?: number;
  /**
   * Shows the 99th percentile of all Azure app services over all hours in the current month for all organizations.
   */
  "azureAppServiceTop99PSum"?: number;
  /**
   * Shows the 99th percentile of all Azure hosts over all hours in the current month for all organizations.
   */
  "azureHostTop99PSum"?: number;
  /**
   * Shows the sum of all log bytes ingested over all hours in the current month for all organizations.
   */
  "billableIngestedBytesAggSum"?: number;
  /**
   * Shows the sum of all Bits AI Investigations over all hours in the current month for all organizations.
   */
  "bitsAiInvestigationsAggSum"?: number;
  /**
   * Shows the sum of all browser lite sessions over all hours in the current month for all organizations (To be deprecated on October 1st, 2024).
   */
  "browserRumLiteSessionCountAggSum"?: number;
  /**
   * Shows the sum of all browser replay sessions over all hours in the current month for all organizations (To be deprecated on October 1st, 2024).
   */
  "browserRumReplaySessionCountAggSum"?: number;
  /**
   * Shows the sum of all browser RUM units over all hours in the current month for all organizations (To be deprecated on October 1st, 2024).
   */
  "browserRumUnitsAggSum"?: number;
  /**
   * Shows the sum of the last value of the amount of cloud spend monitored for Enterprise in the current month for all organizations.
   */
  "ccmSpendMonitoredEntLastSum"?: number;
  /**
   * Shows the sum of the last value of the amount of cloud spend monitored for Pro in the current month for all organizations.
   */
  "ccmSpendMonitoredProLastSum"?: number;
  /**
   * Shows the sum of all CI pipeline indexed spans over all hours in the current month for all organizations.
   */
  "ciPipelineIndexedSpansAggSum"?: number;
  /**
   * Shows the sum of all CI test indexed spans over all hours in the current month for all organizations.
   */
  "ciTestIndexedSpansAggSum"?: number;
  /**
   * Shows the high-water mark of all CI visibility intelligent test runner committers over all hours in the current month for all organizations.
   */
  "ciVisibilityItrCommittersHwmSum"?: number;
  /**
   * Shows the high-water mark of all CI visibility pipeline committers over all hours in the current month for all organizations.
   */
  "ciVisibilityPipelineCommittersHwmSum"?: number;
  /**
   * Shows the high-water mark of all CI visibility test committers over all hours in the current month for all organizations.
   */
  "ciVisibilityTestCommittersHwmSum"?: number;
  /**
   * Sum of the host count average for Cloud Cost Management for AWS.
   */
  "cloudCostManagementAwsHostCountAvgSum"?: number;
  /**
   * Sum of the host count average for Cloud Cost Management for Azure.
   */
  "cloudCostManagementAzureHostCountAvgSum"?: number;
  /**
   * Sum of the host count average for Cloud Cost Management for GCP.
   */
  "cloudCostManagementGcpHostCountAvgSum"?: number;
  /**
   * Sum of the host count average for Cloud Cost Management for all cloud providers.
   */
  "cloudCostManagementHostCountAvgSum"?: number;
  /**
   * Sum of the average host counts for Cloud Cost Management on OCI.
   */
  "cloudCostManagementOciHostCountAvgSum"?: number;
  /**
   * Shows the sum of all Cloud Security Information and Event Management events over all hours in the current month for all organizations.
   */
  "cloudSiemEventsAggSum"?: number;
  /**
   * Shows the high-water mark of all Static Analysis committers over all hours in the current month for all organizations.
   */
  "codeAnalysisSaCommittersHwmSum"?: number;
  /**
   * Shows the high-water mark of all static Software Composition Analysis committers over all hours in the current month for all organizations.
   */
  "codeAnalysisScaCommittersHwmSum"?: number;
  /**
   * Shows the 99th percentile of all Code Security hosts over all hours in the current month for all organizations.
   */
  "codeSecurityHostTop99PSum"?: number;
  /**
   * Shows the average of all distinct containers over all hours in the current month for all organizations.
   */
  "containerAvgSum"?: number;
  /**
   * Shows the average of the containers without the Datadog Agent over all hours in the current month for all organizations.
   */
  "containerExclAgentAvgSum"?: number;
  /**
   * Shows the sum of the high-water marks of all distinct containers over all hours in the current month for all organizations.
   */
  "containerHwmSum"?: number;
  /**
   * Shows the sum of all Cloud Security Management Enterprise compliance containers over all hours in the current month for all organizations.
   */
  "csmContainerEnterpriseComplianceCountAggSum"?: number;
  /**
   * Shows the sum of all Cloud Security Management Enterprise Cloud Workload Security containers over all hours in the current month for all organizations.
   */
  "csmContainerEnterpriseCwsCountAggSum"?: number;
  /**
   * Shows the sum of all Cloud Security Management Enterprise containers over all hours in the current month for all organizations.
   */
  "csmContainerEnterpriseTotalCountAggSum"?: number;
  /**
   * Shows the 99th percentile of all Cloud Security Management Enterprise Azure app services hosts over all hours in the current month for all organizations.
   */
  "csmHostEnterpriseAasHostCountTop99PSum"?: number;
  /**
   * Shows the 99th percentile of all Cloud Security Management Enterprise AWS hosts over all hours in the current month for all organizations.
   */
  "csmHostEnterpriseAwsHostCountTop99PSum"?: number;
  /**
   * Shows the 99th percentile of all Cloud Security Management Enterprise Azure hosts over all hours in the current month for all organizations.
   */
  "csmHostEnterpriseAzureHostCountTop99PSum"?: number;
  /**
   * Shows the 99th percentile of all Cloud Security Management Enterprise compliance hosts over all hours in the current month for all organizations.
   */
  "csmHostEnterpriseComplianceHostCountTop99PSum"?: number;
  /**
   * Shows the 99th percentile of all Cloud Security Management Enterprise Cloud Workload Security hosts over all hours in the current month for all organizations.
   */
  "csmHostEnterpriseCwsHostCountTop99PSum"?: number;
  /**
   * Shows the 99th percentile of all Cloud Security Management Enterprise GCP hosts over all hours in the current month for all organizations.
   */
  "csmHostEnterpriseGcpHostCountTop99PSum"?: number;
  /**
   * Shows the 99th percentile of all Cloud Security Management Enterprise hosts over all hours in the current month for all organizations.
   */
  "csmHostEnterpriseTotalHostCountTop99PSum"?: number;
  /**
   * Shows the 99th percentile of all Cloud Security Management Pro Azure app services hosts over all hours in the current month for all organizations.
   */
  "cspmAasHostTop99PSum"?: number;
  /**
   * Shows the 99th percentile of all Cloud Security Management Pro AWS hosts over all hours in the current month for all organizations.
   */
  "cspmAwsHostTop99PSum"?: number;
  /**
   * Shows the 99th percentile of all Cloud Security Management Pro Azure hosts over all hours in the current month for all organizations.
   */
  "cspmAzureHostTop99PSum"?: number;
  /**
   * Shows the average number of Cloud Security Management Pro containers over all hours in the current month for all organizations.
   */
  "cspmContainerAvgSum"?: number;
  /**
   * Shows the sum of the high-water marks of Cloud Security Management Pro containers over all hours in the current month for all organizations.
   */
  "cspmContainerHwmSum"?: number;
  /**
   * Shows the 99th percentile of all Cloud Security Management Pro GCP hosts over all hours in the current month for all organizations.
   */
  "cspmGcpHostTop99PSum"?: number;
  /**
   * Shows the 99th percentile of all Cloud Security Management Pro hosts over all hours in the current month for all organizations.
   */
  "cspmHostTop99PSum"?: number;
  /**
   * Shows the average number of distinct historical custom metrics over all hours in the current month for all organizations.
   */
  "customHistoricalTsSum"?: number;
  /**
   * Shows the average number of distinct live custom metrics over all hours in the current month for all organizations.
   */
  "customLiveTsSum"?: number;
  /**
   * Shows the average number of distinct custom metrics over all hours in the current month for all organizations.
   */
  "customTsSum"?: number;
  /**
   * Shows the average of all distinct Cloud Workload Security containers over all hours in the current month for all organizations.
   */
  "cwsContainerAvgSum"?: number;
  /**
   * Shows the average of all distinct Cloud Workload Security Fargate tasks over all hours in the current month for all organizations.
   */
  "cwsFargateTaskAvgSum"?: number;
  /**
   * Shows the 99th percentile of all Cloud Workload Security hosts over all hours in the current month for all organizations.
   */
  "cwsHostTop99PSum"?: number;
  /**
   * Shows the sum of Data Jobs Monitoring hosts over all hours in the current months for all organizations
   */
  "dataJobsMonitoringHostHrAggSum"?: number;
  /**
   * Shows the 99th percentile of all Database Monitoring hosts over all hours in the current month for all organizations.
   */
  "dbmHostTop99PSum"?: number;
  /**
   * Shows the average of all distinct Database Monitoring Normalized Queries over all hours in the current month for all organizations.
   */
  "dbmQueriesAvgSum"?: number;
  /**
   * Shows the last date of usage in the current month for all organizations.
   */
  "endDate"?: Date;
  /**
   * Shows the sum of all ephemeral infrastructure hosts with the Datadog Agent over all hours in the current month for all organizations.
   */
  "ephInfraHostAgentAggSum"?: number;
  /**
   * Shows the sum of all ephemeral infrastructure hosts on Alibaba over all hours in the current month for all organizations.
   */
  "ephInfraHostAlibabaAggSum"?: number;
  /**
   * Shows the sum of all ephemeral infrastructure hosts on AWS over all hours in the current month for all organizations.
   */
  "ephInfraHostAwsAggSum"?: number;
  /**
   * Shows the sum of all ephemeral infrastructure hosts on Azure over all hours in the current month for all organizations.
   */
  "ephInfraHostAzureAggSum"?: number;
  /**
   * Shows the sum of all ephemeral infrastructure hosts for Enterprise over all hours in the current month for all organizations.
   */
  "ephInfraHostEntAggSum"?: number;
  /**
   * Shows the sum of all ephemeral infrastructure hosts on GCP over all hours in the current month for all organizations.
   */
  "ephInfraHostGcpAggSum"?: number;
  /**
   * Shows the sum of all ephemeral infrastructure hosts on Heroku over all hours in the current month for all organizations.
   */
  "ephInfraHostHerokuAggSum"?: number;
  /**
   * Shows the sum of all ephemeral infrastructure hosts with only Azure App Services over all hours in the current month for all organizations.
   */
  "ephInfraHostOnlyAasAggSum"?: number;
  /**
   * Shows the sum of all ephemeral infrastructure hosts with only vSphere over all hours in the current month for all organizations.
   */
  "ephInfraHostOnlyVsphereAggSum"?: number;
  /**
   * Shows the sum of all ephemeral hosts reported by the Datadog exporter for the OpenTelemetry Collector over all hours in the current month for all organizations.
   */
  "ephInfraHostOpentelemetryAggSum"?: number;
  /**
   * Shows the sum of all ephemeral APM hosts reported by the Datadog exporter for the OpenTelemetry Collector over all hours in the current month for all organizations.
   */
  "ephInfraHostOpentelemetryApmAggSum"?: number;
  /**
   * Shows the sum of all ephemeral infrastructure hosts for Pro over all hours in the current month for all organizations.
   */
  "ephInfraHostProAggSum"?: number;
  /**
   * Shows the sum of all ephemeral infrastructure hosts for Pro Plus over all hours in the current month for all organizations.
   */
  "ephInfraHostProplusAggSum"?: number;
  /**
   * Sum of all ephemeral infrastructure hosts for Proxmox over all hours in the current month for all organizations.
   */
  "ephInfraHostProxmoxAggSum"?: number;
  /**
   * Shows the sum of all Error Tracking APM error events over all hours in the current month for all organizations.
   */
  "errorTrackingApmErrorEventsAggSum"?: number;
  /**
   * Shows the sum of all Error Tracking error events over all hours in the current month for all organizations.
   */
  "errorTrackingErrorEventsAggSum"?: number;
  /**
   * Shows the sum of all Error Tracking events over all hours in the current months for all organizations.
   */
  "errorTrackingEventsAggSum"?: number;
  /**
   * Shows the sum of all Error Tracking RUM error events over all hours in the current month for all organizations.
   */
  "errorTrackingRumErrorEventsAggSum"?: number;
  /**
   * Shows the sum of all Event Management correlations over all hours in the current month for all organizations.
   */
  "eventManagementCorrelationAggSum"?: number;
  /**
   * Shows the sum of all Event Management correlated events over all hours in the current month for all organizations.
   */
  "eventManagementCorrelationCorrelatedEventsAggSum"?: number;
  /**
   * Shows the sum of all Event Management correlated related events over all hours in the current month for all organizations.
   */
  "eventManagementCorrelationCorrelatedRelatedEventsAggSum"?: number;
  /**
   * The average number of Profiling Fargate tasks over all hours in the current month for all organizations.
   */
  "fargateContainerProfilerProfilingFargateAvgSum"?: number;
  /**
   * The average number of Profiling Fargate Elastic Kubernetes Service tasks over all hours in the current month for all organizations.
   */
  "fargateContainerProfilerProfilingFargateEksAvgSum"?: number;
  /**
   * Shows the average of all Fargate tasks over all hours in the current month for all organizations.
   */
  "fargateTasksCountAvgSum"?: number;
  /**
   * Shows the sum of the high-water marks of all Fargate tasks over all hours in the current month for all organizations.
   */
  "fargateTasksCountHwmSum"?: number;
  /**
   * Shows the average number of Flex Logs Compute Large Instances over all hours in the current months for all organizations.
   */
  "flexLogsComputeLargeAvgSum"?: number;
  /**
   * Shows the average number of Flex Logs Compute Medium Instances over all hours in the current months for all organizations.
   */
  "flexLogsComputeMediumAvgSum"?: number;
  /**
   * Shows the average number of Flex Logs Compute Small Instances over all hours in the current months for all organizations.
   */
  "flexLogsComputeSmallAvgSum"?: number;
  /**
   * Shows the average number of Flex Logs Compute Extra Large Instances over all hours in the current months for all organizations.
   */
  "flexLogsComputeXlargeAvgSum"?: number;
  /**
   * Shows the average number of Flex Logs Compute Extra Small Instances over all hours in the current months for all organizations.
   */
  "flexLogsComputeXsmallAvgSum"?: number;
  /**
   * Shows the average number of Flex Logs Starter Instances over all hours in the current months for all organizations.
   */
  "flexLogsStarterAvgSum"?: number;
  /**
   * Shows the average number of Flex Logs Starter Storage Index Instances over all hours in the current months for all organizations.
   */
  "flexLogsStarterStorageIndexAvgSum"?: number;
  /**
   * Shows the average number of Flex Logs Starter Storage Retention Adjustment Instances over all hours in the current months for all organizations.
   */
  "flexLogsStarterStorageRetentionAdjustmentAvgSum"?: number;
  /**
   * Shows the average of all Flex Stored Logs over all hours in the current months for all organizations.
   */
  "flexStoredLogsAvgSum"?: number;
  /**
   * Shows the sum of all logs forwarding bytes over all hours in the current month for all organizations (data available as of April 1, 2023)
   */
  "forwardingEventsBytesAggSum"?: number;
  /**
   * Shows the 99th percentile of all GCP hosts over all hours in the current month for all organizations.
   */
  "gcpHostTop99PSum"?: number;
  /**
   * Shows the 99th percentile of all Heroku dynos over all hours in the current month for all organizations.
   */
  "herokuHostTop99PSum"?: number;
  /**
   * Shows sum of the high-water marks of incident management monthly active users in the current month for all organizations.
   */
  "incidentManagementMonthlyActiveUsersHwmSum"?: number;
  /**
   * Shows the sum of the high-water marks of Incident Management seats over all hours in the current month for all organizations.
   */
  "incidentManagementSeatsHwmSum"?: number;
  /**
   * Shows the sum of all log events indexed over all hours in the current month for all organizations (To be deprecated on October 1st, 2024).
   */
  "indexedEventsCountAggSum"?: number;
  /**
   * Shows the 99th percentile of all distinct infrastructure hosts over all hours in the current month for all organizations.
   */
  "infraHostTop99PSum"?: number;
  /**
   * Shows the sum of all log bytes ingested over all hours in the current month for all organizations.
   */
  "ingestedEventsBytesAggSum"?: number;
  /**
   * Shows the sum of all IoT devices over all hours in the current month for all organizations.
   */
  "iotDeviceAggSum"?: number;
  /**
   * Shows the 99th percentile of all IoT devices over all hours in the current month of all organizations.
   */
  "iotDeviceTop99PSum"?: number;
  /**
   * Shows the most recent hour in the current month for all organizations for which all usages were calculated.
   */
  "lastUpdated"?: Date;
  /**
   * Shows the sum of all live logs indexed over all hours in the current month for all organization (To be deprecated on October 1st, 2024).
   */
  "liveIndexedEventsAggSum"?: number;
  /**
   * Shows the sum of all live logs bytes ingested over all hours in the current month for all organizations (data available as of December 1, 2020).
   */
  "liveIngestedBytesAggSum"?: number;
  /**
   * Sum of all LLM observability sessions for all hours in the current month for all organizations.
   */
  "llmObservabilityAggSum"?: number;
  /**
   * Minimum spend for LLM observability sessions for all hours in the current month for all organizations.
   */
  "llmObservabilityMinSpendAggSum"?: number;
  /**
   * Object containing logs usage data broken down by retention period.
   */
  "logsByRetention"?: LogsByRetention;
  /**
   * Shows the sum of all mobile lite sessions over all hours in the current month for all organizations (To be deprecated on October 1st, 2024).
   */
  "mobileRumLiteSessionCountAggSum"?: number;
  /**
   * Shows the sum of all mobile RUM sessions over all hours in the current month for all organizations (To be deprecated on October 1st, 2024).
   */
  "mobileRumSessionCountAggSum"?: number;
  /**
   * Shows the sum of all mobile RUM sessions on Android over all hours in the current month for all organizations (To be deprecated on October 1st, 2024).
   */
  "mobileRumSessionCountAndroidAggSum"?: number;
  /**
   * Shows the sum of all mobile RUM sessions on Flutter over all hours in the current month for all organizations (To be deprecated on October 1st, 2024).
   */
  "mobileRumSessionCountFlutterAggSum"?: number;
  /**
   * Shows the sum of all mobile RUM sessions on iOS over all hours in the current month for all organizations (To be deprecated on October 1st, 2024).
   */
  "mobileRumSessionCountIosAggSum"?: number;
  /**
   * Shows the sum of all mobile RUM sessions on React Native over all hours in the current month for all organizations (To be deprecated on October 1st, 2024).
   */
  "mobileRumSessionCountReactnativeAggSum"?: number;
  /**
   * Shows the sum of all mobile RUM sessions on Roku over all hours in the current month for all organizations (To be deprecated on October 1st, 2024).
   */
  "mobileRumSessionCountRokuAggSum"?: number;
  /**
   * Shows the sum of all mobile RUM units over all hours in the current month for all organizations (To be deprecated on October 1st, 2024).
   */
  "mobileRumUnitsAggSum"?: number;
  /**
   * Shows the sum of all Network Device Monitoring NetFlow events over all hours in the current month for all organizations.
   */
  "ndmNetflowEventsAggSum"?: number;
  /**
   * Shows the sum of all Network flows indexed over all hours in the current month for all organizations (To be deprecated on October 1st, 2024).
   */
  "netflowIndexedEventsCountAggSum"?: number;
  /**
   * Shows the 99th percentile of all Network Device Monitoring wireless devices over all hours in the current month for all organizations.
   */
  "networkDeviceWirelessTop99PSum"?: number;
  /**
   * Shows the 99th percentile of all distinct Cloud Network Monitoring hosts (formerly known as Network hosts) over all hours in the current month for all organizations.
   */
  "npmHostTop99PSum"?: number;
  /**
   * Sum of all observability pipelines bytes processed over all hours in the current month for all organizations.
   */
  "observabilityPipelinesBytesProcessedAggSum"?: number;
  /**
   * Shows the sum of Oracle Cloud Infrastructure hosts over all hours in the current months for all organizations
   */
  "ociHostAggSum"?: number;
  /**
   * Shows the 99th percentile of Oracle Cloud Infrastructure hosts over all hours in the current months for all organizations
   */
  "ociHostTop99PSum"?: number;
  /**
   * Shows the sum of the high-water marks of On-Call seats over all hours in the current month for all organizations.
   */
  "onCallSeatHwmSum"?: number;
  /**
   * Sum of all online archived events over all hours in the current month for all organizations.
   */
  "onlineArchiveEventsCountAggSum"?: number;
  /**
   * Shows the 99th percentile of APM hosts reported by the Datadog exporter for the OpenTelemetry Collector over all hours in the current month for all organizations.
   */
  "opentelemetryApmHostTop99PSum"?: number;
  /**
   * Shows the 99th percentile of all hosts reported by the Datadog exporter for the OpenTelemetry Collector over all hours in the current month for all organizations.
   */
  "opentelemetryHostTop99PSum"?: number;
  /**
   * Sum of all product analytics sessions for all hours in the current month for all organizations.
   */
  "productAnalyticsAggSum"?: number;
  /**
   * Shows the 99th percentile of all profiled Azure app services over all hours in the current month for all organizations.
   */
  "profilingAasCountTop99PSum"?: number;
  /**
   * Shows the average number of profiled containers over all hours in the current month for all organizations.
   */
  "profilingContainerAgentCountAvg"?: number;
  /**
   * Shows the 99th percentile of all profiled hosts over all hours in the current month for all organizations.
   */
  "profilingHostCountTop99PSum"?: number;
  /**
   * Sum of all Proxmox hosts over all hours in the current month for all organizations.
   */
  "proxmoxHostAggSum"?: number;
  /**
   * Sum of the 99th percentile of all Proxmox hosts over all hours in the current month for all organizations.
   */
  "proxmoxHostTop99PSum"?: number;
  /**
   * Shows the high-water mark of all published applications over all hours in the current month for all organizations.
   */
  "publishedAppHwmSum"?: number;
  /**
   * Shows the sum of all rehydrated logs indexed over all hours in the current month for all organizations (To be deprecated on October 1st, 2024).
   */
  "rehydratedIndexedEventsAggSum"?: number;
  /**
   * Shows the sum of all rehydrated logs bytes ingested over all hours in the current month for all organizations (data available as of December 1, 2020).
   */
  "rehydratedIngestedBytesAggSum"?: number;
  /**
   * Shows the sum of all mobile sessions and all browser lite and legacy sessions over all hours in the current month for all organizations (To be deprecated on October 1st, 2024).
   */
  "rumBrowserAndMobileSessionCount"?: number;
  /**
   * Shows the sum of all browser RUM legacy sessions over all hours in the current month for all organizations (To be introduced on October 1st, 2024).
   */
  "rumBrowserLegacySessionCountAggSum"?: number;
  /**
   * Shows the sum of all browser RUM lite sessions over all hours in the current month for all organizations (To be introduced on October 1st, 2024).
   */
  "rumBrowserLiteSessionCountAggSum"?: number;
  /**
   * Shows the sum of all browser RUM Session Replay counts over all hours in the current month for all organizations (To be introduced on October 1st, 2024).
   */
  "rumBrowserReplaySessionCountAggSum"?: number;
  /**
   * Sum of all RUM indexed sessions for all hours in the current month for all organizations.
   */
  "rumIndexedSessionsAggSum"?: number;
  /**
   * Sum of all RUM ingested sessions for all hours in the current month for all organizations.
   */
  "rumIngestedSessionsAggSum"?: number;
  /**
   * Shows the sum of all RUM lite sessions (browser and mobile) over all hours in the current month for all organizations (To be introduced on October 1st, 2024).
   */
  "rumLiteSessionCountAggSum"?: number;
  /**
   * Shows the sum of all mobile RUM legacy sessions on Android over all hours in the current month for all organizations (To be introduced on October 1st, 2024).
   */
  "rumMobileLegacySessionCountAndroidAggSum"?: number;
  /**
   * Shows the sum of all mobile RUM legacy sessions on Flutter over all hours in the current month for all organizations (To be introduced on October 1st, 2024).
   */
  "rumMobileLegacySessionCountFlutterAggSum"?: number;
  /**
   * Shows the sum of all mobile RUM legacy sessions on iOS over all hours in the current month for all organizations (To be introduced on October 1st, 2024).
   */
  "rumMobileLegacySessionCountIosAggSum"?: number;
  /**
   * Shows the sum of all mobile RUM legacy sessions on React Native over all hours in the current month for all organizations (To be introduced on October 1st, 2024).
   */
  "rumMobileLegacySessionCountReactnativeAggSum"?: number;
  /**
   * Shows the sum of all mobile RUM legacy sessions on Roku over all hours in the current month for all organizations (To be introduced on October 1st, 2024).
   */
  "rumMobileLegacySessionCountRokuAggSum"?: number;
  /**
   * Shows the sum of all mobile RUM lite sessions on Android over all hours in the current month for all organizations (To be introduced on October 1st, 2024).
   */
  "rumMobileLiteSessionCountAndroidAggSum"?: number;
  /**
   * Shows the sum of all mobile RUM lite sessions on Flutter over all hours in the current month for all organizations (To be introduced on October 1st, 2024).
   */
  "rumMobileLiteSessionCountFlutterAggSum"?: number;
  /**
   * Shows the sum of all mobile RUM lite sessions on iOS over all hours in the current month for all organizations (To be introduced on October 1st, 2024).
   */
  "rumMobileLiteSessionCountIosAggSum"?: number;
  /**
   * Shows the sum of all mobile RUM lite sessions on Kotlin Multiplatform over all hours within the current month for all organizations.
   */
  "rumMobileLiteSessionCountKotlinmultiplatformAggSum"?: number;
  /**
   * Shows the sum of all mobile RUM lite sessions on React Native over all hours in the current month for all organizations (To be introduced on October 1st, 2024).
   */
  "rumMobileLiteSessionCountReactnativeAggSum"?: number;
  /**
   * Shows the sum of all mobile RUM lite sessions on Roku over all hours within the current month for all organizations (To be introduced on October 1st, 2024).
   */
  "rumMobileLiteSessionCountRokuAggSum"?: number;
  /**
   * Shows the sum of all mobile RUM lite sessions on Unity over all hours within the current month for all organizations.
   */
  "rumMobileLiteSessionCountUnityAggSum"?: number;
  /**
   * Shows the sum of all mobile RUM replay sessions on Android over all hours within the current month for all organizations.
   */
  "rumMobileReplaySessionCountAndroidAggSum"?: number;
  /**
   * Shows the sum of all mobile RUM replay sessions on iOS over all hours within the current month for all organizations.
   */
  "rumMobileReplaySessionCountIosAggSum"?: number;
  /**
   * Shows the sum of all mobile RUM replay sessions on Kotlin Multiplatform over all hours within the current month for all organizations.
   */
  "rumMobileReplaySessionCountKotlinmultiplatformAggSum"?: number;
  /**
   * Shows the sum of all mobile RUM replay sessions on React Native over all hours within the current month for all organizations.
   */
  "rumMobileReplaySessionCountReactnativeAggSum"?: number;
  /**
   * Shows the sum of all RUM Session Replay counts over all hours in the current month for all organizations (To be introduced on October 1st, 2024).
   */
  "rumReplaySessionCountAggSum"?: number;
  /**
   * Shows the sum of all browser RUM lite sessions over all hours in the current month for all organizations (To be deprecated on October 1st, 2024).
   */
  "rumSessionCountAggSum"?: number;
  /**
   * Sum of all RUM session replay add-on sessions for all hours in the current month for all organizations.
   */
  "rumSessionReplayAddOnAggSum"?: number;
  /**
   * Shows the sum of RUM sessions (browser and mobile) over all hours in the current month for all organizations.
   */
  "rumTotalSessionCountAggSum"?: number;
  /**
   * Shows the sum of all browser and mobile RUM units over all hours in the current month for all organizations (To be deprecated on October 1st, 2024).
   */
  "rumUnitsAggSum"?: number;
  /**
   * Shows the average of all Software Composition Analysis Fargate tasks over all hours in the current months for all organizations.
   */
  "scaFargateCountAvgSum"?: number;
  /**
   * Shows the sum of the high-water marks of all Software Composition Analysis Fargate tasks over all hours in the current months for all organizations.
   */
  "scaFargateCountHwmSum"?: number;
  /**
   * Sum of all APM bytes scanned with sensitive data scanner in the current month for all organizations.
   */
  "sdsApmScannedBytesSum"?: number;
  /**
   * Sum of all event stream events bytes scanned with sensitive data scanner in the current month for all organizations.
   */
  "sdsEventsScannedBytesSum"?: number;
  /**
   * Shows the sum of all bytes scanned of logs usage by the Sensitive Data Scanner over all hours in the current month for all organizations.
   */
  "sdsLogsScannedBytesSum"?: number;
  /**
   * Sum of all RUM bytes scanned with sensitive data scanner in the current month for all organizations.
   */
  "sdsRumScannedBytesSum"?: number;
  /**
   * Shows the sum of all bytes scanned across all usage types by the Sensitive Data Scanner over all hours in the current month for all organizations.
   */
  "sdsTotalScannedBytesSum"?: number;
  /**
   * Sum of the average number of Serverless Apps with Application Performance Monitoring for Azure App Service instances in the current month for all organizations.
   */
  "serverlessAppsApmApmAzureAppserviceInstancesAvgSum"?: number;
  /**
   * Sum of the average number of Serverless Apps with Application Performance Monitoring for Azure Function instances in the current month for all organizations.
   */
  "serverlessAppsApmApmAzureAzurefunctionInstancesAvgSum"?: number;
  /**
   * Sum of the average number of Serverless Apps with Application Performance Monitoring for Azure Container App instances in the current month for all organizations.
   */
  "serverlessAppsApmApmAzureContainerappInstancesAvgSum"?: number;
  /**
   * Sum of the average number of Serverless Apps with Application Performance Monitoring for Fargate Elastic Container Service tasks in the current month for all organizations.
   */
  "serverlessAppsApmApmFargateEcsTasksAvgSum"?: number;
  /**
   * Sum of the average number of Serverless Apps with Application Performance Monitoring for Google Cloud Platform Cloud Function instances in the current month for all organizations.
   */
  "serverlessAppsApmApmGcpCloudfunctionInstancesAvgSum"?: number;
  /**
   * Sum of the average number of Serverless Apps with Application Performance Monitoring for Google Cloud Platform Cloud Run instances in the current month for all organizations.
   */
  "serverlessAppsApmApmGcpCloudrunInstancesAvgSum"?: number;
  /**
   * Sum of the average number of Serverless Apps with Application Performance Monitoring in the current month for all organizations.
   */
  "serverlessAppsApmAvgSum"?: number;
  /**
   * Sum of the average number of Serverless Apps with Application Performance Monitoring excluding Fargate for Azure App Service instances in the current month for all organizations.
   */
  "serverlessAppsApmExclFargateApmAzureAppserviceInstancesAvgSum"?: number;
  /**
   * Sum of the average number of Serverless Apps with Application Performance Monitoring excluding Fargate for Azure Function instances in the current month for all organizations.
   */
  "serverlessAppsApmExclFargateApmAzureAzurefunctionInstancesAvgSum"?: number;
  /**
   * Sum of the average number of Serverless Apps with Application Performance Monitoring excluding Fargate for Azure Container App instances in the current month for all organizations.
   */
  "serverlessAppsApmExclFargateApmAzureContainerappInstancesAvgSum"?: number;
  /**
   * Sum of the average number of Serverless Apps with Application Performance Monitoring excluding Fargate for Google Cloud Platform Cloud Function instances in the current month for all organizations.
   */
  "serverlessAppsApmExclFargateApmGcpCloudfunctionInstancesAvgSum"?: number;
  /**
   * Sum of the average number of Serverless Apps with Application Performance Monitoring excluding Fargate for Google Cloud Platform Cloud Run instances in the current month for all organizations.
   */
  "serverlessAppsApmExclFargateApmGcpCloudrunInstancesAvgSum"?: number;
  /**
   * Sum of the average number of Serverless Apps with Application Performance Monitoring excluding Fargate in the current month for all organizations.
   */
  "serverlessAppsApmExclFargateAvgSum"?: number;
  /**
   * Sum of the average number of Serverless Apps for Azure Container App instances in the current month for all organizations.
   */
  "serverlessAppsAzureContainerAppInstancesAvgSum"?: number;
  /**
   * Sum of the average number of Serverless Apps for Azure in the current month for all organizations.
   */
  "serverlessAppsAzureCountAvgSum"?: number;
  /**
   * Sum of the average number of Serverless Apps for Azure Function App instances in the current month for all organizations.
   */
  "serverlessAppsAzureFunctionAppInstancesAvgSum"?: number;
  /**
   * Sum of the average number of Serverless Apps for Azure Web App instances in the current month for all organizations.
   */
  "serverlessAppsAzureWebAppInstancesAvgSum"?: number;
  /**
   * Sum of the average number of Serverless Apps for Elastic Container Service in the current month for all organizations.
   */
  "serverlessAppsEcsAvgSum"?: number;
  /**
   * Sum of the average number of Serverless Apps for Elastic Kubernetes Service in the current month for all organizations.
   */
  "serverlessAppsEksAvgSum"?: number;
  /**
   * Sum of the average number of Serverless Apps excluding Fargate in the current month for all organizations.
   */
  "serverlessAppsExclFargateAvgSum"?: number;
  /**
   * Sum of the average number of Serverless Apps excluding Fargate for Azure Container App instances in the current month for all organizations.
   */
  "serverlessAppsExclFargateAzureContainerAppInstancesAvgSum"?: number;
  /**
   * Sum of the average number of Serverless Apps excluding Fargate for Azure Function App instances in the current month for all organizations.
   */
  "serverlessAppsExclFargateAzureFunctionAppInstancesAvgSum"?: number;
  /**
   * Sum of the average number of Serverless Apps excluding Fargate for Azure Web App instances in the current month for all organizations.
   */
  "serverlessAppsExclFargateAzureWebAppInstancesAvgSum"?: number;
  /**
   * Sum of the average number of Serverless Apps excluding Fargate for Google Cloud Platform Cloud Functions instances in the current month for all organizations.
   */
  "serverlessAppsExclFargateGoogleCloudFunctionsInstancesAvgSum"?: number;
  /**
   * Sum of the average number of Serverless Apps excluding Fargate for Google Cloud Platform Cloud Run instances in the current month for all organizations.
   */
  "serverlessAppsExclFargateGoogleCloudRunInstancesAvgSum"?: number;
  /**
   * Sum of the average number of Serverless Apps for Google Cloud Platform Cloud Functions instances in the current month for all organizations.
   */
  "serverlessAppsGoogleCloudFunctionsInstancesAvgSum"?: number;
  /**
   * Sum of the average number of Serverless Apps for Google Cloud Platform Cloud Run instances in the current month for all organizations.
   */
  "serverlessAppsGoogleCloudRunInstancesAvgSum"?: number;
  /**
   * Sum of the average number of Serverless Apps for Google Cloud in the current month for all organizations.
   */
  "serverlessAppsGoogleCountAvgSum"?: number;
  /**
   * Sum of the average number of Serverless Apps for Azure and Google Cloud in the current month for all organizations.
   */
  "serverlessAppsTotalCountAvgSum"?: number;
  /**
   * Shows the sum of all log events analyzed by Cloud SIEM over all hours in the current month for all organizations.
   */
  "siemAnalyzedLogsAddOnCountAggSum"?: number;
  /**
   * Shows the first date of usage in the current month for all organizations.
   */
  "startDate"?: Date;
  /**
   * Shows the sum of all Synthetic browser tests over all hours in the current month for all organizations.
   */
  "syntheticsBrowserCheckCallsCountAggSum"?: number;
  /**
   * Shows the sum of all Synthetic API tests over all hours in the current month for all organizations.
   */
  "syntheticsCheckCallsCountAggSum"?: number;
  /**
   * Shows the sum of Synthetic mobile application tests over all hours in the current month for all organizations.
   */
  "syntheticsMobileTestRunsAggSum"?: number;
  /**
   * Shows the sum of the high-water marks of used synthetics parallel testing slots over all hours in the current month for all organizations.
   */
  "syntheticsParallelTestingMaxSlotsHwmSum"?: number;
  /**
   * Shows the sum of all Indexed Spans indexed over all hours in the current month for all organizations.
   */
  "traceSearchIndexedEventsCountAggSum"?: number;
  /**
   * Shows the sum of all ingested APM span bytes over all hours in the current month for all organizations.
   */
  "twolIngestedEventsBytesAggSum"?: number;
  /**
   * Shows the 99th percentile of all Universal Service Monitoring hosts over all hours in the current month for all organizations.
   */
  "universalServiceMonitoringHostTop99PSum"?: number;
  /**
   * An array of objects regarding hourly usage.
   */
  "usage"?: Array<UsageSummaryDate>;
  /**
   * Shows the 99th percentile of all vSphere hosts over all hours in the current month for all organizations.
   */
  "vsphereHostTop99PSum"?: number;
  /**
   * Shows the 99th percentile of all Application Vulnerability Management hosts over all hours in the current month for all organizations.
   */
  "vulnManagementHostCountTop99PSum"?: number;
  /**
   * Sum of all workflows executed over all hours in the current month for all organizations.
   */
  "workflowExecutionsUsageAggSum"?: number;

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
    agentHostTop99PSum: {
      baseName: "agent_host_top99p_sum",
      type: "number",
      format: "int64",
    },
    apmAzureAppServiceHostTop99PSum: {
      baseName: "apm_azure_app_service_host_top99p_sum",
      type: "number",
      format: "int64",
    },
    apmDevsecopsHostTop99PSum: {
      baseName: "apm_devsecops_host_top99p_sum",
      type: "number",
      format: "int64",
    },
    apmEnterpriseStandaloneHostsTop99PSum: {
      baseName: "apm_enterprise_standalone_hosts_top99p_sum",
      type: "number",
      format: "int64",
    },
    apmFargateCountAvgSum: {
      baseName: "apm_fargate_count_avg_sum",
      type: "number",
      format: "int64",
    },
    apmHostTop99PSum: {
      baseName: "apm_host_top99p_sum",
      type: "number",
      format: "int64",
    },
    apmProStandaloneHostsTop99PSum: {
      baseName: "apm_pro_standalone_hosts_top99p_sum",
      type: "number",
      format: "int64",
    },
    appsecFargateCountAvgSum: {
      baseName: "appsec_fargate_count_avg_sum",
      type: "number",
      format: "int64",
    },
    asmServerlessAggSum: {
      baseName: "asm_serverless_agg_sum",
      type: "number",
      format: "int64",
    },
    auditLogsLinesIndexedAggSum: {
      baseName: "audit_logs_lines_indexed_agg_sum",
      type: "number",
      format: "int64",
    },
    auditTrailEnabledHwmSum: {
      baseName: "audit_trail_enabled_hwm_sum",
      type: "number",
      format: "int64",
    },
    avgProfiledFargateTasksSum: {
      baseName: "avg_profiled_fargate_tasks_sum",
      type: "number",
      format: "int64",
    },
    awsHostTop99PSum: {
      baseName: "aws_host_top99p_sum",
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
    azureAppServiceTop99PSum: {
      baseName: "azure_app_service_top99p_sum",
      type: "number",
      format: "int64",
    },
    azureHostTop99PSum: {
      baseName: "azure_host_top99p_sum",
      type: "number",
      format: "int64",
    },
    billableIngestedBytesAggSum: {
      baseName: "billable_ingested_bytes_agg_sum",
      type: "number",
      format: "int64",
    },
    bitsAiInvestigationsAggSum: {
      baseName: "bits_ai_investigations_agg_sum",
      type: "number",
      format: "int64",
    },
    browserRumLiteSessionCountAggSum: {
      baseName: "browser_rum_lite_session_count_agg_sum",
      type: "number",
      format: "int64",
    },
    browserRumReplaySessionCountAggSum: {
      baseName: "browser_rum_replay_session_count_agg_sum",
      type: "number",
      format: "int64",
    },
    browserRumUnitsAggSum: {
      baseName: "browser_rum_units_agg_sum",
      type: "number",
      format: "int64",
    },
    ccmSpendMonitoredEntLastSum: {
      baseName: "ccm_spend_monitored_ent_last_sum",
      type: "number",
      format: "int64",
    },
    ccmSpendMonitoredProLastSum: {
      baseName: "ccm_spend_monitored_pro_last_sum",
      type: "number",
      format: "int64",
    },
    ciPipelineIndexedSpansAggSum: {
      baseName: "ci_pipeline_indexed_spans_agg_sum",
      type: "number",
      format: "int64",
    },
    ciTestIndexedSpansAggSum: {
      baseName: "ci_test_indexed_spans_agg_sum",
      type: "number",
      format: "int64",
    },
    ciVisibilityItrCommittersHwmSum: {
      baseName: "ci_visibility_itr_committers_hwm_sum",
      type: "number",
      format: "int64",
    },
    ciVisibilityPipelineCommittersHwmSum: {
      baseName: "ci_visibility_pipeline_committers_hwm_sum",
      type: "number",
      format: "int64",
    },
    ciVisibilityTestCommittersHwmSum: {
      baseName: "ci_visibility_test_committers_hwm_sum",
      type: "number",
      format: "int64",
    },
    cloudCostManagementAwsHostCountAvgSum: {
      baseName: "cloud_cost_management_aws_host_count_avg_sum",
      type: "number",
      format: "int64",
    },
    cloudCostManagementAzureHostCountAvgSum: {
      baseName: "cloud_cost_management_azure_host_count_avg_sum",
      type: "number",
      format: "int64",
    },
    cloudCostManagementGcpHostCountAvgSum: {
      baseName: "cloud_cost_management_gcp_host_count_avg_sum",
      type: "number",
      format: "int64",
    },
    cloudCostManagementHostCountAvgSum: {
      baseName: "cloud_cost_management_host_count_avg_sum",
      type: "number",
      format: "int64",
    },
    cloudCostManagementOciHostCountAvgSum: {
      baseName: "cloud_cost_management_oci_host_count_avg_sum",
      type: "number",
      format: "int64",
    },
    cloudSiemEventsAggSum: {
      baseName: "cloud_siem_events_agg_sum",
      type: "number",
      format: "int64",
    },
    codeAnalysisSaCommittersHwmSum: {
      baseName: "code_analysis_sa_committers_hwm_sum",
      type: "number",
      format: "int64",
    },
    codeAnalysisScaCommittersHwmSum: {
      baseName: "code_analysis_sca_committers_hwm_sum",
      type: "number",
      format: "int64",
    },
    codeSecurityHostTop99PSum: {
      baseName: "code_security_host_top99p_sum",
      type: "number",
      format: "int64",
    },
    containerAvgSum: {
      baseName: "container_avg_sum",
      type: "number",
      format: "int64",
    },
    containerExclAgentAvgSum: {
      baseName: "container_excl_agent_avg_sum",
      type: "number",
      format: "int64",
    },
    containerHwmSum: {
      baseName: "container_hwm_sum",
      type: "number",
      format: "int64",
    },
    csmContainerEnterpriseComplianceCountAggSum: {
      baseName: "csm_container_enterprise_compliance_count_agg_sum",
      type: "number",
      format: "int64",
    },
    csmContainerEnterpriseCwsCountAggSum: {
      baseName: "csm_container_enterprise_cws_count_agg_sum",
      type: "number",
      format: "int64",
    },
    csmContainerEnterpriseTotalCountAggSum: {
      baseName: "csm_container_enterprise_total_count_agg_sum",
      type: "number",
      format: "int64",
    },
    csmHostEnterpriseAasHostCountTop99PSum: {
      baseName: "csm_host_enterprise_aas_host_count_top99p_sum",
      type: "number",
      format: "int64",
    },
    csmHostEnterpriseAwsHostCountTop99PSum: {
      baseName: "csm_host_enterprise_aws_host_count_top99p_sum",
      type: "number",
      format: "int64",
    },
    csmHostEnterpriseAzureHostCountTop99PSum: {
      baseName: "csm_host_enterprise_azure_host_count_top99p_sum",
      type: "number",
      format: "int64",
    },
    csmHostEnterpriseComplianceHostCountTop99PSum: {
      baseName: "csm_host_enterprise_compliance_host_count_top99p_sum",
      type: "number",
      format: "int64",
    },
    csmHostEnterpriseCwsHostCountTop99PSum: {
      baseName: "csm_host_enterprise_cws_host_count_top99p_sum",
      type: "number",
      format: "int64",
    },
    csmHostEnterpriseGcpHostCountTop99PSum: {
      baseName: "csm_host_enterprise_gcp_host_count_top99p_sum",
      type: "number",
      format: "int64",
    },
    csmHostEnterpriseTotalHostCountTop99PSum: {
      baseName: "csm_host_enterprise_total_host_count_top99p_sum",
      type: "number",
      format: "int64",
    },
    cspmAasHostTop99PSum: {
      baseName: "cspm_aas_host_top99p_sum",
      type: "number",
      format: "int64",
    },
    cspmAwsHostTop99PSum: {
      baseName: "cspm_aws_host_top99p_sum",
      type: "number",
      format: "int64",
    },
    cspmAzureHostTop99PSum: {
      baseName: "cspm_azure_host_top99p_sum",
      type: "number",
      format: "int64",
    },
    cspmContainerAvgSum: {
      baseName: "cspm_container_avg_sum",
      type: "number",
      format: "int64",
    },
    cspmContainerHwmSum: {
      baseName: "cspm_container_hwm_sum",
      type: "number",
      format: "int64",
    },
    cspmGcpHostTop99PSum: {
      baseName: "cspm_gcp_host_top99p_sum",
      type: "number",
      format: "int64",
    },
    cspmHostTop99PSum: {
      baseName: "cspm_host_top99p_sum",
      type: "number",
      format: "int64",
    },
    customHistoricalTsSum: {
      baseName: "custom_historical_ts_sum",
      type: "number",
      format: "int64",
    },
    customLiveTsSum: {
      baseName: "custom_live_ts_sum",
      type: "number",
      format: "int64",
    },
    customTsSum: {
      baseName: "custom_ts_sum",
      type: "number",
      format: "int64",
    },
    cwsContainerAvgSum: {
      baseName: "cws_container_avg_sum",
      type: "number",
      format: "int64",
    },
    cwsFargateTaskAvgSum: {
      baseName: "cws_fargate_task_avg_sum",
      type: "number",
      format: "int64",
    },
    cwsHostTop99PSum: {
      baseName: "cws_host_top99p_sum",
      type: "number",
      format: "int64",
    },
    dataJobsMonitoringHostHrAggSum: {
      baseName: "data_jobs_monitoring_host_hr_agg_sum",
      type: "number",
      format: "int64",
    },
    dbmHostTop99PSum: {
      baseName: "dbm_host_top99p_sum",
      type: "number",
      format: "int64",
    },
    dbmQueriesAvgSum: {
      baseName: "dbm_queries_avg_sum",
      type: "number",
      format: "int64",
    },
    endDate: {
      baseName: "end_date",
      type: "Date",
      format: "date-time",
    },
    ephInfraHostAgentAggSum: {
      baseName: "eph_infra_host_agent_agg_sum",
      type: "number",
      format: "int64",
    },
    ephInfraHostAlibabaAggSum: {
      baseName: "eph_infra_host_alibaba_agg_sum",
      type: "number",
      format: "int64",
    },
    ephInfraHostAwsAggSum: {
      baseName: "eph_infra_host_aws_agg_sum",
      type: "number",
      format: "int64",
    },
    ephInfraHostAzureAggSum: {
      baseName: "eph_infra_host_azure_agg_sum",
      type: "number",
      format: "int64",
    },
    ephInfraHostEntAggSum: {
      baseName: "eph_infra_host_ent_agg_sum",
      type: "number",
      format: "int64",
    },
    ephInfraHostGcpAggSum: {
      baseName: "eph_infra_host_gcp_agg_sum",
      type: "number",
      format: "int64",
    },
    ephInfraHostHerokuAggSum: {
      baseName: "eph_infra_host_heroku_agg_sum",
      type: "number",
      format: "int64",
    },
    ephInfraHostOnlyAasAggSum: {
      baseName: "eph_infra_host_only_aas_agg_sum",
      type: "number",
      format: "int64",
    },
    ephInfraHostOnlyVsphereAggSum: {
      baseName: "eph_infra_host_only_vsphere_agg_sum",
      type: "number",
      format: "int64",
    },
    ephInfraHostOpentelemetryAggSum: {
      baseName: "eph_infra_host_opentelemetry_agg_sum",
      type: "number",
      format: "int64",
    },
    ephInfraHostOpentelemetryApmAggSum: {
      baseName: "eph_infra_host_opentelemetry_apm_agg_sum",
      type: "number",
      format: "int64",
    },
    ephInfraHostProAggSum: {
      baseName: "eph_infra_host_pro_agg_sum",
      type: "number",
      format: "int64",
    },
    ephInfraHostProplusAggSum: {
      baseName: "eph_infra_host_proplus_agg_sum",
      type: "number",
      format: "int64",
    },
    ephInfraHostProxmoxAggSum: {
      baseName: "eph_infra_host_proxmox_agg_sum",
      type: "number",
      format: "int64",
    },
    errorTrackingApmErrorEventsAggSum: {
      baseName: "error_tracking_apm_error_events_agg_sum",
      type: "number",
      format: "int64",
    },
    errorTrackingErrorEventsAggSum: {
      baseName: "error_tracking_error_events_agg_sum",
      type: "number",
      format: "int64",
    },
    errorTrackingEventsAggSum: {
      baseName: "error_tracking_events_agg_sum",
      type: "number",
      format: "int64",
    },
    errorTrackingRumErrorEventsAggSum: {
      baseName: "error_tracking_rum_error_events_agg_sum",
      type: "number",
      format: "int64",
    },
    eventManagementCorrelationAggSum: {
      baseName: "event_management_correlation_agg_sum",
      type: "number",
      format: "int64",
    },
    eventManagementCorrelationCorrelatedEventsAggSum: {
      baseName: "event_management_correlation_correlated_events_agg_sum",
      type: "number",
      format: "int64",
    },
    eventManagementCorrelationCorrelatedRelatedEventsAggSum: {
      baseName:
        "event_management_correlation_correlated_related_events_agg_sum",
      type: "number",
      format: "int64",
    },
    fargateContainerProfilerProfilingFargateAvgSum: {
      baseName: "fargate_container_profiler_profiling_fargate_avg_sum",
      type: "number",
      format: "int64",
    },
    fargateContainerProfilerProfilingFargateEksAvgSum: {
      baseName: "fargate_container_profiler_profiling_fargate_eks_avg_sum",
      type: "number",
      format: "int64",
    },
    fargateTasksCountAvgSum: {
      baseName: "fargate_tasks_count_avg_sum",
      type: "number",
      format: "int64",
    },
    fargateTasksCountHwmSum: {
      baseName: "fargate_tasks_count_hwm_sum",
      type: "number",
      format: "int64",
    },
    flexLogsComputeLargeAvgSum: {
      baseName: "flex_logs_compute_large_avg_sum",
      type: "number",
      format: "int64",
    },
    flexLogsComputeMediumAvgSum: {
      baseName: "flex_logs_compute_medium_avg_sum",
      type: "number",
      format: "int64",
    },
    flexLogsComputeSmallAvgSum: {
      baseName: "flex_logs_compute_small_avg_sum",
      type: "number",
      format: "int64",
    },
    flexLogsComputeXlargeAvgSum: {
      baseName: "flex_logs_compute_xlarge_avg_sum",
      type: "number",
      format: "int64",
    },
    flexLogsComputeXsmallAvgSum: {
      baseName: "flex_logs_compute_xsmall_avg_sum",
      type: "number",
      format: "int64",
    },
    flexLogsStarterAvgSum: {
      baseName: "flex_logs_starter_avg_sum",
      type: "number",
      format: "int64",
    },
    flexLogsStarterStorageIndexAvgSum: {
      baseName: "flex_logs_starter_storage_index_avg_sum",
      type: "number",
      format: "int64",
    },
    flexLogsStarterStorageRetentionAdjustmentAvgSum: {
      baseName: "flex_logs_starter_storage_retention_adjustment_avg_sum",
      type: "number",
      format: "int64",
    },
    flexStoredLogsAvgSum: {
      baseName: "flex_stored_logs_avg_sum",
      type: "number",
      format: "int64",
    },
    forwardingEventsBytesAggSum: {
      baseName: "forwarding_events_bytes_agg_sum",
      type: "number",
      format: "int64",
    },
    gcpHostTop99PSum: {
      baseName: "gcp_host_top99p_sum",
      type: "number",
      format: "int64",
    },
    herokuHostTop99PSum: {
      baseName: "heroku_host_top99p_sum",
      type: "number",
      format: "int64",
    },
    incidentManagementMonthlyActiveUsersHwmSum: {
      baseName: "incident_management_monthly_active_users_hwm_sum",
      type: "number",
      format: "int64",
    },
    incidentManagementSeatsHwmSum: {
      baseName: "incident_management_seats_hwm_sum",
      type: "number",
      format: "int64",
    },
    indexedEventsCountAggSum: {
      baseName: "indexed_events_count_agg_sum",
      type: "number",
      format: "int64",
    },
    infraHostTop99PSum: {
      baseName: "infra_host_top99p_sum",
      type: "number",
      format: "int64",
    },
    ingestedEventsBytesAggSum: {
      baseName: "ingested_events_bytes_agg_sum",
      type: "number",
      format: "int64",
    },
    iotDeviceAggSum: {
      baseName: "iot_device_agg_sum",
      type: "number",
      format: "int64",
    },
    iotDeviceTop99PSum: {
      baseName: "iot_device_top99p_sum",
      type: "number",
      format: "int64",
    },
    lastUpdated: {
      baseName: "last_updated",
      type: "Date",
      format: "date-time",
    },
    liveIndexedEventsAggSum: {
      baseName: "live_indexed_events_agg_sum",
      type: "number",
      format: "int64",
    },
    liveIngestedBytesAggSum: {
      baseName: "live_ingested_bytes_agg_sum",
      type: "number",
      format: "int64",
    },
    llmObservabilityAggSum: {
      baseName: "llm_observability_agg_sum",
      type: "number",
      format: "int64",
    },
    llmObservabilityMinSpendAggSum: {
      baseName: "llm_observability_min_spend_agg_sum",
      type: "number",
      format: "int64",
    },
    logsByRetention: {
      baseName: "logs_by_retention",
      type: "LogsByRetention",
    },
    mobileRumLiteSessionCountAggSum: {
      baseName: "mobile_rum_lite_session_count_agg_sum",
      type: "number",
      format: "int64",
    },
    mobileRumSessionCountAggSum: {
      baseName: "mobile_rum_session_count_agg_sum",
      type: "number",
      format: "int64",
    },
    mobileRumSessionCountAndroidAggSum: {
      baseName: "mobile_rum_session_count_android_agg_sum",
      type: "number",
      format: "int64",
    },
    mobileRumSessionCountFlutterAggSum: {
      baseName: "mobile_rum_session_count_flutter_agg_sum",
      type: "number",
      format: "int64",
    },
    mobileRumSessionCountIosAggSum: {
      baseName: "mobile_rum_session_count_ios_agg_sum",
      type: "number",
      format: "int64",
    },
    mobileRumSessionCountReactnativeAggSum: {
      baseName: "mobile_rum_session_count_reactnative_agg_sum",
      type: "number",
      format: "int64",
    },
    mobileRumSessionCountRokuAggSum: {
      baseName: "mobile_rum_session_count_roku_agg_sum",
      type: "number",
      format: "int64",
    },
    mobileRumUnitsAggSum: {
      baseName: "mobile_rum_units_agg_sum",
      type: "number",
      format: "int64",
    },
    ndmNetflowEventsAggSum: {
      baseName: "ndm_netflow_events_agg_sum",
      type: "number",
      format: "int64",
    },
    netflowIndexedEventsCountAggSum: {
      baseName: "netflow_indexed_events_count_agg_sum",
      type: "number",
      format: "int64",
    },
    networkDeviceWirelessTop99PSum: {
      baseName: "network_device_wireless_top99p_sum",
      type: "number",
      format: "int64",
    },
    npmHostTop99PSum: {
      baseName: "npm_host_top99p_sum",
      type: "number",
      format: "int64",
    },
    observabilityPipelinesBytesProcessedAggSum: {
      baseName: "observability_pipelines_bytes_processed_agg_sum",
      type: "number",
      format: "int64",
    },
    ociHostAggSum: {
      baseName: "oci_host_agg_sum",
      type: "number",
      format: "int64",
    },
    ociHostTop99PSum: {
      baseName: "oci_host_top99p_sum",
      type: "number",
      format: "int64",
    },
    onCallSeatHwmSum: {
      baseName: "on_call_seat_hwm_sum",
      type: "number",
      format: "int64",
    },
    onlineArchiveEventsCountAggSum: {
      baseName: "online_archive_events_count_agg_sum",
      type: "number",
      format: "int64",
    },
    opentelemetryApmHostTop99PSum: {
      baseName: "opentelemetry_apm_host_top99p_sum",
      type: "number",
      format: "int64",
    },
    opentelemetryHostTop99PSum: {
      baseName: "opentelemetry_host_top99p_sum",
      type: "number",
      format: "int64",
    },
    productAnalyticsAggSum: {
      baseName: "product_analytics_agg_sum",
      type: "number",
      format: "int64",
    },
    profilingAasCountTop99PSum: {
      baseName: "profiling_aas_count_top99p_sum",
      type: "number",
      format: "int64",
    },
    profilingContainerAgentCountAvg: {
      baseName: "profiling_container_agent_count_avg",
      type: "number",
      format: "int64",
    },
    profilingHostCountTop99PSum: {
      baseName: "profiling_host_count_top99p_sum",
      type: "number",
      format: "int64",
    },
    proxmoxHostAggSum: {
      baseName: "proxmox_host_agg_sum",
      type: "number",
      format: "int64",
    },
    proxmoxHostTop99PSum: {
      baseName: "proxmox_host_top99p_sum",
      type: "number",
      format: "int64",
    },
    publishedAppHwmSum: {
      baseName: "published_app_hwm_sum",
      type: "number",
      format: "int64",
    },
    rehydratedIndexedEventsAggSum: {
      baseName: "rehydrated_indexed_events_agg_sum",
      type: "number",
      format: "int64",
    },
    rehydratedIngestedBytesAggSum: {
      baseName: "rehydrated_ingested_bytes_agg_sum",
      type: "number",
      format: "int64",
    },
    rumBrowserAndMobileSessionCount: {
      baseName: "rum_browser_and_mobile_session_count",
      type: "number",
      format: "int64",
    },
    rumBrowserLegacySessionCountAggSum: {
      baseName: "rum_browser_legacy_session_count_agg_sum",
      type: "number",
      format: "int64",
    },
    rumBrowserLiteSessionCountAggSum: {
      baseName: "rum_browser_lite_session_count_agg_sum",
      type: "number",
      format: "int64",
    },
    rumBrowserReplaySessionCountAggSum: {
      baseName: "rum_browser_replay_session_count_agg_sum",
      type: "number",
      format: "int64",
    },
    rumIndexedSessionsAggSum: {
      baseName: "rum_indexed_sessions_agg_sum",
      type: "number",
      format: "int64",
    },
    rumIngestedSessionsAggSum: {
      baseName: "rum_ingested_sessions_agg_sum",
      type: "number",
      format: "int64",
    },
    rumLiteSessionCountAggSum: {
      baseName: "rum_lite_session_count_agg_sum",
      type: "number",
      format: "int64",
    },
    rumMobileLegacySessionCountAndroidAggSum: {
      baseName: "rum_mobile_legacy_session_count_android_agg_sum",
      type: "number",
      format: "int64",
    },
    rumMobileLegacySessionCountFlutterAggSum: {
      baseName: "rum_mobile_legacy_session_count_flutter_agg_sum",
      type: "number",
      format: "int64",
    },
    rumMobileLegacySessionCountIosAggSum: {
      baseName: "rum_mobile_legacy_session_count_ios_agg_sum",
      type: "number",
      format: "int64",
    },
    rumMobileLegacySessionCountReactnativeAggSum: {
      baseName: "rum_mobile_legacy_session_count_reactnative_agg_sum",
      type: "number",
      format: "int64",
    },
    rumMobileLegacySessionCountRokuAggSum: {
      baseName: "rum_mobile_legacy_session_count_roku_agg_sum",
      type: "number",
      format: "int64",
    },
    rumMobileLiteSessionCountAndroidAggSum: {
      baseName: "rum_mobile_lite_session_count_android_agg_sum",
      type: "number",
      format: "int64",
    },
    rumMobileLiteSessionCountFlutterAggSum: {
      baseName: "rum_mobile_lite_session_count_flutter_agg_sum",
      type: "number",
      format: "int64",
    },
    rumMobileLiteSessionCountIosAggSum: {
      baseName: "rum_mobile_lite_session_count_ios_agg_sum",
      type: "number",
      format: "int64",
    },
    rumMobileLiteSessionCountKotlinmultiplatformAggSum: {
      baseName: "rum_mobile_lite_session_count_kotlinmultiplatform_agg_sum",
      type: "number",
      format: "int64",
    },
    rumMobileLiteSessionCountReactnativeAggSum: {
      baseName: "rum_mobile_lite_session_count_reactnative_agg_sum",
      type: "number",
      format: "int64",
    },
    rumMobileLiteSessionCountRokuAggSum: {
      baseName: "rum_mobile_lite_session_count_roku_agg_sum",
      type: "number",
      format: "int64",
    },
    rumMobileLiteSessionCountUnityAggSum: {
      baseName: "rum_mobile_lite_session_count_unity_agg_sum",
      type: "number",
      format: "int64",
    },
    rumMobileReplaySessionCountAndroidAggSum: {
      baseName: "rum_mobile_replay_session_count_android_agg_sum",
      type: "number",
      format: "int64",
    },
    rumMobileReplaySessionCountIosAggSum: {
      baseName: "rum_mobile_replay_session_count_ios_agg_sum",
      type: "number",
      format: "int64",
    },
    rumMobileReplaySessionCountKotlinmultiplatformAggSum: {
      baseName: "rum_mobile_replay_session_count_kotlinmultiplatform_agg_sum",
      type: "number",
      format: "int64",
    },
    rumMobileReplaySessionCountReactnativeAggSum: {
      baseName: "rum_mobile_replay_session_count_reactnative_agg_sum",
      type: "number",
      format: "int64",
    },
    rumReplaySessionCountAggSum: {
      baseName: "rum_replay_session_count_agg_sum",
      type: "number",
      format: "int64",
    },
    rumSessionCountAggSum: {
      baseName: "rum_session_count_agg_sum",
      type: "number",
      format: "int64",
    },
    rumSessionReplayAddOnAggSum: {
      baseName: "rum_session_replay_add_on_agg_sum",
      type: "number",
      format: "int64",
    },
    rumTotalSessionCountAggSum: {
      baseName: "rum_total_session_count_agg_sum",
      type: "number",
      format: "int64",
    },
    rumUnitsAggSum: {
      baseName: "rum_units_agg_sum",
      type: "number",
      format: "int64",
    },
    scaFargateCountAvgSum: {
      baseName: "sca_fargate_count_avg_sum",
      type: "number",
      format: "int64",
    },
    scaFargateCountHwmSum: {
      baseName: "sca_fargate_count_hwm_sum",
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
    serverlessAppsApmApmAzureAppserviceInstancesAvgSum: {
      baseName: "serverless_apps_apm_apm_azure_appservice_instances_avg_sum",
      type: "number",
      format: "int64",
    },
    serverlessAppsApmApmAzureAzurefunctionInstancesAvgSum: {
      baseName: "serverless_apps_apm_apm_azure_azurefunction_instances_avg_sum",
      type: "number",
      format: "int64",
    },
    serverlessAppsApmApmAzureContainerappInstancesAvgSum: {
      baseName: "serverless_apps_apm_apm_azure_containerapp_instances_avg_sum",
      type: "number",
      format: "int64",
    },
    serverlessAppsApmApmFargateEcsTasksAvgSum: {
      baseName: "serverless_apps_apm_apm_fargate_ecs_tasks_avg_sum",
      type: "number",
      format: "int64",
    },
    serverlessAppsApmApmGcpCloudfunctionInstancesAvgSum: {
      baseName: "serverless_apps_apm_apm_gcp_cloudfunction_instances_avg_sum",
      type: "number",
      format: "int64",
    },
    serverlessAppsApmApmGcpCloudrunInstancesAvgSum: {
      baseName: "serverless_apps_apm_apm_gcp_cloudrun_instances_avg_sum",
      type: "number",
      format: "int64",
    },
    serverlessAppsApmAvgSum: {
      baseName: "serverless_apps_apm_avg_sum",
      type: "number",
      format: "int64",
    },
    serverlessAppsApmExclFargateApmAzureAppserviceInstancesAvgSum: {
      baseName:
        "serverless_apps_apm_excl_fargate_apm_azure_appservice_instances_avg_sum",
      type: "number",
      format: "int64",
    },
    serverlessAppsApmExclFargateApmAzureAzurefunctionInstancesAvgSum: {
      baseName:
        "serverless_apps_apm_excl_fargate_apm_azure_azurefunction_instances_avg_sum",
      type: "number",
      format: "int64",
    },
    serverlessAppsApmExclFargateApmAzureContainerappInstancesAvgSum: {
      baseName:
        "serverless_apps_apm_excl_fargate_apm_azure_containerapp_instances_avg_sum",
      type: "number",
      format: "int64",
    },
    serverlessAppsApmExclFargateApmGcpCloudfunctionInstancesAvgSum: {
      baseName:
        "serverless_apps_apm_excl_fargate_apm_gcp_cloudfunction_instances_avg_sum",
      type: "number",
      format: "int64",
    },
    serverlessAppsApmExclFargateApmGcpCloudrunInstancesAvgSum: {
      baseName:
        "serverless_apps_apm_excl_fargate_apm_gcp_cloudrun_instances_avg_sum",
      type: "number",
      format: "int64",
    },
    serverlessAppsApmExclFargateAvgSum: {
      baseName: "serverless_apps_apm_excl_fargate_avg_sum",
      type: "number",
      format: "int64",
    },
    serverlessAppsAzureContainerAppInstancesAvgSum: {
      baseName: "serverless_apps_azure_container_app_instances_avg_sum",
      type: "number",
      format: "int64",
    },
    serverlessAppsAzureCountAvgSum: {
      baseName: "serverless_apps_azure_count_avg_sum",
      type: "number",
      format: "int64",
    },
    serverlessAppsAzureFunctionAppInstancesAvgSum: {
      baseName: "serverless_apps_azure_function_app_instances_avg_sum",
      type: "number",
      format: "int64",
    },
    serverlessAppsAzureWebAppInstancesAvgSum: {
      baseName: "serverless_apps_azure_web_app_instances_avg_sum",
      type: "number",
      format: "int64",
    },
    serverlessAppsEcsAvgSum: {
      baseName: "serverless_apps_ecs_avg_sum",
      type: "number",
      format: "int64",
    },
    serverlessAppsEksAvgSum: {
      baseName: "serverless_apps_eks_avg_sum",
      type: "number",
      format: "int64",
    },
    serverlessAppsExclFargateAvgSum: {
      baseName: "serverless_apps_excl_fargate_avg_sum",
      type: "number",
      format: "int64",
    },
    serverlessAppsExclFargateAzureContainerAppInstancesAvgSum: {
      baseName:
        "serverless_apps_excl_fargate_azure_container_app_instances_avg_sum",
      type: "number",
      format: "int64",
    },
    serverlessAppsExclFargateAzureFunctionAppInstancesAvgSum: {
      baseName:
        "serverless_apps_excl_fargate_azure_function_app_instances_avg_sum",
      type: "number",
      format: "int64",
    },
    serverlessAppsExclFargateAzureWebAppInstancesAvgSum: {
      baseName: "serverless_apps_excl_fargate_azure_web_app_instances_avg_sum",
      type: "number",
      format: "int64",
    },
    serverlessAppsExclFargateGoogleCloudFunctionsInstancesAvgSum: {
      baseName:
        "serverless_apps_excl_fargate_google_cloud_functions_instances_avg_sum",
      type: "number",
      format: "int64",
    },
    serverlessAppsExclFargateGoogleCloudRunInstancesAvgSum: {
      baseName:
        "serverless_apps_excl_fargate_google_cloud_run_instances_avg_sum",
      type: "number",
      format: "int64",
    },
    serverlessAppsGoogleCloudFunctionsInstancesAvgSum: {
      baseName: "serverless_apps_google_cloud_functions_instances_avg_sum",
      type: "number",
      format: "int64",
    },
    serverlessAppsGoogleCloudRunInstancesAvgSum: {
      baseName: "serverless_apps_google_cloud_run_instances_avg_sum",
      type: "number",
      format: "int64",
    },
    serverlessAppsGoogleCountAvgSum: {
      baseName: "serverless_apps_google_count_avg_sum",
      type: "number",
      format: "int64",
    },
    serverlessAppsTotalCountAvgSum: {
      baseName: "serverless_apps_total_count_avg_sum",
      type: "number",
      format: "int64",
    },
    siemAnalyzedLogsAddOnCountAggSum: {
      baseName: "siem_analyzed_logs_add_on_count_agg_sum",
      type: "number",
      format: "int64",
    },
    startDate: {
      baseName: "start_date",
      type: "Date",
      format: "date-time",
    },
    syntheticsBrowserCheckCallsCountAggSum: {
      baseName: "synthetics_browser_check_calls_count_agg_sum",
      type: "number",
      format: "int64",
    },
    syntheticsCheckCallsCountAggSum: {
      baseName: "synthetics_check_calls_count_agg_sum",
      type: "number",
      format: "int64",
    },
    syntheticsMobileTestRunsAggSum: {
      baseName: "synthetics_mobile_test_runs_agg_sum",
      type: "number",
      format: "int64",
    },
    syntheticsParallelTestingMaxSlotsHwmSum: {
      baseName: "synthetics_parallel_testing_max_slots_hwm_sum",
      type: "number",
      format: "int64",
    },
    traceSearchIndexedEventsCountAggSum: {
      baseName: "trace_search_indexed_events_count_agg_sum",
      type: "number",
      format: "int64",
    },
    twolIngestedEventsBytesAggSum: {
      baseName: "twol_ingested_events_bytes_agg_sum",
      type: "number",
      format: "int64",
    },
    universalServiceMonitoringHostTop99PSum: {
      baseName: "universal_service_monitoring_host_top99p_sum",
      type: "number",
      format: "int64",
    },
    usage: {
      baseName: "usage",
      type: "Array<UsageSummaryDate>",
    },
    vsphereHostTop99PSum: {
      baseName: "vsphere_host_top99p_sum",
      type: "number",
      format: "int64",
    },
    vulnManagementHostCountTop99PSum: {
      baseName: "vuln_management_host_count_top99p_sum",
      type: "number",
      format: "int64",
    },
    workflowExecutionsUsageAggSum: {
      baseName: "workflow_executions_usage_agg_sum",
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
    return UsageSummaryResponse.attributeTypeMap;
  }

  public constructor() {}
}
