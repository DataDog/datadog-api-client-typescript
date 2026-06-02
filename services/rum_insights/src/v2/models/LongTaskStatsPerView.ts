import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LongTaskMetricStats } from "./LongTaskMetricStats";

/**
 * Statistical distributions of long task metrics computed per view across sampled views.
 */
export class LongTaskStatsPerView {
  /**
   * Statistical distribution (average, min, max) of a long task metric across sampled views.
   */
  "fcpBlockingTimeMs"?: LongTaskMetricStats;
  /**
   * Statistical distribution (average, min, max) of a long task metric across sampled views.
   */
  "fcpCount"?: LongTaskMetricStats;
  /**
   * Statistical distribution (average, min, max) of a long task metric across sampled views.
   */
  "inpOverlapBlockingTimeMs"?: LongTaskMetricStats;
  /**
   * Statistical distribution (average, min, max) of a long task metric across sampled views.
   */
  "inpOverlapCount"?: LongTaskMetricStats;
  /**
   * Statistical distribution (average, min, max) of a long task metric across sampled views.
   */
  "lcpBlockingTimeMs"?: LongTaskMetricStats;
  /**
   * Statistical distribution (average, min, max) of a long task metric across sampled views.
   */
  "lcpCount"?: LongTaskMetricStats;
  /**
   * Statistical distribution (average, min, max) of a long task metric across sampled views.
   */
  "loadingTimeBlockingTimeMs"?: LongTaskMetricStats;
  /**
   * Statistical distribution (average, min, max) of a long task metric across sampled views.
   */
  "loadingTimeCount"?: LongTaskMetricStats;
  /**
   * Statistical distribution (average, min, max) of a long task metric across sampled views.
   */
  "totalBlockingTimeMs"?: LongTaskMetricStats;
  /**
   * Statistical distribution (average, min, max) of a long task metric across sampled views.
   */
  "totalCount"?: LongTaskMetricStats;
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
    fcpBlockingTimeMs: {
      baseName: "fcp_blocking_time_ms",
      type: "LongTaskMetricStats",
    },
    fcpCount: {
      baseName: "fcp_count",
      type: "LongTaskMetricStats",
    },
    inpOverlapBlockingTimeMs: {
      baseName: "inp_overlap_blocking_time_ms",
      type: "LongTaskMetricStats",
    },
    inpOverlapCount: {
      baseName: "inp_overlap_count",
      type: "LongTaskMetricStats",
    },
    lcpBlockingTimeMs: {
      baseName: "lcp_blocking_time_ms",
      type: "LongTaskMetricStats",
    },
    lcpCount: {
      baseName: "lcp_count",
      type: "LongTaskMetricStats",
    },
    loadingTimeBlockingTimeMs: {
      baseName: "loading_time_blocking_time_ms",
      type: "LongTaskMetricStats",
    },
    loadingTimeCount: {
      baseName: "loading_time_count",
      type: "LongTaskMetricStats",
    },
    totalBlockingTimeMs: {
      baseName: "total_blocking_time_ms",
      type: "LongTaskMetricStats",
    },
    totalCount: {
      baseName: "total_count",
      type: "LongTaskMetricStats",
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
    return LongTaskStatsPerView.attributeTypeMap;
  }

  public constructor() {}
}
