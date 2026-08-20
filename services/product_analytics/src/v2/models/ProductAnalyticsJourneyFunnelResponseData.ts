import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsJourneyFunnelResponseAttributes } from "./ProductAnalyticsJourneyFunnelResponseAttributes";
import { ProductAnalyticsJourneyFunnelResponseType } from "./ProductAnalyticsJourneyFunnelResponseType";

/**
 * The single JSON:API resource holding a computed funnel. Its attributes contain the number of
 * entities that entered, the end-to-end conversion, and one entry per funnel step.
 */
export class ProductAnalyticsJourneyFunnelResponseData {
  /**
   * Attributes of a journey funnel response.
   */
  "attributes": ProductAnalyticsJourneyFunnelResponseAttributes;
  /**
   * Identifier of this result.
   */
  "id": string;
  /**
   * The resource type identifier for a journey funnel response.
   */
  "type": ProductAnalyticsJourneyFunnelResponseType;
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
      type: "ProductAnalyticsJourneyFunnelResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ProductAnalyticsJourneyFunnelResponseType",
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
    return ProductAnalyticsJourneyFunnelResponseData.attributeTypeMap;
  }

  public constructor() {}
}
