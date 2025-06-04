import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamOnCallRespondersDataRelationships } from "./TeamOnCallRespondersDataRelationships";
import { TeamOnCallRespondersDataType } from "./TeamOnCallRespondersDataType";

/**
 * Defines the main on-call responder object for a team, including relationships and metadata.
 */
export class TeamOnCallRespondersData {
  /**
   * Unique identifier of the on-call responder configuration.
   */
  "id"?: string;
  /**
   * Relationship objects linked to a team's on-call responder configuration, including escalations and responders.
   */
  "relationships"?: TeamOnCallRespondersDataRelationships;
  /**
   * Represents the resource type for a group of users assigned to handle on-call duties within a team.
   */
  "type": TeamOnCallRespondersDataType;
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
    },
    relationships: {
      baseName: "relationships",
      type: "TeamOnCallRespondersDataRelationships",
    },
    type: {
      baseName: "type",
      type: "TeamOnCallRespondersDataType",
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
    return TeamOnCallRespondersData.attributeTypeMap;
  }

  public constructor() {}
}
