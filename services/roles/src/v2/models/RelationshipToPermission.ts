import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RelationshipToPermissionData } from "./RelationshipToPermissionData";

/**
 * Relationship to a permissions object.
 */
export class RelationshipToPermission {
  /**
   * Relationship to permission object.
   */
  "data"?: RelationshipToPermissionData;
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
      type: "RelationshipToPermissionData",
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
    return RelationshipToPermission.attributeTypeMap;
  }

  public constructor() {}
}
