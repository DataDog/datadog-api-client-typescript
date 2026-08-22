import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ElasticCloudDetailedIndexStatsIntegrationDataflowRequest } from "./ElasticCloudDetailedIndexStatsIntegrationDataflowRequest";
import { ElasticCloudIndexStatsIntegrationDataflowRequest } from "./ElasticCloudIndexStatsIntegrationDataflowRequest";
import { ElasticCloudPendingTaskStatsIntegrationDataflowRequest } from "./ElasticCloudPendingTaskStatsIntegrationDataflowRequest";
import { ElasticCloudPrimaryShardGracefulTimeoutIntegrationDataflowRequest } from "./ElasticCloudPrimaryShardGracefulTimeoutIntegrationDataflowRequest";
import { ElasticCloudPrimaryShardStatsIntegrationDataflowRequest } from "./ElasticCloudPrimaryShardStatsIntegrationDataflowRequest";
import { ElasticCloudShardAllocationStatsIntegrationDataflowRequest } from "./ElasticCloudShardAllocationStatsIntegrationDataflowRequest";
import { ElasticCloudSlmStatsIntegrationDataflowRequest } from "./ElasticCloudSlmStatsIntegrationDataflowRequest";

/**
 * Dataflows to configure on the Elastic Cloud integration account, keyed by dataflow id.
 */
export class ElasticCloudIntegrationDataflowsRequest {
  /**
   * The Elastic Cloud detailed index stats dataflow.
   */
  "elasticCloudDetailedIndexStats"?: ElasticCloudDetailedIndexStatsIntegrationDataflowRequest;
  /**
   * The Elastic Cloud index stats dataflow.
   */
  "elasticCloudIndexStats"?: ElasticCloudIndexStatsIntegrationDataflowRequest;
  /**
   * The Elastic Cloud pending task stats dataflow.
   */
  "elasticCloudPendingTaskStats"?: ElasticCloudPendingTaskStatsIntegrationDataflowRequest;
  /**
   * The Elastic Cloud primary shard graceful timeout dataflow.
   */
  "elasticCloudPrimaryShardGracefulTimeout"?: ElasticCloudPrimaryShardGracefulTimeoutIntegrationDataflowRequest;
  /**
   * The Elastic Cloud primary shard stats dataflow.
   */
  "elasticCloudPrimaryShardStats"?: ElasticCloudPrimaryShardStatsIntegrationDataflowRequest;
  /**
   * The Elastic Cloud shard allocation stats dataflow.
   */
  "elasticCloudShardAllocationStats"?: ElasticCloudShardAllocationStatsIntegrationDataflowRequest;
  /**
   * The Elastic Cloud snapshot lifecycle management stats dataflow.
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
