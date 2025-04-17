import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EscalationPolicyDataRelationshipsTeamsDataItems } from "./EscalationPolicyDataRelationshipsTeamsDataItems";

/**
 * Defines the relationship to a collection of teams within an escalation policy. Contains an array of team data references.
 */
export class EscalationPolicyDataRelationshipsTeams {
  /**
   * An array of references to the teams associated with this escalation policy.
   */
  "data"?: Array<EscalationPolicyDataRelationshipsTeamsDataItems>;
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
      type: "Array<EscalationPolicyDataRelationshipsTeamsDataItems>",
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
    return EscalationPolicyDataRelationshipsTeams.attributeTypeMap;
  }

  public constructor() {}
}
