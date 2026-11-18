import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CostRecommendationCustomRuleFilterType } from "./CostRecommendationCustomRuleFilterType";

/**
 * A tag filter. A rule applies to a resource only when every filter of the rule matches.
 */
export class CostRecommendationCustomRuleFilter {
  /**
   * How the filter compares the tag. `is`, `is_not`, `contains`, `does_not_contain`, `like` (glob), and `not_like`
   * compare the tag values with `values`. `all` matches resources that have the tag and `untagged` matches resources
   * that do not, so both ignore `values`.
   */
  "filterType": CostRecommendationCustomRuleFilterType;
  /**
   * The tag key the filter compares.
   */
  "tag": string;
  /**
   * Tag values the filter compares. Required unless `filter_type` is `all` or `untagged`.
   */
  "values"?: Array<string>;
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
    filterType: {
      baseName: "filter_type",
      type: "CostRecommendationCustomRuleFilterType",
      required: true,
    },
    tag: {
      baseName: "tag",
      type: "string",
      required: true,
    },
    values: {
      baseName: "values",
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
    return CostRecommendationCustomRuleFilter.attributeTypeMap;
  }

  public constructor() {}
}
