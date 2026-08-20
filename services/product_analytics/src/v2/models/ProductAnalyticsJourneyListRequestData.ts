import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsJourneyListRequestAttributes } from "./ProductAnalyticsJourneyListRequestAttributes";
import { ProductAnalyticsJourneyListRequestType } from "./ProductAnalyticsJourneyListRequestType";

/**
 * The single JSON:API resource carrying a journey list query. Its attributes hold the time window
 * and the journey whose matching entities should be listed, one row each.
 */
export class ProductAnalyticsJourneyListRequestData {
  /**
   * Attributes of a journey list request.
   */
  "attributes": ProductAnalyticsJourneyListRequestAttributes;
  /**
   * The resource type identifier for a journey list request.
   */
  "type": ProductAnalyticsJourneyListRequestType;
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
      type: "ProductAnalyticsJourneyListRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ProductAnalyticsJourneyListRequestType",
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
    return ProductAnalyticsJourneyListRequestData.attributeTypeMap;
  }

  public constructor() {}
}
