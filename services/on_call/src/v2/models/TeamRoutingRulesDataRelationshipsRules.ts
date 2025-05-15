import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamRoutingRulesDataRelationshipsRulesDataItems } from "./TeamRoutingRulesDataRelationshipsRulesDataItems";

/**
 * Holds references to a set of routing rules in a relationship.
 */
export class TeamRoutingRulesDataRelationshipsRules {
  /**
   * An array of references to the routing rules associated with this team.
   */
  "data"?: Array<TeamRoutingRulesDataRelationshipsRulesDataItems>;
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
      type: "Array<TeamRoutingRulesDataRelationshipsRulesDataItems>",
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
    return TeamRoutingRulesDataRelationshipsRules.attributeTypeMap;
  }

  public constructor() {}
}
