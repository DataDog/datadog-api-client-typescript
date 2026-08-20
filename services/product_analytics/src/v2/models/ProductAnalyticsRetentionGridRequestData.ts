import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsRetentionGridRequestAttributes } from "./ProductAnalyticsRetentionGridRequestAttributes";
import { ProductAnalyticsRetentionGridRequestType } from "./ProductAnalyticsRetentionGridRequestType";

/**
 * The single JSON:API resource carrying a retention grid query. Its attributes hold the time
 * window to query and the cohort and return criteria that define the grid.
 */
export class ProductAnalyticsRetentionGridRequestData {
  /**
   * Attributes of a retention grid request.
   */
  "attributes": ProductAnalyticsRetentionGridRequestAttributes;
  /**
   * The resource type identifier for a retention grid request.
   */
  "type": ProductAnalyticsRetentionGridRequestType;
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
      type: "ProductAnalyticsRetentionGridRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ProductAnalyticsRetentionGridRequestType",
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
    return ProductAnalyticsRetentionGridRequestData.attributeTypeMap;
  }

  public constructor() {}
}
