import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OnCallPageTeamRoutingRuleRelationshipData } from "./OnCallPageTeamRoutingRuleRelationshipData";

/**
 * The team routing rule that matched the page.
 */
export class OnCallPageTeamRoutingRuleRelationship {
  /**
   * Reference to a team routing rule.
   */
  "data"?: OnCallPageTeamRoutingRuleRelationshipData;
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
      type: "OnCallPageTeamRoutingRuleRelationshipData",
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
    return OnCallPageTeamRoutingRuleRelationship.attributeTypeMap;
  }

  public constructor() {}
}
