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
    tags: {
      baseName: "tags",
      type: "string",
    },
    url: {
      baseName: "url",
      type: "string",
      required: true,
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
    return ElasticCloudIntegrationAccountSettingsRequest.attributeTypeMap;
  }

  public constructor() {}
}
