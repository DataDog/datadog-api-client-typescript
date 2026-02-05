import { AttributeTypeMap } from "@datadog/datadog-api-client";

export class UnassignSeatsUserRequestDataAttributes {
  "productCode"?: string;
  "userUuids"?: Array<string>;
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
    productCode: {
      baseName: "product_code",
      type: "string",
    },
    userUuids: {
      baseName: "user_uuids",
      type: "Array<string>",
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
    return UnassignSeatsUserRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
