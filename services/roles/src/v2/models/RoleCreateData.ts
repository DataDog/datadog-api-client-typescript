import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RoleCreateAttributes } from "./RoleCreateAttributes";
import { RoleRelationships } from "./RoleRelationships";
import { RolesType } from "./RolesType";

/**
 * Data related to the creation of a role.
 */
export class RoleCreateData {
  /**
   * Attributes of the created role.
   */
  "attributes": RoleCreateAttributes;
  /**
   * Relationships of the role object.
   */
  "relationships"?: RoleRelationships;
  /**
   * Roles type.
   */
  "type"?: RolesType;
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
      type: "RoleCreateAttributes",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "RoleRelationships",
    },
    type: {
      baseName: "type",
      type: "RolesType",
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
    return RoleCreateData.attributeTypeMap;
  }

  public constructor() {}
}
