import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamReferenceRelationshipsOncallUsersDataItems } from "./TeamReferenceRelationshipsOncallUsersDataItems";

/**
 * Defines which users are on-call within a team, stored as an array of references.
 */
export class TeamReferenceRelationshipsOncallUsers {
  /**
   * The list of user references who are on-call for this team.
   */
  "data"?: Array<TeamReferenceRelationshipsOncallUsersDataItems>;
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
      type: "Array<TeamReferenceRelationshipsOncallUsersDataItems>",
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
    return TeamReferenceRelationshipsOncallUsers.attributeTypeMap;
  }

  public constructor() {}
}
