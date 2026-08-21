import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsAnalyticsListRequestAttributes } from "./ProductAnalyticsAnalyticsListRequestAttributes";
import { ProductAnalyticsAnalyticsListRequestType } from "./ProductAnalyticsAnalyticsListRequestType";

/**
 * Data object for an analytics list request.
 */
export class ProductAnalyticsAnalyticsListRequestData {
  /**
   * Attributes for an analytics list request.
   */
  "attributes": ProductAnalyticsAnalyticsListRequestAttributes;
  /**
   * The resource type for analytics list requests.
   */
  "type": ProductAnalyticsAnalyticsListRequestType;
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
      type: "ProductAnalyticsAnalyticsListRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ProductAnalyticsAnalyticsListRequestType",
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
    return ProductAnalyticsAnalyticsListRequestData.attributeTypeMap;
  }

  public constructor() {}
}
