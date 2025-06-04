import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamOnCallRespondersDataRelationshipsEscalations } from "./TeamOnCallRespondersDataRelationshipsEscalations";
import { TeamOnCallRespondersDataRelationshipsResponders } from "./TeamOnCallRespondersDataRelationshipsResponders";

/**
 * Relationship objects linked to a team's on-call responder configuration, including escalations and responders.
 */
export class TeamOnCallRespondersDataRelationships {
  /**
   * Defines the escalation policy steps linked to the team's on-call configuration.
   */
  "escalations"?: TeamOnCallRespondersDataRelationshipsEscalations;
  /**
   * Defines the list of users assigned as on-call responders for the team.
   */
  "responders"?: TeamOnCallRespondersDataRelationshipsResponders;
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
    escalations: {
      baseName: "escalations",
      type: "TeamOnCallRespondersDataRelationshipsEscalations",
    },
    responders: {
      baseName: "responders",
      type: "TeamOnCallRespondersDataRelationshipsResponders",
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
    return TeamOnCallRespondersDataRelationships.attributeTypeMap;
  }

  public constructor() {}
}
