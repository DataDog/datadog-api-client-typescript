/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SnowflakeAccountUsageMetricsIntegrationDataflowResponse } from "./SnowflakeAccountUsageMetricsIntegrationDataflowResponse";
import { SnowflakeCloudCostMetricsIntegrationDataflowResponse } from "./SnowflakeCloudCostMetricsIntegrationDataflowResponse";
import { SnowflakeDataObservabilityQualityMonitoringIntegrationDataflowResponse } from "./SnowflakeDataObservabilityQualityMonitoringIntegrationDataflowResponse";
import { SnowflakeEventTableLogsIntegrationDataflowResponse } from "./SnowflakeEventTableLogsIntegrationDataflowResponse";
import { SnowflakeOrganizationUsageMetricsIntegrationDataflowResponse } from "./SnowflakeOrganizationUsageMetricsIntegrationDataflowResponse";
import { SnowflakeQueryHistoryLogsIntegrationDataflowResponse } from "./SnowflakeQueryHistoryLogsIntegrationDataflowResponse";
import { SnowflakeSecurityLogsIntegrationDataflowResponse } from "./SnowflakeSecurityLogsIntegrationDataflowResponse";
import { SnowflakeTaskHistoryLogsIntegrationDataflowResponse } from "./SnowflakeTaskHistoryLogsIntegrationDataflowResponse";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data Datadog collects from Snowflake, keyed by dataflow id.
 */
export class SnowflakeIntegrationDataflowsResponse {
  /**
   * Account-level usage metrics read from the Snowflake `ACCOUNT_USAGE` schema, covering storage usage, credit consumption, and query activity.
   */
  "snowflakeAccountUsageMetrics"?: SnowflakeAccountUsageMetricsIntegrationDataflowResponse;
  /**
   * Cost data aggregated from the Snowflake `ORGANIZATION_USAGE` schema. Requires [Cloud Cost Management](https://docs.datadoghq.com/cloud_cost_management/) to be set up for your organization, and the ORGANIZATION_BILLING_VIEWER database role on the Snowflake role.
   */
  "snowflakeCloudCostMetrics"?: SnowflakeCloudCostMetricsIntegrationDataflowResponse;
  /**
   * Data Observability, which collects lineage and data quality information from your Snowflake databases so you can explore how data flows and detect and resolve quality issues.
   */
  "snowflakeDataObservabilityQualityMonitoring"?: SnowflakeDataObservabilityQualityMonitoringIntegrationDataflowResponse;
  /**
   * Records from your Snowflake event tables, used to monitor application behavior and identify issues. `enabled` turns the dataflow on and off as a whole, and the per-record-type toggles in `settings` select which kinds of record it collects while it is on. The Snowflake role needs usage granted on the database, the schema, and the event table itself.
   */
  "snowflakeEventTableLogs"?: SnowflakeEventTableLogsIntegrationDataflowResponse;
  /**
   * Organization-level usage metrics read from the Snowflake `ORGANIZATION_USAGE` schema, covering the credit consumption of every account in the organization and the history of data transferred out of Snowflake. Reading that schema requires the ORGADMIN role.
   */
  "snowflakeOrganizationUsageMetrics"?: SnowflakeOrganizationUsageMetricsIntegrationDataflowResponse;
  /**
   * Per-query logs that let you identify long-running, poorly performing, and expensive queries.
   */
  "snowflakeQueryHistoryLogs"?: SnowflakeQueryHistoryLogsIntegrationDataflowResponse;
  /**
   * Security logs from the Snowflake `ACCOUNT_USAGE` schema, for analyzing the security of your Snowflake account and running threat detection with [Cloud SIEM](https://docs.datadoghq.com/security/cloud_siem/).
   */
  "snowflakeSecurityLogs"?: SnowflakeSecurityLogsIntegrationDataflowResponse;
  /**
   * Execution logs for your scheduled Snowflake tasks, covering start and end time, status, and any error message.
   */
  "snowflakeTaskHistoryLogs"?: SnowflakeTaskHistoryLogsIntegrationDataflowResponse;

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
    snowflakeAccountUsageMetrics: {
      baseName: "snowflake-account-usage-metrics",
      type: "SnowflakeAccountUsageMetricsIntegrationDataflowResponse",
    },
    snowflakeCloudCostMetrics: {
      baseName: "snowflake-cloud-cost-metrics",
      type: "SnowflakeCloudCostMetricsIntegrationDataflowResponse",
    },
    snowflakeDataObservabilityQualityMonitoring: {
      baseName: "snowflake-data-observability-quality-monitoring",
      type: "SnowflakeDataObservabilityQualityMonitoringIntegrationDataflowResponse",
    },
    snowflakeEventTableLogs: {
      baseName: "snowflake-event-table-logs",
      type: "SnowflakeEventTableLogsIntegrationDataflowResponse",
    },
    snowflakeOrganizationUsageMetrics: {
      baseName: "snowflake-organization-usage-metrics",
      type: "SnowflakeOrganizationUsageMetricsIntegrationDataflowResponse",
    },
    snowflakeQueryHistoryLogs: {
      baseName: "snowflake-query-history-logs",
      type: "SnowflakeQueryHistoryLogsIntegrationDataflowResponse",
    },
    snowflakeSecurityLogs: {
      baseName: "snowflake-security-logs",
      type: "SnowflakeSecurityLogsIntegrationDataflowResponse",
    },
    snowflakeTaskHistoryLogs: {
      baseName: "snowflake-task-history-logs",
      type: "SnowflakeTaskHistoryLogsIntegrationDataflowResponse",
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
    return SnowflakeIntegrationDataflowsResponse.attributeTypeMap;
  }

  public constructor() {}
}
