/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ElasticCloudDetailedIndexStatsIntegrationDataflowResponse } from "./ElasticCloudDetailedIndexStatsIntegrationDataflowResponse";
import { ElasticCloudIndexStatsIntegrationDataflowResponse } from "./ElasticCloudIndexStatsIntegrationDataflowResponse";
import { ElasticCloudMetricsIntegrationDataflowResponse } from "./ElasticCloudMetricsIntegrationDataflowResponse";
import { ElasticCloudPendingTaskStatsIntegrationDataflowResponse } from "./ElasticCloudPendingTaskStatsIntegrationDataflowResponse";
import { ElasticCloudPrimaryShardGracefulTimeoutIntegrationDataflowResponse } from "./ElasticCloudPrimaryShardGracefulTimeoutIntegrationDataflowResponse";
import { ElasticCloudPrimaryShardStatsIntegrationDataflowResponse } from "./ElasticCloudPrimaryShardStatsIntegrationDataflowResponse";
import { ElasticCloudShardAllocationStatsIntegrationDataflowResponse } from "./ElasticCloudShardAllocationStatsIntegrationDataflowResponse";
import { ElasticCloudSlmStatsIntegrationDataflowResponse } from "./ElasticCloudSlmStatsIntegrationDataflowResponse";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Dataflows configured on the Elastic Cloud integration account, keyed by dataflow id.
 */
export class ElasticCloudIntegrationDataflowsResponse {
  /**
   * The Elastic Cloud detailed index stats dataflow.
   */
  "elasticCloudDetailedIndexStats"?: ElasticCloudDetailedIndexStatsIntegrationDataflowResponse;
  /**
   * The Elastic Cloud index stats dataflow.
   */
  "elasticCloudIndexStats"?: ElasticCloudIndexStatsIntegrationDataflowResponse;
  /**
   * The Elastic Cloud metrics dataflow.
   */
  "elasticCloudMetrics"?: ElasticCloudMetricsIntegrationDataflowResponse;
  /**
   * The Elastic Cloud pending task stats dataflow.
   */
  "elasticCloudPendingTaskStats"?: ElasticCloudPendingTaskStatsIntegrationDataflowResponse;
  /**
   * The Elastic Cloud primary shard graceful timeout dataflow.
   */
  "elasticCloudPrimaryShardGracefulTimeout"?: ElasticCloudPrimaryShardGracefulTimeoutIntegrationDataflowResponse;
  /**
   * The Elastic Cloud primary shard stats dataflow.
   */
  "elasticCloudPrimaryShardStats"?: ElasticCloudPrimaryShardStatsIntegrationDataflowResponse;
  /**
   * The Elastic Cloud shard allocation stats dataflow.
   */
  "elasticCloudShardAllocationStats"?: ElasticCloudShardAllocationStatsIntegrationDataflowResponse;
  /**
   * The Elastic Cloud snapshot lifecycle management stats dataflow.
   */
  "elasticCloudSlmStats"?: ElasticCloudSlmStatsIntegrationDataflowResponse;

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
    elasticCloudDetailedIndexStats: {
      baseName: "elastic-cloud-detailed-index-stats",
      type: "ElasticCloudDetailedIndexStatsIntegrationDataflowResponse",
    },
    elasticCloudIndexStats: {
      baseName: "elastic-cloud-index-stats",
      type: "ElasticCloudIndexStatsIntegrationDataflowResponse",
    },
    elasticCloudMetrics: {
      baseName: "elastic-cloud-metrics",
      type: "ElasticCloudMetricsIntegrationDataflowResponse",
    },
    elasticCloudPendingTaskStats: {
      baseName: "elastic-cloud-pending-task-stats",
      type: "ElasticCloudPendingTaskStatsIntegrationDataflowResponse",
    },
    elasticCloudPrimaryShardGracefulTimeout: {
      baseName: "elastic-cloud-primary-shard-graceful-timeout",
      type: "ElasticCloudPrimaryShardGracefulTimeoutIntegrationDataflowResponse",
    },
    elasticCloudPrimaryShardStats: {
      baseName: "elastic-cloud-primary-shard-stats",
      type: "ElasticCloudPrimaryShardStatsIntegrationDataflowResponse",
    },
    elasticCloudShardAllocationStats: {
      baseName: "elastic-cloud-shard-allocation-stats",
      type: "ElasticCloudShardAllocationStatsIntegrationDataflowResponse",
    },
    elasticCloudSlmStats: {
      baseName: "elastic-cloud-slm-stats",
      type: "ElasticCloudSlmStatsIntegrationDataflowResponse",
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
    return ElasticCloudIntegrationDataflowsResponse.attributeTypeMap;
  }

  public constructor() {}
}
