import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatabricksCloudCostMetricsIntegrationDataflowResponse } from "./DatabricksCloudCostMetricsIntegrationDataflowResponse";
import { DatabricksDataJobMonitoringIntegrationDataflowResponse } from "./DatabricksDataJobMonitoringIntegrationDataflowResponse";
import { DatabricksDataObservabilityIntegrationDataflowResponse } from "./DatabricksDataObservabilityIntegrationDataflowResponse";
import { DatabricksModelServingMetricsIntegrationDataflowResponse } from "./DatabricksModelServingMetricsIntegrationDataflowResponse";
import { DatabricksServerlessJobsIntegrationDataflowResponse } from "./DatabricksServerlessJobsIntegrationDataflowResponse";

/**
 * Dataflows configured on the Databricks integration account, keyed by dataflow id.
 */
export class DatabricksIntegrationDataflowsResponse {
  /**
   * The Databricks cloud cost metrics dataflow.
   */
  "databricksCloudCostMetrics"?: DatabricksCloudCostMetricsIntegrationDataflowResponse;
  /**
   * The Databricks Data Jobs Monitoring dataflow.
   */
  "databricksDataJobMonitoring"?: DatabricksDataJobMonitoringIntegrationDataflowResponse;
  /**
   * The Databricks data observability dataflow.
   */
  "databricksDataObservability"?: DatabricksDataObservabilityIntegrationDataflowResponse;
  /**
   * The Databricks model serving metrics dataflow. Not supported on accounts that authenticate with `private-action-runner`; on those accounts this dataflow collects no data even when enabled.
   */
  "databricksModelServingMetrics"?: DatabricksModelServingMetricsIntegrationDataflowResponse;
  /**
   * The Databricks serverless jobs dataflow.
   */
  "databricksServerlessJobs"?: DatabricksServerlessJobsIntegrationDataflowResponse;
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
    databricksDataJobMonitoring: {
      baseName: "databricks-data-job-monitoring",
      type: "DatabricksDataJobMonitoringIntegrationDataflowResponse",
    },
    databricksDataObservability: {
      baseName: "databricks-data-observability",
      type: "DatabricksDataObservabilityIntegrationDataflowResponse",
    },
    databricksModelServingMetrics: {
      baseName: "databricks-model-serving-metrics",
      type: "DatabricksModelServingMetricsIntegrationDataflowResponse",
    },
    databricksServerlessJobs: {
      baseName: "databricks-serverless-jobs",
      type: "DatabricksServerlessJobsIntegrationDataflowResponse",
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
