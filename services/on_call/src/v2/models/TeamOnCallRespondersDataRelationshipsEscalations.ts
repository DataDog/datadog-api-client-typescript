import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamOnCallRespondersDataRelationshipsEscalationsDataItems } from "./TeamOnCallRespondersDataRelationshipsEscalationsDataItems";

/**
 * Defines the escalation policy steps linked to the team's on-call configuration.
 */
export class TeamOnCallRespondersDataRelationshipsEscalations {
  /**
   * Array of escalation step references.
   */
  "data"?: Array<TeamOnCallRespondersDataRelationshipsEscalationsDataItems>;
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
      type: "Array<TeamOnCallRespondersDataRelationshipsEscalationsDataItems>",
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
    return TeamOnCallRespondersDataRelationshipsEscalations.attributeTypeMap;
  }

  public constructor() {}
}
