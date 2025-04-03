import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RelationshipToOutcome } from "./RelationshipToOutcome";

/**
 * The JSON:API relationship to a scorecard rule.
 */
export class RuleOutcomeRelationships {
  /**
   * The JSON:API relationship to a scorecard outcome.
   */
  "rule"?: RelationshipToOutcome;
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
    rule: {
      baseName: "rule",
      type: "RelationshipToOutcome",
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
    return RuleOutcomeRelationships.attributeTypeMap;
  }

  public constructor() {}
}
