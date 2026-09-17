import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Metrics for cluster-level changes that have been submitted but not yet executed.
 */
export class ElasticCloudPendingTaskStatsIntegrationDataflowRequest {
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
    return ElasticCloudPendingTaskStatsIntegrationDataflowRequest.attributeTypeMap;
  }

  public constructor() {}
}
