import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScheduleMemberRelationshipsUserDataType } from "./ScheduleMemberRelationshipsUserDataType";

/**
 * Points to the user data associated with this schedule member, including an ID and type.
 */
export class ScheduleMemberRelationshipsUserData {
  /**
   * The user's unique identifier.
   */
  "id": string;
  /**
   * Users resource type.
   */
  "type": ScheduleMemberRelationshipsUserDataType;
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
      type: "ScheduleMemberRelationshipsUserDataType",
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
    return ScheduleMemberRelationshipsUserData.attributeTypeMap;
  }

  public constructor() {}
}
