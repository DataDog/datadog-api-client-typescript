import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsLaunchCreateData } from "./ProductAnalyticsLaunchCreateData";

/**
 * Request to create a launch.
 */
export class ProductAnalyticsLaunchCreateRequest {
  /**
   * Data of the launch to create.
   */
  "data": ProductAnalyticsLaunchCreateData;
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
      type: "ProductAnalyticsLaunchCreateData",
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
    return ProductAnalyticsLaunchCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
