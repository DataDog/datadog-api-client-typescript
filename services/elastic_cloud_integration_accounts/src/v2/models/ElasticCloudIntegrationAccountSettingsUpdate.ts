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
    return ElasticCloudIntegrationAccountSettingsUpdate.attributeTypeMap;
  }

  public constructor() {}
}
