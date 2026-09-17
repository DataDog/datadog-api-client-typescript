import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Primary shard metrics broken down per index, rather than aggregated across the cluster.
 */
export class ElasticCloudDetailedIndexStatsIntegrationDataflowRequest {
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
    return ElasticCloudDetailedIndexStatsIntegrationDataflowRequest.attributeTypeMap;
  }

  public constructor() {}
}
