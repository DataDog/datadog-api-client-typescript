import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsLaunchData } from "./ProductAnalyticsLaunchData";

/**
 * Response containing a list of launches.
 */
export class ProductAnalyticsLaunchesResponse {
  /**
   * The launches.
   */
  "data": Array<ProductAnalyticsLaunchData>;
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
      type: "Array<ProductAnalyticsLaunchData>",
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
    return ProductAnalyticsLaunchesResponse.attributeTypeMap;
  }

  public constructor() {}
}
