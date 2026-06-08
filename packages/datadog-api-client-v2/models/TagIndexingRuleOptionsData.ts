/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TagIndexingRuleDynamicTags } from "./TagIndexingRuleDynamicTags";
import { TagIndexingRuleMetricMatch } from "./TagIndexingRuleMetricMatch";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data payload for tag indexing rule options.
 */
export class TagIndexingRuleOptionsData {
  /**
   * Configuration for including dynamically queried tags.
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
