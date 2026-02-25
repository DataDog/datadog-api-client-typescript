import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsInterval } from "./ProductAnalyticsInterval";
import { ProductAnalyticsSerie } from "./ProductAnalyticsSerie";

export class ProductAnalyticsTimeseriesResponseAttributes {
  "intervals"?: Array<ProductAnalyticsInterval>;
  "series"?: Array<ProductAnalyticsSerie>;
  /**
   * Timestamps for each data point (epoch milliseconds).
   */
  "times"?: Array<number>;
  /**
   * Values for each series at each time point.
   */
  "values"?: Array<Array<number | null>>;
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
    intervals: {
      baseName: "intervals",
      type: "Array<ProductAnalyticsInterval>",
    },
    series: {
      baseName: "series",
      type: "Array<ProductAnalyticsSerie>",
    },
    times: {
      baseName: "times",
      type: "Array<number>",
      format: "int64",
    },
    values: {
      baseName: "values",
      type: "Array<Array<number>>",
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
    return ProductAnalyticsTimeseriesResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
