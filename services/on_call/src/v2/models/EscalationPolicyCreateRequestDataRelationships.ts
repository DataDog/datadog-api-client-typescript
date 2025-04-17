import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EscalationPolicyCreateRequestDataRelationshipsTeams } from "./EscalationPolicyCreateRequestDataRelationshipsTeams";

/**
 * Represents relationships in an escalation policy creation request, including references to teams.
 */
export class EscalationPolicyCreateRequestDataRelationships {
  /**
   * Defines the relationship to teams within an escalation policy creation request, referencing the teams to be associated with the policy.
   */
  "teams"?: EscalationPolicyCreateRequestDataRelationshipsTeams;
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
      type: "EscalationPolicyCreateRequestDataRelationshipsTeams",
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
    return EscalationPolicyCreateRequestDataRelationships.attributeTypeMap;
  }

  public constructor() {}
}
