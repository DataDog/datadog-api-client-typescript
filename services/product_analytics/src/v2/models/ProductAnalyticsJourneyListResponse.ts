import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsJourneyListResponseData } from "./ProductAnalyticsJourneyListResponseData";

/**
 * Response for a journey list query.
 */
export class ProductAnalyticsJourneyListResponse {
  /**
   * The single JSON:API resource holding the entities matching a journey. Its attributes contain
   * the returned rows and the total number of rows that matched, ignoring `limit`.
   */
  "data": ProductAnalyticsJourneyListResponseData;
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
      type: "ProductAnalyticsJourneyListResponseData",
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
    return ProductAnalyticsJourneyListResponse.attributeTypeMap;
  }

  public constructor() {}
}
