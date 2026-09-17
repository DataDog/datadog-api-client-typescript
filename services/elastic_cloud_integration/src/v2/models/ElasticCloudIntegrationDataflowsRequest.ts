import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ElasticCloudDetailedIndexStatsIntegrationDataflowRequest } from "./ElasticCloudDetailedIndexStatsIntegrationDataflowRequest";
import { ElasticCloudIndexStatsIntegrationDataflowRequest } from "./ElasticCloudIndexStatsIntegrationDataflowRequest";
import { ElasticCloudPendingTaskStatsIntegrationDataflowRequest } from "./ElasticCloudPendingTaskStatsIntegrationDataflowRequest";
import { ElasticCloudPrimaryShardGracefulTimeoutIntegrationDataflowRequest } from "./ElasticCloudPrimaryShardGracefulTimeoutIntegrationDataflowRequest";
import { ElasticCloudPrimaryShardStatsIntegrationDataflowRequest } from "./ElasticCloudPrimaryShardStatsIntegrationDataflowRequest";
import { ElasticCloudShardAllocationStatsIntegrationDataflowRequest } from "./ElasticCloudShardAllocationStatsIntegrationDataflowRequest";
import { ElasticCloudSlmStatsIntegrationDataflowRequest } from "./ElasticCloudSlmStatsIntegrationDataflowRequest";

/**
 * Data Datadog collects from Elastic Cloud, keyed by dataflow id. Node-level cluster statistics are always collected; each dataflow here adds a further set of metrics on top of that baseline, so set `enabled` to start or stop it. Defaults listed on each dataflow apply when the account is created; on update, omitted fields keep their current values. Every dataflow queries the deployment as the user in `authentication`, so that user's role must hold the required Elasticsearch privileges; a dataflow enabled without them is stored but collects no data.
 */
export class ElasticCloudIntegrationDataflowsRequest {
  /**
   * Primary shard metrics broken down per index, rather than aggregated across the cluster.
   */
  "elasticCloudDetailedIndexStats"?: ElasticCloudDetailedIndexStatsIntegrationDataflowRequest;
  /**
   * Metrics for individual indices. Only the indices granted to the role of the user in `authentication` are collected.
   */
  "elasticCloudIndexStats"?: ElasticCloudIndexStatsIntegrationDataflowRequest;
  /**
   * Metrics for cluster-level changes that have been submitted but not yet executed.
   */
  "elasticCloudPendingTaskStats"?: ElasticCloudPendingTaskStatsIntegrationDataflowRequest;
  /**
   * Tolerance for slow primary shard requests. Primary shard metrics can grow large enough for the request to time out; enabling this keeps the rest of the collection running when that happens instead of failing the run. Only has an effect alongside `elastic-cloud-primary-shard-stats`.
   */
  "elasticCloudPrimaryShardGracefulTimeout"?: ElasticCloudPrimaryShardGracefulTimeoutIntegrationDataflowRequest;
  /**
   * Metrics covering only the cluster's primary shards.
   */
  "elasticCloudPrimaryShardStats"?: ElasticCloudPrimaryShardStatsIntegrationDataflowRequest;
  /**
   * Metrics for how many shards are allocated to each data node, and the disk space they use.
   */
  "elasticCloudShardAllocationStats"?: ElasticCloudShardAllocationStatsIntegrationDataflowRequest;
  /**
   * Metrics about the actions taken by snapshot lifecycle management. Requires the `read_slm` Elasticsearch cluster privilege on the role of the user in `authentication`; without it this dataflow collects no data.
   */
  "elasticCloudSlmStats"?: ElasticCloudSlmStatsIntegrationDataflowRequest;
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
      type: "ElasticCloudDetailedIndexStatsIntegrationDataflowRequest",
    },
    elasticCloudIndexStats: {
      baseName: "elastic-cloud-index-stats",
      type: "ElasticCloudIndexStatsIntegrationDataflowRequest",
    },
    elasticCloudPendingTaskStats: {
      baseName: "elastic-cloud-pending-task-stats",
      type: "ElasticCloudPendingTaskStatsIntegrationDataflowRequest",
    },
    elasticCloudPrimaryShardGracefulTimeout: {
      baseName: "elastic-cloud-primary-shard-graceful-timeout",
      type: "ElasticCloudPrimaryShardGracefulTimeoutIntegrationDataflowRequest",
    },
    elasticCloudPrimaryShardStats: {
      baseName: "elastic-cloud-primary-shard-stats",
      type: "ElasticCloudPrimaryShardStatsIntegrationDataflowRequest",
    },
    elasticCloudShardAllocationStats: {
      baseName: "elastic-cloud-shard-allocation-stats",
      type: "ElasticCloudShardAllocationStatsIntegrationDataflowRequest",
    },
    elasticCloudSlmStats: {
      baseName: "elastic-cloud-slm-stats",
      type: "ElasticCloudSlmStatsIntegrationDataflowRequest",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ElasticCloudIntegrationDataflowsRequest.attributeTypeMap;
  }

  public constructor() {}
}
