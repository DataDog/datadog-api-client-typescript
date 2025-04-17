import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamReferenceRelationshipsOncallUsersDataItemsType } from "./TeamReferenceRelationshipsOncallUsersDataItemsType";

/**
 * References a user who is on-call within this team, identified by `id` and `type`.
 */
export class TeamReferenceRelationshipsOncallUsersDataItems {
  /**
   * The unique identifier of the user.
   */
  "id": string;
  /**
   * Users resource type.
   */
  "type": TeamReferenceRelationshipsOncallUsersDataItemsType;
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
      type: "TeamReferenceRelationshipsOncallUsersDataItemsType",
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
    return TeamReferenceRelationshipsOncallUsersDataItems.attributeTypeMap;
  }

  public constructor() {}
}
