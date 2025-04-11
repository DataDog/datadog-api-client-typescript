import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamLinkType } from "./TeamLinkType";

/**
 * Relationship between a link and a team
 */
export class RelationshipToTeamLinkData {
  /**
   * The team link's identifier
   */
  "id": string;
  /**
   * Team link type
   */
  "type": TeamLinkType;
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
      type: "TeamLinkType",
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
    return RelationshipToTeamLinkData.attributeTypeMap;
  }

  public constructor() {}
}
