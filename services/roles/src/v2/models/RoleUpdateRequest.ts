import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RoleUpdateData } from "./RoleUpdateData";

/**
 * Update a role.
 */
export class RoleUpdateRequest {
  /**
   * Data related to the update of a role.
   */
  "data": RoleUpdateData;
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
      type: "RoleUpdateData",
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
    return RoleUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
