/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TagIndexingRuleOptions } from "./TagIndexingRuleOptions";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a tag indexing rule.
 */
export class TagIndexingRuleAttributes {
  /**
   * Timestamp when the rule was created.
   */
  "createdAt"?: Date;
  /**
   * Handle of the user who created the rule.
   */
  "createdByHandle"?: string;
  /**
   * When true, the rule excludes the listed tags and indexes all others. When false (default), the rule includes only the listed tags.
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
   * Timestamp when the rule was last modified.
   */
  "modifiedAt"?: Date;
  /**
   * Handle of the user who last modified the rule.
   */
  "modifiedByHandle"?: string;
  /**
   * Human-readable name for the rule.
   */
  "name"?: string;
  /**
   * Versioned configuration options for a tag indexing rule.
   */
  "options"?: TagIndexingRuleOptions;
  /**
   * Evaluation order within the org. Lower values are evaluated first. Assigned server-side on create (max+1); pass on update to change the rule's position.
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
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    createdByHandle: {
      baseName: "created_by_handle",
      type: "string",
    },
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
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      format: "date-time",
    },
    modifiedByHandle: {
      baseName: "modified_by_handle",
      type: "string",
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
    return TagIndexingRuleAttributes.attributeTypeMap;
  }

  public constructor() {}
}
