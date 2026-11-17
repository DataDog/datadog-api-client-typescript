import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsLaunchAttributes } from "./ProductAnalyticsLaunchAttributes";
import { ProductAnalyticsLaunchType } from "./ProductAnalyticsLaunchType";

/**
 * A launch.
 */
export class ProductAnalyticsLaunchData {
  /**
   * Attributes of a launch.
   */
  "attributes": ProductAnalyticsLaunchAttributes;
  /**
   * UUID of the launch.
   */
  "id": string;
  /**
   * Launch resource type.
   */
  "type": ProductAnalyticsLaunchType;
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
    attributes: {
      baseName: "attributes",
      type: "ProductAnalyticsLaunchAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ProductAnalyticsLaunchType",
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
    return ProductAnalyticsLaunchData.attributeTypeMap;
  }

  public constructor() {}
}
