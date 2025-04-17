import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EscalationPolicyUpdateRequestDataRelationshipsTeams } from "./EscalationPolicyUpdateRequestDataRelationshipsTeams";

/**
 * Represents relationships in an escalation policy update request, including references to teams.
 */
export class EscalationPolicyUpdateRequestDataRelationships {
  /**
   * Defines the relationship to teams within an escalation policy update request, referencing the teams to be associated with or removed from the policy.
   */
  "teams"?: EscalationPolicyUpdateRequestDataRelationshipsTeams;
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
    teams: {
      baseName: "teams",
      type: "EscalationPolicyUpdateRequestDataRelationshipsTeams",
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
    return EscalationPolicyUpdateRequestDataRelationships.attributeTypeMap;
  }

  public constructor() {}
}
