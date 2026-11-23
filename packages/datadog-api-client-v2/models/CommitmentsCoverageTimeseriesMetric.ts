/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CommitmentsProvider } from "./CommitmentsProvider";
import { CommitmentsUnit } from "./CommitmentsUnit";

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * A coverage timeseries metric. For AWS and Azure, `series` holds the `on_demand_only`, `spot_only`, `ri`,
 * and `sp` buckets, plus `ppp` for Azure pre-purchase plans when enabled. For GCP, `series` holds the
 * `on_demand_only` and `flex_cud` buckets.
 */
export class CommitmentsCoverageTimeseriesMetric {
  /**
   * Cloud provider for commitment programs.
   */
  "provider": CommitmentsProvider;
  /**
   * Timeseries data as a map of series names to their corresponding value arrays.
   */
  "series": { [key: string]: Array<number> };
  /**
   * Unix timestamps in seconds for the timeseries data points.
   */
  "times": Array<Int64>;
  /**
   * Unit metadata for a numeric metric. Unset fields are omitted, and the unit is `null` when it is unknown.
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
    provider: {
      baseName: "provider",
      type: "CommitmentsProvider",
      required: true,
    },
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
    return CommitmentsCoverageTimeseriesMetric.attributeTypeMap;
  }

  public constructor() {}
}
