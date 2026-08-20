import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsJourneyFunnelResponseData } from "./ProductAnalyticsJourneyFunnelResponseData";

/**
 * Response for a journey funnel analysis.
 */
export class ProductAnalyticsJourneyFunnelResponse {
  /**
   * The single JSON:API resource holding a computed funnel. Its attributes contain the number of
   * entities that entered, the end-to-end conversion, and one entry per funnel step.
   */
  "data": ProductAnalyticsJourneyFunnelResponseData;
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
      type: "ProductAnalyticsJourneyFunnelResponseData",
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
    return ProductAnalyticsJourneyFunnelResponse.attributeTypeMap;
  }

  public constructor() {}
}
