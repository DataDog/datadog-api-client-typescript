import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RelationshipToPermissionData } from "./RelationshipToPermissionData";

/**
 * Relationship to multiple permissions objects.
 */
export class RelationshipToPermissions {
  /**
   * Relationships to permission objects.
   */
  "data"?: Array<RelationshipToPermissionData>;
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
      type: "Array<RelationshipToPermissionData>",
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
    return RelationshipToPermissions.attributeTypeMap;
  }

  public constructor() {}
}
