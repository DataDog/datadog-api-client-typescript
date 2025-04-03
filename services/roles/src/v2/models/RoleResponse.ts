import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { Role } from "./Role";

/**
 * Response containing information about a single role.
 */
export class RoleResponse {
  /**
   * Role object returned by the API.
   */
  "data"?: Role;
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
      type: "Role",
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
    return RoleResponse.attributeTypeMap;
  }

  public constructor() {}
}
