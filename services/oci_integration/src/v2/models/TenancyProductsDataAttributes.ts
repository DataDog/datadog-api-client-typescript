import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TenancyProductsDataAttributesProductsItems } from "./TenancyProductsDataAttributesProductsItems";

export class TenancyProductsDataAttributes {
  "products"?: Array<TenancyProductsDataAttributesProductsItems>;
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
    products: {
      baseName: "products",
      type: "Array<TenancyProductsDataAttributesProductsItems>",
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
    return TenancyProductsDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
