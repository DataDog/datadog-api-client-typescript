import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Settings for updating the Elastic Cloud integration account. Only the fields provided are changed.
 */
export class ElasticCloudIntegrationAccountSettingsUpdate {
  /**
   * Comma-separated list of custom tags for this Elastic Cloud deployment.
   */
  "tags"?: string;
  /**
   * Elastic Cloud deployment URL.
   */
  "url"?: string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    tags: {
      baseName: "tags",
      type: "string",
    },
    url: {
      baseName: "url",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ElasticCloudIntegrationAccountSettingsUpdate.attributeTypeMap;
  }

  public constructor() {}
}
