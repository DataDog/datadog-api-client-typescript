import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsJourneyTimeseriesResponseData } from "./ProductAnalyticsJourneyTimeseriesResponseData";

/**
 * Response for a journey timeseries query.
 */
export class ProductAnalyticsJourneyTimeseriesResponse {
  /**
   * The single JSON:API resource holding journey timeseries results. Its attributes contain one
   * series per group along with the timestamps the points fall on.
   */
  "data": ProductAnalyticsJourneyTimeseriesResponseData;
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
      type: "ProductAnalyticsJourneyTimeseriesResponseData",
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
    return ProductAnalyticsJourneyTimeseriesResponse.attributeTypeMap;
  }

  public constructor() {}
}
