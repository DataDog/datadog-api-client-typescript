/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CommitmentsUnit } from "./CommitmentsUnit";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing timeseries utilization metrics for cloud commitment programs.
 */
export class CommitmentsUtilizationTimeseriesResponse {
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
    return CommitmentsUtilizationTimeseriesResponse.attributeTypeMap;
  }

  public constructor() {}
}
