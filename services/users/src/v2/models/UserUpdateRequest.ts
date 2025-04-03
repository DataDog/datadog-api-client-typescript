import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UserUpdateData } from "./UserUpdateData";

/**
 * Update a user.
 */
export class UserUpdateRequest {
  /**
   * Object to update a user.
   */
  "data": UserUpdateData;
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
      type: "UserUpdateData",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UserUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
