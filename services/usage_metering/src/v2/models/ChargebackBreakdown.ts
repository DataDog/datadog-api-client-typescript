import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Charges breakdown.
 */
export class ChargebackBreakdown {
  /**
   * The type of charge for a particular product.
   */
  "chargeType"?: string;
  /**
   * The cost for a particular product and charge type during a given month.
   */
  "cost"?: number;
  /**
   * The product for which cost is being reported.
   */
  "productName"?: string;
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
    chargeType: {
      baseName: "charge_type",
      type: "string",
    },
    cost: {
      baseName: "cost",
      type: "number",
      format: "double",
    },
    productName: {
      baseName: "product_name",
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
    return ChargebackBreakdown.attributeTypeMap;
  }

  public constructor() {}
}
