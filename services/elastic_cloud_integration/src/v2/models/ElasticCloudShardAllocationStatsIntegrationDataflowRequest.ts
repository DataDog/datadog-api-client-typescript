import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Metrics for how many shards are allocated to each data node, and the disk space they use.
 */
export class ElasticCloudShardAllocationStatsIntegrationDataflowRequest {
  /**
   * Whether Datadog collects this data. Defaults to `false`; set to `true` to start collection.
   */
  "enabled"?: boolean;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ElasticCloudShardAllocationStatsIntegrationDataflowRequest.attributeTypeMap;
  }

  public constructor() {}
}
