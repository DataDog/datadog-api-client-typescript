import { AttributeTypeMap } from "@datadog/datadog-api-client";

export class AssignSeatsUserResponseDataAttributes {
  "assignedIds"?: Array<string>;
  "productCode"?: string;
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
    assignedIds: {
      baseName: "assigned_ids",
      type: "Array<string>",
    },
    productCode: {
      baseName: "product_code",
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
    return AssignSeatsUserResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
