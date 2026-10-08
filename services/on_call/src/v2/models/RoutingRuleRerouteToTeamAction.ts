import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RoutingRuleRerouteToTeamActionType } from "./RoutingRuleRerouteToTeamActionType";

/**
 * Reroutes the page to another team, which then evaluates it against its own routing rules. Each routing rule can include this action only once. It can be combined only with `send_slack_message` and `send_teams_message` actions. It can't be used with `escalation_policy` or `workflow` actions, or when the routing rule sets `policy_id`.
 */
export class RoutingRuleRerouteToTeamAction {
  /**
   * The ID of the team to reroute the page to.
   */
  "destinationTeamId": string;
  /**
   * Indicates that the action reroutes the page to another team's routing rules.
   */
  "type": RoutingRuleRerouteToTeamActionType;
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
    destinationTeamId: {
      baseName: "destination_team_id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "RoutingRuleRerouteToTeamActionType",
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
    return RoutingRuleRerouteToTeamAction.attributeTypeMap;
  }

  public constructor() {}
}
