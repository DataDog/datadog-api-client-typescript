import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SnowflakeAccountUsageMetricsIntegrationDataflowRequest } from "./SnowflakeAccountUsageMetricsIntegrationDataflowRequest";
import { SnowflakeCloudCostMetricsIntegrationDataflowRequest } from "./SnowflakeCloudCostMetricsIntegrationDataflowRequest";
import { SnowflakeDataObservabilityQualityMonitoringIntegrationDataflowRequest } from "./SnowflakeDataObservabilityQualityMonitoringIntegrationDataflowRequest";
import { SnowflakeEventTableLogsIntegrationDataflowRequest } from "./SnowflakeEventTableLogsIntegrationDataflowRequest";
import { SnowflakeOrganizationUsageMetricsIntegrationDataflowRequest } from "./SnowflakeOrganizationUsageMetricsIntegrationDataflowRequest";
import { SnowflakeQueryHistoryLogsIntegrationDataflowRequest } from "./SnowflakeQueryHistoryLogsIntegrationDataflowRequest";
import { SnowflakeSecurityLogsIntegrationDataflowRequest } from "./SnowflakeSecurityLogsIntegrationDataflowRequest";
import { SnowflakeTaskHistoryLogsIntegrationDataflowRequest } from "./SnowflakeTaskHistoryLogsIntegrationDataflowRequest";

/**
 * Data Datadog collects from Snowflake, keyed by dataflow id. Each dataflow turns on a distinct kind of collection: set `enabled` to start or stop it, and use `settings` to configure what it collects. Defaults listed on each dataflow apply when the account is created; on update, omitted fields keep their current values. Every dataflow reads from Snowflake as the user in `settings.username`, so that user's role must be granted access to the underlying views; a dataflow enabled without those grants is stored but collects no data.
 */
export class SnowflakeIntegrationDataflowsRequest {
  /**
   * Account-level usage metrics read from the Snowflake `ACCOUNT_USAGE` schema, covering storage usage, credit consumption, and query activity.
   */
  "snowflakeAccountUsageMetrics"?: SnowflakeAccountUsageMetricsIntegrationDataflowRequest;
  /**
   * Cost data aggregated from the Snowflake `ORGANIZATION_USAGE` schema. [Cloud Cost Management](https://docs.datadoghq.com/cloud_cost_management/) must be enabled for your organization while this dataflow is enabled. Any request that enables this dataflow without Cloud Cost Management is rejected with a `422` response. The Snowflake role also needs the ORGANIZATION_BILLING_VIEWER database role to read the underlying cost views.
   */
  "snowflakeCloudCostMetrics"?: SnowflakeCloudCostMetricsIntegrationDataflowRequest;
  /**
   * Data Observability, which collects lineage and data quality information from your Snowflake databases so you can explore how data flows and detect and resolve quality issues.
   */
  "snowflakeDataObservabilityQualityMonitoring"?: SnowflakeDataObservabilityQualityMonitoringIntegrationDataflowRequest;
  /**
   * Records from your Snowflake event tables, used to monitor application behavior and identify issues. `enabled` turns the dataflow on and off as a whole, and the per-record-type toggles in `settings` select which kinds of record it collects while it is on. The Snowflake role needs usage granted on the database, the schema, and the event table itself.
   */
  "snowflakeEventTableLogs"?: SnowflakeEventTableLogsIntegrationDataflowRequest;
  /**
   * Organization-level usage metrics read from the Snowflake `ORGANIZATION_USAGE` schema, covering the credit consumption of every account in the organization and the history of data transferred out of Snowflake. Reading that schema requires the ORGADMIN role.
   */
  "snowflakeOrganizationUsageMetrics"?: SnowflakeOrganizationUsageMetricsIntegrationDataflowRequest;
  /**
   * Per-query logs that let you identify long-running, poorly performing, and expensive queries.
   */
  "snowflakeQueryHistoryLogs"?: SnowflakeQueryHistoryLogsIntegrationDataflowRequest;
  /**
   * Security logs from the Snowflake `ACCOUNT_USAGE` schema, for analyzing the security of your Snowflake account and running threat detection with [Cloud SIEM](https://docs.datadoghq.com/security/cloud_siem/).
   */
  "snowflakeSecurityLogs"?: SnowflakeSecurityLogsIntegrationDataflowRequest;
  /**
   * Execution logs for your scheduled Snowflake tasks, covering start and end time, status, and any error message.
   */
  "snowflakeTaskHistoryLogs"?: SnowflakeTaskHistoryLogsIntegrationDataflowRequest;
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
      type: "SnowflakeAccountUsageMetricsIntegrationDataflowRequest",
    },
    snowflakeCloudCostMetrics: {
      baseName: "snowflake-cloud-cost-metrics",
      type: "SnowflakeCloudCostMetricsIntegrationDataflowRequest",
    },
    snowflakeDataObservabilityQualityMonitoring: {
      baseName: "snowflake-data-observability-quality-monitoring",
      type: "SnowflakeDataObservabilityQualityMonitoringIntegrationDataflowRequest",
    },
    snowflakeEventTableLogs: {
      baseName: "snowflake-event-table-logs",
      type: "SnowflakeEventTableLogsIntegrationDataflowRequest",
    },
    snowflakeOrganizationUsageMetrics: {
      baseName: "snowflake-organization-usage-metrics",
      type: "SnowflakeOrganizationUsageMetricsIntegrationDataflowRequest",
    },
    snowflakeQueryHistoryLogs: {
      baseName: "snowflake-query-history-logs",
      type: "SnowflakeQueryHistoryLogsIntegrationDataflowRequest",
    },
    snowflakeSecurityLogs: {
      baseName: "snowflake-security-logs",
      type: "SnowflakeSecurityLogsIntegrationDataflowRequest",
    },
    snowflakeTaskHistoryLogs: {
      baseName: "snowflake-task-history-logs",
      type: "SnowflakeTaskHistoryLogsIntegrationDataflowRequest",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SnowflakeIntegrationDataflowsRequest.attributeTypeMap;
  }

  public constructor() {}
}
