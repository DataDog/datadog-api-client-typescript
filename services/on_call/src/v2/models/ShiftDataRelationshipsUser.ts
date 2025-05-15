import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ShiftDataRelationshipsUserData } from "./ShiftDataRelationshipsUserData";

/**
 * Defines the relationship between a shift and the user who is working that shift.
 */
export class ShiftDataRelationshipsUser {
  /**
   * Represents a reference to the user assigned to this shift, containing the user's ID and resource type.
   */
  "data": ShiftDataRelationshipsUserData;
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
      type: "ShiftDataRelationshipsUserData",
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
    return ShiftDataRelationshipsUser.attributeTypeMap;
  }

  public constructor() {}
}
