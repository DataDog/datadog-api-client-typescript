import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsJourneyTimeseriesResponseType } from "./ProductAnalyticsJourneyTimeseriesResponseType";
import { ProductAnalyticsTimeseriesResponseAttributes } from "./ProductAnalyticsTimeseriesResponseAttributes";

/**
 * The single JSON:API resource holding journey timeseries results. Its attributes contain one
 * series per group along with the timestamps the points fall on.
 */
export class ProductAnalyticsJourneyTimeseriesResponseData {
  /**
   * Attributes of a timeseries analytics response, containing series data, timestamps, and
   * interval definitions.
   */
  "attributes": ProductAnalyticsTimeseriesResponseAttributes;
  /**
   * Identifier of this result.
   */
  "id": string;
  /**
   * The resource type identifier for a journey timeseries response.
   */
  "type": ProductAnalyticsJourneyTimeseriesResponseType;
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
      type: "ProductAnalyticsTimeseriesResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ProductAnalyticsJourneyTimeseriesResponseType",
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
    return ProductAnalyticsJourneyTimeseriesResponseData.attributeTypeMap;
  }

  public constructor() {}
}
