import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamRoutingRulesDataRelationshipsRulesDataItemsType } from "./TeamRoutingRulesDataRelationshipsRulesDataItemsType";

/**
 * Reference to a team routing rule.
 */
export class OnCallPageTeamRoutingRuleRelationshipData {
  /**
   * The ID of the team routing rule.
   */
  "id": string;
  /**
   * Indicates that the resource is of type `team_routing_rules`.
   */
  "type": TeamRoutingRulesDataRelationshipsRulesDataItemsType;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TeamRoutingRulesDataRelationshipsRulesDataItemsType",
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
    return OnCallPageTeamRoutingRuleRelationshipData.attributeTypeMap;
  }

  public constructor() {}
}
