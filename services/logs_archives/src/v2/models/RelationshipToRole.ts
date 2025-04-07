import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RelationshipToRoleData } from "./RelationshipToRoleData";

/**
 * Relationship to role.
 */
export class RelationshipToRole {
  /**
   * Relationship to role object.
   */
  "data"?: RelationshipToRoleData;
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
      type: "RelationshipToRoleData",
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
    return RelationshipToRole.attributeTypeMap;
  }

  public constructor() {}
}
