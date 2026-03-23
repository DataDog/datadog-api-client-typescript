import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsUnit } from "./ProductAnalyticsUnit";

/**
 * Metadata associated with a scalar response column, including optional unit information.
 */
export class ProductAnalyticsScalarColumnMeta {
  /**
   * Unit definitions for the column values, if applicable.
   */
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
