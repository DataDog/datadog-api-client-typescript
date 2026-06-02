import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LongTaskStatsPerView } from "./LongTaskStatsPerView";
import { TopLongTaskInvoker } from "./TopLongTaskInvoker";

/**
 * Aggregated long task statistics for a single invoker type.
 */
export class AggregatedLongTasksByInvokerType {
  /**
   * Number of sampled views where this invoker type had long tasks contributing to the criteria metric.
   */
  "criteriaViewOccurrences"?: number;
  /**
   * Rank-product impact score combining view frequency and blocking time severity.
   */
  "impactScore"?: number;
  /**
   * Category of the long task invoker (for example, resolve-promise, user-callback).
   */
  "invokerType": string;
  /**
   * Statistical distributions of long task metrics computed per view across sampled views.
   */
  "statsPerView": LongTaskStatsPerView;
  /**
   * Top invokers within this invoker type, sorted by impact score descending.
   */
  "topInvokers": Array<TopLongTaskInvoker>;
  /**
   * Number of sampled views where this invoker type had any long tasks.
   */
  "viewOccurrences": number;
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
    criteriaViewOccurrences: {
      baseName: "criteria_view_occurrences",
      type: "number",
      format: "int32",
    },
    impactScore: {
      baseName: "impact_score",
      type: "number",
      format: "double",
    },
    invokerType: {
      baseName: "invoker_type",
      type: "string",
      required: true,
    },
    statsPerView: {
      baseName: "stats_per_view",
      type: "LongTaskStatsPerView",
      required: true,
    },
    topInvokers: {
      baseName: "top_invokers",
      type: "Array<TopLongTaskInvoker>",
      required: true,
    },
    viewOccurrences: {
      baseName: "view_occurrences",
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
    return AggregatedLongTasksByInvokerType.attributeTypeMap;
  }

  public constructor() {}
}
