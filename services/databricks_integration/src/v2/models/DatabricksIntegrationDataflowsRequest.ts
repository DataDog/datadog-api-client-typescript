import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatabricksCloudCostMetricsIntegrationDataflowRequest } from "./DatabricksCloudCostMetricsIntegrationDataflowRequest";
import { DatabricksDataObservabilityJobsMonitoringIntegrationDataflowRequest } from "./DatabricksDataObservabilityJobsMonitoringIntegrationDataflowRequest";
import { DatabricksDataObservabilityQualityMonitoringIntegrationDataflowRequest } from "./DatabricksDataObservabilityQualityMonitoringIntegrationDataflowRequest";
import { DatabricksModelServingMetricsIntegrationDataflowRequest } from "./DatabricksModelServingMetricsIntegrationDataflowRequest";

/**
 * Data Datadog collects from Databricks, keyed by dataflow id. Each dataflow turns on a distinct kind of collection: set `enabled` to start or stop it, and use `settings` to tune what it gathers. The defaults noted below apply when the account is created; on update, anything left out keeps its current value. Some dataflows have prerequisites, noted on each; unless one is documented as rejecting the request, it is not verified, so a dataflow enabled without it is stored but collects no data.
 */
export class DatabricksIntegrationDataflowsRequest {
  /**
   * Cost data collected from your Databricks system tables. [Cloud Cost Management](https://docs.datadoghq.com/cloud_cost_management/) must be enabled for your organization while this dataflow is on; any request that leaves it enabled without that is rejected with a `422` response.
   */
  "databricksCloudCostMetrics"?: DatabricksCloudCostMetricsIntegrationDataflowRequest;
  /**
   * Data Jobs Monitoring, which collects performance, reliability, and cost data for your Databricks jobs.
   */
  "databricksDataObservabilityJobsMonitoring"?: DatabricksDataObservabilityJobsMonitoringIntegrationDataflowRequest;
  /**
   * Data Observability, which collects lineage and data quality information from your Databricks catalogs so you can explore how data flows and detect, resolve, and prevent quality issues.
   */
  "databricksDataObservabilityQualityMonitoring"?: DatabricksDataObservabilityQualityMonitoringIntegrationDataflowRequest;
  /**
   * Health and usage metrics for your Databricks model serving endpoints. Not supported on accounts that authenticate with `private-action-runner`; on those accounts this dataflow collects no data even when enabled.
   */
  "databricksModelServingMetrics"?: DatabricksModelServingMetricsIntegrationDataflowRequest;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    databricksCloudCostMetrics: {
      baseName: "databricks-cloud-cost-metrics",
      type: "DatabricksCloudCostMetricsIntegrationDataflowRequest",
    },
    databricksDataObservabilityJobsMonitoring: {
      baseName: "databricks-data-observability-jobs-monitoring",
      type: "DatabricksDataObservabilityJobsMonitoringIntegrationDataflowRequest",
    },
    databricksDataObservabilityQualityMonitoring: {
      baseName: "databricks-data-observability-quality-monitoring",
      type: "DatabricksDataObservabilityQualityMonitoringIntegrationDataflowRequest",
    },
    databricksModelServingMetrics: {
      baseName: "databricks-model-serving-metrics",
      type: "DatabricksModelServingMetricsIntegrationDataflowRequest",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DatabricksIntegrationDataflowsRequest.attributeTypeMap;
  }

  public constructor() {}
}
