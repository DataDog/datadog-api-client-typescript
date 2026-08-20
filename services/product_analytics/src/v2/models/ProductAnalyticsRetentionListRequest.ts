import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsRetentionListRequestData } from "./ProductAnalyticsRetentionListRequestData";

/**
 * Request body listing the individual entities behind one cell of the retention grid.
 */
export class ProductAnalyticsRetentionListRequest {
  /**
   * The single JSON:API resource carrying a retention list query. Its attributes hold the time
   * window, the cell to list, and the columns to return for each entity.
   */
  "data": ProductAnalyticsRetentionListRequestData;
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
      type: "ProductAnalyticsRetentionListRequestData",
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
    return ProductAnalyticsRetentionListRequest.attributeTypeMap;
  }

  public constructor() {}
}
