import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CommitmentsUnit } from "./CommitmentsUnit";

/**
 * A timeseries metric containing timestamps, series values, and optional unit metadata.
 */
export class CommitmentsTimeseriesMetric {
  /**
   * Timeseries data as a map of series names to their corresponding value arrays.
   */
  "series": { [key: string]: Array<number> };
  /**
   * Unix timestamps in seconds for the timeseries data points.
   */
  "times": Array<number>;
  /**
   * Unit metadata for a numeric metric.
   */
  "unit"?: CommitmentsUnit;
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
    series: {
      baseName: "series",
      type: "{ [key: string]: Array<number>; }",
      required: true,
    },
    times: {
      baseName: "times",
      type: "Array<number>",
      required: true,
      format: "int64",
    },
    unit: {
      baseName: "unit",
      type: "CommitmentsUnit",
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
    return CommitmentsTimeseriesMetric.attributeTypeMap;
  }

  public constructor() {}
}
