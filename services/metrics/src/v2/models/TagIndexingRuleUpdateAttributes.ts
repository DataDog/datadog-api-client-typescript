import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TagIndexingRuleOptions } from "./TagIndexingRuleOptions";

/**
 * Attributes for updating a tag indexing rule. All fields are optional; omitted fields are unchanged.
 */
export class TagIndexingRuleUpdateAttributes {
  /**
   * When true, the rule excludes the listed tags and indexes all others.
   */
  "excludeTagsMode"?: boolean;
  /**
   * Metric name prefixes excluded from the rule's scope.
   */
  "ignoredMetricNameMatches"?: Array<string>;
  /**
   * Metric name prefixes (glob patterns) this rule applies to.
   */
  "metricNameMatches"?: Array<string>;
  /**
   * Human-readable name for the rule.
   */
  "name"?: string;
  /**
   * Versioned configuration options for a tag indexing rule.
   */
  "options"?: TagIndexingRuleOptions;
  /**
   * Desired evaluation order. Returns 409 if the value conflicts with another rule; use POST /api/v2/metrics/tag-indexing-rules/order for atomic re-sequencing.
   */
  "ruleOrder"?: number;
  /**
   * Tag keys managed by this rule.
   */
  "tags"?: Array<string>;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    excludeTagsMode: {
      baseName: "exclude_tags_mode",
      type: "boolean",
    },
    ignoredMetricNameMatches: {
      baseName: "ignored_metric_name_matches",
      type: "Array<string>",
    },
    metricNameMatches: {
      baseName: "metric_name_matches",
      type: "Array<string>",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    options: {
      baseName: "options",
      type: "TagIndexingRuleOptions",
    },
    ruleOrder: {
      baseName: "rule_order",
      type: "number",
      format: "int64",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
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
    return TagIndexingRuleUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
