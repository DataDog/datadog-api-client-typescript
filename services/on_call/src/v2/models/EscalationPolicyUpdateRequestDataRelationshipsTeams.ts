import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EscalationPolicyUpdateRequestDataRelationshipsTeamsDataItems } from "./EscalationPolicyUpdateRequestDataRelationshipsTeamsDataItems";

/**
 * Defines the relationship to teams within an escalation policy update request, referencing the teams to be associated with or removed from the policy.
 */
export class EscalationPolicyUpdateRequestDataRelationshipsTeams {
  /**
   * An array of team references for the escalation policy update.
   */
  "data"?: Array<EscalationPolicyUpdateRequestDataRelationshipsTeamsDataItems>;
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
      type: "Array<EscalationPolicyUpdateRequestDataRelationshipsTeamsDataItems>",
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
    return EscalationPolicyUpdateRequestDataRelationshipsTeams.attributeTypeMap;
  }

  public constructor() {}
}
