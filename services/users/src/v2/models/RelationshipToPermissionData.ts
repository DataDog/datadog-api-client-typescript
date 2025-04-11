import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PermissionsType } from "./PermissionsType";

/**
 * Relationship to permission object.
 */
export class RelationshipToPermissionData {
  /**
   * ID of the permission.
   */
  "id"?: string;
  /**
   * Permissions resource type.
   */
  "type"?: PermissionsType;
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
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "PermissionsType",
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
    return RelationshipToPermissionData.attributeTypeMap;
  }

  public constructor() {}
}
