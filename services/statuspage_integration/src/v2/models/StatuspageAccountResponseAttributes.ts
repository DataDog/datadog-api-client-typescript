import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The attributes from a Statuspage account response.
 */
export class StatuspageAccountResponseAttributes {
  /**
   * The Statuspage API key for your Statuspage account. The value is always returned masked.
   */
  "apiKey"?: string;
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
    apiKey: {
      baseName: "api_key",
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
    return StatuspageAccountResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
