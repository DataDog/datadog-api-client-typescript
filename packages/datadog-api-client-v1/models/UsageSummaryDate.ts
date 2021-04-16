/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UsageSummaryDateOrg } from './UsageSummaryDateOrg';
import { HttpFile } from '../http/http';
import { ObjectSerializer } from './ObjectSerializer';

/**
* Response with hourly report of all data billed by Datadog all organizations.
*/

export class UsageSummaryDate {
    /**
    * Shows the 99th percentile of all agent hosts over all hours in the current date for all organizations.
    */
    'agentHostTop99p'?: number;
    /**
    * Shows the 99th percentile of all Azure app services using APM over all hours in the current date all organizations.
    */
    'apmAzureAppServiceHostTop99p'?: number;
    /**
    * Shows the 99th percentile of all distinct APM hosts over all hours in the current date for all organizations.
    */
    'apmHostTop99p'?: number;
    /**
    * Shows the 99th percentile of all AWS hosts over all hours in the current date for all organizations.
    */
    'awsHostTop99p'?: number;
    /**
    * Shows the average of the number of functions that executed 1 or more times each hour in the current date for all organizations.
    */
    'awsLambdaFuncCount'?: number;
    /**
    * Shows the sum of all AWS Lambda invocations over all hours in the current date for all organizations.
    */
    'awsLambdaInvocationsSum'?: number;
    /**
    * Shows the 99th percentile of all Azure app services over all hours in the current date for all organizations.
    */
    'azureAppServiceTop99p'?: number;
    /**
    * Shows the sum of all log bytes ingested over all hours in the current date for all organizations.
    */
    'billableIngestedBytesSum'?: number;
    /**
    * Shows the sum of compliance containers over all hours in the current date for all organizations.
    */
    'complianceContainerCountSum'?: Object;
    /**
    * Shows the sum of compliance hosts over all hours in the current date for all organizations.
    */
    'complianceHostCountSum'?: number;
    /**
    * Shows the average of all distinct containers over all hours in the current date for all organizations.
    */
    'containerAvg'?: number;
    /**
    * Shows the high-water mark of all distinct containers over all hours in the current date for all organizations.
    */
    'containerHwm'?: number;
    /**
    * Shows the average number of distinct custom metrics over all hours in the current date for all organizations.
    */
    'customTsAvg'?: number;
    /**
    * The date for the usage.
    */
    'date'?: Date;
    /**
    * Shows the high-watermark of all Fargate tasks over all hours in the current date for all organizations.
    */
    'fargateTasksCountAvg'?: number;
    /**
    * Shows the average of all Fargate tasks over all hours in the current date for all organizations.
    */
    'fargateTasksCountHwm'?: number;
    /**
    * Shows the 99th percentile of all GCP hosts over all hours in the current date for all organizations.
    */
    'gcpHostTop99p'?: number;
    /**
    * Shows the 99th percentile of all Heroku dynos over all hours in the current date for all organizations.
    */
    'herokuHostTop99pSum'?: number;
    /**
    * Shows the high-water mark of incident management monthly active users over all hours in the current date for all organizations.
    */
    'incidentManagementMonthlyActiveUsersHwm'?: number;
    /**
    * Shows the sum of all log events indexed over all hours in the current date for all organizations.
    */
    'indexedEventsCountSum'?: number;
    /**
    * Shows the 99th percentile of all distinct infrastructure hosts over all hours in the current date for all organizations.
    */
    'infraHostTop99p'?: number;
    /**
    * Shows the sum of all log bytes ingested over all hours in the current date for all organizations.
    */
    'ingestedEventsBytesSum'?: number;
    /**
    * Shows the sum of all IoT devices over all hours in the current date for all organizations.
    */
    'iotDeviceAggSum'?: number;
    /**
    * Shows the 99th percentile of all IoT devices over all hours in the current date all organizations.
    */
    'iotDeviceTop99pSum'?: number;
    /**
    * Shows the sum of all mobile RUM Sessions on Android over all hours in the current date for all organizations.
    */
    'mobileRumSessionCountAndroidSum'?: number;
    /**
    * Shows the sum of all mobile RUM Sessions on iOS over all hours in the current date for all organizations.
    */
    'mobileRumSessionCountIosSum'?: number;
    /**
    * Shows the sum of all mobile RUM Sessions over all hours in the current date for all organizations
    */
    'mobileRumSessionCountSum'?: number;
    /**
    * Shows the sum of all Network flows indexed over all hours in the current date for all organizations.
    */
    'netflowIndexedEventsCountSum'?: number;
    /**
    * Shows the 99th percentile of all distinct Networks hosts over all hours in the current date for all organizations.
    */
    'npmHostTop99p'?: number;
    /**
    * Shows the 99th percentile of all hosts reported by the Datadog exporter for the OpenTelemetry Collector over all hours in the current date for all organizations.
    */
    'opentelemetryHostTop99pSum'?: number;
    /**
    * Organizations associated with a user.
    */
    'orgs'?: Array<UsageSummaryDateOrg>;
    /**
    * Shows the 99th percentile of all profiled hosts over all hours in the current date for all organizations.
    */
    'profilingHostTop99p'?: number;
    /**
    * Shows the sum of all browser RUM Sessions over all hours in the current date for all organizations
    */
    'rumSessionCountSum'?: number;
    /**
    * Shows the sum of RUM Sessions (browser and mobile) over all hours in the current date for all organizations.
    */
    'rumTotalSessionCountSum'?: number;
    /**
    * Shows the sum of all Synthetic browser tests over all hours in the current date for all organizations.
    */
    'syntheticsBrowserCheckCallsCountSum'?: number;
    /**
    * Shows the sum of all Synthetic API tests over all hours in the current date for all organizations.
    */
    'syntheticsCheckCallsCountSum'?: number;
    /**
    * Shows the sum of all Indexed Spans indexed over all hours in the current date for all organizations.
    */
    'traceSearchIndexedEventsCountSum'?: number;
    /**
    * Shows the sum of all tracing without limits bytes ingested over all hours in the current date for all organizations.
    */
    'twolIngestedEventsBytesSum'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "agentHostTop99p": {
            "baseName": "agent_host_top99p",
            "type": "number",
            "format": "int64"
        },
        "apmAzureAppServiceHostTop99p": {
            "baseName": "apm_azure_app_service_host_top99p",
            "type": "number",
            "format": "int64"
        },
        "apmHostTop99p": {
            "baseName": "apm_host_top99p",
            "type": "number",
            "format": "int64"
        },
        "awsHostTop99p": {
            "baseName": "aws_host_top99p",
            "type": "number",
            "format": "int64"
        },
        "awsLambdaFuncCount": {
            "baseName": "aws_lambda_func_count",
            "type": "number",
            "format": "int64"
        },
        "awsLambdaInvocationsSum": {
            "baseName": "aws_lambda_invocations_sum",
            "type": "number",
            "format": "int64"
        },
        "azureAppServiceTop99p": {
            "baseName": "azure_app_service_top99p",
            "type": "number",
            "format": "int64"
        },
        "billableIngestedBytesSum": {
            "baseName": "billable_ingested_bytes_sum",
            "type": "number",
            "format": "int64"
        },
        "complianceContainerCountSum": {
            "baseName": "compliance_container_count_sum",
            "type": "Object",
            "format": ""
        },
        "complianceHostCountSum": {
            "baseName": "compliance_host_count_sum",
            "type": "number",
            "format": "int64"
        },
        "containerAvg": {
            "baseName": "container_avg",
            "type": "number",
            "format": "int64"
        },
        "containerHwm": {
            "baseName": "container_hwm",
            "type": "number",
            "format": "int64"
        },
        "customTsAvg": {
            "baseName": "custom_ts_avg",
            "type": "number",
            "format": "int64"
        },
        "date": {
            "baseName": "date",
            "type": "Date",
            "format": "date-time"
        },
        "fargateTasksCountAvg": {
            "baseName": "fargate_tasks_count_avg",
            "type": "number",
            "format": "int64"
        },
        "fargateTasksCountHwm": {
            "baseName": "fargate_tasks_count_hwm",
            "type": "number",
            "format": "int64"
        },
        "gcpHostTop99p": {
            "baseName": "gcp_host_top99p",
            "type": "number",
            "format": "int64"
        },
        "herokuHostTop99pSum": {
            "baseName": "heroku_host_top99p_sum",
            "type": "number",
            "format": "int64"
        },
        "incidentManagementMonthlyActiveUsersHwm": {
            "baseName": "incident_management_monthly_active_users_hwm",
            "type": "number",
            "format": "int64"
        },
        "indexedEventsCountSum": {
            "baseName": "indexed_events_count_sum",
            "type": "number",
            "format": "int64"
        },
        "infraHostTop99p": {
            "baseName": "infra_host_top99p",
            "type": "number",
            "format": "int64"
        },
        "ingestedEventsBytesSum": {
            "baseName": "ingested_events_bytes_sum",
            "type": "number",
            "format": "int64"
        },
        "iotDeviceAggSum": {
            "baseName": "iot_device_agg_sum",
            "type": "number",
            "format": "int64"
        },
        "iotDeviceTop99pSum": {
            "baseName": "iot_device_top99p_sum",
            "type": "number",
            "format": "int64"
        },
        "mobileRumSessionCountAndroidSum": {
            "baseName": "mobile_rum_session_count_android_sum",
            "type": "number",
            "format": "int64"
        },
        "mobileRumSessionCountIosSum": {
            "baseName": "mobile_rum_session_count_ios_sum",
            "type": "number",
            "format": "int64"
        },
        "mobileRumSessionCountSum": {
            "baseName": "mobile_rum_session_count_sum",
            "type": "number",
            "format": "int64"
        },
        "netflowIndexedEventsCountSum": {
            "baseName": "netflow_indexed_events_count_sum",
            "type": "number",
            "format": "int64"
        },
        "npmHostTop99p": {
            "baseName": "npm_host_top99p",
            "type": "number",
            "format": "int64"
        },
        "opentelemetryHostTop99pSum": {
            "baseName": "opentelemetry_host_top99p_sum",
            "type": "number",
            "format": "int64"
        },
        "orgs": {
            "baseName": "orgs",
            "type": "Array<UsageSummaryDateOrg>",
            "format": ""
        },
        "profilingHostTop99p": {
            "baseName": "profiling_host_top99p",
            "type": "number",
            "format": "int64"
        },
        "rumSessionCountSum": {
            "baseName": "rum_session_count_sum",
            "type": "number",
            "format": "int64"
        },
        "rumTotalSessionCountSum": {
            "baseName": "rum_total_session_count_sum",
            "type": "number",
            "format": "int64"
        },
        "syntheticsBrowserCheckCallsCountSum": {
            "baseName": "synthetics_browser_check_calls_count_sum",
            "type": "number",
            "format": "int64"
        },
        "syntheticsCheckCallsCountSum": {
            "baseName": "synthetics_check_calls_count_sum",
            "type": "number",
            "format": "int64"
        },
        "traceSearchIndexedEventsCountSum": {
            "baseName": "trace_search_indexed_events_count_sum",
            "type": "number",
            "format": "int64"
        },
        "twolIngestedEventsBytesSum": {
            "baseName": "twol_ingested_events_bytes_sum",
            "type": "number",
            "format": "int64"
        }    };

    static getAttributeTypeMap() {
        return UsageSummaryDate.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): UsageSummaryDate {
      let res = new UsageSummaryDate();

      res.agentHostTop99p = ObjectSerializer.deserialize(data.agent_host_top99p, "number", "int64")

      res.apmAzureAppServiceHostTop99p = ObjectSerializer.deserialize(data.apm_azure_app_service_host_top99p, "number", "int64")

      res.apmHostTop99p = ObjectSerializer.deserialize(data.apm_host_top99p, "number", "int64")

      res.awsHostTop99p = ObjectSerializer.deserialize(data.aws_host_top99p, "number", "int64")

      res.awsLambdaFuncCount = ObjectSerializer.deserialize(data.aws_lambda_func_count, "number", "int64")

      res.awsLambdaInvocationsSum = ObjectSerializer.deserialize(data.aws_lambda_invocations_sum, "number", "int64")

      res.azureAppServiceTop99p = ObjectSerializer.deserialize(data.azure_app_service_top99p, "number", "int64")

      res.billableIngestedBytesSum = ObjectSerializer.deserialize(data.billable_ingested_bytes_sum, "number", "int64")

      res.complianceContainerCountSum = ObjectSerializer.deserialize(data.compliance_container_count_sum, "Object", "")

      res.complianceHostCountSum = ObjectSerializer.deserialize(data.compliance_host_count_sum, "number", "int64")

      res.containerAvg = ObjectSerializer.deserialize(data.container_avg, "number", "int64")

      res.containerHwm = ObjectSerializer.deserialize(data.container_hwm, "number", "int64")

      res.customTsAvg = ObjectSerializer.deserialize(data.custom_ts_avg, "number", "int64")

      res.date = ObjectSerializer.deserialize(data.date, "Date", "date-time")

      res.fargateTasksCountAvg = ObjectSerializer.deserialize(data.fargate_tasks_count_avg, "number", "int64")

      res.fargateTasksCountHwm = ObjectSerializer.deserialize(data.fargate_tasks_count_hwm, "number", "int64")

      res.gcpHostTop99p = ObjectSerializer.deserialize(data.gcp_host_top99p, "number", "int64")

      res.herokuHostTop99pSum = ObjectSerializer.deserialize(data.heroku_host_top99p_sum, "number", "int64")

      res.incidentManagementMonthlyActiveUsersHwm = ObjectSerializer.deserialize(data.incident_management_monthly_active_users_hwm, "number", "int64")

      res.indexedEventsCountSum = ObjectSerializer.deserialize(data.indexed_events_count_sum, "number", "int64")

      res.infraHostTop99p = ObjectSerializer.deserialize(data.infra_host_top99p, "number", "int64")

      res.ingestedEventsBytesSum = ObjectSerializer.deserialize(data.ingested_events_bytes_sum, "number", "int64")

      res.iotDeviceAggSum = ObjectSerializer.deserialize(data.iot_device_agg_sum, "number", "int64")

      res.iotDeviceTop99pSum = ObjectSerializer.deserialize(data.iot_device_top99p_sum, "number", "int64")

      res.mobileRumSessionCountAndroidSum = ObjectSerializer.deserialize(data.mobile_rum_session_count_android_sum, "number", "int64")

      res.mobileRumSessionCountIosSum = ObjectSerializer.deserialize(data.mobile_rum_session_count_ios_sum, "number", "int64")

      res.mobileRumSessionCountSum = ObjectSerializer.deserialize(data.mobile_rum_session_count_sum, "number", "int64")

      res.netflowIndexedEventsCountSum = ObjectSerializer.deserialize(data.netflow_indexed_events_count_sum, "number", "int64")

      res.npmHostTop99p = ObjectSerializer.deserialize(data.npm_host_top99p, "number", "int64")

      res.opentelemetryHostTop99pSum = ObjectSerializer.deserialize(data.opentelemetry_host_top99p_sum, "number", "int64")

      res.orgs = ObjectSerializer.deserialize(data.orgs, "Array<UsageSummaryDateOrg>", "")

      res.profilingHostTop99p = ObjectSerializer.deserialize(data.profiling_host_top99p, "number", "int64")

      res.rumSessionCountSum = ObjectSerializer.deserialize(data.rum_session_count_sum, "number", "int64")

      res.rumTotalSessionCountSum = ObjectSerializer.deserialize(data.rum_total_session_count_sum, "number", "int64")

      res.syntheticsBrowserCheckCallsCountSum = ObjectSerializer.deserialize(data.synthetics_browser_check_calls_count_sum, "number", "int64")

      res.syntheticsCheckCallsCountSum = ObjectSerializer.deserialize(data.synthetics_check_calls_count_sum, "number", "int64")

      res.traceSearchIndexedEventsCountSum = ObjectSerializer.deserialize(data.trace_search_indexed_events_count_sum, "number", "int64")

      res.twolIngestedEventsBytesSum = ObjectSerializer.deserialize(data.twol_ingested_events_bytes_sum, "number", "int64")


      return res;
    }

    static serialize(data: UsageSummaryDate): {[key: string]: any} {
        let attributeTypes = UsageSummaryDate.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        res.agent_host_top99p = ObjectSerializer.serialize(data.agentHostTop99p, "number", "int64")

        res.apm_azure_app_service_host_top99p = ObjectSerializer.serialize(data.apmAzureAppServiceHostTop99p, "number", "int64")

        res.apm_host_top99p = ObjectSerializer.serialize(data.apmHostTop99p, "number", "int64")

        res.aws_host_top99p = ObjectSerializer.serialize(data.awsHostTop99p, "number", "int64")

        res.aws_lambda_func_count = ObjectSerializer.serialize(data.awsLambdaFuncCount, "number", "int64")

        res.aws_lambda_invocations_sum = ObjectSerializer.serialize(data.awsLambdaInvocationsSum, "number", "int64")

        res.azure_app_service_top99p = ObjectSerializer.serialize(data.azureAppServiceTop99p, "number", "int64")

        res.billable_ingested_bytes_sum = ObjectSerializer.serialize(data.billableIngestedBytesSum, "number", "int64")

        res.compliance_container_count_sum = ObjectSerializer.serialize(data.complianceContainerCountSum, "Object", "")

        res.compliance_host_count_sum = ObjectSerializer.serialize(data.complianceHostCountSum, "number", "int64")

        res.container_avg = ObjectSerializer.serialize(data.containerAvg, "number", "int64")

        res.container_hwm = ObjectSerializer.serialize(data.containerHwm, "number", "int64")

        res.custom_ts_avg = ObjectSerializer.serialize(data.customTsAvg, "number", "int64")

        res.date = ObjectSerializer.serialize(data.date, "Date", "date-time")

        res.fargate_tasks_count_avg = ObjectSerializer.serialize(data.fargateTasksCountAvg, "number", "int64")

        res.fargate_tasks_count_hwm = ObjectSerializer.serialize(data.fargateTasksCountHwm, "number", "int64")

        res.gcp_host_top99p = ObjectSerializer.serialize(data.gcpHostTop99p, "number", "int64")

        res.heroku_host_top99p_sum = ObjectSerializer.serialize(data.herokuHostTop99pSum, "number", "int64")

        res.incident_management_monthly_active_users_hwm = ObjectSerializer.serialize(data.incidentManagementMonthlyActiveUsersHwm, "number", "int64")

        res.indexed_events_count_sum = ObjectSerializer.serialize(data.indexedEventsCountSum, "number", "int64")

        res.infra_host_top99p = ObjectSerializer.serialize(data.infraHostTop99p, "number", "int64")

        res.ingested_events_bytes_sum = ObjectSerializer.serialize(data.ingestedEventsBytesSum, "number", "int64")

        res.iot_device_agg_sum = ObjectSerializer.serialize(data.iotDeviceAggSum, "number", "int64")

        res.iot_device_top99p_sum = ObjectSerializer.serialize(data.iotDeviceTop99pSum, "number", "int64")

        res.mobile_rum_session_count_android_sum = ObjectSerializer.serialize(data.mobileRumSessionCountAndroidSum, "number", "int64")

        res.mobile_rum_session_count_ios_sum = ObjectSerializer.serialize(data.mobileRumSessionCountIosSum, "number", "int64")

        res.mobile_rum_session_count_sum = ObjectSerializer.serialize(data.mobileRumSessionCountSum, "number", "int64")

        res.netflow_indexed_events_count_sum = ObjectSerializer.serialize(data.netflowIndexedEventsCountSum, "number", "int64")

        res.npm_host_top99p = ObjectSerializer.serialize(data.npmHostTop99p, "number", "int64")

        res.opentelemetry_host_top99p_sum = ObjectSerializer.serialize(data.opentelemetryHostTop99pSum, "number", "int64")

        res.orgs = ObjectSerializer.serialize(data.orgs, "Array<UsageSummaryDateOrg>", "")

        res.profiling_host_top99p = ObjectSerializer.serialize(data.profilingHostTop99p, "number", "int64")

        res.rum_session_count_sum = ObjectSerializer.serialize(data.rumSessionCountSum, "number", "int64")

        res.rum_total_session_count_sum = ObjectSerializer.serialize(data.rumTotalSessionCountSum, "number", "int64")

        res.synthetics_browser_check_calls_count_sum = ObjectSerializer.serialize(data.syntheticsBrowserCheckCallsCountSum, "number", "int64")

        res.synthetics_check_calls_count_sum = ObjectSerializer.serialize(data.syntheticsCheckCallsCountSum, "number", "int64")

        res.trace_search_indexed_events_count_sum = ObjectSerializer.serialize(data.traceSearchIndexedEventsCountSum, "number", "int64")

        res.twol_ingested_events_bytes_sum = ObjectSerializer.serialize(data.twolIngestedEventsBytesSum, "number", "int64")

        return res
    }
    
    public constructor() {
    }
}



