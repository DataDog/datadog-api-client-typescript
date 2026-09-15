import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Metrics covering only the cluster's primary shards.
 */
export class ElasticCloudPrimaryShardStatsIntegrationDataflowRequest {
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
    return ElasticCloudPrimaryShardStatsIntegrationDataflowRequest.attributeTypeMap;
  }

  public constructor() {}
}
