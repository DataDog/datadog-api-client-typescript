import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsLaunchData } from "./ProductAnalyticsLaunchData";

/**
 * Response containing a launch.
 */
export class ProductAnalyticsLaunchResponse {
  /**
   * A launch.
   */
  "data": ProductAnalyticsLaunchData;
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
      type: "ProductAnalyticsLaunchData",
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
    return ProductAnalyticsLaunchResponse.attributeTypeMap;
  }

  public constructor() {}
}
