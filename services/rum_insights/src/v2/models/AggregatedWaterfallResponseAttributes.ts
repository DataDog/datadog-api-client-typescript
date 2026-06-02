import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AggregatedResource } from "./AggregatedResource";
import { AggregatedWaterfallPerformanceCriteria } from "./AggregatedWaterfallPerformanceCriteria";

/**
 * Attributes of an aggregated waterfall response.
 */
export class AggregatedWaterfallResponseAttributes {
  /**
   * The RUM application ID that was analyzed.
   */
  "applicationId": string;
  /**
   * Performance criteria to filter view instances by a metric threshold.
   */
  "criteria"?: AggregatedWaterfallPerformanceCriteria;
  /**
   * Start of the analyzed time range as a Unix timestamp in seconds.
   */
  "from": number;
  /**
   * Network resources in chronological waterfall order.
   */
  "resources": Array<AggregatedResource>;
  /**
   * List of RUM view IDs sampled for this aggregation, capped at 50.
   */
  "sampledViewIds": Array<string>;
  /**
   * End of the analyzed time range as a Unix timestamp in seconds.
   */
  "to": number;
  /**
   * Overall cache hit rate across all sampled views.
   */
  "totalCacheHitRatePct": number;
  /**
   * Number of view instances included in the analysis.
   */
  "viewCount": number;
  /**
   * The RUM view name that was analyzed.
   */
  "viewName": string;
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
    applicationId: {
      baseName: "application_id",
      type: "string",
      required: true,
    },
    criteria: {
      baseName: "criteria",
      type: "AggregatedWaterfallPerformanceCriteria",
    },
    from: {
      baseName: "from",
      type: "number",
      required: true,
      format: "int64",
    },
    resources: {
      baseName: "resources",
      type: "Array<AggregatedResource>",
      required: true,
    },
    sampledViewIds: {
      baseName: "sampled_view_ids",
      type: "Array<string>",
      required: true,
    },
    to: {
      baseName: "to",
      type: "number",
      required: true,
      format: "int64",
    },
    totalCacheHitRatePct: {
      baseName: "total_cache_hit_rate_pct",
      type: "number",
      required: true,
      format: "double",
    },
    viewCount: {
      baseName: "view_count",
      type: "number",
      required: true,
      format: "int32",
    },
    viewName: {
      baseName: "view_name",
      type: "string",
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
    return AggregatedWaterfallResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
