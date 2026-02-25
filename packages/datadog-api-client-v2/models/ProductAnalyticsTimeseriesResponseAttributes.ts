/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsInterval } from "./ProductAnalyticsInterval";
import { ProductAnalyticsSerie } from "./ProductAnalyticsSerie";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
