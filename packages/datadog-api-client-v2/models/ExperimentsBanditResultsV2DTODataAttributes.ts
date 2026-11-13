/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsBanditDesiredChange } from "./ExperimentsBanditDesiredChange";
import { ExperimentsBanditOptimalVariantUnavailableReason } from "./ExperimentsBanditOptimalVariantUnavailableReason";
import { ExperimentsBanditPointEstimateV2 } from "./ExperimentsBanditPointEstimateV2";
import { ExperimentsBanditResultsState } from "./ExperimentsBanditResultsState";
import { ExperimentsBanditStatisticsStatus } from "./ExperimentsBanditStatisticsStatus";
import { ExperimentsBanditVariantResultV2 } from "./ExperimentsBanditVariantResultV2";

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * What the bandit's refreshes have learned.
 */
export class ExperimentsBanditResultsV2DTODataAttributes {
  /**
   * The probability mass of each confidence interval.
   */
  "confidenceLevel": number;
  /**
   * The configuration version the latest saved refresh used. It can be older than the bandit's, because changes such as a new end date don't invalidate results.
   */
  "configVersion": Int64 | null;
  /**
   * The latest warehouse data the latest saved refresh read.
   */
  "dataAsOf": Date | null;
  /**
   * The direction the bandit optimizes the metric in. It's fixed when the bandit starts. Null before the first saved refresh.
   */
  "desiredChange": ExperimentsBanditDesiredChange | null;
  /**
   * An estimate of when the next scheduled refresh starts. Null when the bandit isn't running or the time can't be estimated. Only daily and hourly schedules get an estimate.
   */
  "nextRefreshAt": Date | null;
  /**
   * The key of the arm most likely to be best, when one arm leads and the bandit is outside warmup. Null otherwise.
   */
  "optimalVariantKey": string | null;
  /**
   * Why no optimal variant is reported. Absent when one is, or when the cause isn't known.
   */
  "optimalVariantUnavailableReason"?: ExperimentsBanditOptimalVariantUnavailableReason;
  /**
   * Each arm's point estimate from up to the latest 400 saved refreshes in the requested range, oldest first.
   */
  "pointEstimates": Array<ExperimentsBanditPointEstimateV2>;
  /**
   * The latest refresh that saved results. The estimates come from it.
   */
  "refreshId": string | null;
  /**
   * When the latest saved refresh saved its results.
   */
  "resultsLastUpdated": Date | null;
  /**
   * WAITING_FOR_FIRST_REFRESH until a refresh saves results. STATS_UNAVAILABLE when the latest saved refresh has no complete probabilities of being optimal. ENDED once the bandit is stopped or completed; its last estimates stay. Otherwise WARMUP or OPTIMIZING says which policy the bandit serves. A paused bandit keeps its state.
   */
  "state": ExperimentsBanditResultsState;
  /**
   * Whether the latest saved refresh calculated its statistics. Absent for older refreshes.
   */
  "statisticsStatus"?: ExperimentsBanditStatisticsStatus;
  /**
   * One row per arm, in arm order.
   */
  "variants": Array<ExperimentsBanditVariantResultV2>;

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
    confidenceLevel: {
      baseName: "confidence_level",
      type: "number",
      required: true,
      format: "double",
    },
    configVersion: {
      baseName: "config_version",
      type: "number",
      required: true,
      format: "int64",
    },
    dataAsOf: {
      baseName: "data_as_of",
      type: "Date",
      required: true,
      format: "date-time",
    },
    desiredChange: {
      baseName: "desired_change",
      type: "ExperimentsBanditDesiredChange",
      required: true,
    },
    nextRefreshAt: {
      baseName: "next_refresh_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    optimalVariantKey: {
      baseName: "optimal_variant_key",
      type: "string",
      required: true,
    },
    optimalVariantUnavailableReason: {
      baseName: "optimal_variant_unavailable_reason",
      type: "ExperimentsBanditOptimalVariantUnavailableReason",
    },
    pointEstimates: {
      baseName: "point_estimates",
      type: "Array<ExperimentsBanditPointEstimateV2>",
      required: true,
    },
    refreshId: {
      baseName: "refresh_id",
      type: "string",
      required: true,
      format: "uuid",
    },
    resultsLastUpdated: {
      baseName: "results_last_updated",
      type: "Date",
      required: true,
      format: "date-time",
    },
    state: {
      baseName: "state",
      type: "ExperimentsBanditResultsState",
      required: true,
    },
    statisticsStatus: {
      baseName: "statistics_status",
      type: "ExperimentsBanditStatisticsStatus",
    },
    variants: {
      baseName: "variants",
      type: "Array<ExperimentsBanditVariantResultV2>",
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
    return ExperimentsBanditResultsV2DTODataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
