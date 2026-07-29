import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Partial Elastic Cloud interface settings for updates.
 */
export class ElasticCloudSettingsUpdate {
  /**
   * Enable to collect shard allocation metrics.
   */
  "catAllocationStatsEnabled"?: boolean;
  /**
   * Enable to collect index-specific stats.
   */
  "detailedIndexStatsEnabled"?: boolean;
  /**
   * Enable to collect metrics about the indices in your cluster.
   */
  "indexStatsEnabled"?: boolean;
  /**
   * Enable to collect metrics about pending tasks.
   */
  "pendingTaskStatsEnabled"?: boolean;
  /**
   * Enable to collect all metrics even if primary shard metric collection times out.
   */
  "pshardGracefulToEnabled"?: boolean;
  /**
   * Enable to collect metrics over primary shards.
   */
  "pshardStatsEnabled"?: boolean;
  /**
   * Enable to collect snapshot lifecycle management metrics.
   */
  "slmStatsEnabled"?: boolean;
  /**
   * Custom tags for this deployment.
   */
  "tags"?: Array<string>;
  /**
   * Deployment URL.
   */
  "url"?: string;
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
    catAllocationStatsEnabled: {
      baseName: "cat_allocation_stats_enabled",
      type: "boolean",
    },
    detailedIndexStatsEnabled: {
      baseName: "detailed_index_stats_enabled",
      type: "boolean",
    },
    indexStatsEnabled: {
      baseName: "index_stats_enabled",
      type: "boolean",
    },
    pendingTaskStatsEnabled: {
      baseName: "pending_task_stats_enabled",
      type: "boolean",
    },
    pshardGracefulToEnabled: {
      baseName: "pshard_graceful_to_enabled",
      type: "boolean",
    },
    pshardStatsEnabled: {
      baseName: "pshard_stats_enabled",
      type: "boolean",
    },
    slmStatsEnabled: {
      baseName: "slm_stats_enabled",
      type: "boolean",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    url: {
      baseName: "url",
      type: "string",
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
    return ElasticCloudSettingsUpdate.attributeTypeMap;
  }

  public constructor() {}
}
