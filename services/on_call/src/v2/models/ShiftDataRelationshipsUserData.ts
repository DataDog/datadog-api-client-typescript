import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ShiftDataRelationshipsUserDataType } from "./ShiftDataRelationshipsUserDataType";

/**
 * Represents a reference to the user assigned to this shift, containing the user's ID and resource type.
 */
export class ShiftDataRelationshipsUserData {
  /**
   * Specifies the unique identifier of the user.
   */
  "id": string;
  /**
   * Indicates that the related resource is of type 'users'.
   */
  "type": ShiftDataRelationshipsUserDataType;
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
      type: "ShiftDataRelationshipsUserDataType",
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
    return ShiftDataRelationshipsUserData.attributeTypeMap;
  }

  public constructor() {}
}
