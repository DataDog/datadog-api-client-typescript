import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TagRuleScoreData } from "./TagRuleScoreData";

/**
 * A tag rule compliance score.
 */
export class TagRuleScoreResponse {
  /**
   * A compliance score resource for a tag rule.
   */
  "data": TagRuleScoreData;
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
    data: {
      baseName: "data",
      type: "TagRuleScoreData",
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
    return TagRuleScoreResponse.attributeTypeMap;
  }

  public constructor() {}
}
