/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsEVSITrafficUnavailableReason } from "./ExperimentsEVSITrafficUnavailableReason";

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * Forecast horizon and traffic counts used to calculate expected value of sample information (EVSI) for result_run_id. Assumes traffic continues at the rate observed during the lookback window. Omitted if the forecast was not recorded or could not be loaded.
 */
export class ExperimentsEVSIContext {
  /**
   * Exact assignment-window duration in days, including fractional days.
   */
  "elapsedDays": number | null;
  /**
   * Forecast horizon in days from the original assignment window.
   */
  "horizonDays": number;
  /**
   * Projected additional exposures over the horizon, assuming constant traffic.
   */
  "horizonExposures": number | null;
  /**
   * Selected lookback length in complete days.
   */
  "lookbackDays": Int64;
  /**
   * Exposures across all variants in the eligible lookback buckets.
   */
  "lookbackExposures": Int64 | null;
  /**
   * Experiment-wide exposures across the assignment window, including boundary buckets.
   */
  "totalExposures": Int64 | null;
  /**
   * Recorded traffic forecast unavailability reason. Per-analysis reasons are reported separately.
   */
  "unavailableReason": ExperimentsEVSITrafficUnavailableReason | null;
  /**
   * Interior UTC daily buckets excluding both boundary days. Includes zero-traffic days and does not certify ingestion completeness.
   */
  "usableTrafficDays": Int64 | null;

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
    elapsedDays: {
      baseName: "elapsed_days",
      type: "number",
      required: true,
      format: "double",
    },
    horizonDays: {
      baseName: "horizon_days",
      type: "number",
      required: true,
      format: "double",
    },
    horizonExposures: {
      baseName: "horizon_exposures",
      type: "number",
      required: true,
      format: "double",
    },
    lookbackDays: {
      baseName: "lookback_days",
      type: "number",
      required: true,
      format: "int64",
    },
    lookbackExposures: {
      baseName: "lookback_exposures",
      type: "number",
      required: true,
      format: "int64",
    },
    totalExposures: {
      baseName: "total_exposures",
      type: "number",
      required: true,
      format: "int64",
    },
    unavailableReason: {
      baseName: "unavailable_reason",
      type: "ExperimentsEVSITrafficUnavailableReason",
      required: true,
    },
    usableTrafficDays: {
      baseName: "usable_traffic_days",
      type: "number",
      required: true,
      format: "int64",
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
    return ExperimentsEVSIContext.attributeTypeMap;
  }

  public constructor() {}
}
