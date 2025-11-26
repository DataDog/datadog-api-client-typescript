import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RestrictionQueryRoleAttribute } from "./RestrictionQueryRoleAttribute";
import { RolesType } from "./RolesType";

/**
 * Partial role object.
 */
export class RestrictionQueryRole {
  /**
   * Attributes of the role for a restriction query.
   */
  "attributes": RestrictionQueryRoleAttribute;
  /**
   * ID of the role.
   */
  "id": string;
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
      type: "RestrictionQueryRoleAttribute",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RolesType",
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
    return RestrictionQueryRole.attributeTypeMap;
  }

  public constructor() {}
}
