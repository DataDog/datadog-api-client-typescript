import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DataRelationshipsTeams } from "./DataRelationshipsTeams";
import { EscalationPolicyDataRelationshipsSteps } from "./EscalationPolicyDataRelationshipsSteps";

/**
 * Represents the relationships for an escalation policy, including references to steps and teams.
 */
export class EscalationPolicyDataRelationships {
  /**
   * Defines the relationship to a collection of steps within an escalation policy. Contains an array of step data references.
   */
  "steps": EscalationPolicyDataRelationshipsSteps;
  /**
   * Associates teams with this schedule in a data structure.
   */
  "teams"?: DataRelationshipsTeams;
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
    steps: {
      baseName: "steps",
      type: "EscalationPolicyDataRelationshipsSteps",
      required: true,
    },
    teams: {
      baseName: "teams",
      type: "DataRelationshipsTeams",
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
    return EscalationPolicyDataRelationships.attributeTypeMap;
  }

  public constructor() {}
}
