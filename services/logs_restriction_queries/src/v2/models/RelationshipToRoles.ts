import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RelationshipToRoleData } from "./RelationshipToRoleData";

/**
 * Relationship to roles.
 */
export class RelationshipToRoles {
  /**
   * An array containing type and the unique identifier of a role.
   */
  "data"?: Array<RelationshipToRoleData>;
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
      type: "Array<RelationshipToRoleData>",
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
    return RelationshipToRoles.attributeTypeMap;
  }

  public constructor() {}
}
