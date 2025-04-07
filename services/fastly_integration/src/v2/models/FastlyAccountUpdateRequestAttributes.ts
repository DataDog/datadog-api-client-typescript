import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes object for updating a Fastly account.
 */
export class FastlyAccountUpdateRequestAttributes {
  /**
   * The API key of the Fastly account.
   */
  "apiKey"?: string;
  /**
   * The name of the Fastly account.
   */
  "name"?: string;
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
    name: {
      baseName: "name",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FastlyAccountUpdateRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
