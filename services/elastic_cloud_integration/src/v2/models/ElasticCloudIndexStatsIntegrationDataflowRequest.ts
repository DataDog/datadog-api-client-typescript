import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Metrics for individual indices. Only the indices granted to the role of the user in `authentication` are collected.
 */
export class ElasticCloudIndexStatsIntegrationDataflowRequest {
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
    return ElasticCloudIndexStatsIntegrationDataflowRequest.attributeTypeMap;
  }

  public constructor() {}
}
