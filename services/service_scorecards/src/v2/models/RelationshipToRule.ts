import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RelationshipToRuleData } from "./RelationshipToRuleData";

/**
 * Scorecard create rule response relationship.
 */
export class RelationshipToRule {
  /**
   * Relationship data for a rule.
   */
  "scorecard"?: RelationshipToRuleData;
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
    scorecard: {
      baseName: "scorecard",
      type: "RelationshipToRuleData",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RelationshipToRule.attributeTypeMap;
  }

  public constructor() {}
}
