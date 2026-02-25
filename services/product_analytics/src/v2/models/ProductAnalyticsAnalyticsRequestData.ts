import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsAnalyticsRequestAttributes } from "./ProductAnalyticsAnalyticsRequestAttributes";
import { ProductAnalyticsAnalyticsRequestType } from "./ProductAnalyticsAnalyticsRequestType";

/**
 * Data object for an analytics request.
 */
export class ProductAnalyticsAnalyticsRequestData {
  /**
   * Attributes for an analytics request.
   */
  "attributes": ProductAnalyticsAnalyticsRequestAttributes;
  /**
   * The resource type for analytics requests.
   */
  "type": ProductAnalyticsAnalyticsRequestType;
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
      type: "ProductAnalyticsAnalyticsRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ProductAnalyticsAnalyticsRequestType",
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
    return ProductAnalyticsAnalyticsRequestData.attributeTypeMap;
  }

  public constructor() {}
}
