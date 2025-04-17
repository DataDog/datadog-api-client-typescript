import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EscalationPolicyCreateRequestDataRelationshipsTeamsDataItems } from "./EscalationPolicyCreateRequestDataRelationshipsTeamsDataItems";

/**
 * Defines the relationship to teams within an escalation policy creation request, referencing the teams to be associated with the policy.
 */
export class EscalationPolicyCreateRequestDataRelationshipsTeams {
  /**
   * An array of team references for the new escalation policy.
   */
  "data"?: Array<EscalationPolicyCreateRequestDataRelationshipsTeamsDataItems>;
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
      type: "Array<EscalationPolicyCreateRequestDataRelationshipsTeamsDataItems>",
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
    return EscalationPolicyCreateRequestDataRelationshipsTeams.attributeTypeMap;
  }

  public constructor() {}
}
