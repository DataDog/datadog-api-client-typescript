import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of the assign seats response, including the list of users assigned and the product code.
 */
export class AssignSeatsUserResponseDataAttributes {
  /**
   * The list of user IDs to which the seats were assigned.
   */
  "assignedIds"?: Array<string>;
  /**
   * The product code for which the seats were assigned.
   */
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
