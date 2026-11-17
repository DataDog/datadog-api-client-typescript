import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsJourneyDropOffResponseData } from "./ProductAnalyticsJourneyDropOffResponseData";

/**
 * Response for a journey drop-off analysis.
 */
export class ProductAnalyticsJourneyDropOffResponse {
  /**
   * The journey drop-off analysis results.
   */
  "data": ProductAnalyticsJourneyDropOffResponseData;
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
      type: "ProductAnalyticsJourneyDropOffResponseData",
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
    return ProductAnalyticsJourneyDropOffResponse.attributeTypeMap;
  }

  public constructor() {}
}
