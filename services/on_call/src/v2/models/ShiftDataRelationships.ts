import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ShiftDataRelationshipsUser } from "./ShiftDataRelationshipsUser";

/**
 * The definition of `ShiftDataRelationships` object.
 */
export class ShiftDataRelationships {
  /**
   * Defines the relationship between a shift and the user who is working that shift.
   */
  "user"?: ShiftDataRelationshipsUser;
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
    user: {
      baseName: "user",
      type: "ShiftDataRelationshipsUser",
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
    return ShiftDataRelationships.attributeTypeMap;
  }

  public constructor() {}
}
