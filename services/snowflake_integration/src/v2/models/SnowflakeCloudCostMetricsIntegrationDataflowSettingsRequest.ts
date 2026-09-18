import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Settings of the Cloud Cost Management dataflow. Only the fields provided are changed.
 */
export class SnowflakeCloudCostMetricsIntegrationDataflowSettingsRequest {
  /**
   * Snowflake query tags to ingest, so that cost data can be broken down by them in Cloud Cost Management. Provide the tag names as a comma-separated list without spaces, using only letters, digits, underscores, dots, and hyphens. Datadog does not collect query tags by default.
   */
  "queryTags"?: string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    queryTags: {
      baseName: "query_tags",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SnowflakeCloudCostMetricsIntegrationDataflowSettingsRequest.attributeTypeMap;
  }

  public constructor() {}
}
