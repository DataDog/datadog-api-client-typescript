import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RolesType } from "./RolesType";

/**
 * Relationship to role object.
 */
export class RelationshipToRoleData {
  /**
   * The unique identifier of the role.
   */
  "id"?: string;
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
    id: {
      baseName: "id",
      type: "string",
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
    return RelationshipToRoleData.attributeTypeMap;
  }

  public constructor() {}
}
