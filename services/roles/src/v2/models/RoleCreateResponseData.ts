import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RoleCreateAttributes } from "./RoleCreateAttributes";
import { RoleResponseRelationships } from "./RoleResponseRelationships";
import { RolesType } from "./RolesType";

/**
 * Role object returned by the API.
 */
export class RoleCreateResponseData {
  /**
   * Attributes of the created role.
   */
  "attributes"?: RoleCreateAttributes;
  /**
   * The unique identifier of the role.
   */
  "id"?: string;
  /**
   * Relationships of the role object returned by the API.
   */
  "relationships"?: RoleResponseRelationships;
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
      type: "RoleCreateAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "RoleResponseRelationships",
    },
    type: {
      baseName: "type",
      type: "RolesType",
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
    return RoleCreateResponseData.attributeTypeMap;
  }

  public constructor() {}
}
