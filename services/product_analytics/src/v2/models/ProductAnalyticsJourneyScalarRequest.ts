import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsJourneyScalarRequestData } from "./ProductAnalyticsJourneyScalarRequestData";

/**
 * Request body for a journey scalar query.
 */
export class ProductAnalyticsJourneyScalarRequest {
  /**
   * The single JSON:API resource carrying a journey scalar query. Its attributes hold the time
   * window and the journey metric to reduce to one value over that window.
   */
  "data": ProductAnalyticsJourneyScalarRequestData;
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
      type: "ProductAnalyticsJourneyScalarRequestData",
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
    return ProductAnalyticsJourneyScalarRequest.attributeTypeMap;
  }

  public constructor() {}
}
