import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A quantity of one SKU that is included with, and consumed before, the billable usage of
 * another SKU.
 */
export class ProductCatalogSKUAllotment {
  /**
   * The code of the SKU that receives the allotment.
   */
  "childSkuCode": string;
  /**
   * The quantity allotted per hour. Fractional for some allotments, and equal to
   * `monthly_quantity` for others, depending on how the child SKU meters usage.
   */
  "hourlyQuantity": number;
  /**
   * The quantity allotted per month.
   */
  "monthlyQuantity": number;
  /**
   * The code of the SKU that provides the allotment. Always the code of the SKU the
   * allotment is returned under.
   */
  "parentSkuCode": string;
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
    childSkuCode: {
      baseName: "child_sku_code",
      type: "string",
      required: true,
    },
    hourlyQuantity: {
      baseName: "hourly_quantity",
      type: "number",
      required: true,
      format: "double",
    },
    monthlyQuantity: {
      baseName: "monthly_quantity",
      type: "number",
      required: true,
      format: "int64",
    },
    parentSkuCode: {
      baseName: "parent_sku_code",
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
    return ProductCatalogSKUAllotment.attributeTypeMap;
  }

  public constructor() {}
}
