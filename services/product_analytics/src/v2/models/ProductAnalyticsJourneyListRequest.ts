import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsJourneyListRequestData } from "./ProductAnalyticsJourneyListRequestData";

/**
 * Request body for a journey list query.
 */
export class ProductAnalyticsJourneyListRequest {
  /**
   * The single JSON:API resource carrying a journey list query. Its attributes hold the time window
   * and the journey whose matching entities should be listed, one row each.
   */
  "data": ProductAnalyticsJourneyListRequestData;
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
      type: "ProductAnalyticsJourneyListRequestData",
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
    return ProductAnalyticsJourneyListRequest.attributeTypeMap;
  }

  public constructor() {}
}
