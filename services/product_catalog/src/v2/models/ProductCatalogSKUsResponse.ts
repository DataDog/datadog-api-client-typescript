import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductCatalogSKUDataResponse } from "./ProductCatalogSKUDataResponse";

/**
 * Response containing the generally available SKUs and their pricing metadata.
 */
export class ProductCatalogSKUsResponse {
  /**
   * The generally available SKUs, sorted by SKU code in ascending order.
   */
  "data": Array<ProductCatalogSKUDataResponse>;
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
    data: {
      baseName: "data",
      type: "Array<ProductCatalogSKUDataResponse>",
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
    return ProductCatalogSKUsResponse.attributeTypeMap;
  }

  public constructor() {}
}
