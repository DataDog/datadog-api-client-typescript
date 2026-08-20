import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsJourneyFunnelRequestAttributes } from "./ProductAnalyticsJourneyFunnelRequestAttributes";
import { ProductAnalyticsJourneyRequestType } from "./ProductAnalyticsJourneyRequestType";

/**
 * The single JSON:API resource carrying a funnel query. Its attributes hold the time window to
 * query and the journey whose step-to-step conversion should be measured.
 */
export class ProductAnalyticsJourneyFunnelRequestData {
  /**
   * Attributes of a journey funnel request.
   */
  "attributes": ProductAnalyticsJourneyFunnelRequestAttributes;
  /**
   * The resource type identifier for a journey funnel request.
   */
  "type": ProductAnalyticsJourneyRequestType;
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
      type: "ProductAnalyticsJourneyFunnelRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ProductAnalyticsJourneyRequestType",
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
    return ProductAnalyticsJourneyFunnelRequestData.attributeTypeMap;
  }

  public constructor() {}
}
