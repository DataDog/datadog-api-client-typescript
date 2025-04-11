import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RelationshipToPermissions } from "./RelationshipToPermissions";

/**
 * Relationships of the role object.
 */
export class RoleRelationships {
  /**
   * Relationship to multiple permissions objects.
   */
  "permissions"?: RelationshipToPermissions;
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
    permissions: {
      baseName: "permissions",
      type: "RelationshipToPermissions",
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
    return RoleRelationships.attributeTypeMap;
  }

  public constructor() {}
}
