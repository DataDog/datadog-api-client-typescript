import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RoleClone } from "./RoleClone";

/**
 * Request to create a role by cloning an existing role.
 */
export class RoleCloneRequest {
  /**
   * Data for the clone role request.
   */
  "data": RoleClone;
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
      type: "RoleClone",
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
    return RoleCloneRequest.attributeTypeMap;
  }

  public constructor() {}
}
