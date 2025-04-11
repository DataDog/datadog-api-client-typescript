import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes used to create an API Key.
 */
export class APIKeyCreateAttributes {
  /**
   * The APIKeyCreateAttributes category.
   */
  "category"?: string;
  /**
   * Name of the API key.
   */
  "name": string;
  /**
   * The APIKeyCreateAttributes remote_config_read_enabled.
   */
  "remoteConfigReadEnabled"?: boolean;
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
    category: {
      baseName: "category",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    remoteConfigReadEnabled: {
      baseName: "remote_config_read_enabled",
      type: "boolean",
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
    return APIKeyCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
