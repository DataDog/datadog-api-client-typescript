/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AggregatedResourceTimingBreakdown } from "./AggregatedResourceTimingBreakdown";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Aggregated performance statistics for a single network resource across sampled view instances.
 */
export class AggregatedResource {
  /**
   * Average total duration in milliseconds.
   */
  "avgDurationMs": number;
  /**
   * Average start time relative to view start in milliseconds.
   */
  "avgStartTimeMs": number;
  /**
   * Cache hit rate as a percentage.
   */
  "cacheHitRatePct": number;
  /**
   * Number of requests served from cache.
   */
  "cachedCount": number;
  /**
   * Number of requests downloaded from the network.
   */
  "downloadedCount": number;
  /**
   * 75th percentile duration across all view names in the application, present when include_global_appearance is true.
   */
  "globalP75DurationMs"?: number;
  /**
   * Number of distinct view names in the application that load this resource, present when include_global_appearance is true.
   */
  "globalViewNameCount"?: number;
  /**
   * Percentage of distinct view names in the application that load this resource, present when include_global_appearance is true.
   */
  "globalViewNamePct"?: number;
  /**
   * HTTP method for the resource request.
   */
  "httpMethod": string | null;
  /**
   * Percentage of sampled view instances that loaded this resource.
   */
  "loadFrequencyPct": number;
  /**
   * Maximum duration in milliseconds.
   */
  "maxDurationMs": number;
  /**
   * Median duration in milliseconds.
   */
  "medianDurationMs": number;
  /**
   * Minimum duration in milliseconds.
   */
  "minDurationMs": number;
  /**
   * 75th percentile duration in milliseconds.
   */
  "p75DurationMs": number;
  /**
   * 95th percentile duration in milliseconds.
   */
  "p95DurationMs": number;
  /**
   * Resource type (JS, CSS, image, fetch, XHR, document, and so on).
   */
  "resourceType": string | null;
  /**
   * URL path group used to aggregate similar resources.
   */
  "resourceUrlPathGroup": string;
  /**
   * Average timing breakdown per network phase for a resource.
   */
  "timingBreakdown": AggregatedResourceTimingBreakdown;
  /**
   * Total number of requests for this resource across all sampled views.
   */
  "totalRequests": number;
  /**
   * Number of sampled view instances that loaded this resource.
   */
  "viewsWithResource": number;

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
    avgDurationMs: {
      baseName: "avg_duration_ms",
      type: "number",
      required: true,
      format: "double",
    },
    avgStartTimeMs: {
      baseName: "avg_start_time_ms",
      type: "number",
      required: true,
      format: "double",
    },
    cacheHitRatePct: {
      baseName: "cache_hit_rate_pct",
      type: "number",
      required: true,
      format: "double",
    },
    cachedCount: {
      baseName: "cached_count",
      type: "number",
      required: true,
      format: "int32",
    },
    downloadedCount: {
      baseName: "downloaded_count",
      type: "number",
      required: true,
      format: "int32",
    },
    globalP75DurationMs: {
      baseName: "global_p75_duration_ms",
      type: "number",
      format: "double",
    },
    globalViewNameCount: {
      baseName: "global_view_name_count",
      type: "number",
      format: "int32",
    },
    globalViewNamePct: {
      baseName: "global_view_name_pct",
      type: "number",
      format: "double",
    },
    httpMethod: {
      baseName: "http_method",
      type: "string",
      required: true,
    },
    loadFrequencyPct: {
      baseName: "load_frequency_pct",
      type: "number",
      required: true,
      format: "double",
    },
    maxDurationMs: {
      baseName: "max_duration_ms",
      type: "number",
      required: true,
      format: "double",
    },
    medianDurationMs: {
      baseName: "median_duration_ms",
      type: "number",
      required: true,
      format: "double",
    },
    minDurationMs: {
      baseName: "min_duration_ms",
      type: "number",
      required: true,
      format: "double",
    },
    p75DurationMs: {
      baseName: "p75_duration_ms",
      type: "number",
      required: true,
      format: "double",
    },
    p95DurationMs: {
      baseName: "p95_duration_ms",
      type: "number",
      required: true,
      format: "double",
    },
    resourceType: {
      baseName: "resource_type",
      type: "string",
      required: true,
    },
    resourceUrlPathGroup: {
      baseName: "resource_url_path_group",
      type: "string",
      required: true,
    },
    timingBreakdown: {
      baseName: "timing_breakdown",
      type: "AggregatedResourceTimingBreakdown",
      required: true,
    },
    totalRequests: {
      baseName: "total_requests",
      type: "number",
      required: true,
      format: "int32",
    },
    viewsWithResource: {
      baseName: "views_with_resource",
      type: "number",
      required: true,
      format: "int32",
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
    return AggregatedResource.attributeTypeMap;
  }

  public constructor() {}
}
