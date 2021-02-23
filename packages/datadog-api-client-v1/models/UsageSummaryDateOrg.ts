/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* Global hourly report of all data billed by Datadog for a given organization.
*/
export class UsageSummaryDateOrg {
    /**
    * Shows the 99th percentile of all agent hosts over all hours in the current date for the given org.
    */
    'agentHostTop99p'?: number;
    /**
    * Shows the 99th percentile of all Azure app services using APM over all hours in the current date for the given org.
    */
    'apmAzureAppServiceHostTop99p'?: number;
    /**
    * Shows the 99th percentile of all distinct APM hosts over all hours in the current date for the given org.
    */
    'apmHostTop99p'?: number;
    /**
    * Shows the 99th percentile of all AWS hosts over all hours in the current date for the given org.
    */
    'awsHostTop99p'?: number;
    /**
    * Shows the sum of all AWS Lambda invocations over all hours in the current date for the given org.
    */
    'awsLambdaFuncCount'?: number;
    /**
    * Shows the sum of all AWS Lambda invocations over all hours in the current date for the given org.
    */
    'awsLambdaInvocationsSum'?: number;
    /**
    * Shows the 99th percentile of all Azure app services over all hours in the current date for the given org.
    */
    'azureAppServiceTop99p'?: number;
    /**
    * Shows the sum of all log bytes ingested over all hours in the current date for the given org.
    */
    'billableIngestedBytesSum'?: number;
    /**
    * Shows the average of all distinct containers over all hours in the current date for the given org.
    */
    'containerAvg'?: number;
    /**
    * Shows the high-water mark of all distinct containers over all hours in the current date for the given org.
    */
    'containerHwm'?: number;
    /**
    * Shows the average number of distinct custom metrics over all hours in the current date for the given org.
    */
    'customTsAvg'?: number;
    /**
    * The average task count for Fargate.
    */
    'fargateTasksCountAvg'?: number;
    /**
    * Shows the high-water mark of all Fargate tasks over all hours in the current date for the given org.
    */
    'fargateTasksCountHwm'?: number;
    /**
    * Shows the 99th percentile of all GCP hosts over all hours in the current date for the given org.
    */
    'gcpHostTop99p'?: number;
    /**
    * The organization id.
    */
    'id'?: string;
    /**
    * Shows the high-water mark of incident management monthly active users over all hours in the current date for the given org.
    */
    'incidentManagementMonthlyActiveUsersHwm'?: number;
    /**
    * Shows the sum of all log events indexed over all hours in the current date for the given org.
    */
    'indexedEventsCountSum'?: number;
    /**
    * Shows the 99th percentile of all distinct infrastructure hosts over all hours in the current date for the given org.
    */
    'infraHostTop99p'?: number;
    /**
    * Shows the sum of all log bytes ingested over all hours in the current date for the given org.
    */
    'ingestedEventsBytesSum'?: number;
    /**
    * Shows the sum of all IoT devices over all hours in the current date for the given org.
    */
    'iotDeviceAggSum'?: number;
    /**
    * Shows the 99th percentile of all IoT devices over all hours in the current date for the given org.
    */
    'iotDeviceTop99pSum'?: number;
    /**
    * Shows the sum of all mobile RUM Sessions on Android over all hours in the current date for the given org.
    */
    'mobileRumSessionCountAndroidSum'?: number;
    /**
    * Shows the sum of all mobile RUM Sessions on iOS over all hours in the current date for the given org.
    */
    'mobileRumSessionCountIosSum'?: number;
    /**
    * Shows the sum of all mobile RUM Sessions over all hours in the current date for the given org.
    */
    'mobileRumSessionCountSum'?: number;
    /**
    * The organization name.
    */
    'name'?: string;
    /**
    * Shows the sum of all Network flows indexed over all hours in the current date for the given org.
    */
    'netflowIndexedEventsCountSum'?: number;
    /**
    * Shows the 99th percentile of all distinct Networks hosts over all hours in the current date for the given org.
    */
    'npmHostTop99p'?: number;
    /**
    * Shows the 99th percentile of all profiled hosts over all hours in the current date for the given org.
    */
    'profilingHostTop99p'?: number;
    /**
    * The organization public id.
    */
    'publicId'?: string;
    /**
    * Shows the sum of all browser RUM Sessions over all hours in the current date for the given org.
    */
    'rumSessionCountSum'?: number;
    /**
    * Shows the sum of RUM Sessions (browser and mobile) over all hours in the current date for the given org.
    */
    'rumTotalSessionCountSum'?: number;
    /**
    * Shows the sum of all Synthetic browser tests over all hours in the current date for the given org.
    */
    'syntheticsBrowserCheckCallsCountSum'?: number;
    /**
    * Shows the sum of all Synthetic API tests over all hours in the current date for the given org.
    */
    'syntheticsCheckCallsCountSum'?: number;
    /**
    * Shows the sum of all Indexed Spans indexed over all hours in the current date for the given org.
    */
    'traceSearchIndexedEventsCountSum'?: number;
    /**
    * Shows the sum of all tracing without limits bytes ingested over all hours in the current date for the given org.
    */
    'twolIngestedEventsBytesSum'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "agentHostTop99p",
            "baseName": "agent_host_top99p",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "apmAzureAppServiceHostTop99p",
            "baseName": "apm_azure_app_service_host_top99p",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "apmHostTop99p",
            "baseName": "apm_host_top99p",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "awsHostTop99p",
            "baseName": "aws_host_top99p",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "awsLambdaFuncCount",
            "baseName": "aws_lambda_func_count",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "awsLambdaInvocationsSum",
            "baseName": "aws_lambda_invocations_sum",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "azureAppServiceTop99p",
            "baseName": "azure_app_service_top99p",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "billableIngestedBytesSum",
            "baseName": "billable_ingested_bytes_sum",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "containerAvg",
            "baseName": "container_avg",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "containerHwm",
            "baseName": "container_hwm",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "customTsAvg",
            "baseName": "custom_ts_avg",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "fargateTasksCountAvg",
            "baseName": "fargate_tasks_count_avg",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "fargateTasksCountHwm",
            "baseName": "fargate_tasks_count_hwm",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "gcpHostTop99p",
            "baseName": "gcp_host_top99p",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "incidentManagementMonthlyActiveUsersHwm",
            "baseName": "incident_management_monthly_active_users_hwm",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "indexedEventsCountSum",
            "baseName": "indexed_events_count_sum",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "infraHostTop99p",
            "baseName": "infra_host_top99p",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "ingestedEventsBytesSum",
            "baseName": "ingested_events_bytes_sum",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "iotDeviceAggSum",
            "baseName": "iot_device_agg_sum",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "iotDeviceTop99pSum",
            "baseName": "iot_device_top99p_sum",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "mobileRumSessionCountAndroidSum",
            "baseName": "mobile_rum_session_count_android_sum",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "mobileRumSessionCountIosSum",
            "baseName": "mobile_rum_session_count_ios_sum",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "mobileRumSessionCountSum",
            "baseName": "mobile_rum_session_count_sum",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "netflowIndexedEventsCountSum",
            "baseName": "netflow_indexed_events_count_sum",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "npmHostTop99p",
            "baseName": "npm_host_top99p",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "profilingHostTop99p",
            "baseName": "profiling_host_top99p",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "publicId",
            "baseName": "public_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "rumSessionCountSum",
            "baseName": "rum_session_count_sum",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "rumTotalSessionCountSum",
            "baseName": "rum_total_session_count_sum",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "syntheticsBrowserCheckCallsCountSum",
            "baseName": "synthetics_browser_check_calls_count_sum",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "syntheticsCheckCallsCountSum",
            "baseName": "synthetics_check_calls_count_sum",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "traceSearchIndexedEventsCountSum",
            "baseName": "trace_search_indexed_events_count_sum",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "twolIngestedEventsBytesSum",
            "baseName": "twol_ingested_events_bytes_sum",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return UsageSummaryDateOrg.attributeTypeMap;
    }
    
    public constructor() {
    }
}

