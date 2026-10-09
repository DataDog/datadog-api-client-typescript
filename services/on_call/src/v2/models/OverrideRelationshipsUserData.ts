import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OverrideRelationshipsUserDataType } from "./OverrideRelationshipsUserDataType";

/**
 * A reference to a user, containing the user's ID and resource type.
 */
export class OverrideRelationshipsUserData {
  /**
   * The unique identifier of the user.
   */
  "id": string;
  /**
   * Indicates that the related resource is of type 'users'.
   */
  "type": OverrideRelationshipsUserDataType;
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
      type: "OverrideRelationshipsUserDataType",
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
    return OverrideRelationshipsUserData.attributeTypeMap;
  }

  public constructor() {}
}
