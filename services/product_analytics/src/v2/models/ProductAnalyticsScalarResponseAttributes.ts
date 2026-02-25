import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsScalarColumn } from "./ProductAnalyticsScalarColumn";

export class ProductAnalyticsScalarResponseAttributes {
  "columns"?: Array<ProductAnalyticsScalarColumn>;
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
    columns: {
      baseName: "columns",
      type: "Array<ProductAnalyticsScalarColumn>",
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
    return ProductAnalyticsScalarResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
