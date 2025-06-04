import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamOnCallRespondersDataRelationshipsEscalationsDataItemsType } from "./TeamOnCallRespondersDataRelationshipsEscalationsDataItemsType";

/**
 * Represents a link to a specific escalation policy step associated with the on-call team.
 */
export class TeamOnCallRespondersDataRelationshipsEscalationsDataItems {
  /**
   * Unique identifier of the escalation step.
   */
  "id": string;
  /**
   * Identifies the resource type for escalation policy steps linked to a team's on-call configuration.
   */
  "type": TeamOnCallRespondersDataRelationshipsEscalationsDataItemsType;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TeamOnCallRespondersDataRelationshipsEscalationsDataItemsType",
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
    return TeamOnCallRespondersDataRelationshipsEscalationsDataItems.attributeTypeMap;
  }

  public constructor() {}
}
