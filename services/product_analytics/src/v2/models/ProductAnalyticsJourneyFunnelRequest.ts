import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsJourneyFunnelRequestData } from "./ProductAnalyticsJourneyFunnelRequestData";

/**
 * Request body for a journey funnel analysis.
 */
export class ProductAnalyticsJourneyFunnelRequest {
  /**
   * The single JSON:API resource carrying a funnel query. Its attributes hold the time window to
   * query and the journey whose step-to-step conversion should be measured.
   */
  "data": ProductAnalyticsJourneyFunnelRequestData;
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
      type: "ProductAnalyticsJourneyFunnelRequestData",
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
    return ProductAnalyticsJourneyFunnelRequest.attributeTypeMap;
  }

  public constructor() {}
}
