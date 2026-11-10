import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ArbitraryRuleMappingTransform } from "./ArbitraryRuleMappingTransform";
import { ArbitraryRuleResponseDataAttributesStrategyAllocatedByFiltersItems } from "./ArbitraryRuleResponseDataAttributesStrategyAllocatedByFiltersItems";
import { ArbitraryRuleResponseDataAttributesStrategyAllocatedByItems } from "./ArbitraryRuleResponseDataAttributesStrategyAllocatedByItems";
import { ArbitraryRuleResponseDataAttributesStrategyAllocatedByItemsAllocatedTagsItems } from "./ArbitraryRuleResponseDataAttributesStrategyAllocatedByItemsAllocatedTagsItems";
import { ArbitraryRuleResponseDataAttributesStrategyBasedOnCostsItems } from "./ArbitraryRuleResponseDataAttributesStrategyBasedOnCostsItems";
import { ArbitraryRuleResponseDataAttributesStrategyEvaluateGroupedByFiltersItems } from "./ArbitraryRuleResponseDataAttributesStrategyEvaluateGroupedByFiltersItems";
import { ArbitraryRuleTagTransforms } from "./ArbitraryRuleTagTransforms";

/**
 * The definition of `ArbitraryRuleResponseDataAttributesStrategy` object.
 */
export class ArbitraryRuleResponseDataAttributesStrategy {
  /**
   * The `strategy` `allocated_by`.
   */
  "allocatedBy"?: Array<ArbitraryRuleResponseDataAttributesStrategyAllocatedByItems>;
  /**
   * The `strategy` `allocated_by_filters`.
   */
  "allocatedByFilters"?: Array<ArbitraryRuleResponseDataAttributesStrategyAllocatedByFiltersItems>;
  /**
   * The `strategy` `allocated_by_tag_keys`.
   */
  "allocatedByTagKeys"?: Array<string>;
  /**
   * The `strategy` `based_on_costs`.
   */
  "basedOnCosts"?: Array<ArbitraryRuleResponseDataAttributesStrategyBasedOnCostsItems>;
  /**
   * The rule `strategy` `based_on_timeseries`.
   */
  "basedOnTimeseries"?: { [key: string]: any };
  /**
   * The `strategy` `evaluate_grouped_by_filters`.
   */
  "evaluateGroupedByFilters"?: Array<ArbitraryRuleResponseDataAttributesStrategyEvaluateGroupedByFiltersItems>;
  /**
   * The `strategy` `evaluate_grouped_by_tag_keys`.
   */
  "evaluateGroupedByTagKeys"?: Array<string>;
  /**
   * The `strategy` `granularity`.
   */
  "granularity"?: string;
  /**
   * Only supported for `proportional_timeseries` and `even_timeseries` rules. Creates a synthetic tag from timeseries input rows before `tag_transforms` are applied.
   */
  "mappingTransform"?: ArbitraryRuleMappingTransform;
  /**
   * The `strategy` `method`.
   */
  "method": string;
  /**
   * Tags added to every cost row allocated by the rule.
   */
  "staticTags"?: Array<ArbitraryRuleResponseDataAttributesStrategyAllocatedByItemsAllocatedTagsItems>;
  /**
   * Integration metrics query used to calculate coverage.
   */
  "supportingTimeseries"?: { [key: string]: any };
  /**
   * Only supported for `proportional_timeseries` and `even_timeseries` rules. Applies tag key renames and tag value transforms to timeseries input rows after `mapping_transform`.
   */
  "tagTransforms"?: ArbitraryRuleTagTransforms;
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
    allocatedBy: {
      baseName: "allocated_by",
      type: "Array<ArbitraryRuleResponseDataAttributesStrategyAllocatedByItems>",
    },
    allocatedByFilters: {
      baseName: "allocated_by_filters",
      type: "Array<ArbitraryRuleResponseDataAttributesStrategyAllocatedByFiltersItems>",
    },
    allocatedByTagKeys: {
      baseName: "allocated_by_tag_keys",
      type: "Array<string>",
    },
    basedOnCosts: {
      baseName: "based_on_costs",
      type: "Array<ArbitraryRuleResponseDataAttributesStrategyBasedOnCostsItems>",
    },
    basedOnTimeseries: {
      baseName: "based_on_timeseries",
      type: "{ [key: string]: any; }",
    },
    evaluateGroupedByFilters: {
      baseName: "evaluate_grouped_by_filters",
      type: "Array<ArbitraryRuleResponseDataAttributesStrategyEvaluateGroupedByFiltersItems>",
    },
    evaluateGroupedByTagKeys: {
      baseName: "evaluate_grouped_by_tag_keys",
      type: "Array<string>",
    },
    granularity: {
      baseName: "granularity",
      type: "string",
    },
    mappingTransform: {
      baseName: "mapping_transform",
      type: "ArbitraryRuleMappingTransform",
    },
    method: {
      baseName: "method",
      type: "string",
      required: true,
    },
    staticTags: {
      baseName: "static_tags",
      type: "Array<ArbitraryRuleResponseDataAttributesStrategyAllocatedByItemsAllocatedTagsItems>",
    },
    supportingTimeseries: {
      baseName: "supporting_timeseries",
      type: "{ [key: string]: any; }",
    },
    tagTransforms: {
      baseName: "tag_transforms",
      type: "ArbitraryRuleTagTransforms",
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
    return ArbitraryRuleResponseDataAttributesStrategy.attributeTypeMap;
  }

  public constructor() {}
}
