import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsUnit } from "./ProductAnalyticsUnit";

export class ProductAnalyticsScalarColumnMeta {
  "unit"?: Array<ProductAnalyticsUnit>;
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
    unit: {
      baseName: "unit",
      type: "Array<ProductAnalyticsUnit>",
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
    return ProductAnalyticsScalarColumnMeta.attributeTypeMap;
  }

  public constructor() {}
}
