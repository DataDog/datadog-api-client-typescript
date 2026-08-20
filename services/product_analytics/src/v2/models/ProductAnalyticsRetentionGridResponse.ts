import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsRetentionGridResponseData } from "./ProductAnalyticsRetentionGridResponseData";

/**
 * Response for a retention grid query.
 */
export class ProductAnalyticsRetentionGridResponse {
  /**
   * The single JSON:API resource holding a computed retention grid. Its attributes contain the
   * return periods forming the columns and the cohorts forming the rows.
   */
  "data": ProductAnalyticsRetentionGridResponseData;
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
      type: "ProductAnalyticsRetentionGridResponseData",
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
    return ProductAnalyticsRetentionGridResponse.attributeTypeMap;
  }

  public constructor() {}
}
