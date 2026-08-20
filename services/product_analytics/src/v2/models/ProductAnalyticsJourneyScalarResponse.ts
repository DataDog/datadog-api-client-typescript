import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsJourneyScalarResponseData } from "./ProductAnalyticsJourneyScalarResponseData";

/**
 * Response for a journey scalar query.
 */
export class ProductAnalyticsJourneyScalarResponse {
  /**
   * The single JSON:API resource holding journey scalar results. Its attributes contain one value
   * per group, suitable for a query value or top list widget.
   */
  "data": ProductAnalyticsJourneyScalarResponseData;
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
      type: "ProductAnalyticsJourneyScalarResponseData",
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
    return ProductAnalyticsJourneyScalarResponse.attributeTypeMap;
  }

  public constructor() {}
}
