import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TagRuleScoreRelationship } from "./TagRuleScoreRelationship";

/**
 * Related resources for a tag rule. Only present when the corresponding `include` query parameter is supplied.
 */
export class TagRuleRelationships {
  /**
   * A relationship to the compliance score resource for this rule.
   */
  "score"?: TagRuleScoreRelationship;
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
    score: {
      baseName: "score",
      type: "TagRuleScoreRelationship",
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
    return TagRuleRelationships.attributeTypeMap;
  }

  public constructor() {}
}
