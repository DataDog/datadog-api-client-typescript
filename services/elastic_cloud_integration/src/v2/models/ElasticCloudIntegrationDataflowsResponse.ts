import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ElasticCloudDetailedIndexStatsIntegrationDataflowResponse } from "./ElasticCloudDetailedIndexStatsIntegrationDataflowResponse";
import { ElasticCloudIndexStatsIntegrationDataflowResponse } from "./ElasticCloudIndexStatsIntegrationDataflowResponse";
import { ElasticCloudMetricsIntegrationDataflowResponse } from "./ElasticCloudMetricsIntegrationDataflowResponse";
import { ElasticCloudPendingTaskStatsIntegrationDataflowResponse } from "./ElasticCloudPendingTaskStatsIntegrationDataflowResponse";
import { ElasticCloudPrimaryShardGracefulTimeoutIntegrationDataflowResponse } from "./ElasticCloudPrimaryShardGracefulTimeoutIntegrationDataflowResponse";
import { ElasticCloudPrimaryShardStatsIntegrationDataflowResponse } from "./ElasticCloudPrimaryShardStatsIntegrationDataflowResponse";
import { ElasticCloudShardAllocationStatsIntegrationDataflowResponse } from "./ElasticCloudShardAllocationStatsIntegrationDataflowResponse";
import { ElasticCloudSlmStatsIntegrationDataflowResponse } from "./ElasticCloudSlmStatsIntegrationDataflowResponse";

/**
 * Data Datadog collects from Elastic Cloud, keyed by dataflow id.
 */
export class ElasticCloudIntegrationDataflowsResponse {
  /**
   * Primary shard metrics broken down per index, rather than aggregated across the cluster.
   */
  "elasticCloudDetailedIndexStats"?: ElasticCloudDetailedIndexStatsIntegrationDataflowResponse;
  /**
   * Metrics for individual indices. Only the indices granted to the role of the user in `authentication` are collected.
   */
  "elasticCloudIndexStats"?: ElasticCloudIndexStatsIntegrationDataflowResponse;
  /**
   * Node-level statistics for the clusters in your deployment, such as the number of nodes and the number of documents on each node. This is the integration's baseline collection: it is always on and cannot be turned off, which is why it appears in responses only.
   */
  "elasticCloudMetrics"?: ElasticCloudMetricsIntegrationDataflowResponse;
  /**
   * Metrics for cluster-level changes that have been submitted but not yet executed.
   */
  "elasticCloudPendingTaskStats"?: ElasticCloudPendingTaskStatsIntegrationDataflowResponse;
  /**
   * Tolerance for slow primary shard requests, keeping the rest of the collection running when a primary shard request times out instead of failing the run. Only has an effect alongside `elastic-cloud-primary-shard-stats`.
   */
  "elasticCloudPrimaryShardGracefulTimeout"?: ElasticCloudPrimaryShardGracefulTimeoutIntegrationDataflowResponse;
  /**
   * Metrics covering only the cluster's primary shards.
   */
  "elasticCloudPrimaryShardStats"?: ElasticCloudPrimaryShardStatsIntegrationDataflowResponse;
  /**
   * Metrics for how many shards are allocated to each data node, and the disk space they use.
   */
  "elasticCloudShardAllocationStats"?: ElasticCloudShardAllocationStatsIntegrationDataflowResponse;
  /**
   * Metrics about the actions taken by snapshot lifecycle management. Requires the `read_slm` Elasticsearch cluster privilege on the role of the user in `authentication`; without it this dataflow collects no data.
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
