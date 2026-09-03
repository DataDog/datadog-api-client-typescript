/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DatabricksCloudCostMetricsIntegrationDataflowRequest } from "./DatabricksCloudCostMetricsIntegrationDataflowRequest";
import { DatabricksDataJobMonitoringIntegrationDataflowRequest } from "./DatabricksDataJobMonitoringIntegrationDataflowRequest";
import { DatabricksDataObservabilityIntegrationDataflowRequest } from "./DatabricksDataObservabilityIntegrationDataflowRequest";
import { DatabricksModelServingMetricsIntegrationDataflowRequest } from "./DatabricksModelServingMetricsIntegrationDataflowRequest";
import { DatabricksServerlessJobsIntegrationDataflowRequest } from "./DatabricksServerlessJobsIntegrationDataflowRequest";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Dataflows to configure on the Databricks integration account, keyed by dataflow id. Some dataflows and settings have prerequisites, noted on each. Those prerequisites are not checked when the request is made, so anything left enabled without them is stored but collects no data.
 */
export class DatabricksIntegrationDataflowsRequest {
  /**
   * The Databricks cloud cost metrics dataflow.
   */
  "databricksCloudCostMetrics"?: DatabricksCloudCostMetricsIntegrationDataflowRequest;
  /**
   * The Databricks Data Jobs Monitoring dataflow.
   */
  "databricksDataJobMonitoring"?: DatabricksDataJobMonitoringIntegrationDataflowRequest;
  /**
   * The Databricks data observability dataflow.
   */
  "databricksDataObservability"?: DatabricksDataObservabilityIntegrationDataflowRequest;
  /**
   * The Databricks model serving metrics dataflow. Not supported on accounts that authenticate with `private-action-runner`; on those accounts this dataflow collects no data even when enabled.
   */
  "databricksModelServingMetrics"?: DatabricksModelServingMetricsIntegrationDataflowRequest;
  /**
   * The Databricks serverless jobs dataflow.
   */
  "databricksServerlessJobs"?: DatabricksServerlessJobsIntegrationDataflowRequest;

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
    databricksDataJobMonitoring: {
      baseName: "databricks-data-job-monitoring",
      type: "DatabricksDataJobMonitoringIntegrationDataflowRequest",
    },
    databricksDataObservability: {
      baseName: "databricks-data-observability",
      type: "DatabricksDataObservabilityIntegrationDataflowRequest",
    },
    databricksModelServingMetrics: {
      baseName: "databricks-model-serving-metrics",
      type: "DatabricksModelServingMetricsIntegrationDataflowRequest",
    },
    databricksServerlessJobs: {
      baseName: "databricks-serverless-jobs",
      type: "DatabricksServerlessJobsIntegrationDataflowRequest",
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
