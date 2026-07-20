import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TagIndexingRuleDynamicTags } from "./TagIndexingRuleDynamicTags";
import { TagIndexingRuleMetricMatch } from "./TagIndexingRuleMetricMatch";

/**
 * Data payload for tag indexing rule options.
 */
export class TagIndexingRuleOptionsData {
  /**
   * Options for dynamic tag indexing applied per metric, such as tags filtered by query usage.
   *
   * Before a tag key is dropped by this rule, two grace period conditions must be met:
   *
   * 1. The metric must be submitted for at least as long as the selected window.
   * 2. A tag key must have been submitted for at least 15 days.
   *
   * Any metric or tag key that does not meet these conditions are excluded from this
   * indexing rule. The `exclude_not_*` fields require `exclude_tags_mode` to be set to `true`.
   */
  "dynamicTags"?: TagIndexingRuleDynamicTags;
  /**
   * When true, the rule applies to metrics that were ingested before the rule was created.
   */
  "managePreexistingMetrics"?: boolean;
  /**
   * Criteria for matching metrics based on query state.
   */
  "metricMatch"?: TagIndexingRuleMetricMatch;
  /**
   * When true, this rule's tag list overrides tags configured by earlier rules for the same metric. When false (default), tags from all matching rules are combined.
   */
  "overridePreviousRules"?: boolean;
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
    dynamicTags: {
      baseName: "dynamic_tags",
      type: "TagIndexingRuleDynamicTags",
    },
    managePreexistingMetrics: {
      baseName: "manage_preexisting_metrics",
      type: "boolean",
    },
    metricMatch: {
      baseName: "metric_match",
      type: "TagIndexingRuleMetricMatch",
    },
    overridePreviousRules: {
      baseName: "override_previous_rules",
      type: "boolean",
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
    return TagIndexingRuleOptionsData.attributeTypeMap;
  }

  public constructor() {}
}
