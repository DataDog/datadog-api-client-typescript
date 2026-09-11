import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatabricksCloudCostMetricsIntegrationDataflowResponse } from "./DatabricksCloudCostMetricsIntegrationDataflowResponse";
import { DatabricksDataObservabilityJobsMonitoringIntegrationDataflowResponse } from "./DatabricksDataObservabilityJobsMonitoringIntegrationDataflowResponse";
import { DatabricksDataObservabilityQualityMonitoringIntegrationDataflowResponse } from "./DatabricksDataObservabilityQualityMonitoringIntegrationDataflowResponse";
import { DatabricksModelServingMetricsIntegrationDataflowResponse } from "./DatabricksModelServingMetricsIntegrationDataflowResponse";

/**
 * Data Datadog collects from Databricks, keyed by dataflow id.
 */
export class DatabricksIntegrationDataflowsResponse {
  /**
   * Cost data collected from your Databricks system tables. Requires [Cloud Cost Management](https://docs.datadoghq.com/cloud_cost_management/) to be set up for your organization.
   */
  "databricksCloudCostMetrics"?: DatabricksCloudCostMetricsIntegrationDataflowResponse;
  /**
   * Data Jobs Monitoring, which collects performance, reliability, and cost data for your Databricks jobs.
   */
  "databricksDataObservabilityJobsMonitoring"?: DatabricksDataObservabilityJobsMonitoringIntegrationDataflowResponse;
  /**
   * Data Observability, which collects lineage and data quality information from your Databricks catalogs so you can explore how data flows and detect, resolve, and prevent quality issues.
   */
  "databricksDataObservabilityQualityMonitoring"?: DatabricksDataObservabilityQualityMonitoringIntegrationDataflowResponse;
  /**
   * Health and usage metrics for your Databricks model serving endpoints. Not supported on accounts that authenticate with `private-action-runner`; on those accounts this dataflow collects no data even when enabled.
   */
  "databricksModelServingMetrics"?: DatabricksModelServingMetricsIntegrationDataflowResponse;
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
    databricksCloudCostMetrics: {
      baseName: "databricks-cloud-cost-metrics",
      type: "DatabricksCloudCostMetricsIntegrationDataflowResponse",
    },
    databricksDataObservabilityJobsMonitoring: {
      baseName: "databricks-data-observability-jobs-monitoring",
      type: "DatabricksDataObservabilityJobsMonitoringIntegrationDataflowResponse",
    },
    databricksDataObservabilityQualityMonitoring: {
      baseName: "databricks-data-observability-quality-monitoring",
      type: "DatabricksDataObservabilityQualityMonitoringIntegrationDataflowResponse",
    },
    databricksModelServingMetrics: {
      baseName: "databricks-model-serving-metrics",
      type: "DatabricksModelServingMetricsIntegrationDataflowResponse",
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
    return DatabricksIntegrationDataflowsResponse.attributeTypeMap;
  }

  public constructor() {}
}
