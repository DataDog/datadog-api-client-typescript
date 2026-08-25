import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TagRuleScoreRelationshipData } from "./TagRuleScoreRelationshipData";

/**
 * A relationship to the compliance score resource for this rule.
 */
export class TagRuleScoreRelationship {
  /**
   * Identifier of the related compliance score resource.
   */
  "data": TagRuleScoreRelationshipData;
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
      type: "TagRuleScoreRelationshipData",
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
    return TagRuleScoreRelationship.attributeTypeMap;
  }

  public constructor() {}
}
