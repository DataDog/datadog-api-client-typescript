import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RoleCloneAttributes } from "./RoleCloneAttributes";
import { RolesType } from "./RolesType";

/**
 * Data for the clone role request.
 */
export class RoleClone {
  /**
   * Attributes required to create a new role by cloning an existing one.
   */
  "attributes": RoleCloneAttributes;
  /**
   * Roles type.
   */
  "type": RolesType;
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
    attributes: {
      baseName: "attributes",
      type: "RoleCloneAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RolesType",
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
    return RoleClone.attributeTypeMap;
  }

  public constructor() {}
}
