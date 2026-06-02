import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The Statuspage account attributes for a create request.
 */
export class StatuspageAccountCreateAttributes {
  /**
   * The Statuspage API key for your Statuspage account.
   */
  "apiKey": string;
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
    return StatuspageAccountCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
