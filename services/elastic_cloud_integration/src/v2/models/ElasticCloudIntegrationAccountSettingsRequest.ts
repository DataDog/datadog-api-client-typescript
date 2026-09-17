import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Settings for creating the Elastic Cloud integration account.
 */
export class ElasticCloudIntegrationAccountSettingsRequest {
  /**
   * Comma-separated list of custom tags for this Elastic Cloud deployment.
   */
  "tags"?: string;
  /**
   * Elastic Cloud deployment URL.
   */
  "url": string;
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
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ElasticCloudIntegrationAccountSettingsRequest.attributeTypeMap;
  }

  public constructor() {}
}
