import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Links for the integration resource.
 */
export class IntegrationLinks {
  /**
   * Link to the integration resource.
   */
  "self"?: string;
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
    self: {
      baseName: "self",
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
    return IntegrationLinks.attributeTypeMap;
  }

  public constructor() {}
}
