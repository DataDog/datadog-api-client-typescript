import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Metrics about the actions taken by snapshot lifecycle management. Requires the `read_slm` Elasticsearch cluster privilege on the role of the user in `authentication`; without it this dataflow collects no data.
 */
export class ElasticCloudSlmStatsIntegrationDataflowRequest {
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
    return ElasticCloudSlmStatsIntegrationDataflowRequest.attributeTypeMap;
  }

  public constructor() {}
}
