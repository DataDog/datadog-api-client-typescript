import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FiltersPerProduct } from "./FiltersPerProduct";

/**
 * Dataset metadata and configurations.
 */
export class DatasetAttributesRequest {
  /**
   * Name of the dataset.
   */
  "name": string;
  /**
   * List of access principals, formatted as `principal_type:id`. Principal can be 'team' or 'role'.
   */
  "principals": Array<string>;
  /**
   * List of product-specific filters.
   */
  "productFilters": Array<FiltersPerProduct>;
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
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    principals: {
      baseName: "principals",
      type: "Array<string>",
      required: true,
    },
    productFilters: {
      baseName: "product_filters",
      type: "Array<FiltersPerProduct>",
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
    return DatasetAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
