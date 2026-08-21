import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsRetentionGridRequestData } from "./ProductAnalyticsRetentionGridRequestData";

/**
 * Request body for a retention grid query.
 */
export class ProductAnalyticsRetentionGridRequest {
  /**
   * The single JSON:API resource carrying a retention grid query. Its attributes hold the time
   * window to query and the cohort and return criteria that define the grid.
   */
  "data": ProductAnalyticsRetentionGridRequestData;
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
      type: "ProductAnalyticsRetentionGridRequestData",
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
    return ProductAnalyticsRetentionGridRequest.attributeTypeMap;
  }

  public constructor() {}
}
