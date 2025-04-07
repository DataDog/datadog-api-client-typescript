import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RoleRelationships } from "./RoleRelationships";
import { RolesType } from "./RolesType";
import { RoleUpdateAttributes } from "./RoleUpdateAttributes";

/**
 * Data related to the update of a role.
 */
export class RoleUpdateData {
  /**
   * Attributes of the role.
   */
  "attributes": RoleUpdateAttributes;
  /**
   * The unique identifier of the role.
   */
  "id": string;
  /**
   * Relationships of the role object.
   */
  "relationships"?: RoleRelationships;
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
      type: "RoleUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "RoleRelationships",
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
    return RoleUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
