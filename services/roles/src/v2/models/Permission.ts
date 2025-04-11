import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PermissionAttributes } from "./PermissionAttributes";
import { PermissionsType } from "./PermissionsType";

/**
 * Permission object.
 */
export class Permission {
  /**
   * Attributes of a permission.
   */
  "attributes"?: PermissionAttributes;
  /**
   * ID of the permission.
   */
  "id"?: string;
  /**
   * Permissions resource type.
   */
  "type": PermissionsType;
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
      type: "PermissionAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "PermissionsType",
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
    return Permission.attributeTypeMap;
  }

  public constructor() {}
}
