import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamRoutingRulesDataRelationshipsRules } from "./TeamRoutingRulesDataRelationshipsRules";

/**
 * Specifies relationships for team routing rules, including rule references.
 */
export class TeamRoutingRulesDataRelationships {
  /**
   * Holds references to a set of routing rules in a relationship.
   */
  "rules"?: TeamRoutingRulesDataRelationshipsRules;
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
    rules: {
      baseName: "rules",
      type: "TeamRoutingRulesDataRelationshipsRules",
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
    return TeamRoutingRulesDataRelationships.attributeTypeMap;
  }

  public constructor() {}
}
